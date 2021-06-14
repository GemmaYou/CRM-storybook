<template>
  <ol class="breadscrumb">
    <li
      v-for="item in breadscrumb.location"
      >
      <a href="#" v-if="item !== breadscrumb.active">{{item}}</a>
      <span v-else>{{item}}</span>
    </li>
  </ol>
</template>

<script>
export default {
  name: 'breadscrumb',
  props: {
    breadscrumb: {
      type: Object,
      required: true,
      default: () => ({
        breadscrumb : {
          active: '',
          location: [],
        }
      }),
    },
  },
};
</script>
<style lang="scss" scoped src="./Breadscrumb.scss">
