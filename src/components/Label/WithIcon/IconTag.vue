<template>
  <span :style="style" :class="classes">
    <font-awesome-icon :icon="fontawesome" />
    {{ iconTag.label }}
  </span>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
export default {
  name: 'iconTag',
  components: {
    FontAwesomeIcon,
  },
  props: {
    iconTag: {
      type: Object,
      required: true,
      default: () => ({
        label: 'label',
      }),
    },
  },
  computed: {
    classes() {
      return {
        'label': true,
      };
    },
    style() {
      return {
        backgroundColor: this.iconTag.backgroundColor,
      };
    },
    fontawesome(){
      return faBuilding;
    },
  },
};
</script>
<style lang="scss" scoped src="./IconTag.scss">
