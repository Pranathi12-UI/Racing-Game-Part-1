canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car_1_width = 120;
car_1_height = 70;
car_1_image = "https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/lamborghini_660_140220101539.jpg";
car_1_x = 10;
car_1_y = 100;

car_2_width = 120;
car_2_height = 70;
car_2_image = "https://image.shutterstock.com/image-illustration/small-yellow-compact-car-260nw-394558741.jpg";
car_2_x = 10;
car_2_y = 100;


background_image = "https://coloradosprings.gov/sites/default/files/mesa_complete_2.jpg";

function add() 
{ 
    background_imgTag = new Image(); 
    background_imgTag.onload = uploadBackground; 
    background_imgTag.src = background_image; 
    car_1_imgTag = new Image(); 
    car_2_imgTag = new Image(); 
    car_1_imgTag.onload = uploadrover; 
    car_2_imgTag.onload = uploadrover; 
    car_1_imgTag.src = rover_image; 
    car_2_imgTag.src = rover_image;
} 

function uploadBackground() 
{ 
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height); 
} 
function uploadcar1() 
{ 
    ctx.drawImage(car_1_imgTag, car_1_x, car1_y, car_1_width, car_1_height); 
}
function uploadcar2() 
{ 
    ctx.drawImage(car_2_imgTag, car_2_x, car_2_y, car_2_width, car_2_height); 
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e) 
{ 
    keyPressed = e.keyCode; 
    console.log(keyPressed); 
    if(keyPressed == '38') 
    { 
        up(); 
        console.log("up"); 
    } 
    if(keyPressed == '40') 
    { 
        down(); 
        console.log("down"); 
    } 
    if(keyPressed == '37') 
    { 
        left(); 
        console.log("left"); 
    } 
    if(keyPressed == '39') 
    { 
        right(); 
        console.log("right"); 
    } 
}
function up() 
{ 
    if(car_1_y >=0) 
    {
        car_1_y = car_1_y - 10; 
        console.log("When up arrow is pressed, x = " + car_1_x + " | y = " +car_1_y); 
        uploadBackground(); 
        uploadcar_1(); 
    } 
    if(car_2_y >=0) 
    {
        car_2_y = car_2_y - 10; 
        console.log("When up arrow is pressed, x = " + car_2_x + " | y = " +car_2_y); 
        uploadBackground(); 
        uploadcar_2(); 
    } 
}
function down() 
{ 
    if(car_1_y <=500) 
    { 
        car_1_y =car_1_y+ 10; 
        console.log("When down arrow is pressed, x = " + car_1_x + " | y = " +car_1_y); 
        uploadBackground(); 
        uploadcar_1();
    } 
    if(car_2_y <=500) 
    { 
        car_2_y =car_2_y+ 10; 
        console.log("When down arrow is pressed, x = " + car_2_x + " | y = " +car_2_y); 
        uploadBackground(); 
        uploadcar_2();
    } 
}
function left() 
{ 
    if(car_1_x >=0) 
    { 
        car_1_x =car_1_x - 10; 
        console.log("When left arrow is pressed, x = " + car_1_x + " | y = " +car_1_y); 
        uploadBackground(); 
        uploadcar_1();
    } 
    if(car_2_x >=0) 
    { 
        car_2_x =car_2_x - 10; 
        console.log("When left arrow is pressed, x = " + car_2_x + " | y = " +car_2_y); 
        uploadBackground(); 
        uploadcar_2();
    } 
}
function right() 
{ 
    if(car_1_x <=700) 
    { 
        car_1_x =car_1_x + 10; 
        console.log("When right arrow is pressed, x = " + car_1_x + " | y = " +car_1_y); 
        uploadBackground(); 
        uploadcar_1();
    } 
    if(car_2_x <=700) 
    { 
        car2_x =car_2_x + 10; 
        console.log("When right arrow is pressed, x = " + car_2_x + " | y = " +car_2_y); 
        uploadBackground(); 
        uploadcar_2();
    } 
}
