document.addEventListener('DOMContentLoaded', function() {
    // Create floating balloons
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    const container = document.body;
    
    for (let i = 0; i < 15; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        
        // Random properties
        const size = Math.random() * 40 + 40;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 4 + 6;
        
        // Apply styles
        balloon.style.width = `${size}px`;
        balloon.style.height = `${size * 1.3}px`;
        balloon.style.background = `radial-gradient(circle at 30% 30%, #ffffff, ${color})`;
        balloon.style.left = `${left}%`;
        balloon.style.top = `${Math.random() * 100}%`;
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
    
    // Make candle flame interactive
    const flame = document.querySelector('.flame');
    document.addEventListener('mousemove', function(e) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        flame.style.transform = `translate(${(x - 0.5) * 10}px, ${(y - 0.5) * 10}px)`;
    });
});