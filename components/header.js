class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {

      // this.innerHTML = `
      //   <nav class="navbar navbar-expand-md navbar-light">
      //       <button class="navbar-toggler rounded-0" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      //           <span class="navbar-toggler-icon"></span>
      //       </button>
      //       <div class="collapse navbar-collapse" id="navbarNav" style="background-color: white;">
      //           <ul class="navbar-nav">
      //               <li>
      //                   <a class="nav-link" href="#" style="color: black;">Home</a>
      //               </li>
      //               <li class="nav-item">
      //                   <a class="nav-link" href="#" style="color: black;">About</a>
      //               </li>
      //           </ul>
      //       </div>
      //   </nav>
      // `;

        this.innerHTML = `
        <div class='header'>
        <ul class='menubar'>
            <li><a href='/index.html'><h1 style='color:black'>Home</h1></a></li>
            <li><a href='/pages/about.html'>About</a></li>
            <li><a href='mailto:cn339@cornell.edu'>Contact</a></li>
        </ul>
        </div>
        `;

    }
  }
  
  customElements.define('header-component', Header);
  