<template>
  <div>

      <LargeToolbar v-if="$mq !='small'"></LargeToolbar>


      <SmallToolbar v-if="$mq === 'small'"></SmallToolbar>
  </div>
</template>

<script>
import LargeToolbar from './LargeToolbar.vue'
//import MediumToolbar from './MediumToolbar.vue'
import SmallToolbar from './SmallToolbar.vue'
export default {
  components: {
    LargeToolbar,
    //MediumToolbar,
    SmallToolbar
  }

}
</script>

<style>

</style>
