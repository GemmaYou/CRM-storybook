<template>
  <div class="tooltip">
    <div class="tooltiptext">{{tooltip.tooltip}}</div>
    <oneButton :button="tooltip.data"/>
  </div>
</template>

<script>
import oneButton from '../Buttons/OneButton/Button'

export default {
  name: 'tooltip',
  components: {
    oneButton
  },
  props: {
    tooltip: {
      type: Object,
      required: true,
      default: () => ({
        tooltip: 'default',
        data: {
          label: false,
          title: '',
          hoverTitle:'',
          primary: false,
          backgroundColor: '',
          hoverButtonColor:'',
          round: false,
          color: '',
          hoverWordColor:'',
          icon: true,
          fontAwesomeIcon: 'faSearch',
        },
      }),
    },
  },
};
</script>
<style lang="scss" scoped src="./Tooltip.scss">
