function setup() { 
  createCanvas(600, 400);
  line(205, 200, 200, 250);
}


function mousePressed() {
  clear();
   
}

var sometext;


function draw() { if (mouseIsPressed);

fill(random(255));
  sometext ="HEY!";
  textSize(30);
  text(sometext, random(width-100), random(30,height-25));

  fill(random(25),0,0);
  textSize(20);
  text(sometext, random(width-65), random(20,height-5));
    line(205, 200, 200, 250);
} 
