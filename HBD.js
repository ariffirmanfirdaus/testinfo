document.addEventListener('DOMContentLoaded', () => {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'];
    const container = document.getElementById('balloons-container');
    let balloonCount = 0;
    
    function createBalloonBatch() {
        // Create 8 balloons with staggered delays
        for(let i = 0; i < 8; i++) {
            setTimeout(() => {
                const balloon = document.createElement('div');
                balloon.className = 'balloon';
                
                const size = Math.random() * 60 + 40;
                const color = colors[Math.floor(Math.random() * colors.length)];
                const startPosition = Math.random() * 100;
                
                balloon.style.cssText = `
                    width: ${size}px;
                    height: ${size * 1.3}px;
                    background: radial-gradient(circle at 30% 30%, #ffffff, ${color});
                    left: ${startPosition}%;
                    animation: float ${8 + Math.random() * 2}s linear forwards;
                `;
                
                // Add string
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
                
                // Remove balloon after animation
                balloon.addEventListener('animationend', () => {
                    balloon.remove();
                });
            }, i * 1200); // Stagger each balloon by 1.2 seconds
        }
        
        // Repeat every 15 seconds
        setTimeout(createBalloonBatch, 15000);
    }

    // Start initial batch
    createBalloonBatch();

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
});
