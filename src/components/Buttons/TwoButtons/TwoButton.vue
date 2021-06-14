<template>
  <button :class="classes">
    <div class="title">
      <div>{{ buttons.title }}</div>
      <div v-if="buttons.hoverTitle">{{ buttons.hoverTitle }}</div>
    </div>
    <div v-if="buttons.icon" class="fontawesome"><font-awesome-icon :icon="fontawesome" /></div>
    <div v-else class="close">&#215;</div>
  </button>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export default {
  name: 'twoButton',
  components: {
    FontAwesomeIcon,
  },
  props: {
    buttons: {
      type: Object,
      required: true,
      default: () => ({
        title: 'twoButton',
        hoverTitle:'twoButtonHover',
        icon: true,
        clicked: false,
      }),
    },
  },
  computed: {
    classes(){
      return {
        'twoButton': true,
        'separateButton': this.buttons.icon,
        'withCloseButton': !this.buttons.icon,
        'clicked': this.buttons.clicked,
      };
    },
    fontawesome() {
      return faTrashAlt;
    },
  },
  methods: {
  },
};
</script>
<style lang="scss" scoped src="./TwoButton.scss">
