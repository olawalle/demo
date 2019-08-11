<template>
  <div class="app">
    <div class="nav">
        <img src="./assets/logo.svg" alt="" class="logo">

        <ul>
          <li v-for="(link, i) in links" :key="i" :class="link.active+ ' link'" @click="activate(i)">
            <span>
              {{link.name}}
            </span>
          </li>
        </ul>

        <span class="icons">
          <font-awesome-icon icon="bell" size="sm" class="icon" title="" />
          <font-awesome-icon icon="envelope" size="sm" class="icon" title="Edit" />
          <div class="user">
              <img src="https://randomuser.me/api/portraits/men/83.jpg" alt="">
          </div>
        </span>
    </div>

    <b-row class="top-sect">
      <b-col>
        <span class="text">
          employee
        </span>
      </b-col>

      <b-col>
        <button class="round">
          add employee
        </button>
      </b-col>
    </b-row>

    <b-row class="main-sect">
      <b-col sm="4" class="col_">
        <sidebar />
      </b-col>
      <b-col sm="8">
        <Main />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import Main from './components/Main.vue'
export default {
  name: 'app',
  components: {
    Sidebar,
    Main
  },
  data () {
    return {
      links: [
        {
          name: 'Calendar',
          active: 'active'
        },
        {
          name: 'Statistic',
          active: ''
        },
        {
          name: 'Employee',
          active: ''
        },
        {
          name: 'Client',
          active: ''
        },
        {
          name: 'Equipment',
          active: ''
        },
      ]
    }
  },
  methods: {
    activate (i) {
      this.links = this.links.map((link, j) => i === j ? {...link, active:'active'} : {...link, active: ''})
    }
  }
}
</script>

<style lang="scss">
@import './custom.scss';
body {
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  width: 100%;
  overflow-x: hidden;
}
.app {
  background-color: #f5f4f7;
  min-height: 100vh;
  .nav {
    width: 100%;
    height: 70px;
    line-height: 70px;
    background-color: #fff;
    padding: 0 30px;
    .logo {
      vertical-align: middle;
      height: 30px;
      margin: 20px 0;
    }
    ul {
      display: inline;
      position: relative;
      top: 5px;  
      .link {
        color: #bdbdbd;
        display: inline-block;
        padding: 0 30px;
        font-size: 16px;
        height: 65px;
        cursor: pointer;
        span {
          padding-top: 20px
        }
      }
      .active {
        border-bottom: 3px solid #2fc9ae;
      }
    }
    .icons {
      // float: right;
      position: absolute;
      top: 0px;
      right: 30px;
      .icon {
        color: #bdbdbd;
        margin: 0 12px
      }
      .user {
        display: inline-grid;
        max-width: 30px;
        max-height: 30px;
        min-width: 30px;
        min-height: 30px;
        border-radius: 50%;
        overflow: hidden;
        vertical-align: middle;
        margin: 0 10px;
        img {
          width: 30px
        }
      }
    }
  }
  .top-sect {
    padding: 30px 60px;
    .text {
      font-size: 32px;
      margin-left: 20px;
    }
    .round {
      float: right;
      border-radius: 50px;
      background-color: #2fc9ae;
      border: 0;
      color: #fff;
      padding: 10px 30px;
      font-size: 14px;
    }
  }
  .main-sect {
    padding: 0 60px;
    margin: 0
  }
  @media (max-width: 767px) {
    .logo {
      height: 20px !important
    }
    .nav ul {
      display: none
    }
    .top-sect {
      padding: 12px;
      .text {
        font-size: 14px;
        margin: 0 !important
      }
    }
    .round {
      font-size: 10px !important
    }
    .main-sect {
      padding: 10px 0
    }
  }
}
</style>
