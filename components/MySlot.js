const slot_template = document.createElement("template");
slot_template.innerHTML = `
     Hello <slot/>
`;

export default class MySlot extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(slot_template.content.cloneNode(true));
    this.innerHTML = ``;
  }
}
