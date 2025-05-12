document.addEventListener('DOMContentLoaded', () => {
    // Balloon Generator
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'];
    const container = document.getElementById('balloons-container');
    
    function createBalloon() {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        
        const size = Math.random() * 60 + 40;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const startPosition = Math.random() * 100;
        const duration = 8 + Math.random() * 4;
        
        balloon.style.cssText = `
            width: ${size}px;
            height: ${size * 1.3}px;
            background: radial-gradient(circle at 30% 30%, #ffffff, ${color});
            left: ${startPosition}%;
            animation: float ${duration}s linear infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        
        const string = document.createElement('div');
        string.style.cssText = `
            position: absolute;
            width: 2px;
            height: ${size}px;
            background: #ccc;
            bottom: -${size}px;
            left: 50%;
            transform: translateX(-50%);
        `;
        
        balloon.appendChild(string);
        container.appendChild(balloon);
    }

    // Create initial balloons
    for(let i = 0; i < 15; i++) {
        createBalloon();
    }

    // Flame Animation
    const flame = document.querySelector('.flame');
    let angle = 0;
    
    function animateFlame() {
        angle += 0.05;
        flame.style.transform = `
            translateX(-50%)
            rotate(${Math.sin(angle) * 2}deg)
            scale(${1 + Math.sin(angle) * 0.1})
        `;
        requestAnimationFrame(animateFlame);
    }
    animateFlame();

    // Mobile Interaction
    document.addEventListener('touchmove', (e) => {
        const touch = e.touches[0];
        const x = touch.clientX / window.innerWidth;
        const y = touch.clientY / window.innerHeight;
        
        flame.style.transform = `
            translateX(-50%)
            translate(${(x - 0.5) * 20}px, ${(y - 0.5) * 20}px)
        `;
    });

    // Auto refresh balloons
    setInterval(() => {
        container.innerHTML = '';
        for(let i = 0; i < 15; i++) {
            createBalloon();
        }
    }, 60000);
});
