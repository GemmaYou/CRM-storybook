<template>
  <div>
    <oneButton v-for="(button, index) in buttons" :key="index" :button="button" />
  </div>
</template>

<script>
import oneButton from '../OneButton/Button';

export default {
  name: 'twoButton',
  components: {
    oneButton,
  },
  props: {
    buttons: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    // classes() {
    //   return {
    //     'action-button': true,
    //     'btn-primary': !this.icon && this.primary,
    //     'btn-secondary': !this.icon && !this.primary,
    //     'btn-round': this.round,
    //     'btn-icon': this.icon,
    //   };
    // },
    // style() {
    //   return {
    //     backgroundColor: this.backgroundColor,
    //     color: this.color,
    //   };
    // },
    // fontawesome() {
    //   if ( !this.icon ) return null;
    //   if ( this.fontAwesomeIcon == 'faSearch') {
    //     return faSearch;
    //   } else if ( this.fontAwesomeIcon == 'faPen') {
    //     return faPen;
    //   } else if ( this.fontAwesomeIcon == 'faTrashAlt') {
    //     return faTrashAlt;
    //   } else if ( this.fontAwesomeIcon == 'faClock') {
    //     return faClock;
    //   } else if ( this.fontAwesomeIcon == 'faList') {
    //     return faList;
    //   } else if ( this.fontAwesomeIcon == 'faThLarge') {
    //     return faThLarge;
    //   }
    // },
  },
  methods: {
    // onClick() {
    //   this.$emit('onClick');
    // },
  },
};
</script>
<style lang="scss" scoped src="./TwoButton.scss">
