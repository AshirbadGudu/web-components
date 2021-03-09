const template = document.createElement("template");
template.innerHTML = `
    <style>    
        .wave1 use {
        -webkit-animation: move-forever1 10s linear infinite;
        animation: move-forever1 10s linear infinite;
        -webkit-animation-delay: -2s;
        animation-delay: -2s;
        }

        .wave2 use {
        -webkit-animation: move-forever2 8s linear infinite;
        animation: move-forever2 8s linear infinite;
        -webkit-animation-delay: -2s;
        animation-delay: -2s;
        }

        .wave3 use {
        -webkit-animation: move-forever3 6s linear infinite;
        animation: move-forever3 6s linear infinite;
        -webkit-animation-delay: -2s;
        animation-delay: -2s;
        }

        @-webkit-keyframes move-forever1 {
        0% {
            transform: translate(85px, 0%);
        }
        100% {
            transform: translate(-90px, 0%);
        }
        }

        @keyframes move-forever1 {
        0% {
            transform: translate(85px, 0%);
        }
        100% {
            transform: translate(-90px, 0%);
        }
        }

        @-webkit-keyframes move-forever2 {
        0% {
            transform: translate(-90px, 0%);
        }
        100% {
            transform: translate(85px, 0%);
        }
        }

        @keyframes move-forever2 {
        0% {
            transform: translate(-90px, 0%);
        }
        100% {
            transform: translate(85px, 0%);
        }
        }

        @-webkit-keyframes move-forever3 {
        0% {
            transform: translate(-90px, 0%);
        }
        100% {
            transform: translate(85px, 0%);
        }
        }

        @keyframes move-forever3 {
        0% {
            transform: translate(-90px, 0%);
        }
        100% {
            transform: translate(85px, 0%);
        }
        }
        .hero-waves {
            position: absolute;
            display: block;
            width: 100%;
            height: 60px;
            bottom:0;
        }
        .waveWrapper{
            position: relative;
            height:50vh;
        }
    </style>
    <div class="waveWrapper">
        <svg class="hero-waves" viewBox="0 24 150 28 " preserveAspectRatio="none">
            <defs>
                <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z">
            </defs>
            <g class="wave1">
                <use xlink:href="#wave-path" x="50" y="3" fill="rgba(255,255,255, .1)">
            </g>
            <g class="wave2">
                <use xlink:href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)">
            </g>
            <g class="wave3">
                <use xlink:href="#wave-path" x="50" y="9" fill="#fff">
            </g>
        </svg>
    </div>
    <slot name="innerHTML"></slot>
`;

class AnimatedWavyHeader extends HTMLElement {
  constructor() {
    super();
    const shadowDom = this.attachShadow({ mode: "open" });
    const templateHtml = template.content.cloneNode(true);
    shadowDom.appendChild(templateHtml);
  }
  connectedCallback() {
    if (this.getAttribute("backgroundColor")) {
      this.shadowRoot.querySelector(
        ".waveWrapper"
      ).style.background = this.getAttribute("backgroundColor");
    }
  }
}
export default AnimatedWavyHeader;
