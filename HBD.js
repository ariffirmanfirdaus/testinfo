document.addEventListener('DOMContentLoaded', function() {
    // Create floating balloons
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    const container = document.body;
    
    for (let i = 0; i < 20; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        
        // Random properties
        const size = Math.random() * 60 + 50;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 4 + 6;
        
        // Apply styles
        balloon.style.width = `${size}px`;
        balloon.style.height = `${size * 1.3}px`;
        balloon.style.background = `radial-gradient(circle at 30% 30%, #ffffff, ${color})`;
        balloon.style.left = `${left}%`;
        balloon.style.top = `${Math.random() * 100 + 50}%`;
        balloon.style.animationDelay = `${delay}s`;
        balloon.style.animationDuration = `${duration}s`;
        
        // Add string to balloon
        const string = document.createElement('div');
        string.style.position = 'absolute';
        string.style.width = '2px';
        string.style.height = `${size}px`;
        string.style.background = '#ccc';
        string.style.bottom = `-${size}px`;
        string.style.left = '50%';
        string.style.transform = 'translateX(-50%)';
        
        balloon.appendChild(string);
        container.insertBefore(balloon, container.firstChild);
    }
    
    // Enhanced flame animation
    const flame = document.querySelector('.flame');
    
    function updateFlame(e) {
        const x = e ? e.clientX / window.innerWidth : 0.5;
        const y = e ? e.clientY / window.innerHeight : 0.5;
        
        const xOffset = (x - 0.5) * 20;
        const yOffset = (y - 0.5) * 20;
        
        flame.style.transform = `translateX(-50%) translate(${xOffset}px, ${yOffset}px)`;
        flame.style.height = `${40 + yOffset}px`;
    }
    
    document.addEventListener('mousemove', updateFlame);
    
    // Random flame movement when mouse isn't moving
    setInterval(() => {
        if (!flame.hasAttribute('data-last-move') || Date.now() - parseInt(flame.getAttribute('data-last-move')) > 2000) {
            const randomX = Math.random() * 40 - 20;
            const randomY = Math.random() * 20 - 10;
            flame.style.transform = `translateX(-50%) translate(${randomX}px, ${randomY}px)`;
        }
    }, 100);
    
    document.addEventListener('mousemove', () => {
        flame.setAttribute('data-last-move', Date.now());
    });
});
