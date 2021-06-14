<template>
  <div class="inputFile">
    <button @click="upload">{{inputFile.label}}</button>
    <input id="upload" type="file"/>
  </div>
</template>

<script>
export default {
  name: 'inputFile',
  props: {
    inputFile: {
      type: Object,
      required: true,
      default: () => ({
        label: '上傳',
      }),
    },
  },
  methods: {
    upload: function(){
      document.getElementById("upload").click()
    },
  },
};
</script>
<style lang="scss" scoped src="./InputFile.scss">
