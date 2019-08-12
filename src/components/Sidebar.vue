<template>
    <div class="main">
    <div class="sidebar">
        <p class="heading">
            <img src="../assets/logo_.png" alt=""> All Employees
        </p>
        <span class="list-title">
            Project
        </span>
        <ul>
            <li v-for="(link, i) in links" :key="i">
                <div class="circle" :style="{'background-color': color()}">
                    {{
                        firstTwo(link)
                    }}
                </div>    
                <span>{{link}}</span>
            </li>
        </ul>

        <span class="list-title">
            Status
        </span>
        <ul>
            <li v-for="(link, i) in statuses" :key="i">
                <div class="circle" :style="{'background-color': color()}">
                    {{
                        firstTwo(link)
                    }}
                </div>    
                <span>{{link}}</span>
            </li>
        </ul>
    </div>
    <div class="addProject">
        add project
    </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      links: [
        'Arena sport',
        'DSV',
        'Seafood mall',
        'firestar',
        'zeta bank',
      ],
      statuses: [
        'full time',
        'part time'
      ]
    }
  },
  methods: {
    color() { 
      return `rgb(${Math.ceil(Math.random() * 255)} ${Math.ceil(Math.random() * 255)} ${Math.ceil(Math.random() * 255)})`
    },
    firstTwo(text) {
      let split = text.split(' ')
      return split.length > 1 ? 
      (`${split[0].charAt(0)}${split[1].charAt(0)}`) :
      ( `${split[0].charAt(0)}${split[0].charAt(1)}`)
    }
  }
}
</script>
<style lang="scss" scoped>
    .main {
        position: sticky;
        top: 20px;
        .addProject {
            position: relative;
            top: -30px;
            background-color: #8454df;
            color: #fff;
            border-radius: 50px;
            padding: 15px;
            width: 64%;
            margin: 0 13% 50px 13%;
            text-align: center
        }
    }
    .sidebar {
        background-color: #ffffff;
        border-radius: 10px;
        box-shadow: 0px 0px 10px rgba(149, 158, 165, 0.1);
        min-height: 60vh;
        padding: 30px;
        .heading {
            font-size: 16px;
            font-weight: 600;
            img {
                width: 60px
            }
        }
        .list-title {
            color: #d4dde4;
            padding: 30px 20px 12px 20px;
            font-size: 14px;
            text-transform: uppercase
        }
        ul {
            padding: 0;
            li {
                list-style: none;
                margin: 0;
                cursor: pointer;
                padding: 12px 20px;
                border-radius: 10px;
                span {
                    font-weight: 200;
                    text-transform: capitalize
                }
            }
            li:hover {
                background-color: #f5f5f5;
            }
        }
        .circle {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            text-align: center;
            color: #ffffff;
            line-height: 40px;
            display: inline-block;
            margin-right: 20px;
            text-transform: uppercase
        }
        @media (max-width: 767px) {
            padding: 10px
        }
    }
</style>
