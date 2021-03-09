class CustomHeader extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
            <header>
                This is a custom header web component
            </header>
        `;
  }
}

export default CustomHeader;
