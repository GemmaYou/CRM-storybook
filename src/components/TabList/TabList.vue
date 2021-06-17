<template>
  <div class="tabList">
    <Tab v-for="(tab, index) in tabList.data" :tab="tab" :class="clicked == tab.label ? 'clicked': ''" :key="index" @changeTab="changeTab($event)"/>
  </div>
</template>

<script>
import Tab from "../Tab/Tab"

export default {
  name: 'tabList',
  components: {
    Tab
  },
  data: function(){
    return { clicked: '' }
  },
  props: {
    tabList: {
      type: Object,
      required: true,
      default: () => ({
        // clicked: '',
        data: [],
      }),
    },
  },
  methods:{
    changeTab: function( newTab ){
      console.log('click')
      this.clicked = newTab;
    }
  },
  created(){
    this.clicked = this.tabList.data[0].label;
  }
};
</script>
<style lang="scss" scoped src="./TabList.scss">
