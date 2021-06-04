<template>
  <button type="button" :class="classes" @click="onClick" :style="style">{{ label }}</button>
</template>

<script>
import './button.scss';

export default {
  name: 'my-button',

  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    backgroundColor: {
      type: String,
    },
    round: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
    },
  },

  computed: {
    classes() {
      return {
        'action-button': true,
        'btn-primary': this.primary,
        'btn-secondary': !this.primary,
        'btn-round': this.round,
      };
    },
    style() {
      return {
        backgroundColor: this.backgroundColor,
        color: this.color,
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
