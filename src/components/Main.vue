<template>
    <div class="wrap">
        <p v-if="loading" class="loading">
            Fetching users... <font-awesome-icon icon="spinner" class="spinner" size="lg" />
        </p>
        <b-row v-if="!loading" class="table-header">
            <b-col sm="1">
                <b-form-checkbox @change="pickAll"/> 
            </b-col>
            <b-col sm="4">
                <p>Employee</p>
            </b-col>
            <b-col sm="3">
                <p>Salary</p>
            </b-col>
            <b-col sm="2">
                <p>Status</p>
            </b-col>
            <b-col sm="2">
                Manage
            </b-col>
        </b-row>
        <b-row class="row_" v-for="(user, i) in usersList" :key="'user'+i">
            <b-col sm="1">
                <b-form-checkbox class="check" :checked="user.selected"/> 
            </b-col>
            <b-col sm="4">
                <b-row>
                    <b-col sm="3">
                        <div class="user">
                            <img :src="user.avatar_url" alt="">
                        </div>
                    </b-col>
                    <b-col sm="9">
                        <span class="userdetails">
                            <p>{{user.login}}</p>
                            <span>{{user.role}}</span>
                        </span>
                    </b-col>
                </b-row>
            </b-col>
            <b-col sm="3" class="userdetails_">
                <p>{{user.salary}} NOK
                    <span class="green" v-if="user.change > 0">+{{user.change}}</span>
                    <span class="red" v-else>{{user.change}}</span>
                </p>
                <span>{{user.type}}</span>
            </b-col>
            <b-col sm="2" class="userdetails_">
                <p>{{user.period}}</p>
                <span>{{user.duration}}</span>
            </b-col>
            <b-col sm="2" class="manage">
                <span class="pen">
                    <font-awesome-icon icon="pencil-alt" size="sm" title="Edit" />
                </span>
                <span class="delete">
                    <font-awesome-icon icon="trash" size="sm" @click="deleteUser(i)" title="Delete"/>
                </span>
            </b-col>
        </b-row>
    </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      users: [
        {
          name: 'John Doe',
          role: 'Programmer',
          salary: '2.300',
          type: 'full time',
          sex: 'm',
          change: 20,
          period: 'test period', selected: false,
          duration: '2 months',
        },
        {
          name: 'Mary Monrow',
          role: 'Banker',
          sex: 'f',
          salary: '2.300',
          type: 'full time',
          change: -32,
          period: 'test period', selected: false,
          duration: '2 months',
        },
        {
          name: 'Sally Smith',
          role: 'Investment analyst',
          salary: '2.300',
          type: 'full time',
          sex: 'f',
          change: 20,
          period: 'test period', selected: false,
          duration: '2 months',
        },
        {
          name: 'Mike Moore',
          role: 'Singer',
          salary: '2.300',
          sex: 'm',
          type: 'full time',
          change: -40,
          period: 'test period', selected: false,
          duration: '2 months',
        },
        {
          name: 'Jane Doe',
          role: 'Footballer',
          sex: 'f',
          salary: '2.300',
          type: 'full time',
          change: 200,
          period: 'test period', selected: false,
          duration: '2 months',
        },
        {
          name: 'Mary Monrow',
          role: 'Banker',
          sex: 'f',
          salary: '2.300',
          type: 'full time',
          change: -32,
          period: 'test period', selected: false,
          duration: '2 months',
        },
        {
          name: 'Sally Smith',
          role: 'Investment analyst',
          salary: '2.300',
          type: 'full time',
          sex: 'f',
          change: 20,
          period: 'test period', selected: false,
          duration: '2 months',
        },
        {
          name: 'Mike Moore',
          role: 'Singer',
          salary: '2.300',
          sex: 'm',
          type: 'full time',
          change: -40,
          period: 'test period', selected: false,
          duration: '2 months',
        },
        {
          name: 'Jane Doe',
          role: 'Footballer',
          sex: 'f',
          salary: '2.300',
          type: 'full time',
          change: 200,
          period: 'test period', selected: false,
          duration: '2 months',
        },
        {
          name: 'Mary Monrow',
          role: 'Banker',
          sex: 'f',
          salary: '2.300',
          type: 'full time',
          change: -32,
          period: 'test period', selected: false,
          duration: '2 months',
        },
        {
          name: 'Sally Smith',
          role: 'Investment analyst',
          salary: '2.300',
          type: 'full time',
          sex: 'f',
          change: 20,
          period: 'test period', selected: false,
          duration: '2 months',
        },
        {
          name: 'Mike Moore',
          role: 'Singer',
          salary: '2.300',
          sex: 'm',
          type: 'full time',
          change: -40,
          period: 'test period', selected: false,
          duration: '2 months',
        },
        {
          name: 'Jane Doe',
          role: 'Footballer',
          sex: 'f',
          salary: '2.300',
          type: 'full time',
          change: 200,
          period: 'test period', selected: false,
          duration: '2 months',
        },
        {
          name: 'Sam Shane',
          role: 'Designer',
          sex: 'm',
          salary: '2.300',
          type: 'full time',
          change: 20,
          period: 'test period', selected: false,
          duration: '2 months',
        },
        {
          name: 'Jack Milligan',
          role: 'Business man',
          sex: 'm',
          salary: '2.300',
          type: 'full time',
          change: 200,
          period: 'test period', selected: false,
          duration: '2 months',
        },
        {
          name: 'Sally Smith',
          role: 'Investment analyst',
          salary: '2.300',
          type: 'full time',
          sex: 'f',
          change: 20,
          period: 'test period', selected: false,
          duration: '2 months',
        },
        {
          name: 'Mike Moore',
          role: 'Singer',
          salary: '2.300',
          sex: 'm',
          type: 'full time',
          change: -40,
          period: 'test period', selected: false,
          duration: '2 months',
        },
        {
          name: 'Jane Doe',
          role: 'Footballer',
          sex: 'f',
          salary: '2.300',
          type: 'full time',
          change: 200,
          period: 'test period', selected: false,
          duration: '2 months',
        },
        {
          name: 'Sam Shane',
          role: 'Designer',
          sex: 'm',
          salary: '2.300',
          type: 'full time',
          change: 20,
          period: 'test period', selected: false,
          duration: '2 months',
        },
        {
          name: 'Jack Milligan',
          role: 'Business man',
          sex: 'm',
          salary: '2.300',
          type: 'full time',
          change: 200,
          period: 'test period', selected: false,
          duration: '2 months',
        },
        {
          name: 'Sally Smith',
          role: 'Investment analyst',
          salary: '2.300',
          type: 'full time',
          sex: 'f',
          change: 20,
          period: 'test period', selected: false,
          duration: '2 months',
        },
        {
          name: 'Mike Moore',
          role: 'Singer',
          salary: '2.300',
          sex: 'm',
          type: 'full time',
          change: -40,
          period: 'test period', selected: false,
          duration: '2 months',
        },
        {
          name: 'Jane Doe',
          role: 'Footballer',
          sex: 'f',
          salary: '2.300',
          type: 'full time',
          change: 200,
          period: 'test period', selected: false,
          duration: '2 months',
        },
        {
          name: 'Sam Shane',
          role: 'Designer',
          sex: 'm',
          salary: '2.300',
          type: 'full time',
          change: 20,
          period: 'test period', selected: false,
          duration: '2 months',
        },
        {
          name: 'Jack Milligan',
          role: 'Business man',
          sex: 'm',
          salary: '2.300',
          type: 'full time',
          change: 200,
          period: 'test period', selected: false,
          duration: '2 months',
        },
        {
          name: 'Sally Smith',
          role: 'Investment analyst',
          salary: '2.300',
          type: 'full time',
          sex: 'f',
          change: 20,
          period: 'test period', selected: false,
          duration: '2 months',
        },
        {
          name: 'Mike Moore',
          role: 'Singer',
          salary: '2.300',
          sex: 'm',
          type: 'full time',
          change: -40,
          period: 'test period', selected: false,
          duration: '2 months',
        },
        {
          name: 'Jane Doe',
          role: 'Footballer',
          sex: 'f',
          salary: '2.300',
          type: 'full time',
          change: 200,
          period: 'test period', selected: false,
          duration: '2 months',
        },
        {
          name: 'Sam Shane',
          role: 'Designer',
          sex: 'm',
          salary: '2.300',
          type: 'full time',
          change: 20,
          period: 'test period', selected: false,
          duration: '2 months',
        },
        {
          name: 'Jack Milligan',
          role: 'Business man',
          sex: 'm',
          salary: '2.300',
          type: 'full time',
          change: 200,
          period: 'test period', selected: false,
          duration: '2 months',
        },
        {
          name: 'Sally Smith',
          role: 'Investment analyst',
          salary: '2.300',
          type: 'full time',
          sex: 'f',
          change: 20,
          period: 'test period', selected: false,
          duration: '2 months',
        },
        {
          name: 'Mike Moore',
          role: 'Singer',
          salary: '2.300',
          sex: 'm',
          type: 'full time',
          change: -40,
          period: 'test period', selected: false,
          duration: '2 months',
        },
        {
          name: 'Jane Doe',
          role: 'Footballer',
          sex: 'f',
          salary: '2.300',
          type: 'full time',
          change: 200,
          period: 'test period', selected: false,
          duration: '2 months',
        },
        {
          name: 'Sam Shane',
          role: 'Designer',
          sex: 'm',
          salary: '2.300',
          type: 'full time',
          change: 20,
          period: 'test period', selected: false,
          duration: '2 months',
        },
        {
          name: 'Jack Milligan',
          role: 'Business man',
          sex: 'm',
          salary: '2.300',
          type: 'full time',
          change: 200,
          period: 'test period', selected: false,
          duration: '2 months',
        },
        {
          name: 'Jay Alli',
          sex: 'm',
          role: 'Artist',
          salary: '2.300',
          type: 'full time',
          change: 200,
          period: 'test period', selected: false,
          duration: '2 months',
        },
      ],
      usersList: [],
      loading: true
    }
  },
  beforeMount() {
    // get users from the github api
    this.getUsers()
  },
  methods: {
    pickAll (e) {
        this.usersList = this.usersList.map(u => {
            return {...u, selected: e}
        })
    },
    async getUsers () {
      // fetch data from the github api
      let users = await axios.get('https://api.github.com/search/users?q=location:france')
      // needed to add some missing fields to the data returned
      let users_ = users.data.items.map((user, i) => {
        return {
            ...user,
            ...this.users[i]
        }
      })
      this.usersList = users_
      this.loading = false
    },
    deleteUser(i) {
      this.usersList.splice(i, 1)
    }
  }
}
</script>
<style lang="scss" scoped>
    .wrap {
        .loading {
            width: 100%;
            font-size: 22px;
            font-weight: 600;
            text-align: center;
            padding-top: 100px;
            .spinner {
                -webkit-animation-name: spin;
                -webkit-animation-duration: 2000ms;
                -webkit-animation-iteration-count: infinite;
                -webkit-animation-timing-function: linear;

                -moz-animation-name: spin;
                -moz-animation-duration: 2000ms;
                -moz-animation-iteration-count: infinite;
                -moz-animation-timing-function: linear;

                -ms-animation-name: spin;
                -ms-animation-duration: 2000ms;
                -ms-animation-iteration-count: infinite;
                -ms-animation-timing-function: linear;

                animation-name: spin;
                animation-duration: 2000ms;
                animation-iteration-count: infinite;
                animation-timing-function: linear;
            }
        }
        .table-header {
            font-size: 12px;
        }
        .row_ {
            height: 80px;
            padding: 12px 0;
            background-color: #ffffff;
            border-radius: 10px;
            margin-bottom: 12px;
            cursor: pointer;
            box-shadow: 0px 0px 10px rgba(149, 158, 165, 0.1);
            transition: linear all 0.3s;
            .check {
                margin-top: 15px
            }
            .user {
                width: 55px;
                height: 55px;
                border-radius: 50%;
                overflow: hidden;
                display: inline-block;
                vertical-align: middle;
                img {
                    vertical-align: middle;
                    width: 100%
                }
            }
            .userdetails {
                p {
                    font-size: 14px;
                    font-weight: 600;
                    margin: 8px 0 0 0;
                }
                span {
                    color: #bbbbbb;
                    font-size: 12px;
                    position: relative;
                    top: -5px
                }
            }
            .userdetails_ {
                p {
                    font-size: 14px;
                    font-weight: 200;
                    margin: 8px 0 0 0;
                    .red {
                        color: #ffffff;
                        background-color: red;
                        border-radius: 20px;
                        padding: 0 5px
                    }
                    .green {
                        color: #ffffff;
                        background-color: #2fc9ae;
                        border-radius: 20px;
                        padding: 0 5px
                    }
                }
                span {
                    color: #bbbbbb;
                    font-size: 12px;
                    position: relative;
                    top: -5px
                }
            }
            .manage {
                color: #c5c5c5;
                span {
                    padding: 15px 12px;
                    position: relative;
                    top: 12px
                }
                .pen {
                    border-right: 1px solid rgb(233, 233, 233);
                    min-height: 50px
                }
                .pen:hover {
                    color: #04ac5d
                }
                .delete:hover {
                    color: #ff5234
                }
            }
        }
        .row_:hover {
            transform: scale(1.01);
            box-shadow: 0px 0px 10px rgba(97, 99, 100, 0.212);
        }


        @media (max-width: 767px) {
            padding: 10px;
            .table-header {
                display: none
            }
            .row_ {
                height: 380px;
                text-align: center
            }
            .check {
                margin: 0 !important;
                float: right;
            }
        }

        @-ms-keyframes spin { 
            from { 
                -ms-transform: rotate(0deg); 
            } to { 
                -ms-transform: rotate(360deg); 
            }
        }
        @-moz-keyframes spin { 
            from { 
                -moz-transform: rotate(0deg); 
            } to { 
                -moz-transform: rotate(360deg); 
            }
        }
        @-webkit-keyframes spin { 
            from { 
                -webkit-transform: rotate(0deg); 
            } to { 
                -webkit-transform: rotate(360deg); 
            }
        }
        @keyframes spin { 
            from { 
                transform: rotate(0deg); 
            } to { 
                transform: rotate(360deg); 
            }
        }
    }
</style>
