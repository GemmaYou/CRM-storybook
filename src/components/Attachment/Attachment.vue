<template>
  <li @click="$emit('click-onebutton')" class="attachment">
    <a>
      <font-awesome-icon :icon="fontawesome()" />
      <span>{{ attachment.title }} ({{attachment.size}})</span>
    </a>
  </li>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFileImage } from '@fortawesome/free-solid-svg-icons';

export default {
  name: 'attachment',
  components: {
    FontAwesomeIcon,
  },
  props: {
    attachment: {
      type: Object,
      required: true,
      default: () => ({
        title: "會議記錄.jpeg",
        size: "195KB",
      }),
    },
  },
  methods: {
    fontawesome() {
      return faFileImage
    },
  },
};
</script>
<style lang="scss" scoped src="./Attachment.scss">
