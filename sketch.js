let scene = 0;
let HPButton;
let E1Button;
let E2Button;
let E3Button;
let E4Button;
let c;

// Game 1 vars
// Click and Drag an object
let shape1;
let shape2;
let shape3;
let shape4;
var score = 0;
var i = 0;
var scoreAdded1 = false;
var scoreAdded2 = false;
var scoreAdded3 = false;
var scoreAdded4 = false;

function setup() {
  createCanvas(500, 500);
  E1Button = createButton('Exercise 1');
  E1Button.style('border: none');
  E1Button.style('color: blue');
  E1Button.mousePressed(changeE1);
  
  E2Button = createButton('Exercise 2');
  E2Button.style('border: none');
  E2Button.style('color: blue');
  E2Button.mousePressed(changeE2);
  
  E3Button = createButton('Exercise 3');
  E3Button.style('border: none');
  E3Button.style('color: blue');
  E3Button.mousePressed(changeE3);
  
  E4Button = createButton('Exercise 4');
  E4Button.style('border: none');
  E4Button.style('color: blue');
  E4Button.mousePressed(changeE4);
  
  HPButton = createButton('Homepage');
  HPButton.style('border: none');
  HPButton.style('color: blue');
  HPButton.mousePressed(changeHP);
  
  c = color('aqua');
  
  //Game 1 setup
  shape1 = new Draggable(410, 280, 50, 50, 'red', 139,0,0);
  shape2 = new Draggable(410, 220, 50, 50,'green',1,50,32);
  shape3 = new Draggable(410, 340, 50, 50,'yellow',155,135,12);
  shape4 = new Draggable(410, 400, 50, 50,'magenta',160, 32, 240);
  room1 = new rect1(40,160,60,60);
  room2 = new rect2(150,160,60,60);
  room3 = new rect3(40,250,60,60);
  room4 = new rect4(150,250,60,60);
  
}

function changeE1()
{
  scene = 1;
}

function changeE2()
{
  scene = 2;
}

function changeE3()
{
  scene = 3;
}

function changeE4()
{
  scene = 4;
}

function changeHP()
{
  scene = 0;
}

function draw() {
  background(c);
  switch(scene)
  {
      case(0): 
        homepage();
        break;
      case(1):
        exercise1();
        break;
      case(2):
        exercise2();
        break;
      case(3):
        exercise3();
        break;
      case(4):
        exercise4();
        break;   
  }
}

function homepage()
{
  fill(0);
  c = color('aqua');
  textSize(32);
  fill(color('black'));
  text("Homepage",width/2-80,height/4);
  
  HPButton.hide();
  HPButton.size(100,25);
  HPButton.style('backgroundColor: white');
  
  E1Button.position(100,200);
  E1Button.size(100,25);
  E1Button.style('backgroundColor: white');
  cloud(100,200);
  
  E2Button.position(300,200)
  E2Button.size(100,25);
  E2Button.style('backgroundColor: white');
  cloud(300,200);
  
  E3Button.position(100,350);
  E3Button.size(100,25);
  E3Button.style('backgroundColor: white');
  cloud(100,350);
  
  E4Button.position(300,350);
  E4Button.size(100,25);
  E4Button.style('backgroundColor: white');
  cloud(300,350);
}

