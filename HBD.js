document.addEventListener('DOMContentLoaded', () => {
    // Balloon Generator
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'];
    const container = document.getElementById('balloons-container');
    
    function createBalloon() {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        
        balloon.style.cssText = `
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            animation: float ${6 + Math.random() * 4}s infinite;
        `;
        
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
    let lastTouch = 0;
    document.addEventListener('touchmove', (e) => {
        const touch = e.touches[0];
        const x = touch.clientX / window.innerWidth;
        const y = touch.clientY / window.innerHeight;
        
        flame.style.transform = `
            translateX(-50%)
            translate(${(x - 0.5) * 20}px, ${(y - 0.5) * 20}px)
        `;
    });
    
    // Auto refresh balloons every minute
    setInterval(() => {
        container.innerHTML = '';
        for(let i = 0; i < 15; i++) {
            createBalloon();
        }
    }, 60000);
});
