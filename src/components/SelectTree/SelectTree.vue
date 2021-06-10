<template>
  <div class="dropdown">
    <div>顯示筆數</div>
    <select class="select-perPage">
      <option v-for="option in selectTree.options":value="option">{{option}}</option>
    </select>
    <treeselect
      :options="selectTree.options"
      placeholder="請選擇上級選單"
      v-model="selectTree.options"
      />
  </div>
</template>

<script>
import Treeselect from '@riophae/vue-treeselect'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'

export default {
  name: 'selectTree',
  components: {
    Treeselect,
  },
  props: {
    selectTree: {
      type: Object,
      required: true,
      default: () => ({
        options: [],
      }),
    },
  },
};
</script>
<style lang="scss" scoped src="./SelectTree.scss">
