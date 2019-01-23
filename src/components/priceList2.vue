<template>
  <div class="priceList2 priceList">
    <ul>
      <li v-for="(m,i) in msg" :key="i">
        <span>{{m.name}}</span>
        <span>${{m.price}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'priceList2',
  computed:{
    msg(){
      return this.$store.state.msg
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/sass/index.scss'
</style>

