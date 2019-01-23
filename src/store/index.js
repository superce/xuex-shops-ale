import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    msg: [
      {name:'马云',price:'200'},
      {name:'马化腾',price:'210'},
      {name:'王健林',price:'220'}
    ]
  },
  getters:{
    saleMsg(s){
      return s.msg.map(m => {
        return {
          name: '*' + m.name + '*',
          price: '*' + m.price + '*'
        }
      })
    }
  },
  mutations:{
    commitSale(state,n){
      state.msg.forEach(m => {
          m.price -= n
      })
    }
  },
  actions:{
    commitSale(context,n){
      setTimeout(()=> {
        context.commit("commitSale",n)
      },1000)
    }
  }
})
export default store;