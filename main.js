canvas = document.getElementById("Mycanvas");
ctx = canvas.getContext("2d");
 
rover_width = 100;
rover_height = 90;

rover_x = 10;
rover_y = 10;

background_image = "mars.jpg";
rover_image = "rover.png";

function add(){

    load_bg = new Image();
    /**This means we are setting a new image to the variable
    load_bg.
    */
    load_bg.onload = upload_background;
    /**Onload is used because the variable load_bg
    should be loaded with the function uploadBackground,
    before the variable load_bg is called.
    */
    load_bg.src = background_image;

    load_rover = new Image();
    load_rover.onload = upload_rover;
    load_rover.src = rover_image;

    
}

function upload_background(){
    //Syntax: ctx.drawImage(img,x,y,width,height);
    ctx.drawImage(load_bg,0,0,canvas.width,canvas.height);
}

function upload_rover(){

    ctx.drawImage(load_rover,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",mykeydown);

function mykeydown(e){

    keypress = e.keyCode;

    if (keypress == "38"){
        up();
        console.log ("up key is pressed");
     }

    if(keypress == "40"){

        down();
        console.log("down key is pressed");
    }

    if (keypress=="37"){
        left();
        console.log("left key is pressed");
    
    }

    if (keypress=="39"){

       right();
       console.log("right key is pressed");               
    }
}

function up(){

    if (rover_y>=0)
    {
        rover_y -= 10;//rover_y = rover_y - 10 means the same
        upload_background();
        upload_rover();
    }
}

function down(){

    if (rover_y<=550)
    {
        rover_y += 10;

        upload_background();
        upload_rover();
    }
}

function left(){

    if (rover_x>=0)
    {
        rover_x -= 10;
        upload_background();
        upload_rover();
    }    
}

function right(){

    if (rover_x<=750)
    {
        rover_x += 10;
        upload_background();
        upload_rover();
     }

}