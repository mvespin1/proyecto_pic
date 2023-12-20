class NavbarComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
  
      this.shadowRoot.innerHTML = `
        <nav class="navbar navbar-expand-lg custom_nav-container">
          <a class="navbar-brand" href="index.html">
            <span>
              FT360
            </span>
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#${this.id}-content" aria-controls="${this.id}-content" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
  
          <div class="collapse navbar-collapse" id="${this.id}-content">
            <div class="d-flex ml-auto flex-column flex-lg-row align-items-center">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="index.html">Inicio<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="why.html">Quienes Somos</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="trainer.html">Recetas</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="contact.html">Contáctanos</a>
                </li>
              </ul>
              <div class="user_option">
                <form class="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                  <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
                </form>
              </div>
            </div>
          </div>
        </nav>
      `;
    }
  
    connectedCallback() {
      // Agregar lógica adicional si es necesario cuando el componente es conectado
    }
  }
  
  customElements.define('navbar-component', NavbarComponent);
  