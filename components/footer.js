class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        var d = new Date();

        this.innerHTML = `
        <div class='footer'>
            <p>&copy; ` + d + `</p>
        </div>
        `;
    }
  }
  
  customElements.define('footer-component', Footer);
  