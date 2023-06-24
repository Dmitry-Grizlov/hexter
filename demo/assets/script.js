import {hexToCssFilter} from "../../hexter.js"

class Presenter {
  constructor(object){
    this.loss = object.loss;
    this.filter = object.filter;
  }

  filter(){
    return this.filter;
  }

  getLoss() {
    return this.loss.toFixed(1);
  }

  lossMsg(){
    if (this.loss < 1) {
      return "This is a perfect result.";
    } else if (this.loss < 5) {
      return "The color is close enough.";
    } else if (this.loss < 15) {
      return "The color is somewhat off. Consider running it again.";
    } else {
      return "The color is extremely off. Run it again!";
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector("button.execute")
    .addEventListener("click", function () {
      document.querySelector("#filterDetail").textContent = "Filter: ";
      const input = document.querySelector("input.target").value;
      const result =  new Presenter(hexToCssFilter(input));

      document.querySelector("#result").style.display = "block";
      document.querySelector(".realPixel").style.backgroundColor = input;
      document.querySelector(".filterPixel").setAttribute("style", `filter:${result.filter}`);
      document.querySelector("#filterDetail").textContent += result.filter;
      document.querySelector(".lossDetail").innerHTML = `Loss: ${result.getLoss()}. <b>${result.lossMsg()}</b>`;
    });

  document.querySelector("#copy").addEventListener("click", function () {
    navigator.clipboard.writeText(
      document.querySelector("#filterDetail").textContent.toLowerCase()
    );
  });
});
