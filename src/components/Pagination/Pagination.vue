<template>
  <div class="pagination" >
    <Dropdown :dropdown="pagination.dropdown" @changeSelect="changeSelect($event)"/>
    <ButtonGroup :buttons="pagination.buttons" />
    <p class="description">{{first}}～{{last}}筆，共{{pagination.dataLength}}筆</p>
  </div>
  
</template>

<script>
import ButtonGroup from '../Buttons/ButtonGroup/ButtonGroup';
import Dropdown from '../Dropdown/Dropdown';

export default {
  name: 'pagination',
  components: {
    ButtonGroup,
    Dropdown,
  },
  data: function(){
    return {
      first: 1,
      last: 10,
    }
  },
  props: {
    pagination: {
      type: Object,
      default: () => ({
        dataLength: null,
        perPage: 10,
        dropdown: {
          title: '',
          options: [],
        },
        buttons: {
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
        }
      }),
    },
  },
  computed: {},
  methods: {
    changeSelect: function( value ){
      this.first = (value - 1) * this.pagination.perPage + 1 ;
      if( value * this.pagination.perPage > this.pagination.dataLength){
        this.last = this.pagination.dataLength;
      } else {
        this.last = value * this.pagination.perPage;
      }
    },
  },
  created(){
    this.last = this.pagination.perPage;
  }
};
</script>
<style lang="scss" scoped src="./Pagination.scss">
