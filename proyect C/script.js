const numcoches = 55;

for (let i = 0; i < numcoches; i++) {
    setTimeout(() => { 
        const cocheFlotante = document.createElement('div');
        cocheFlotante.className = 'coche-flotante';
        const cocheReal = document.createElement('img');
        cocheReal.src = 'megane.png';
        cocheReal.className = 'megane-real';

        cocheFlotante.style.top = Math.random() * 100 + '%';
        cocheFlotante.style.left = Math.random() * 100 + '%';

        const duration = 6 + Math.random() * 6;
        const delay = Math.random() * 6;

        cocheFlotante.style.animationDuration = `${duration}s`;
        cocheFlotante.style.animationDelay = `${delay}s`;

        const flip = Math.random() > 0.5 ? -1 : 1;
        const rotate = (Math.random() * 10) - 5;
        const scale = 0.5 + Math.random() * 0.5;

        cocheReal.style.transform = `scaleX(${flip}) rotate(${rotate}deg) scale(${scale})`;

        cocheFlotante.appendChild(cocheReal);

        document.getElementById('coches').appendChild(cocheFlotante);

        setTimeout(() => {
            cocheFlotante.classList.add('aparecer');
        }, 100);
    }, i * 300);
}

setInterval(() => {
    const burbujaImg = document.createElement("img");
    burbujaImg.src = "gtLine.png";
    burbujaImg.classList.add("burbuja-img");
    document.getElementById('burbuja-container').appendChild(burbujaImg);

    burbujaImg.style.left = `${Math.random() * 100}%`;
    const duration = Math.random() * 7 + 12;
    burbujaImg.style.animationDuration = `${duration}s`;

    setTimeout(() => {
        burbujaImg.remove();
    }, duration * 1000);
}, 200);







