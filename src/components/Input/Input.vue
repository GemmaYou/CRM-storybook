<template>
  <div class="inputText">
    <input type="text" :placeholder='inputText.placeholder' />
    <div class="faSearch"><font-awesome-icon :icon="faSearch"/></div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default {
  name: 'inputText',
  components: {
    FontAwesomeIcon,
  },
  props: {
    inputText: {
      type: Object,
      required: true,
      default: () => ({
        placeholder: 'default placeholder',
      }),
    },
  },
  data: function(){
    return {
      faSearch: faSearch,
    }
  },
};
</script>
<style lang="scss" scoped src="./Input.scss">
