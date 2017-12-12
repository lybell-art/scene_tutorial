var scene=1;	//현재 동작되는 장면의 종류
function setup() { 
  createCanvas(500, 500);
	noStroke();
} 

function draw() { 
	//switch문을 이용해 전역변수 scene의 값에 해당하는 장면 코드만 실행시킨다
  switch(scene)
	{
		case 1:scene1(); break;
		case 2:scene2(); break;
	}
}

function scene1()
{
	//여기에 첫번째 장면의 코드를 넣는다
	background(255);
	fill("#ff00ff");
	translate(width/2,height/2);
	for(var i=0;i<6;i++)
	{
		ellipse(0,50,40,80);
		rotate(radians(60));
	}
	fill("#ffff00");
	ellipse(0,0,60,60);
}

function scene2()
{
	//여기에 두번째 장면의 코드를 넣는다
	background(0);
	fill(200);
	rect(mouseX,mouseY,40,40);
}

//장면 전환은 전역변수 scene의 값 변경으로 한다
function mousePressed()
{
	if(scene==1) scene=2;
	else scene=1;
}
