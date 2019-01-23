<template>
  <div class="priceList1 priceList">
    <ul>
      <li v-for="(m,i) in sale" :key="i">
        <span>{{m.name}}</span>
        <span>${{m.price}}</span>
      </li>
    </ul>
    <button @click="commitSale(10)">修改价格</button>
  </div>
</template>

<script>
export default {
  name: 'priceList1',
  computed:{
    msg(){
      return this.$store.state.msg
    },
    sale(){
      return this.$store.getters.saleMsg
    }
  },
  methods:{
    commitSale(sale){
      // this.$store.commit('commitSale','10')
      this.$store.dispatch('commitSale',sale)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import '../assets/sass/index.scss';
</style>