function exercise1()
{
  fill(0);
  navbar();
  
  c = color('aqua');
  
  fill('white');
  textSize(24);
  text("Score: " + score, 10, 25);
  
  //collision 
  
  var d1 = dist(room1.x, room1.y,shape1.x,shape1.y);
  for (i= 0; i<=1;++i)
  {
    if ( d1 < 10 && !scoreAdded1) {
      score += 5;
      scoreAdded1 = true;
    }
  }
  
  var d2 = dist(room2.x, room2.y,shape2.x,shape2.y);
  for (i= 0; i<=1;++i)
  {
    if ( d2 < 10 && !scoreAdded2) {
      score += 5;
      scoreAdded2 = true;
    }
  }
  
  var d3 = dist(room3.x, room3.y,shape3.x,shape3.y);
  for (i= 0; i<=1;++i){
    if ( d3 < 10 && !scoreAdded3) {
      score += 5;
      scoreAdded3 = true;
    }
  }
  
  var d4 = dist(room4.x, room4.y,shape4.x,shape4.y);
  for (i= 0; i<=1;++i){
    if ( d4 < 10 && !scoreAdded4) {
      score += 5;
      scoreAdded4 = true;
    }
  }
  
  
  //House below 
  
  // roof
  stroke(0);
  fill('brown');
  triangle(25, 150, 225, 152, 130, 50);
  
  // house
  fill('gray');
  rect(25,150,199,200);
  
  // Rooms
  //rooms
  room1.display();

  room2.display();

  room3.display();
  
  room4.display();
  
  //door
  fill('orange')
  rect(110,300, 30, 50)
  
  //road
  fill('black');
  rect(223,300, 140, 50)
  
  fill('white')
  rect(250,320, 30, 10)

  fill('white')
  rect(310,320, 30, 10)
  
  //parking Lot
  fill('grey')
  rect(360, 200, 120, 260)
  
  // sun
  noStroke();
  fill(255,255,0);
  ellipse(60,60,30,30);
  

  
  //People 
  shape1.over();
  shape1.update();
  shape1.show();
  
  shape2.over();
  shape2.update();
  shape2.show();
  
  shape3.over();
  shape3.update();
  shape3.show();
  
  shape4.over();
  shape4.update();
  shape4.show();

}

///draggable
class Draggable {
  constructor(x, y, w, h, primary, secondary1, secondary2, secondary3) {
    this.dragging = false; // Is the object being dragged?
    this.rollover = false; // Is the mouse over the ellipse?
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.offsetX = 0;
    this.offsetY = 0;
    this.primary = primary;
    this.secondary1 = secondary1;
    this.secondary2 = secondary2;
    this.secondary3 = secondary3;
  }

  over() {
    // Is mouse over object
    if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }
  }

  update() {
    // Adjust location if being dragged
    if (this.dragging) {
      this.x = mouseX + this.offsetX;
      this.y = mouseY + this.offsetY;
    }
  }

  show() {
    stroke(0);
    // Different fill based on state
    if (this.dragging) {
      fill(this.primary);
    } else if (this.rollover) {
      fill(this.secondary1,this.secondary2,this.secondary3);
    } else {
      fill(this.primary);
    }
    rect(this.x, this.y, this.w,this.h);
  }

  pressed() {
    // Did I click on the rectangle?
    if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
      this.dragging = true;
      // If so, keep track of relative location of click to corner of rectangle
      this.offsetX = this.x - mouseX;
      this.offsetY = this.y - mouseY;
    }
  }

  released() {
    // Quit dragging
    this.dragging = false;
  }
}

//rect
function rect1(x,y,w,h){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  
  this.display = function() {
  stroke(500)
  fill('red')
  rect(this.x,this.y,this.w,this.h);
  }
}

//rect
function rect2(x,y,w,h){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  
  this.display = function() {
  stroke(500)
  fill('green')
  rect(this.x,this.y,this.w,this.h);
  }
}

//rect
function rect3(x,y,w,h){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  
  this.display = function() {
  stroke(500)
  fill('yellow')
  rect(this.x,this.y,this.w,this.h);
  }
}


//rect
function rect4(x,y,w,h){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  
  this.display = function() {
  stroke(500)
  fill('magenta')
  rect(this.x,this.y,this.w,this.h);
  }
}

function exercise2()
{
  fill(0);
  text("Exercise 2",width/2-80,height/2);
  navbar();
}

function exercise3()
{
  fill(0);
  text("Exercise 3",width/2-80,height/2);
  navbar();
}

function exercise4()
{
  fill(0);
  text("Exercise 4",width/2-80,height/2);
  navbar();
}

function cloud(x,y)
{
  fill(color('white'));
  noStroke(); 
  let ellipse1 = ellipse(x+50,y,100,50);
  let ellipse2 = ellipse(x+50,y+25,100,50);
  let circle1 = circle(x,y+13,40);
  let circle2 = circle(x+100,y+13,40);
}

function navbar()
{
  HPButton.show();
  HPButton.position(50+25,460);
  HPButton.size(70,25);
  
  E1Button.position(120+25,460);
  E1Button.size(70,25)
  
  E2Button.position(190+25,460);
  E2Button.size(70,25);
  
  E3Button.position(260+25,460);
  E3Button.size(70,25);
  
  E4Button.position(330+25,460);
  E4Button.size(70,25)
}
