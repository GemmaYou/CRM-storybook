<template>
  <div class="dropdown">
    <div class="title">{{dropdown.title}}</div>
    <select class="select-perPage" v-model="selectName" @change="changeSelect(selectName)">
      <option v-for="option in dropdown.options":value="option">{{option}}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'dropdown',
  data: function(){
    return { selectName: '' }
  },
  props: {
    dropdown: {
      type: Object,
      required: true,
      default: () => ({
        title: '',
        options: [],
      }),
    },
  },
  methods: {
    changeSelect: function( value ){
      this.$emit('changeSelect', value)
    },
  },
  created(){
    this.selectName = this.dropdown.options[0];
  },
};
</script>
<style lang="scss" scoped src="./Dropdown.scss">
