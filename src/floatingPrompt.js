export default function floatingPrompt(name,
  url,
  text = `Hi, do you like ${name} ? Don't forget to show your love on Product Hunt 🚀`,
  buttonText = `${name} on Product Hunt`,
  colorOne = '#da552f',
  colorTwo = '#ea8e39'
) {
  /* eslint-disable */
  const id = `product-hunt-${name.toLowerCase().replace(/[^a-zA-Z]+/g, "-")}`;
  const html = `<div class="producthunt" id="${id}"> <span class="producthunt__close" id="${id}-close">×</span><p class="producthunt__text">${text}</p> <a href="${url}" class="button producthunt__button" target="_blank">${buttonText}</a></div>`;
  /* eslint-enable */

  const prompt = document.createElement('div');

  prompt.innerHTML = html;
  document.body.appendChild(prompt);

  const producthuntModal = document.getElementById(id);
  const producthuntCloseButton = document.getElementById(`${id}-close`);

  producthuntCloseButton.addEventListener('click', () => {
    producthuntModal.parentNode.removeChild(producthuntModal);
  });
}

