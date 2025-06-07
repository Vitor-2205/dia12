document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    const heartContainer = document.querySelector('.heart-container');

    // Função para criar um coração
    const createHeart = () => {
        const heart = document.createElement('span');
        heart.classList.add('heart');
        heart.innerHTML = '❤️'; // Ou &#x2764; para um coração sólido

        // Posição inicial aleatória no topo
        heart.style.left = Math.random() * 100 + 'vw';
        
        // Tamanho e duração da animação aleatórios para variação
        const size = Math.random() * 1.5 + 0.8; // Entre 0.8em e 2.3em
        heart.style.fontSize = size + 'em';
        
        const animationDuration = Math.random() * 6 + 5; // Entre 5s e 11s
        heart.style.animationDuration = animationDuration + 's';
        
        const animationDelay = Math.random() * 5; // Atraso inicial para não caírem todos juntos
        heart.style.animationDelay = animationDelay + 's';

        heartContainer.appendChild(heart);

        // Remover o coração após a animação para otimização
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    };

    // Gerar corações continuamente
    setInterval(createHeart, 300); // Gera um coração a cada 300ms


    // Funções de controle dos cartões (mantidas do código anterior)

    const showCard = (index) => {
        cards.forEach((card, i) => {
            if (i === index) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
        updateButtons();
    };

    const updateButtons = () => {
        if (currentIndex === 0) {
            prevBtn.classList.add('hidden');
        } else {
            prevBtn.classList.remove('hidden');
        }

        if (currentIndex === cards.length - 1) {
            nextBtn.classList.add('hidden');
        } else {
            nextBtn.classList.remove('hidden');
        }
    };

    nextBtn.addEventListener('click', () => {
        if (currentIndex < cards.length - 1) {
            currentIndex++;
            showCard(currentIndex);
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            showCard(currentIndex);
        }
    });

    // Inicializa o site mostrando o primeiro cartão
    showCard(currentIndex);
});