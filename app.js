import Vue from "vue";
import AppComponent from "./app.vue";

attachAppElement();
new Vue({
  el: '#app',
  render: r => r(AppComponent)
});

// create app element, so there is no need for custom html template in webpack
function attachAppElement() {
    const appElement = document.createElement("div");
    appElement.setAttribute("id","app");
    document.body.appendChild(appElement);
}
