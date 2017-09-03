<template>
  <div>
    <footer>
      <slot name="dynamicSlot"></slot>
      <slot name="firstSlot"></slot>
    <p>
      {{copyright}} {{title}}
    </p>
      <slot name="secondSlot"></slot>
    </footer>
  </div>
</template>

<script>
// we need to import the Event Bus form main.js, where is defined
import { bus } from "../main"

export default {
  props: {
    title: {
      type: String
    }
  },
  data () {
    return {
      copyright: 'Copyright 2017 Virgil',
      slotContent: 'sasasasasasasa'
    }
  },
  created(){
    bus.$on('EventBusChangesTitle', (data) => {
      this.title = data;
    })
  }
}
</script>

<style scoped>
  footer {
    background: #222;
    padding: 6px;
  }
  p {
    color: lightblue;
    text-align: center;
  }
</style>