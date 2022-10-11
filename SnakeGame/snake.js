var canvas = document.querySelector("canvas");

//Field object
function Field(canvas, width, height, unit){
	//Properties
	this.width = width;
	this.height = height;
	this.snakeDate = {};
	this.box = unit;
	this.food = {x:Math.floor(Math.random() * 30 + 1) * this.box,
				 y:Math.floor(Math.random() * 30 + 1) * this.box };

	//Methods
	this.setupField = function(){
		//Set canvas width and height
		canvas.width = this.width;
		canvas.height = this.height;
		var c = canvas.getContext("2d");
		//Return context to snake
		return c;
	}

	//Show food at random position
	this.showFood = function(context){
		var foodXPos = this.food.x + this.box/2;
		var foodYPos = this.food.y + this.box/2;
		if(foodXPos > this.width || foodXPos < 0 || foodYPos > this.height || foodYPos < 0){
			this.food = {x:Math.floor(Math.random() * 30 + 1) * this.box,
				 		y:Math.floor(Math.random() * 30 + 1) * this.box };
			this.showFood(context);
		}else{
			context.beginPath();
			context.fillStyle = "#300000";
			context.arc(foodXPos,foodYPos,this.box/2,Math.PI*2,false);
			context.fill();
		}
		return {x:foodXPos,y:foodYPos};
		
	}

	//Shrink field if failed
	this.shrink = function(box){
		this.width -= box;
		this.height -= box;
		this.setupField();
	}

}

//Snake Object
function Snake(segmentSize){
	this.snakeSegments = [{x:16, y:0},{x:0, y:0}];
	this.box = segmentSize;
	this.direction;

	//Draw snake on canvas
	this.drawSnake = function(context){
		context.clearRect(0, 0,innerWidth,innerHeight);
		for(var i = 0; i < this.snakeSegments.length; i++){
			context.beginPath();
			context.fillStyle = (i==0) ? "#f33" : "#9898ff";
			context.fillRect(this.snakeSegments[i].x,this.snakeSegments[i].y,this.box,this.box);
			context.strokeStyle = "#f00";
			context.strokeRect(this.snakeSegments[i].x,this.snakeSegments[i].y,this.box,this.box);
			context.fill();
			
		}
	}

	//Move snake - unshift 1 segment, pop 1segment
	this.move = function(){
		switch(this.direction){
			case "LEFT":
				var headXPosition = this.snakeSegments[0].x;
				var headYPosition = this.snakeSegments[0].y;
				this.snakeSegments.unshift({
					x:headXPosition - this.box,
					y:headYPosition
				});
				this.snakeSegments.pop();
				break;
			case "RIGHT":
				var headXPosition = this.snakeSegments[0].x;
				var headYPosition = this.snakeSegments[0].y;
				this.snakeSegments.unshift({
					x:headXPosition + this.box,
					y:headYPosition
				});
				this.snakeSegments.pop();
				break;
			case "UP":
				var headXPosition = this.snakeSegments[0].x;
				var headYPosition = this.snakeSegments[0].y;
				this.snakeSegments.unshift({
					x:headXPosition,
					y:headYPosition - this.box
				});
				this.snakeSegments.pop();
				break;
			case "DOWN":
				var headXPosition = this.snakeSegments[0].x;
				var headYPosition = this.snakeSegments[0].y;
				this.snakeSegments.unshift({
					x:headXPosition,
					y:headYPosition + this.box
				});
				this.snakeSegments.pop();
				break;
		}
	}

	//Grow snake - unshift 1 segment
	this.grow = function(){
		switch(this.direction){
			case "LEFT":
				var headXPosition = this.snakeSegments[0].x;
				var headYPosition = this.snakeSegments[0].y;
				this.snakeSegments.unshift({
					x:headXPosition - this.box,
					y:headYPosition
				});
				break;
			case "RIGHT":
				var headXPosition = this.snakeSegments[0].x;
				var headYPosition = this.snakeSegments[0].y;
				this.snakeSegments.unshift({
					x:headXPosition + this.box,
					y:headYPosition
				});
				break;
			case "UP":
				var headXPosition = this.snakeSegments[0].x;
				var headYPosition = this.snakeSegments[0].y;
				this.snakeSegments.unshift({
					x:headXPosition,
					y:headYPosition - this.box
				});
				break;
			case "DOWN":
				var headXPosition = this.snakeSegments[0].x;
				var headYPosition = this.snakeSegments[0].y;
				this.snakeSegments.unshift({
					x:headXPosition,
					y:headYPosition + this.box
				});
				break;
		}
	}
}

var box = 16; //Size of snake segment, unit of field size
var speed = 250; //Initialize time
var score = 0;
var highscore = 0;
//Instantiate Field and Snake
var field = new Field(canvas, 30*box, 30*box, box);
var snake = new Snake(box);

