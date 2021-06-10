<template>
  <button
    v-b-tooltip.hover
    :title="button.tooltip"
    type="button"
    :class="classes"
    @click="$emit('click-onebutton')"
    :style="style"
    :onMouseOver="onMouseOver"
    :onMouseOut="onMouseOut"
  >
    <p v-if="button.label && !button.round" v-html="button.title">{{ button.title }}</p>
    <p v-if="button.round && !button.icon">&#x2b;</p>
    <div v-if="button.icon"><font-awesome-icon :icon="fontawesome" /></div>
  </button>
</template>

<script>
import { BootstrapVue, BButton, VBTooltip } from 'bootstrap-vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faSearch,
  faPen,
  faTrashAlt,
  faClock,
  faList,
  faBorderAll,
  faBuilding,
} from '@fortawesome/free-solid-svg-icons';

export default {
  name: 'oneButton',
  components: {
    FontAwesomeIcon,
    BButton,
  },
  props: {
    button: {
      type: Object,
      required: true,
      default: () => ({
        label: true,
        title: '',
        hoverTitle:'',
        primary: true,
        backgroundColor: '',
        hoverButtonColor: '',
        round: false,
        color: '',
        hoverWordColor: '',
        icon: false,
        fontAwesomeIcon: 'faSearch',
        tooltip: '',
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
      if (this.button.fontAwesomeIcon == 'faSearch') {
        return faSearch;
      } else if (this.button.fontAwesomeIcon == 'faPen') {
        return faPen;
      } else if (this.button.fontAwesomeIcon == 'faTrashAlt') {
        return faTrashAlt;
      } else if (this.button.fontAwesomeIcon == 'faClock') {
        return faClock;
      } else if (this.button.fontAwesomeIcon == 'faList') {
        return faList;
      } else if (this.button.fontAwesomeIcon == 'faBorderAll') {
        return faBorderAll;
      } else if (this.button.fontAwesomeIcon == 'faBuilding') {
        return faBuilding;
      }
    },
  },
  directives: {
    'b-tooltip': VBTooltip,
  },
};
</script>
<style lang="scss" scoped src="./Button.scss">
