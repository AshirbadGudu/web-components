const glowing_gradient_btn = document.createElement("template");
glowing_gradient_btn.innerHTML = `
<style>
    .btn {
      position: relative;
      margin: 30px auto;
      padding: 2vh 2vw;
      overflow: hidden;
      border-width: 0;
      outline: none;
      border-radius: 2px;
      box-shadow: 0 1px 4px rgba(0, 0, 0, .6);
      transition: all .3s;      
    }

    .btn:hover, .btn:focus {
       box-shadow: 0 1px 4px rgb(0, 0, 0);
       cursor:pointer;
    }

</style>
<button class="btn"></button>
`;

export default class GlowingGradientBtn extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(glowing_gradient_btn.content.cloneNode(true));
    this.shadowRoot.querySelector(".btn").style = `
    background: linear-gradient(${this.getAttribute(
      "deg"
    )}, ${this.getAttribute("c1")},${this.getAttribute("c2")});
    color:${this.getAttribute("color")}
      `;
    this.shadowRoot.querySelector(".btn").innerText = `${this.getAttribute(
      "text"
    )}`;
    this.innerHTML = ``;
  }
}
