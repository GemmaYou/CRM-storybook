<template>
  <button type="button" :class="classes" @click="onClick" :style="style">
    <p>{{ label }}</p>
    <p>X</p>
    <font-awesome-icon :icon="['fal', 'user-secret']" />
  </button>
</template>

<script>
// import './button.css';
import './chip.scss';

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
