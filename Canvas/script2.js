window.onload = function(){

    console.log("aosjiu");

    var canvas  = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    /*
    var image = document.getElementById('source');

    const player = {
    w: 50,
    h: 70,
    x: 20,
    y: 200,
    speed: 10,
    dx: 0,
    dy: 0
    };

    function clear(){
        ctx.clearRect(0,0, canvas.width, canvas.height);
    }
    
    function newPos(){
        player.x += player.dx;
        player.y += player.dy;


        detectWalls();
    }

    function detectWalls(){
        //left wall
        if(player.x<0){
            player.x = 0;
        }
        //right wall
        if(player.x + player.w > canvas.width){
            player.x = canvas.width  - player.w;
        }
        //top wall 
        if(player.y<0){
            player.y = 0;
        }
        //bottom wall
        if(player.y + player.h > canvas.height){
            player.y = canvas.height - player.h;
        }
    }
    function drawPlayer() {
    ctx.drawImage(image, player.x, player.y, player.w, player.h);
    }

    function update(){
        clear();
        drawPlayer();

        newPos();

        requestAnimationFrame(update);
    }

    function keyUp(e){
        if(e.key == 'Right'||e.key == 'ArrowRight' ||e.key == 'Left'||e.key == 'ArrowLeft' ||e.key == 'Up'||e.key == 'ArrowUp' ||e.key == 'Down'||e.key == 'ArrowDown'){
            player.dx = 0;
            player.dy= 0;
        }

    }
    function moveUp(){
        player.dy = -player.speed;
    }
    function moveDown(){
        player.dy = player.speed;
    }
    function moveRight(){
        player.dx = player.speed;
    }
    function moveLeft(){
        player.dx = -player.speed;
    }

    function keyDown(e){
        if(e.key === 'ArrowRight' || e.key ==="Right"){
            moveRight();
        } else if (e.key === "ArrowLeft" || e.key ==='Left'){
            moveLeft();
        } else if (e.key === "ArrowUp" || e.key ==='Up'){
            moveUp();
    } else if (e.key === "ArrowDown" || e.key ==='Down'){
        moveDown();
    }
}


    update();


    document.addEventListener('keydown', keyDown);
    document.addEventListener('keyup', keyUp);

*/
/*
ctx.fillStyle = "red";
ctx.fillRect(20, 20, 150, 100);

ctx.fillStyle = "blue";
ctx.fillRect(200, 20, 150, 100);

ctx.lineWidth = 5;
ctx.strokeStyle = "green";
ctx.strokeRect(100, 200, 150,100);


ctx.clearRect(25,25,140,90);

ctx.font = '30px Arial';
ctx.fillStyle = "purple";

ctx.fillText("Hi bro", 400,50)


ctx.beginPath();
ctx.arc(100, 100, 50, 0,Math.PI*2,false);

ctx.stroke();


ctx.beginPath();
ctx.moveTo(50,50);

ctx.lineTo(150, 50);
ctx.lineTo(100,200);
ctx.closePath();
ctx.fillStyle = 'coral';
ctx.fill();

ctx.stroke();
*/


//bounce circle
const circle ={
    x: 100,
    y : 100,
    size:30,
    dx : 10,
    dy : 3
}


function drawCircle(){
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.size, 0 , Math.PI*2);
   

    ctx.fillStyle = 'purple';
    ctx.fill();


}

function update(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle();



    //change position
    circle.x += circle.dx;
    circle.y += circle.dy;
   

    // detect side walls

    if(circle.x+ circle.size > canvas.width || circle.x - circle.size <0){

        circle.dx *= -1;
        console.log("hit");
    }

    if(circle.y+ circle.size > canvas.height || circle.y - circle.size <0){

        circle.dy *= -1;
        console.log("hit");
    }





    requestAnimationFrame(update);
    
}
update();




};



