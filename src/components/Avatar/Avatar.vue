<template>
  <div class="avatar">
    <img v-if="avatar.pic" class="avatar-img" src="../../assets/images.jpg">
    <div v-else class="faBuilding"><font-awesome-icon :icon="faBuilding" /></div>
    <div  class="faPlus" @click="$emit('clickAdd')"><font-awesome-icon :icon="faPlus"/></div>
    <div v-if="avatar.pic" class="faTrashAlt" @click="$emit('clickDelete')"><font-awesome-icon :icon="faTrashAlt"/></div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBuilding, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export default {
  name: 'avatar',
  components: {
    FontAwesomeIcon,
  },
  props: {
    avatar: {
      type: Object,
      required: true,
      default: () => ({
        pic: false,
      }),
    },
  },
  data: function(){
    return {
      faBuilding: faBuilding,
      faPlus: faPlus,
      faTrashAlt: faTrashAlt,
    }
  },
};
</script>
<style lang="scss" scoped src="./Avatar.scss">
