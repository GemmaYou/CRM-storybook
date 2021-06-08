<template>
  <div class="avatar">
    <font-awesome-icon :icon="faBuilding" />
    <div  class="faPlus"><font-awesome-icon :icon="faPlus"/></div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBuilding, faPlus } from '@fortawesome/free-solid-svg-icons';

export default {
  name: 'avatar',
  components: {
    FontAwesomeIcon,
  },
  props: {
    avatar: {
      type: Object,
      required: true,
      default: () => ({
        pic: 'label',
      }),
    },
  },
  data: function(){
    return {
      faBuilding: faBuilding,
      faPlus: faPlus,
    }
  },
  computed: {
    classes() {
      return {
        'label': true,
      };
    },
    style() {
      return {
        backgroundColor: this.avatar.backgroundColor,
      };
    },
  },
};
</script>
<style lang="scss" scoped src="./Avatar.scss">
