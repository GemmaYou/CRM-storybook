<template>
  <label :class="classes">
  {{ checkbox.label }}
    <input
      type="checkbox"
      :disabled="true"
      :checked="checkbox.checked"
    />
    <span class="checkmark"></span>
  </label>
</template>

<script>
export default {
  name: 'checkbox',
  props: {
    checkbox: {
      type: Object,
      required: true,
      default: () => ({
        label: 'checkbox',
        checked: false,
        disabled: false,
      }),
    },
  },
  computed: {
    classes(){
      return {
        'checkbox': true,
        'checkDisabled': this.checkbox.disabled,
      };
    },
  },
};
</script>
<style lang="scss" scoped src="./Checkbox.scss">
