<template>
  <div :style="style" :class="classes">
    {{ numberBadge.label }}
  </div>
</template>

<script>
export default {
  name: 'numberBadge',
  props: {
    numberBadge: {
      type: Object,
      required: true,
      default: () => ({
        label: '0',
      }),
    },
  },
  computed: {
    classes() {
      return {
        'badge': true,
      };
    },
    style() {
      return {
        backgroundColor: this.numberBadge.backgroundColor,
      };
    },
  },
};
</script>
<style lang="scss" scoped src="./NumberBadge.scss">
