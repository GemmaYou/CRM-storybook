<template>
  <div>
    <b-button
      v-b-tooltip.hover
      v-for="(button, index) in buttons"
      :title="button.title"
      :key="index"
      ><oneButton :button="button"
    /></b-button>
  </div>
</template>

<script>
import { BootstrapVue, BButton, VBTooltip } from 'bootstrap-vue';
import oneButton from '../OneButton/Button';

export default {
  name: 'buttonGroup',
  components: {
    oneButton,
    BButton,
  },
  props: {
    buttons: {
      type: Array,
      default: () => [],
    },
  },
  computed: {},
  methods: {},
  directives: {
    'b-tooltip': VBTooltip,
  },
};
</script>
<style lang="scss" scoped src="./ButtonGroup.scss">
