import Dashboard from "./views/Dashboard.js";
import Post from "./views/Post.js";
import Settings from "./views/Settings.js";

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [
    { path: "/", view: Dashboard },
    { path: "/posts", view: Post },
    { path: "/settings", view: Settings },
  ];

  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });

  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    };
  }

  const view = new match.route.view();

  //메서드의 처리가 끝나면 반환된 HTML 문자열을 변수에 할당한다. Promise 객체가 처리(resolve)될 때까지 코드의 실행을 일시 중지함
  document.querySelector("#app").innerHTML = await view.getHtml();

  console.log(match.route.view());
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  router();
});
