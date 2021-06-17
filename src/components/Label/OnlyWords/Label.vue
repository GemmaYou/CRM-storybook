<template>
  <span :style="style" :class="classes">{{ tag.label }}</span>
</template>

<script>
export default {
  name: 'tag',
  props: {
    tag: {
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
        backgroundColor: this.tag.backgroundColor,
      };
    },
  },
};
</script>
<style lang="scss" scoped src="./Label.scss">
