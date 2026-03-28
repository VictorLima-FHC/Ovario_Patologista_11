document.querySelectorAll('.s5 .tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.getAttribute('data-tab');

    document.querySelectorAll('.s5 .tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.s5 .panel').forEach(p => p.classList.remove('active'));

    tab.classList.add('active');
    document.getElementById(target).classList.add('active');
  });
});