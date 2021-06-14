<template>
  <label class="switch">
    <input type="checkbox" :checked="switchButton.switch" disabled>
    <span class="slider round"></span>
  </label>
</template>

<script>
export default {
  name: 'switchButton',
  props: {
    switchButton: {
      type: Object,
      required: true,
      default: () => ({
          switch: false,
      }),
    },
  },
};
</script>
<style lang="scss" scoped src="./Switch.scss">
