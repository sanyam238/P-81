canvas = document.getElementById("myCanvas");

 ctx = canvas.getContext("2d");

 ctx.beginPath();

 ctx.strokeStyle = "grey";

 ctx.lineWidth = 4;

 ctx.rect(100, 100, 700, 475);

 ctx.stroke();


 ctx.beginPath();

 ctx.strokeStyle = "blue";

 ctx.lineWidth = 5;

 ctx.arc(225, 275, 100, 0,2*Math.PI);

 ctx.stroke();


 ctx.beginPath();

 ctx.strokeStyle = "black";

 ctx.lineWidth = 5;

 ctx.arc(450, 275, 100, 0,2*Math.PI);

 ctx.stroke();


 ctx.beginPath();

 ctx.strokeStyle = "red";

 ctx.lineWidth = 5;

 ctx.arc(675, 275, 100, 0,2*Math.PI);

 ctx.stroke();

 ctx.beginPath();

 ctx.strokeStyle = "green";

 ctx.lineWidth = 5;

 ctx.arc(560, 400, 100, 0,2*Math.PI);

 ctx.stroke();

 
 ctx.beginPath();

 ctx.strokeStyle = "yellow";

 ctx.lineWidth = 5;

 ctx.arc(335, 400, 100, 0,2*Math.PI);

 ctx.stroke();