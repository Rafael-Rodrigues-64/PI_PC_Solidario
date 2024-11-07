
// Função para copiar o conteúdo
document.querySelector('.btn_Copiar').addEventListener('click', () => {
    const textToCopy = document.getElementById('content').innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert('Conteúdo copiado!');
    }).catch(err => {
        alert('Falha ao copiar: ' + err);
    });
});

// Função para editar o conteúdo
document.querySelector('.btn_Editar').addEventListener('click', () => {
    const contentElement = document.getElementById('content');
    const currentContent = contentElement.innerText;
    const newContent = prompt("Edite o conteúdo:", currentContent);
    if (newContent !== null) {
        contentElement.innerText = newContent;
        alert('Conteúdo atualizado!');
    }
});

// Função para mover o conteúdo para a lixeira
document.querySelector('.btn_Lixeira').addEventListener('click', () => {
    const confirmDelete = confirm("Tem certeza que deseja excluir?");
    if (confirmDelete) {
        document.getElementById('content').innerText = '';
        alert("Conteúdo movido para a lixeira");
    }
});

// Função para imprimir o conteúdo
document.querySelector('.btn_Imprimir').addEventListener('click', () => {
    const printContent = document.getElementById('content').innerText;
    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write('<html><head><title>Imprimir</title></head><body>');
    printWindow.document.write('<pre>' + printContent + '</pre>');
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
});
