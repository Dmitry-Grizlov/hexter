import { newColor, getHexToRgb} from "../hexter.js";

QUnit.module("hexter", function () {
  QUnit.module("global methods", function () {
    QUnit.module("hexToRgb", function () {
      QUnit.test("black", function (assert) {
        let rgb = getHexToRgb("#000000");
        assert.deepEqual(rgb, [0, 0, 0]);
      });

      QUnit.test("white", function (assert) {
        let rgb = getHexToRgb("#FFFFFF");
        assert.deepEqual(rgb, [255, 255, 255]);
      });

      QUnit.test("#FFEEDD", function (assert) {
        let rgb = getHexToRgb("#FFEEDD");
        assert.deepEqual(rgb, [255, 238, 221]);
      });

      QUnit.skip("Bad input", function (assert) {
        let rgb = getHexToRgb("#FFEEDD");
        assert.deepEqual(rgb, [255, 238, 221]);
      });
    });
    QUnit.module("hexToCssFilter", function () {
      QUnit.skip("add name", function (assert) {});
    });
  });

  QUnit.module("class methods", function () {
    QUnit.module("color", function () {
      QUnit.module("clamp", function () {
        let color = newColor(1, 2, 3);
        QUnit.test("values inside the boundaries", function (assert) {
          assert.equal(color.clamp(1), 1);
          assert.equal(color.clamp(2), 2);
        });
        QUnit.test("values outside the boundaries", function (assert) {
          assert.equal(color.clamp(-10), 0);
          assert.equal(color.clamp(1000), 255);
        });
      });
      QUnit.module("hsl", function () {
        QUnit.test("red", function (assert) {
          let color = newColor(255, 0, 0);
          let res = color.hsl();
          assert.equal(res.hue, 0);
          assert.equal(res.saturation, 100);
          assert.equal(res.luminance, 50);
        });
        QUnit.test("green", function (assert) {
          let color = newColor(0, 255, 0);
          let res = color.hsl();
          assert.equal(res.hue, 120);
          assert.equal(res.saturation, 100);
          assert.equal(res.luminance, 50);
        });
        QUnit.test("blue", function (assert) {
          let color = newColor(0, 0, 255);
          let res = color.hsl();
          assert.equal(res.hue, 240);
          assert.equal(res.saturation, 100);
          assert.equal(res.luminance, 50);
        });
        QUnit.test("yellow", function (assert) {
          let color = newColor(255, 255, 0);
          let res = color.hsl();
          assert.equal(res.hue, 60);
          assert.equal(res.saturation, 100);
          assert.equal(res.luminance, 50);
        });
        QUnit.test("white", function (assert) {
          let color = newColor(255, 255, 255);
          let res = color.hsl();
          assert.equal(res.hue, 0);
          assert.equal(res.saturation, 0);
          assert.equal(res.luminance, 100);
        });
        QUnit.test("black", function (assert) {
          let color = newColor(0, 0, 0);
          let res = color.hsl();
          assert.equal(res.hue, 0);
          assert.equal(res.saturation, 0);
          assert.equal(res.luminance, 0);
        });
      });
    });
  });
});
