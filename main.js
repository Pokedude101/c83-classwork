//laptop controls//



//mobile controls//
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "red";
width_of_line = 1


var width = screen.width;

var new_height = screen.height - 300;
var new_width = screen.width - 70;

var lastpostionofxmobile,lastpostionofymobile;

if (width < 992){
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e){
    last_position_of_xmobile = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_ymobile = e.touches[0].clientY - canvas.offsetTop;
    
    console.log("touchstart");
}


canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e){
    currentpostionofxmobile = e.touches[0].clientX - canvas.offsetLeft;
    currentpostionofymobile = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last Cordinate of X = " + lastpostionofxmobile + "Y = " + lastpostionofymobile);
        ctx.moveTo(lastpostionofxmobile, lastpostionofymobile);

        console.log("Current Cordinate of X = " + currentpostionofxmobile + "Y = " + currentpostionofymobile);
        ctx.lineTo(currentpostionofxmobile, currentpostionofymobile);
        ctx.stroke();

    lastpostionofxmobile = currentpostionofxmobile;
    lastpostionofymobile = currentpostionofymobile;
}