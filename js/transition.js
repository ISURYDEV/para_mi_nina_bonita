const canvas = document.getElementById('starCanvas');
const ctx = canvas.getContext('2d');
const stars = [];
const numStars = 100;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function createStar(x, y) {
    return {
        x: x,
        y: y,
        radius: Math.random() * 2,
        alpha: Math.random()
    };
}

// Create random stars
for (let i = 0; i < numStars; i++) {
    stars.push(createStar(Math.random() * canvas.width, Math.random() * canvas.height));
}

function drawStar(star) {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
    ctx.fill();
}

// Main animation function
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw background stars
    for (let star of stars) {
        drawStar(star);
    }

    // Draw central star with animation
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const currentTime = Date.now();
    const intensity = Math.sin(currentTime / 200) * 0.5 + 0.5;
    
    ctx.beginPath();
    ctx.arc(centerX, centerY, 50 + intensity * 150, 0, Math.PI * 2, false);
    ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(intensity * 3, 1)})`;
    ctx.fill();

    requestAnimationFrame(animate);
}

animate();

// Redirect after animation
setTimeout(() => {
    window.location.href = 'nextpage.html';
}, 6000); // 6 seconds