//Which arrow key was pressed
function direction(event){
	if(event.keyCode == 37 && snake.direction != "RIGHT"){
		snake.direction = "LEFT";
	}else if(event.keyCode == 38 && snake.direction != "DOWN"){
		snake.direction = "UP";
	}else if(event.keyCode == 39 && snake.direction != "LEFT"){
		snake.direction = "RIGHT";
	}else if(event.keyCode == 40 && snake.direction != "UP"){
		snake.direction = "DOWN";
	}
}

//Listen to arrow key event
document.addEventListener("keydown", direction);

//Play game
var timer;
var game = function(){
	
	//Food must not appear on snake; snake cannot eat itself
	for(i=1; i<snake.snakeSegments.length; i++){
		//If food appears on snake, reposition
		if(snake.snakeSegments[i].x == field.food.x && snake.snakeSegments[i].y == field.food.y){
			field.food.x = Math.floor(Math.random() * 30 + 1) * box;
			field.food.y = Math.floor(Math.random() * 30 + 1) * box;
		}
		//If snake eats itself
		if(snake.snakeSegments[0].x == snake.snakeSegments[i].x && 
			snake.snakeSegments[0].y == snake.snakeSegments[i].y){
			var c = field.setupField();
			speed = 250;
			if(score > highscore){
				highscore = score;
			}
			score = 0;
			snake.snakeSegments = [{x:16, y:0},{x:0, y:0}];
			snake.direction = "";
			snake.drawSnake(c);
			field.showFood(c);
		}
	}

	//If snake eats food, reposition, elongate snake, increase score
	if(snake.snakeSegments[0].x == field.food.x && snake.snakeSegments[0].y == field.food.y){
		var c = field.setupField();
		field.food.x = Math.floor(Math.random() * 30 + 1) * box;
		field.food.y = Math.floor(Math.random() * 30 + 1) * box;
		snake.grow();
		snake.drawSnake(c);
		field.showFood(c);
		score += 3;
		speed -= 10;
		console.log(score);

	//If snake hits wall shrink field
	}else if(snake.snakeSegments[0].x >= field.width || 
			 snake.snakeSegments[0].x < 0 || 
			 snake.snakeSegments[0].y >= field.height ||
			 snake.snakeSegments[0].y < 0){
		var c = field.setupField();
		speed = 250;
		if(score > highscore){
			highscore = score;
		}
		score = 0;
		snake.snakeSegments = [{x:16, y:0},{x:0, y:0}];
		snake.direction = "";
		snake.drawSnake(c);
		field.showFood(c);
	//If nothing happens, keep moving
	}else{
		var c = field.setupField();
		snake.move();
		snake.drawSnake(c);
		field.showFood(c);
	}
	
}
var repeat = function repeat(){
	game();
	document.getElementById("score").textContent = score;
	document.getElementById("highscore").textContent = highscore;
	timer = setTimeout(repeat, speed);
}

repeat();

/**
*** Impossible to increment speed with setInterval
var game = setInterval(
function(){
	
	//Food must not appear on snake; snake cannot eat itself
	for(i=1; i<snake.snakeSegments.length; i++){
		//If food appears on snake, reposition
		if(snake.snakeSegments[i].x == field.food.x && snake.snakeSegments[i].y == field.food.y){
			field.food.x = Math.floor(Math.random() * 30 + 1) * box;
			field.food.y = Math.floor(Math.random() * 30 + 1) * box;
		}
		//If snake eats itself
		if(snake.snakeSegments[0].x == snake.snakeSegments[i].x && 
			snake.snakeSegments[0].y == snake.snakeSegments[i].y){
			var c = field.setupField();
			field.shrink(box);
			snake.snakeSegments = [{x:0,y:0}];
			snake.direction = "";
			snake.drawSnake(c);
			field.showFood(c);
		}
	}

	//If snake eats food, reposition, elongate snake, increase score
	if(snake.snakeSegments[0].x == field.food.x && snake.snakeSegments[0].y == field.food.y){
		var c = field.setupField();
		field.food.x = Math.floor(Math.random() * 30 + 1) * box;
		field.food.y = Math.floor(Math.random() * 30 + 1) * box;
		snake.grow();
		snake.drawSnake(c);
		field.showFood(c);
		score += 3;
		speed -= 1;
		console.log(score);

	//If snake hits wall shrink field
	}else if(snake.snakeSegments[0].x >= field.width || 
			 snake.snakeSegments[0].x < 0 || 
			 snake.snakeSegments[0].y >= field.height ||
			 snake.snakeSegments[0].y < 0){
		var c = field.setupField();
		field.shrink(box);
		snake.snakeSegments = [{x:0,y:0}];
		snake.direction = "";
		snake.drawSnake(c);
		field.showFood(c);
	//If nothing happens, keep moving
	}else{
		var c = field.setupField();
		snake.move();
		snake.drawSnake(c);
		field.showFood(c);
	}
	
},
speed
);
*/





















