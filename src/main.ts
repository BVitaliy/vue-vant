import './assets/main.css'
import 'vant/lib/index.css';
import { createApp } from 'vue'
import { IndexBar, IndexAnchor } from 'vant';
import App from './App.vue'


const app = createApp(App).mount('#app')
app.use(IndexBar);
app.use(IndexAnchor);