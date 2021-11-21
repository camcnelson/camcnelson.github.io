class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {

        this.innerHTML = `
        <div class='header'>
        <ul class='menubar'>
            <li><a href='/index.html'><h1 style='color:black'>Home</h1></a></li>
            <li><a href='/pages/about.html'>About</a></li>
            <li><a href='https://linktr.ee/camnelson'>More</a></li>
        </ul>
        </div>
        <div class='header'><p style='margin:1rem;'>Cameron Nelson</p></div>
        `;

    }
  }
  
  customElements.define('header-component', Header);
  