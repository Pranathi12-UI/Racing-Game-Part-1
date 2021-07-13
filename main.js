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
car_2_y = 200;


background_image = "https://coloradosprings.gov/sites/default/files/mesa_complete_2.jpg";

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;
    car_1_imgTag = new Image();
    car_2_imgTag = new Image();
    car_1_imgTag.onload = uploadcar_1;
    car_2_imgTag.onload = uploadcar_2;
    car_1_imgTag.src = car_1_image;
    car_2_imgTag.src = car_2_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar_1() {
    ctx.drawImage(car_1_imgTag, car_1_x, car_1_y, car_1_width, car_1_height);
}

function uploadcar_2() {
    ctx.drawImage(car_2_imgTag, car_2_x, car_2_y, car_2_width, car_2_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        up();
        console.log("up");
    }
    if (keyPressed == '40') {
        down();
        console.log("down");
    }
    if (keyPressed == '37') {
        left();
        console.log("left");
    }
    if (keyPressed == '39') {
        right();
        console.log("right");
    }
    if (keyPressed == '87') {
        car2_up();
        console.log("car2_up");
    }
    if (keyPressed == '83') {
        car2_down();
        console.log("car2_down");
    }
    if (keyPressed == '65') {
        car2_left();
        console.log("car2_left");
    }
    if (keyPressed == '68') {
        car2_right();
        console.log("car2_right");
    }
}

function up() {
    if (car_1_y >= 0) {
        car_1_y = car_1_y - 10;
        console.log("When up arrow is pressed, x = " + car_1_x + " | y = " + car_1_y);
        uploadBackground();
        uploadcar_1();
        uploadcar_2();
    }
}

function car2_up() {


    if (car_2_y >= 0) {
        car_2_y = car_2_y - 10;
        console.log("When up arrow is pressed, x = " + car_2_x + " | y = " + car_2_y);
        uploadBackground();
        uploadcar_2();
        uploadcar_1();

    }
}

function down() {
    if (car_1_y <= 500) {
        car_1_y = car_1_y + 10;
        console.log("When down arrow is pressed, x = " + car_1_x + " | y = " + car_1_y);
        uploadBackground();
        uploadcar_1();
        uploadcar_2();

    }
}
function car2_down(){
    if (car_2_y <= 500) {
        car_2_y = car_2_y + 10;
        console.log("When down arrow is pressed, x = " + car_2_x + " | y = " + car_2_y);
        uploadBackground();
        uploadcar_2();
        uploadcar_1();

    }
}

function left() {
    if (car_1_x >= 0) {
        car_1_x = car_1_x - 10;
        console.log("When left arrow is pressed, x = " + car_1_x + " | y = " + car_1_y);
        uploadBackground();
        uploadcar_1();
        uploadcar_2();

    }
}
function car2_left(){
    if (car_2_x >= 0) {
        car_2_x = car_2_x - 10;
        console.log("When left arrow is pressed, x = " + car_2_x + " | y = " + car_2_y);
        uploadBackground();
        uploadcar_2();
        uploadcar_1();

    }
}

function right() {
    if (car_1_x <= 700) {
        car_1_x = car_1_x + 10;
        console.log("When right arrow is pressed, x = " + car_1_x + " | y = " + car_1_y);
        uploadBackground();
        uploadcar_1();
        uploadcar_2();

    }
}
function car2_right(){
    if (car_2_x <= 700) {
        car_2_x = car_2_x + 10;
        console.log("When right arrow is pressed, x = " + car_2_x + " | y = " + car_2_y);
        uploadBackground();
        uploadcar_2();
        uploadcar_1();

    }
}
