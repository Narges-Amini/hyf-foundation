const greetButton = document.getElementById('greetButton');
const message = document.getElementById('message');

if (greetButton && message) {
  greetButton.addEventListener('click', () => {
    const currentText = message.textContent;

    if (currentText.includes('Welcome')) {
      message.textContent = 'Nice! You are learning how HTML, CSS, and JavaScript work together.';
    } else {
      message.textContent = 'Welcome! Start building your first project.';
    }
  });
}
