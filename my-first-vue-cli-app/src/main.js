import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// * Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";

import { fas } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);

createApp(App)
    .component("fa", FontAwesomeIcon)
    .use(router)
    .mount("#app")
