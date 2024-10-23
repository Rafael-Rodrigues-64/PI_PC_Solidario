document.getElementById('selectAll').addEventListener('change', function() {
    let checkboxes = document.querySelectorAll('.product');
    checkboxes.forEach((checkbox) => {
        checkbox.checked = this.checked;
    });
});

let currentPage = 1;
const totalPages = 100;  // Defina o número total de páginas

document.getElementById('totalPages').innerText = totalPages;

document.getElementById('prevPage').addEventListener('click', function() {
    if (currentPage > 1) {
        currentPage--;
        document.getElementById('currentPage').innerText = currentPage;
        // Aqui você pode adicionar a lógica para atualizar a lista de produtos da página
    }
});

document.getElementById('nextPage').addEventListener('click', function() {
    if (currentPage < totalPages) {
        currentPage++;
        document.getElementById('currentPage').innerText = currentPage;
        // Aqui você pode adicionar a lógica para atualizar a lista de produtos da página
    }
});