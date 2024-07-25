document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('copy-button');
  const textElement = document.getElementById('ip-button');
  const iconElement = document.getElementById('copy-icon');

  const originalText = 'IP: play.klickla.ru';
  const copiedText = 'Скопировано!';

  button.addEventListener('click', () => {
      const tempInput = document.createElement('input');
      tempInput.value = 'play.klickla.ru';
      document.body.appendChild(tempInput);
      tempInput.select();
      tempInput.setSelectionRange(0, 99999); // For mobile devices
      document.execCommand('copy');
      document.body.removeChild(tempInput);

      textElement.classList.add('hidden');
      iconElement.classList.add('hidden');
      setTimeout(() => {
          textElement.textContent = copiedText;
          textElement.classList.remove('hidden');
          iconElement.innerHTML = '<path d="M5 13l4 4L19 7" stroke="green" stroke-width="2" fill="none"/>';
          iconElement.classList.remove('hidden');
          setTimeout(() => {
              textElement.classList.add('hidden');
              iconElement.classList.add('hidden');
              setTimeout(() => {
                  textElement.textContent = originalText;
                  textElement.classList.remove('hidden');
                  iconElement.innerHTML = `
                      <path d="M14 8H4C2.897 8 2 8.897 2 10V20C2 21.103 2.897 22 4 22H14C15.103 22 16 21.103 16 20V10C16 8.897 15.103 8 14 8Z" fill="#D2D2D2" fill-opacity="0.7"/>
                      <path d="M20 2H10C9.46957 2 8.96086 2.21071 8.58579 2.58579C8.21071 2.96086 8 3.46957 8 4V6H16C16.5304 6 17.0391 6.21071 17.4142 6.58579C17.7893 6.96086 18 7.46957 18 8V16H20C20.5304 16 21.0391 15.7893 21.4142 15.4142C21.7893 15.0391 22 14.5304 22 14V4C22 3.46957 21.7893 2.96086 21.4142 2.58579C21.0391 2.21071 20.5304 2 20 2Z" fill="#D2D2D2" fill-opacity="0.7"/>
                  `;
                  iconElement.classList.remove('hidden');
              }, 500); // Change back to original text and icon after 0.5 seconds
          }, 2000); // Stay on "Скопировано!" for 2 seconds
      }, 500); // Wait for fade out before changing text and icon
  });
});
