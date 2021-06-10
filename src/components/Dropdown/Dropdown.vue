<template>
  <div class="dropdown">
    <div>顯示筆數</div>
    <select class="select-perPage">
      <option v-for="option in dropdown.options":value="option">{{option}}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'dropdown',
  props: {
    dropdown: {
      type: Object,
      required: true,
      default: () => ({
        options: [],
      }),
    },
  },
};
</script>
<style lang="scss" scoped src="./Dropdown.scss">
