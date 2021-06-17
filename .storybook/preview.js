import '../src/assets/index.css';
import '../src/assets/scss/main.scss';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// import Vue from 'vue';

// export const Clickoutside = {
//   bind(el, binding, vnode) {
//     let self  = this;
//     console.log(self);
//     this.event = function (event) { 
//     	console.log('emitting event')
//     	self.vm.$emit(self.expression,event) 
//  	  }
//     this.el.addEventListener('click', this.stopProp)
//     document.body.addEventListener('click',this.event)
//   },
  
//   unbind() {
//   	console.log('unbind')
//     this.el.removeEventListener('click', this.stopProp)
//     document.body.removeEventListener('click',this.event)
//   },
//   stopProp(event) {event.stopPropagation() }
// }
// Vue.directive('clickoutside', Clickoutside)

// Vue.directive('clickoutside', {
//   priority: 700,
//   bind(el, binding, vnode) {
//     let self  = this;
//     console.log(self);
//     this.event = function (event) { 
//     	console.log('emitting event')
//     	self.vm.$emit(self.expression,event) 
//  	  }
//     this.el.addEventListener('click', this.stopProp)
//     document.body.addEventListener('click',this.event)
//   },
  
//   unbind() {
//   	console.log('unbind')
//     this.el.removeEventListener('click', this.stopProp)
//     document.body.removeEventListener('click',this.event)
//   },
//   stopProp(event) {event.stopPropagation() }
// })
// Vue.component('font-awesome-icon', FontAwesomeIcon)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
}
// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// }