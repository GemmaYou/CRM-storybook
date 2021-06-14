<template>
  <div class="buttonGroup" :class="buttons.separate ? 'separate': 'default' ">
    <div
      v-for="(tooltip, index) in buttons.tooltips"
      :key="index"
      :class="choosen === index ? 'btn choosen': 'btn' "
      @click="changeType(index)">
      <Tooltip
        :tooltip="tooltip"
        />
    </div>
  </div>
</template>

<script>
import Tooltip from '../../Tooltip/Tooltip';

export default {
  name: 'buttonGroup',
  components: {
    Tooltip,
  },
  data: function(){
    return {
      choosen: 0,
    }
  },
  props: {
    buttons: {
      type: Object,
      default: () => ({
        separate: false,
        tooltips:[
          {
            tooltip: 'default 1',
            data: {
              label: false,
              title: '',
              primary: false,
              backgroundColor: '',
              hoverButtonColor:'',
              round: false,
              color: '',
              hoverWordColor:'',
              icon: true,
              fontAwesomeIcon: 'faSearch',
            },
          },
          {
            tooltip: 'default 2',
            data: {
              label: false,
              title: '',
              primary: false,
              backgroundColor: '',
              hoverButtonColor:'',
              round: false,
              color: '',
              hoverWordColor:'',
              icon: true,
              fontAwesomeIcon: 'faPen',
            },
          },
          {
            tooltip: 'default 3',
            data: {
              label: false,
              title: '',
              primary: false,
              backgroundColor: '',
              hoverButtonColor:'',
              round: false,
              color: '',
              hoverWordColor:'',
              icon: true,
              fontAwesomeIcon: 'faTrashAlt',
            },
          },
        ],
      }),
    },
  },
  computed: {},
  methods: {
    changeType: function(id){
      this.choosen = id;
    },
  },
};
</script>
<style lang="scss" scoped src="./ButtonGroup.scss">
