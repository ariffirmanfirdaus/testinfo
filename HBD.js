document.addEventListener('DOMContentLoaded', () => {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'];
    const container = document.getElementById('balloons-container');
    
    function createBalloon() {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        
        const size = Math.random() * 60 + 40;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const startPosition = Math.random() * 100;
        const duration = 6 + Math.random() * 3;
        
        balloon.style.cssText = `
            width: ${size}px;
            height: ${size * 1.3}px;
            background: radial-gradient(circle at 30% 30%, #ffffff70, ${color});
            left: ${startPosition}%;
            animation: float ${duration}s linear forwards;
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        `;
        
        const string = document.createElement('div');
        string.style.cssText = `
            position: absolute;
            width: 2px;
            height: ${size}px;
            background: #ffffff80;
            bottom: -${size}px;
            left: 50%;
            transform: translateX(-50%);
            filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
        `;
        
        balloon.appendChild(string);
        container.appendChild(balloon);
        
        balloon.addEventListener('animationend', () => balloon.remove());
    }

    setInterval(createBalloon, 800);

    const flame = document.querySelector('.flame');
    let angle = 0;
    
    function animateFlame() {
        angle += 0.05;
        flame.style.transform = `
            translateX(-48%)
            rotate(${Math.sin(angle) * 4}deg)
            scale(${1 + Math.sin(angle) * 0.15})
        `;
        requestAnimationFrame(animateFlame);
    }
    animateFlame();

    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        flame.style.transform = `
            translateX(-48%)
            translate(${(x - 0.5) * 25}px, ${(y - 0.5) * 25}px)
        `;
    });

    document.addEventListener('touchmove', (e) => {
        const touch = e.touches[0];
        const x = touch.clientX / window.innerWidth;
        const y = touch.clientY / window.innerHeight;
        flame.style.transform = `
            translateX(-48%)
            translate(${(x - 0.5) * 25}px, ${(y - 0.5) * 25}px)
        `;
    });
});
