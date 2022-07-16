import { Vue } from 'vue-property-decorator';
import App from './App.vue';

Vue.config.productionTip = false;

export default new Vue({
  render: (h: any) => h(App)
}).$mount('#app');
