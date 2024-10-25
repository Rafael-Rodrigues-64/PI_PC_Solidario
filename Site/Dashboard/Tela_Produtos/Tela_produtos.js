document.getElementById('selectAll').addEventListener('change', function() {
    let checkboxes = document.querySelectorAll('.product');
    checkboxes.forEach((checkbox) => {
        checkbox.checked = this.checked;
    });
});

let currentPage = 1;
const totalPages = 100;  // Defina o número total de páginas

const doadoCheckbox = document.getElementById('selectDoado');
const naoDoadoCheckbox = document.getElementById('selectNaoDoado');
const allItems = document.querySelectorAll('.estoque .item');

// Função para mostrar apenas os itens doados
doadoCheckbox.addEventListener('change', function() {
    if (this.checked) {
        allItems.forEach(item => {
            if (item.classList.contains('doado')) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    } else {
        allItems.forEach(item => {
            item.style.display = 'block';
        });
    }
});

// Função para mostrar apenas os itens não doados
naoDoadoCheckbox.addEventListener('change', function() {
    if (this.checked) {
        allItems.forEach(item => {
            if (item.classList.contains('nao-doado')) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    } else {
        allItems.forEach(item => {
            item.style.display = 'block';
        });
    }
});