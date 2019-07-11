export default function floatingPrompt(options) {

  /* eslint-disable */
  const name = options.name;
  const url = options.url;
  const text = options.text ? options.text : `Hi, do you like ${name} ? Don't forget to show your love on Product Hunt 🚀`;
  const buttonText = options.buttonText ? options.buttonText : `${name} on Product Hunt`;
  const width = options.width ? options.width : '300px';
  const bottom = options.bottom ? options.bottom : '32px';
  const right = options.right ? options.right : '32px';
  const left = options.left ? options.left : 'unset';
  const colorOne = options.colorOne ? options.colorOne : '#da552f';
  const colorTwo = options.colorTwo ? options.colorTwo : '#ea8e39';
  const saveInCookies = typeof options.saveInCookies  === 'boolean' ? options.saveInCookies : true;
  const target = options.target ? options.target : '_blank';
  const id = `product-hunt-${name.toLowerCase().replace(/[^a-zA-Z]+/g, "-")}`;
  const html = `<div class="producthunt" id="${id}"> <span class="producthunt__close" id="${id}-close">×</span><p class="producthunt__text">${text}</p> <a href="${url}" class="ph-button" target="${target}">${buttonText}</a></div>`;
  const css = `
  .ph-button {
    background: linear-gradient(65deg,${colorOne},${colorTwo});
    font-family: sans-serif;
    color: #fff !important;
    display: block;
    letter-spacing: 0;
    font-weight: 700;
    line-height: 16px;
    font-size: 14px;
    text-transform: uppercase;
    text-decoration: none!important;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    justify-content: center;
    padding: 16px 16px;
    text-align: center;
    white-space: nowrap;
    box-shadow: 0 8px 24px rgba(32,43,54,.12);
    transition: all .3s ease;
    margin-top: 16px;
    font-size: 14px;
  }
  .ph-button:hover {
    box-shadow: 0 6px 24px rgba(32,43,54,.4);
  }
  .producthunt {
    position: fixed;
    background-color: #fff;
    padding: 24px;
    box-shadow: 0 4px 16px rgba(16, 31, 59, 0.16);
    z-index: 10;
    font-size: 16px;
    color: #65638f;
    font-family: sans-serif;
    opacity: 1;
    transition: all .3s ease;
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
  @media (max-width: 768px) {
    .producthunt {
      width: calc(100% - 48px) !important;
      bottom: 0 !important;
      right: 0 !important;
      left: 0 !important;
      box-shadow: 0 -4px 16px rgba(16, 31, 59, 0.16) !important;
    }
  }`;
  
  
  if(!window.localStorage.getItem(id) || saveInCookies == false) {
    createModal(html);
    setStyle(id, bottom, left, right, width);
    addClosingEvent(id);
    addStyle(css);
  }
  /* eslint-enable */
}

function createModal(html) {
  const prompt = document.createElement('div');

  prompt.innerHTML = html;
  document.body.appendChild(prompt);
}

function setStyle(id, bottom, left, right, width) {
  const producthuntModal = document.getElementById(id);

  producthuntModal.style.bottom = bottom;
  producthuntModal.style.left = left ? left : 'unset';
  producthuntModal.style.right = right ? right : 'unset';
  producthuntModal.style.width = width;
}

function addClosingEvent(id) {
  const producthuntModal = document.getElementById(id);
  const producthuntCloseButton = document.getElementById(`${id}-close`);

  producthuntCloseButton.addEventListener('click', () => {
    producthuntModal.style.opacity = 0;
    setTimeout(() => {
      producthuntModal.parentNode.removeChild(producthuntModal);
      window.localStorage.setItem(id, true);
    }, 300);
  });
}

function addStyle(css) {
  const linkElement = document.createElement('link');

  linkElement.setAttribute('rel', 'stylesheet');
  linkElement.setAttribute('type', 'text/css');
  linkElement.setAttribute('href', 'data:text/css;charset=UTF-8,' + encodeURIComponent(css));
  document.head.appendChild(linkElement);
}
