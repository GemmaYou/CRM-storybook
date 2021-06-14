<template>
  <button
    type="button"
    :class="classes"
    @click="$emit('click-onebutton')"
    :style="style"
    :onMouseOver="onMouseOver"
    :onMouseOut="onMouseOut"
    :disabled="button.disabled"
  >
    <p v-if="button.label && !button.round" v-html="button.title">{{ button.title }}</p>
    <p v-if="button.round && !button.icon">&#x2b;</p>
    <div v-if="button.icon"><font-awesome-icon :icon="fontawesome" /></div>
  </button>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faSearch,
  faPen,
  faTrashAlt,
  faClock,
  faList,
  faBorderAll,
  faBuilding,
  faStepForward,
  faStepBackward,
  faCaretLeft,
  faCaretRight,
} from '@fortawesome/free-solid-svg-icons';

export default {
  name: 'oneButton',
  components: {
    FontAwesomeIcon,
  },
  props: {
    button: {
      type: Object,
      required: true,
      default: () => ({
        label: true,
        title: '',
        primary: true,
        backgroundColor: '',
        hoverButtonColor: '',
        round: false,
        color: '',
        hoverWordColor: '',
        icon: false,
        fontAwesomeIcon: 'faSearch',
        disabled: false
      }),
    },
  },
  computed: {
    classes() {
      return {
        'action-button': true,
        'btn-primary': !this.button.icon && this.button.primary,
        'btn-secondary': !this.button.icon && !this.button.primary,
        'btn-round': this.button.round,
        'btn-icon': this.button.icon,
        'btn-disabled': this.button.disabled,
      };
    },
    style() {
      return {
        backgroundColor: this.button.backgroundColor,
        color: this.button.color,
      };
    },
    onMouseOver() {
      return `
        this.style.backgroundColor = "${this.button.hoverButtonColor}";
        this.style.color = "${this.button.hoverWordColor}";
      `;
    },
    onMouseOut(){
      return `
        this.style.backgroundColor = "${this.button.backgroundColor}";
        this.style.color = "${this.button.color}";
      `;
    },
    fontawesome() {
      if (!this.button.icon) return null;
      switch( this.button.fontAwesomeIcon ){
        case 'faSearch':
          return faSearch;
          break;
        case 'faPen':
          return faPen;
          break;
        case 'faTrashAlt':
          return faTrashAlt;
          break;
        case 'faClock':
          return faClock;
          break;
        case 'faList':
          return faList;
          break;
        case 'faBorderAll':
          return faBorderAll;
          break;
        case 'faBuilding':
          return faBuilding;
          break;
        case 'faStepForward':
          return faStepForward;
          break;
        case 'faStepBackward':
          return faStepBackward;
          break;
        case 'faCaretLeft':
          return faCaretLeft;
          break;
        case 'faCaretRight':
          return faCaretRight;
          break;
      }
    },
  },
};
</script>
<style lang="scss" scoped src="./Button.scss">
