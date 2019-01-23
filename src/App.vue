<template>
  <div id="app">
    <!-- <router-view/> -->
    <priceList1 />
    <priceList2 />
  </div>
</template>

<script>
import priceList1 from './components/priceList1'
import priceList2 from './components/priceList2'
export default {
  components:{
    priceList1,
    priceList2
  },
  name: 'App'
}
</script>

<style>
#app {
  width: 1000px;
  margin: 0 auto;
}
</style>
