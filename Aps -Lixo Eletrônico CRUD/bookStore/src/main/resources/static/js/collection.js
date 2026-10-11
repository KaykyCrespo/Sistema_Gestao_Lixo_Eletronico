(() => {
  'use strict';
  const form = document.getElementById('chartForm');
  if (!form || !window.Chart) return;
  const records = (window.ewasteData || []).map(record => ({
    name: String(record.name || '').trim(),
    quantity: Number(String(record.author || '').replace(',', '.')),
    weight: Number(String(record.price || '').replace(',', '.')),
  })).filter(record => record.name && Number.isFinite(record.quantity) && Number.isFinite(record.weight) && record.quantity > 0 && record.weight > 0);
  const groups = new Map();
  records.forEach(record => groups.set(record.name, (groups.get(record.name) || 0) + record.quantity * record.weight / 1000));
  const total = Array.from(groups.values()).reduce((sum, value) => sum + value, 0);
  const format = new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 2 });
  const palette = ['#157347', '#087f8c', '#bd8736', '#b33340', '#5268a0', '#59894c', '#8d6276', '#68767c'];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  Chart.defaults.font.family = "'Montserrat', sans-serif";
  Chart.defaults.color = '#617168';
  let bar;
  let pie;
  const update = () => {
    const goal = Number(document.getElementById('metaInput').value);
    const error = document.getElementById('goalError');
    if (!Number.isFinite(goal) || goal <= 0) {
      error.hidden = false;
      return;
    }
    error.hidden = true;
    const currentMonth = new Date().getMonth();
    const monthly = Array(12).fill(0);
    monthly[currentMonth] = total;
    const barData = {
      labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      datasets: [
        { label: 'Peso atual', data: monthly, backgroundColor: '#157347', borderRadius: 3 },
        { label: 'Referencia mensal da meta', data: Array(12).fill(goal / 12), backgroundColor: '#cce9ec', borderColor: '#087f8c', borderWidth: 1, borderRadius: 3 },
      ],
    };
    const pieData = { labels: Array.from(groups.keys()), datasets: [{ data: Array.from(groups.values()), backgroundColor: Array.from(groups.keys()).map((name, index) => palette[index % palette.length]), borderColor: '#ffffff', borderWidth: 3 }] };
    const common = { responsive: true, maintainAspectRatio: false, animation: reducedMotion ? false : { duration: 250 }, plugins: { legend: { position: 'bottom', labels: { usePointStyle: true, boxWidth: 8, padding: 16, font: { size: 11 } } }, tooltip: { callbacks: { label: context => `${context.dataset.label || context.label}: ${format.format(context.raw)} kg` } } } };
    if (bar) {
      bar.data = barData;
      pie.data = pieData;
      bar.update();
      pie.update();
    } else {
      bar = new Chart(document.getElementById('graficoBarra'), { type: 'bar', data: barData, options: { ...common, scales: { x: { grid: { display: false } }, y: { beginAtZero: true, grid: { color: '#edf2ef' }, ticks: { callback: value => `${format.format(value)} kg` } } } } });
      pie = new Chart(document.getElementById('graficoPizza'), { type: 'doughnut', data: pieData, options: { ...common, cutout: '65%' } });
    }
    const percentage = total / goal * 100;
    document.getElementById('goalProgress').value = Math.min(percentage, 100);
    document.getElementById('goalSummary').textContent = `${format.format(total)} kg de ${format.format(goal)} kg (${format.format(percentage)}%)`;
    document.getElementById('invalidRecords').hidden = records.length === (window.ewasteData || []).length;
  };
  form.addEventListener('submit', event => { event.preventDefault(); update(); });
  if (records.length) {
    update();
  } else {
    const warning = document.getElementById('invalidRecords');
    warning.hidden = false;
    warning.textContent = 'Nenhum item tem quantidade e peso validos para gerar os graficos.';
    form.hidden = true;
    document.querySelector('.goal-progress').hidden = true;
    document.querySelector('.charts-grid').hidden = true;
  }
})();
