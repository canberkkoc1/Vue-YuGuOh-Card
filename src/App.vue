<template>
  <div>
    <Settings/>
    <Card/>
  </div>
</template>

<script>
import Settings from '@/components/Settings'
import Card from '@/components/Card'
export default {
  components:{
    Settings,
    Card
  },


  created() {
    this.$store.dispatch("getAllData")
  },


}
</script>

<style>

</style>