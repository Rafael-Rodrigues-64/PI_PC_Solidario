// Configurações de paginação
let currentPage = 1;
const totalPages = 100; // Total de páginas. Pode ser atualizado conforme necessário.

// Elementos de contagem de página
const currentPageElement = document.getElementById('currentPage');
const totalPagesElement = document.getElementById('totalPages');
totalPagesElement.innerText = totalPages; // Exibe o total de páginas

// Função para atualizar o número da página
function updatePageCounter() {
    currentPageElement.innerText = currentPage;
}

// Função para carregar o conteúdo da página atual (simulada)
function loadPageContent(page) {
    const formContent = document.querySelector('.endereco');
    formContent.innerHTML = `Conteúdo da página ${page}`;
}

// Função para ir para a página anterior
document.getElementById('prevPage').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        updatePageCounter();
        loadPageContent(currentPage);
    }
});

// Função para ir para a próxima página
document.getElementById('nextPage').addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        updatePageCounter();
        loadPageContent(currentPage);
    }
});

// Carrega o conteúdo da primeira página ao iniciar
loadPageContent(currentPage);