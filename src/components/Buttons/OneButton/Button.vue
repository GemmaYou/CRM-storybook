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

const TYPE_FONTAWESOME_MAP = {
  'faSearch': faSearch,
  'faPen': faPen,
  'faTrashAlt': faTrashAlt,
  'faClock': faClock,
  'faList': faList,
  'faBorderAll': faBorderAll,
  'faBuilding': faBuilding,
  'faStepForward': faStepForward,
  'faStepBackward': faStepBackward,
  'faCaretLeft': faCaretLeft,
  'faCaretRight': faCaretRight,
};

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
      if (!this.button.icon){
        return null;
      } else {
        return TYPE_FONTAWESOME_MAP[this.button.fontAwesomeIcon];
      }
    },
  },
};
</script>
<style lang="scss" scoped src="./Button.scss">
