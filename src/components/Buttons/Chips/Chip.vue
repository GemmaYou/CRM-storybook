<template>
  <button type="button" :class="classes" @click="onClick" :style="style">
    <p>{{ label }}</p>
    <p>&#215;</p>
  </button>
</template>

<script>
export default {
  name: 'chip',
  props: {
    label: {
      type: String,
      required: true,
    },
    backgroundColor: {
      type: String,
    },
  },
  computed: {
    classes() {
      return {
        'chip-button': true,
      };
    },
    style() {
      return {
        backgroundColor: this.backgroundColor,
      };
    },
  },

  methods: {
    onClick() {
      this.$emit('onClick');
    },
  },
};
</script>
<style lang="scss" scoped src="./Chip.scss">
