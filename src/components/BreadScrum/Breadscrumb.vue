<template>
  <ol class="breadscrumb">
    <li
      v-for="item in breadscrumb.location"
      >
      <a :href="item.link" v-if="item.title !== breadscrumb.active">{{item.title}}</a>
      <span v-else>{{item.title}}</span>
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
