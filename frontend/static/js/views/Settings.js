import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Settings");
  }

  async getHtml() {
    return ` 
            <h1>Welcome back, Dom</h1>
            <p>
                Settings입니다.
            </p>
           
        `;
  }
}
