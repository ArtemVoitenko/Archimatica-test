    var canvasTop = document.getElementById("myCanvas"),
    context = canvasTop.getContext("2d");
    context.strokeStyle = "white";
    context.beginPath();
    context.arc(38, 20, 18, 0, Math.PI * 2, false);
    context.closePath();
    context.stroke();
    context.beginPath();
    context.arc(38, 20, 2, 0, Math.PI * 2, false);
    context.fillStyle = "white";
    context.closePath();
    context.fill();
    context.stroke();
    var windowWidth = $(document).width();
    var center = windowWidth / 2;
    context.beginPath();
    context.moveTo(0, 20);
    context.lineTo(windowWidth, 20);
    context.lineWidth = 0.3;
    context.closePath();
    context.stroke();
    context.arc(center, 20, 4, 0, Math.PI * 2, false);
    context.fillStyle = "white";
    context.closePath();
    context.fill();
    context.stroke();
    context.beginPath();
    context.arc(windowWidth - 40, 20, 4, 0, Math.PI * 2, false);
    context.fillStyle = "white";
    context.closePath();
    context.fill();
    context.stroke();
    var linesCanvas = document.getElementById("linesCanvas"),
        ctx = linesCanvas.getContext("2d");
    ctx.strokeStyle = "#ebebeb";
    for (var i = 1; i < linesCanvas.width; i += 9) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, linesCanvas.height);
        ctx.lineWidth = 1;
        ctx.stroke();
    }