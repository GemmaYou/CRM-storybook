<template>
  <li :style="style" :class="classes" @click="$emit('changeTab', tab.label)">{{ tab.label }}</li>
</template>

<script>
export default {
  name: 'tab',
  props: {
    tab: {
      type: Object,
      required: true,
      default: () => ({
        label: 'tab',
        // onClick: false,
      }),
    },
  },
  computed: {
    classes() {
      return {
        'tab': true,
        // 'tabOnClick': this.tab.onClick,
      };
    },
    style() {
      return {
        backgroundColor: this.tab.backgroundColor,
      };
    },
  },
};
</script>
<style lang="scss" scoped src="./Tab.scss">
