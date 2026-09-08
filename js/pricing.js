/*
  Yoga 1 Hour — single source of truth for live website pricing and timing.
  Update values here when launch pricing changes. Service pages render these
  values automatically; the supplied artwork remains unchanged as brand collateral.
*/
window.YOGA1HOUR_PRICING = {
  home: {
    label: 'Private 1-to-1 Yoga',
    unit: 'per class',
    classPrice: 555,
    monthlyPrice: 6660,
    monthlyDetail: '12 classes',
    transformationPrice: 39999,
    transformationDetail: '6 months · 72 classes',
    timing: 'Flexible 60-minute slots — scheduled around your routine.',
    commitment: 'Personal attention with a consistent practice plan.'
  },
  school: {
    label: 'School Yoga',
    unit: 'per child · per class',
    classPrice: 27,
    monthlyPrice: 324,
    monthlyDetail: 'per child · per month',
    timing: 'Flexible 60-minute timing — agreed with the school coordinator.',
    commitment: 'Launch program pricing · minimum 6-month engagement.'
  },
  corporate: {
    label: 'Corporate Yoga',
    unit: 'per employee · per class',
    classPrice: 99,
    monthlyPrice: 1188,
    monthlyDetail: 'per employee · per month',
    timing: 'Flexible 60-minute timing — scheduled to suit your team and HR calendar.',
    commitment: 'Launch program pricing · minimum engagement as agreed.'
  }
};

(function(){
  const data = window.YOGA1HOUR_PRICING || {};
  const money = value => `₹${Number(value).toLocaleString('en-IN')}`;
  document.querySelectorAll('[data-pricing-page]').forEach(section => {
    const key = section.getAttribute('data-pricing-page');
    const cfg = data[key];
    if (!cfg) return;
    section.querySelectorAll('[data-price="class"]').forEach(el => el.textContent = money(cfg.classPrice));
    section.querySelectorAll('[data-price="monthly"]').forEach(el => el.textContent = money(cfg.monthlyPrice));
    section.querySelectorAll('[data-price="transformation"]').forEach(el => el.textContent = money(cfg.transformationPrice));
    section.querySelectorAll('[data-price-detail="monthly"]').forEach(el => el.textContent = cfg.monthlyDetail || '');
    section.querySelectorAll('[data-price-detail="transformation"]').forEach(el => el.textContent = cfg.transformationDetail || '');
    section.querySelectorAll('[data-timing]').forEach(el => el.textContent = cfg.timing || 'Flexible timing available.');
    section.querySelectorAll('[data-commitment]').forEach(el => el.textContent = cfg.commitment || '');
  });
})();
