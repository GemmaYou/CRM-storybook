<template>
  <div :style="style" :class="classes">
    <font-awesome-icon :icon="fontawesome" v-if="!styleBadge.color"/>
    <p v-if="styleBadge.checked">&#10003;</p>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBriefcase, faCar } from '@fortawesome/free-solid-svg-icons';
export default {
  name: 'styleBadge',
  components: {
    FontAwesomeIcon,
  },
  props: {
    styleBadge: {
      type: Object,
      required: true,
      default: () => ({
        fontAwesomeIcon: 'faCar',
        color: false,
        checked: false,
      }),
    },
  },
  computed: {
    classes() {
      return {
        'badge': true,
        'icon': this.styleBadge.fontAwesomeIcon,
        'color': this.styleBadge.color,
      };
    },
    style() {
      return {
        backgroundColor: this.styleBadge.backgroundColor,
      };
    },
    fontawesome() {
      if (!this.styleBadge.fontAwesomeIcon) return null;
      switch( this.styleBadge.fontAwesomeIcon ){
        case 'faBriefcase':
          return faBriefcase;
          break;
        case 'faCar':
          return faCar;
          break;
      }
    },
  },
};
</script>
<style lang="scss" scoped src="./StyleBadge.scss">
