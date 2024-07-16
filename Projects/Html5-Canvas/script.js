const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.fillStyle = 'white';
    ctx.fillRect(10, 20, 150, 50);
});

ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.lineWidth = 3;
ctx.beginPath();

ctx.arc(100, 100, 30, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();

console.log(ctx);