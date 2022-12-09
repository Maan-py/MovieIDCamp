class searchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set keyupEvent(event) {
    this._keyupEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector("#search").value;
  }

  render() {
    this.innerHTML = `
      <img src="src/img/maan.jpg" alt="Maan">
      <form action="" id="form">
        <input type="text" placeholder="Cari Judul" id="search" class="search" />
      </form>
    `;

    this.querySelector("#search").addEventListener("keyup", this._keyupEvent);
  }
}

customElements.define("search-bar", searchBar);
