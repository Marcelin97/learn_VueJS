<template>
  <div class="product">
    <ItemsWorld/>
  </div>
</template>

<script>
// @ is an alias to /src
import ItemsWorld from '@/components/ItemsWorld.vue'

export default {
  name: 'ItemsView',
  components: {
    ItemsWorld
  }
}
</script>