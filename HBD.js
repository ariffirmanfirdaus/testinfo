document.addEventListener('DOMContentLoaded', () => {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'];
    const container = document.getElementById('balloons-container');
    
    function createBalloon() {
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
            animation: float ${8 + Math.random() * 2}s linear infinite;
        `;
        
        // Tambah tali
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

    // Buat balon setiap 500ms
    setInterval(() => {
        createBalloon();
    }, 500);

    // Animasi Api
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

    // Interaksi Mobile
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
