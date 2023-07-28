let lines = 0;
let radius = 75;
let color = [];

function setup() {
  createCanvas(400, 400);
  frameRate(30);
  color = [
    '#004594',
    '#004CA3',
    '#8A51A5',
    '#CB5E99',
    '#F47B89',
    '#FFA47E',
    '#FFD286',
    '#FFFFA6',
    '#FFFFAF',
  ]
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  stroke(255);
  noFill();
  strokeWeight(1);
  circle(0, 0, radius*2);

  if (lines > 0) {
    for (let i = 1; i <= lines; i++) {
      let line_angle = ((i * PI) / lines) + (PI / lines);

      // Point on one side of the circle
      let x1 = cos(line_angle) * radius;
      let y1 = sin(line_angle) * radius;

      // Point on the opposite side of the circle
      let x2 = cos(line_angle + PI) * radius;
      let y2 = sin(line_angle + PI) * radius;
      strokeWeight(0.25);

      stroke(color[i-1]);
      line(x1, y1, x2, y2);

      // Draw the dots
      strokeWeight(3);
      let t = abs(((2.5 * frameCount) - (50 / lines) * i * 1.9) % 200 - 100) / 100;  // Oscillate t between 0 and 1
      let dot_x = lerp(x1, x2, t);
      let dot_y = lerp(y1, y2, t);
      point(dot_x, dot_y);
    }
  }
}

function keyTyped() {
  let keyNum = parseInt(key);
  if (keyNum > 0 && keyNum < 10) {
    lines = keyNum;
  }
}
