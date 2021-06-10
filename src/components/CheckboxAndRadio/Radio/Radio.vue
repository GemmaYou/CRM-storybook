<template>
  <label :class="classes">
  {{ radio.label }}
    <input
      type="radio"
      :checked="radio.checked"
      disabled="true"
    />
    <span class="checkmark"></span>
  </label>
</template>

<script>
export default {
  name: 'radio',
  props: {
    radio: {
      type: Object,
      required: true,
      default: () => ({
        label: 'radio',
        checked: false,
        disabled: false,
      }),
    },
  },
  computed: {
    classes(){
      return {
        'radio': true,
        'radioDisabled': this.radio.disabled,
      };
    },
  },
};
</script>
<style lang="scss" scoped src="./Radio.scss">
