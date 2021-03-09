const template = document.createElement("template");
template.innerHTML = `
    <style>
    .btn{
        background: #569;
        color: #fff;
        padding: 1vh 1vw;
        outline:none;
        border:none;
        border-radius: 4px;
    }                
    </style>        
    
    <button  class="btn"></button>
    
`;
export default class ShadowTag extends HTMLElement {
  constructor() {
    super();
    // Attach shadow
    this.attachShadow({ mode: "open" });
    //append to shadow root
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    //   Lets put text dynamically
    this.shadowRoot.querySelector(".btn").innerText = `${this.getAttribute(
      "name"
    )}`;
    this.innerHTML = ``;
  }
}
