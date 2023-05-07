import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Posts");
  }

  async getHtml() {
    return ` 
            <h1>Welcome back, Dom</h1>
            <p>
                POST 페이지입니다!
            </p>
           
        `;
  }
}
