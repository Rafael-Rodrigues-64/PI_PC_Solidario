// Gráfico de Produtos
const ctxProdutos = document.getElementById('chartProdutos').getContext('2d');
const chartProdutos = new Chart(ctxProdutos, {
  type: 'bar', // Tipo do gráfico: barra
  data: {
    labels: ['Cadastrados', 'Disponíveis', 'Em Doação'], // Etiquetas
    datasets: [{
      label: 'Produtos',
      data: [100, 80, 20], // Dados fictícios
      backgroundColor: ['#4682B4', '#1E90FF', '	#4169E1'], // Cores
      borderWidth: 1,
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
    }
  }
});

// Gráfico de Doações
const ctxDoacoes = document.getElementById('chartDoacoes').getContext('2d');
const chartDoacoes = new Chart(ctxDoacoes, {
  type: 'doughnut', // Tipo do gráfico: pizza
  data: {
    labels: ['Realizadas', 'Pendentes'],
    datasets: [{
      label: 'Doações',
      data: [250, 50],
      backgroundColor: ['#3CB371', '#F4A460'],
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'bottom' }
    }
  }
});
