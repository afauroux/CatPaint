let canvas = document.getElementById("mouloud");
let ctx = canvas.getContext("2d");
let i = 0;
let mousePos = { x: -1, y: -1 };
let cats = [];
let drawcats = false;
let imgs = [
  "img/black-cat.png",
  "img/blue-cat.png",
  "img/bat-cat.png",
  "img/dog.png",
  "img/reindeer.png",
  "img/robot.png",
  "img/sheep.png"
];
let index = 0;
let slider = document.getElementById("myRange");
let output = document.getElementById("demo");

function changeCat(i) {
  var prevcatbtn = document.getElementsByClassName("btn-cat")[index + 1];
  var newcatbtn = document.getElementsByClassName("btn-cat")[i + 1];
  prevcatbtn.classList.remove("btn-cat-active");
  newcatbtn.classList.add("btn-cat-active");

  index = i;
}

function clearCanvas() {
  console.log("clear");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
class Cat {
  constructor(pos, index, i) {
    this.name = "chat " + index;
    this.x = pos.x - 16;
    this.y = pos.y - 16;
    this.img = new Image();
    this.img.src = imgs[i];
    this.size = slider.value;
    //this.miaou();
  }

  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.size, this.size);
  }

  miaou() {
    console.log(this.name + ": miaou");
  }
}

canvas.onmousemove = function(event) {
  getMousePos(event);

  if (drawcats) {
    var coolcat = new Cat(getMousePos(event), cats.length, index);
    coolcat.draw();
  }
};

canvas.onmousedown = function(event) {
  drawcats = true;
};

canvas.onmouseup = function(event) {
  drawcats = false;
};

canvas.onmouseleave = function(event) {
  drawcats = false;
};
function dessinerCarre(pos) {
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(pos.x, pos.y, 5, 5);
}

function getMousePos(event) {
  var rect = canvas.getBoundingClientRect();
  (scaleX = canvas.width / rect.width), (scaleY = canvas.height / rect.height);
  mousePos.x = (event.clientX - rect.left) * scaleX;
  mousePos.y = (event.clientY - rect.top) * scaleX;

  return mousePos;
}

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
};

function resizeCanvasToDisplaySize() {
  // look up the size the canvas is being displayed
  const width = document.getElementById("canvas-container").clientWidth;
  const height = document.getElementById("canvas-container").clientHeight;
  canvas.width = width;
  canvas.height = height;

  /*
  if (width > 580) {
    var aspectRatio = 18 / 9;
  } else {
    var aspectRatio = 9 / 18;
  }
  // If it's resolution does not match change it
  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = canvas.width / aspectRatio;
    return true;
  }
*/
  return false;
}

window.onresize = function(event) {
  resizeCanvasToDisplaySize();
};
