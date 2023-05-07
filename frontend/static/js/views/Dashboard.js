import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Dashboard");
  }

  async getHtml() {
    return ` 
            <h1>Welcome back, Dom</h1>
            <p>
                DASHBOARD 페이지입니다!
            </p>
            <p>
                <a href="/posts" data-link>View recent posts</a>.
            </p>
        `;
  }
}
