const toast = document.querySelector('.toast');
let timer;
function notify(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(timer);
  timer = setTimeout(() => toast.classList.remove('show'), 2800);
}
document.querySelectorAll('[data-action="gift"]').forEach((button) => {
  button.addEventListener('click', () => notify('Gift flow ready for the next step.'));
});
document.querySelectorAll('[data-action="message"]').forEach((button) => {
  button.addEventListener('click', () => notify('Private notes will open here.'));
});
document.querySelector('[data-action="share"]').addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(window.location.href); notify('Page link copied.'); }
  catch { notify('Copy the page link from your browser.'); }
});
