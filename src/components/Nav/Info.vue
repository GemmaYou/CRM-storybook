<template>
  <div class="nav-info">
    <div class="nav-info-toggle">
      <img v-if="!info.pic" class="nav-info-avatar-img" src="../../assets/avatar.png">
      <img v-else class="nav-info-avatar-img" src="../../assets/images.jpg">
      <span class="nav-info-name" @click="openDropdown">
        {{info.name}}
        <font-awesome-icon :icon="faChevronDown()" />
      </span>
    </div>
    <ul id="nav-info-dropdown">
      <li>
        <a>線上客服</a>
      </li>
      <li >
        <a id="nav-info-nueip-a" @click="openNueip" class="test">
          NUEiP服務
          <font-awesome-icon :icon="faChevronDown()" id="fontawesome"/>
        </a>
        <ul id="nav-info-nueip-dropdown" class="hide">
          <li><a>HRM</a></li>
          <li><a>CRM</a></li>
        </ul>
      </li>
      <li>
        <a>登出</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
export default {
  name: 'info',
  components: {
    FontAwesomeIcon,
  },
  props: {
    info: {
      type: Object,
      required: true,
      default: () => ({
        name: "管理員 Administrator",
        pic: false,
      }),
    },
  },
  methods: {
    openDropdown: function(){
      let navDropdown = document.getElementById('nav-info-dropdown');
      let display = window.getComputedStyle(navDropdown).display;
      switch (display) {
        case 'none':
          navDropdown.style.display = "block"
          break;
        case 'block':
          navDropdown.style.display = "none"
          break;
      }
    },
    openNueip: function(){
      console.log('click');
      let fontawesome = document.getElementById('fontawesome');
      let nueipDropdown = document.getElementById('nav-info-nueip-dropdown');
      let display = window.getComputedStyle(nueipDropdown).display;
      switch (display) {
        case 'none':
          fontawesome.classList.value = "svg-inline--fa fa-chevron-down fa-w-14 change";
          // nueipA.style.display = "block"
          // nueipDropdown.style.display = "block"
          nueipDropdown.classList.value = 'show';
          break;
        case 'block':
          fontawesome.classList.value = "svg-inline--fa fa-chevron-down fa-w-14";
          // nueipDropdown.style.display = "none"
          nueipDropdown.classList.value = 'hide';
          break;
      }
    },
    faChevronDown: function(){
      return faChevronDown;
    },
  },
};
</script>
<style lang="scss" scoped src="./Info.scss">
