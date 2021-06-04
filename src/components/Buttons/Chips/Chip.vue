<template>
  <button type="button" :class="classes" @click="onClick" :style="style">
    <p>{{ label }}</p>
    <p>X</p>
    <font-awesome-icon :icon="myIcon" />
  </button>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
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
  data: function() {
    return {
      myIcon: faSpinner
    }
  },
  components: {
    FontAwesomeIcon
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
