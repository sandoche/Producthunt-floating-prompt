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
  const css = `
  .button {
    display: -ms-flexbox;
    display: flex;
    background: linear-gradient(65deg,${colorOne},${colorTwo});
    font-family: Heebo,sans-serif;
    color: #fff;
    display: -ms-inline-flexbox;
    display: inline-flex;
    font-size: var(--font-xxs);
    letter-spacing: 0;
    font-weight: 700;
    line-height: 16px;
    text-transform: uppercase;
    text-decoration: none!important;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 16px 32px;
    text-align: center;
    white-space: nowrap;
    box-shadow: 0 8px 24px rgba(32,43,54,.12);
    mix-blend-mode: multiply;
    transition: all .15s ease;
  }
  .producthunt {
    position: fixed;
    bottom: 64px;
    right: 16px;
    background-color: #fff;
    padding: 24px;
    box-shadow: 0 4px 16px rgba(16, 31, 59, 0.16);
    z-index: 10;
    max-width: 300px;
    font-size: 16px;
    color: #65638f;
  }
  .producthunt__close {
    position: absolute;
    right: 16px;
    top: 8px;
    cursor: pointer;
  }
  .producthunt__text {
    margin: 0;
  }
  .producthunt__button {
    margin-top: 16px;
    width: 100%;
    padding-left: 0;
    padding-right: 0;
    font-size: 14px;
  }
  @media (max-width: 768px) {
    .producthunt {
      max-width: 100%;
      bottom: 0;
      right: 0;
      box-shadow: 0 -4px 16px rgba(16, 31, 59, 0.16);
    }
  }`;
  
  createModal(html);
  addClosingEvent(id);
  addStyle(css);
  /* eslint-enable */
}

function createModal(html) {
  const prompt = document.createElement('div');

  prompt.innerHTML = html;
  document.body.appendChild(prompt);
}

function addClosingEvent(id) {
  const producthuntModal = document.getElementById(id);
  const producthuntCloseButton = document.getElementById(`${id}-close`);

  producthuntCloseButton.addEventListener('click', () => {
    producthuntModal.parentNode.removeChild(producthuntModal);
  });
}

function addStyle(css) {
  const linkElement = document.createElement('link');

  linkElement.setAttribute('rel', 'stylesheet');
  linkElement.setAttribute('type', 'text/css');
  linkElement.setAttribute('href', 'data:text/css;charset=UTF-8,' + encodeURIComponent(css));
  document.head.appendChild(linkElement);
}
