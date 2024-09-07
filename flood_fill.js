/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  const originalColor = image[sr][sc];
  if (originalColor === color) return image;
  fill(image, sr, sc, originalColor, color);
  return image;
};

function fill(image, sr, sc, color, newColor) {
  if (
    sr < 0 ||
    sc < 0 ||
    sr >= image.length ||
    sc >= image[0].length ||
    image[sr][sc] != color
  )
    return null;
  image[sr][sc] = newColor;
  fill(image, sr - 1, sc, color, newColor);
  fill(image, sr + 1, sc, color, newColor);
  fill(image, sr, sc - 1, color, newColor);
  fill(image, sr, sc + 1, color, newColor);
}

let image = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1],
];
let sr = 1;
let sc = 1;
let color = 2;

console.log(floodFill(image, sr, sc, color));
