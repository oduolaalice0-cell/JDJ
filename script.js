const tabs = document.querySelectorAll('.nav-item');
const panels = document.querySelectorAll('.panel');
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const generateBtn = document.getElementById('generateBtn');
const renderStatus = document.getElementById('renderStatus');

for (const tab of tabs) {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;
    tabs.forEach((item) => item.classList.remove('active'));
    tab.classList.add('active');

    panels.forEach((panel) => panel.classList.add('hidden'));
    document.getElementById(target).classList.remove('hidden');
  });
}

loginBtn.addEventListener('click', () => loginModal.showModal());

generateBtn.addEventListener('click', () => {
  const prompt = document.getElementById('promptBox').value.trim();
  renderStatus.textContent = prompt
    ? 'Rendering started... AI script + scene build in progress (42%).'
    : 'Add a prompt to begin rendering.';
});

const templates = document.querySelectorAll('.template');
templates.forEach((button) => {
  button.addEventListener('click', () => {
    templates.forEach((btn) => btn.classList.remove('selected'));
    button.classList.add('selected');
  });
});
