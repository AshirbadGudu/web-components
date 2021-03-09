const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.1/css/all.css">
<style>

/* -------------------------------------------------------------------------- */
/*                          floating social container                         */
/* -------------------------------------------------------------------------- */

/*sticky social media icons starts here*/
.floating-social-container {
  position: fixed;
  right: 0;
  top: 50%;
  transform: translate(86%, -50%);
  z-index: 1040;
}

.floating-social-container ul {
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: #fff;
  box-shadow: 0px 1px 6px 2px rgba(0, 0, 0, 0.07);
}

.floating-social-container ul li {
  display: block;
  padding: 7px;
  margin-bottom: 5px;
  margin-top: 5px;
  background-color: #fff;
  width: 300px;
  border-radius: 8px;
  border: 1px solid #fff;
  transition: all 0.4s;
}

.floating-social-container ul li:first-child {
  margin-top: 5px;
}

.floating-social-container ul li:not(:first-child):hover {
  transform: translate(-110px);
}

.floating-social-container ul li.floating-facebook a {
  color: #3b5998;
}

.floating-social-container ul li.floating-facebook:hover {
  background-color: #3b5998;
}

.floating-social-container ul li.floating-instagram i,
.floating-social-container ul li.floating-instagram .text {
  background: radial-gradient(
    circle at 33% 100%,
    #fed373 4%,
    #f15245 30%,
    #d92e7f 62%,
    #9b36b7 85%,
    #515ecf
  );
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -o-background-clip: text;
  -ms-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  -o-text-fill-color: transparent;
  -ms-text-fill-color: transparent;
  text-fill-color: transparent;
}

.floating-social-container ul li.floating-instagram:hover {
  background: radial-gradient(
    circle at 33% 100%,
    #fed373 4%,
    #f15245 30%,
    #d92e7f 62%,
    #9b36b7 85%,
    #515ecf
  );
}

.floating-social-container ul li.floating-whatsapp a {
  color: #53ce3c;
}

.floating-social-container ul li.floating-whatsapp:hover {
  background-color: #53ce3c;
}
.floating-social-container ul li.floating-linkedin a {
  color: #0e76a8;
}

.floating-social-container ul li.floating-linkedin:hover {
  background-color: #0e76a8;
}

.floating-social-container ul li.floating-twitter a {
  color: #6699ff;
}

.floating-social-container ul li.floating-twitter:hover {
  background-color: #6699ff;
}

.floating-social-container ul li.floating-youtube a {
  color: #c4302b;
}

.floating-social-container ul li.floating-youtube:hover {
  background-color: #c4302b;
}

.floating-social-container ul li:hover i {
  -webkit-text-fill-color: #fff !important;
  text-fill-color: #fff !important;
}

.floating-social-container ul li a {
  text-decoration: none;
}

.floating-social-container ul li a .text {
  display: inline-block;
  font-size: 14px;
  margin-right: 12%;
}

.floating-social-container ul li i {
  width: 26px;
  height: 26px;
  line-height: 26px;
  vertical-align: middle;
  font-size: 18px;
  text-align: center;
  display: inline-block;
  margin-right: 8px;
}
.text-white{color:#fff}

@media only screen and (max-width: 600px) {
  .hide_on_small {
    display: none !important;
  }
}

@media only screen and (min-width: 600px) {
  .hide_on_large {
    display: none !important;
  }
}
</style>
<!-- floating social container -->
<div class="floating-social-container">
    <ul class="rounded" style="padding-top: 0.1rem;padding-bottom: 0.1rem;">
        <li class="hide_on_large">
            <a id="shareBtn">
                <i class="fas fa-share-alt"></i>
            </a>
        </li>
        <li class="floating-facebook social sticky-add-remove">
            <a href="#" target="_blank">
                <i class="fab fa-facebook-square" aria-hidden="true"></i>
            </a>
            <span class="text-white">Facebook</span>
        </li>

        <!-- Instagram -->
        <li class="floating-instagram social sticky-add-remove">
            <a href="#" target="_blank">
                <i class="fab fa-instagram" aria-hidden="true"></i>
            </a>
            <span class="text-white">Instagram</span>
        </li>
         <!-- Linkedin -->
        <li class="floating-linkedin social sticky-add-remove">
            <a href="#" target="_blank">
                <i class="fab fa-linkedin" aria-hidden="true"></i>
            </a>
            <span class="text-white">LinkedIn</span>
        </li>

        <!-- Twitter -->
        <li class="floating-twitter social sticky-add-remove">
            <a href="#" target="_blank">
                <i class="fab fa-twitter-square" aria-hidden="true"></i>
            </a>
            <span class="text-white">Twitter</span>
        </li>

        <!-- Youtube -->
        <li class="floating-youtube social sticky-add-remove">
            <a href="#" target="_blank">
                <i class="fab fa-youtube-square"></i>
            </a>
            <span class="text-white">Youtube</span>
        </li>
        <!-- Whatsapp -->
        <li class="floating-whatsapp social sticky-add-remove">
            <a href="https://wa.me/91mobilenumber" target="_blank">
                <i class="fab fa-whatsapp" aria-hidden="true"></i>
            </a>
            <span class="text-white">whatsapp</span>
        </li>
    </ul>
</div>
<!-- floating social container End -->
      `;
export default class FloatingSocial extends HTMLElement {
  constructor() {
    super();
    const shadowDom = this.attachShadow({ mode: "open" });
    const templateHtml = template.content.cloneNode(true);
    shadowDom.appendChild(templateHtml);
  }
  connectedCallback() {
    this.shadowRoot.getElementById("shareBtn").addEventListener("click", () => {
      if (navigator.share) {
        navigator
          .share({
            title: "Yard Hotel",
            url: "https://github.com/AshirbadGudu/web-components",
            text: "YardHotel",
          })
          .then(() => {
            console.log("Thanks for sharing!");
          })
          .catch(console.error);
      } else {
        navigator.clipboard.writeText(
          "https://github.com/AshirbadGudu/web-components"
        );
        document.execCommand("copy");
      }
    });
  }
}
