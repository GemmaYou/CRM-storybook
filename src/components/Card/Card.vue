<template>
  <div class="card">
    <IconTag :iconTag="card.tag"/>
    <div class="card-title">{{card.title}}</div>
    <div v-if="card.content" class="card-content">{{card.content}}</div>
    <div class="card-contact">
      <img v-if="!card.contact.pic" class="card-contact-img" src="../../assets/avatar.png">
      <img v-else class="card-contact-img" src="../../assets/images.jpg">
      <span class="name">{{card.contact.name}}</span>
    </div>
    <div class="card-time">{{card.time.time}}</div>
    <div class="card-owner">{{card.owner.name}}．{{card.owner.dep}}</div>
    <font-awesome-icon :icon="fontawesome()" class="card-edit" @click="openDropdown"/>
    <div id="card-edit-dropdown">
        <p>編輯</p>
        <p>刪除</p>
    </div>
  </div>
</template>

<script>
// import { ClickOutside } from 'vue';
import IconTag from '../Label/WithIcon/IconTag';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

export default {
  name: 'card',
  components: {
    IconTag,
    FontAwesomeIcon,
  },
  props: {
    card: {
      type: Object,
      required: true,
      default: () => ({
        title: "",
        content: "",
        contact: {
            name: '',
            pic: false
        },
        time: {
            date: '',
            time: ''
        },
        owner: {
            name: '',
            dep: '',
        },
        tag: {
            label: '',
        },
      }),
    },
  },
  methods: {
    fontawesome: function(){
      return faEllipsisH
    },
    openDropdown: function(){
        let editDropdown = document.getElementById('card-edit-dropdown');
        let display = window.getComputedStyle(editDropdown).display;
        switch (display) {
          case 'none':
            editDropdown.style.display = "block"
            break;
          case 'block':
            editDropdown.style.display = "none"
            break;
        }
    },
  },
//   events: {
//     closeEvent: function () {
//       console.log('close event called')
//       this.openDropdown();
//     }
//   }
//   directives: {
//     'click-outside': ClickOutside,
//   },
};
</script>
<style lang="scss" scoped src="./Card.scss">
