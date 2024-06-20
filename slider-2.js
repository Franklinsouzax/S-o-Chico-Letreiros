const slider = document.querySelector('.slider-2');

// Função para rolar automaticamente para a direita uma vez
function autoScrollOnce() {
    const scrollAmount = 5; // Quantidade de pixels para rolar
    const interval = 10; // Intervalo entre cada movimento em milissegundos
    let count = 0;
    
    const scrollInterval = setInterval(() => {
        slider.scrollLeft += 1; // Rola 1 pixel para a direita
        
        count++;
        if (count >= scrollAmount) {
            clearInterval(scrollInterval); // Para o intervalo após rolar a quantidade desejada
        }
    }, interval);
}

// Chama a função para rolar automaticamente uma vez ao carregar a página
window.addEventListener('load', autoScrollOnce);
