(() => {
  'use strict';
  if (window.lucide) window.lucide.createIcons();
  document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(element => new bootstrap.Tooltip(element));
  const rows = Array.from(document.querySelectorAll('[data-record-row]'));
  const search = document.querySelector('[data-record-search]');
  const counter = document.querySelector('[data-result-count]');
  const noResults = document.querySelector('[data-no-results]');
  const updateSearch = () => {
    const query = (search?.value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
    let visible = 0;
    rows.forEach(row => {
      const name = (row.dataset.name || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
      row.hidden = !name.includes(query);
      if (!row.hidden) visible++;
    });
    if (counter) counter.textContent = `${visible} de ${rows.length} registros`;
    if (noResults) noResults.hidden = visible > 0 || rows.length === 0;
  };
  if (search) { search.addEventListener('input', updateSearch); updateSearch(); }
  const number = value => Number(String(value || '').replace(',', '.'));
  const format = new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 2 });
  const quantities = rows.map(row => number(row.dataset.quantity));
  const weights = rows.map(row => number(row.dataset.quantity) * number(row.dataset.weight));
  const totalQuantity = quantities.filter(Number.isFinite).reduce((sum, value) => sum + value, 0);
  const totalWeight = weights.filter(Number.isFinite).reduce((sum, value) => sum + value, 0);
  document.querySelectorAll('[data-total-quantity]').forEach(element => { element.textContent = format.format(totalQuantity); });
  document.querySelectorAll('[data-total-weight]').forEach(element => { element.textContent = format.format(totalWeight / 1000); });
  document.querySelectorAll('[data-delete-url]').forEach(button => {
    button.addEventListener('click', () => {
      document.getElementById('deleteForm').action = button.dataset.deleteUrl;
      document.getElementById('deleteDescription').textContent = `Excluir "${button.dataset.deleteName}"? Esta acao nao pode ser desfeita.`;
      bootstrap.Modal.getOrCreateInstance(document.getElementById('deleteModal')).show();
    });
  });
  document.querySelectorAll('form[data-prevent-double-submit]').forEach(form => {
    form.addEventListener('submit', () => {
      if (!form.checkValidity()) return;
      const submit = form.querySelector('[type="submit"]');
      if (submit) { submit.disabled = true; submit.setAttribute('aria-busy', 'true'); }
    });
  });
})();
