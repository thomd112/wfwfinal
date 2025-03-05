let img;
let opacitySlider;
let strokeWidthSlider;

function preload() {
  img = loadImage('vinetwo.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('Libre Caslon Text');
  textStyle(ITALIC);
  textAlign(CENTER, CENTER);

  // Opacity Slider
  opacitySlider = createSlider(0, 255, 255);
  opacitySlider.position(10, 10);
  opacitySlider.size(300);

  // Stroke Width Slider
  strokeWidthSlider = createSlider(0, 20, 1);
  strokeWidthSlider.position(10, 40);
  strokeWidthSlider.size(300);
}

function draw() {
  background('#231d00');
  
  // Get slider values
  let opacity = opacitySlider.value();
  let strokeWidth = strokeWidthSlider.value();
  
  // Mask Graphics
  let maskGraphics = createGraphics(width, height);
  maskGraphics.textFont('Libre Caslon Text');
  maskGraphics.textStyle(ITALIC);
  maskGraphics.textAlign(CENTER, CENTER);
  maskGraphics.fill(255);
  maskGraphics.textSize(80);
  maskGraphics.text('the world of', width/2, height/2 - 90);
  maskGraphics.textSize(120);
  maskGraphics.text('fine wine', width/2, height/2 + 20);
  
  // Draw image pattern with opacity
  tint(255, opacity);
  for (let x = 0; x < width; x += 100) {
    for (let y = 0; y < height; y += 100) {
      image(img, x, y, 100, 100);
    }
  }
  noTint();
  
  // MASK
  drawingContext.globalCompositeOperation = 'destination-in';
  image(maskGraphics, 0, 0);
  drawingContext.globalCompositeOperation = 'source-over';
  
  // Stroke Weight
  stroke('#705C00');
  strokeWeight(strokeWidth);
  
  // Text with stroke
  noFill();
  textSize(80);
  text('the world of', width/2, height/2 - 90);
  textSize(120);
  text('fine wine', width/2, height/2 + 20);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  opacitySlider.position(10, 10);
  strokeWidthSlider.position(10, 40);
}
