<template>
  <div>
    <div>
      <div><mn-rate :value="3" disabled></mn-rate></div>
      <div>Disabled 3</div>
    </div>
    <div>
      <div><mn-rate :value="3.6" disabled></mn-rate></div>
      <div>Disabled 3.6</div>
    </div>
    <div>
      <div><mn-rate v-model="rate" @input="onChange"></mn-rate></div>
      <div>Writable Rate: {{ rate }}</div>
    </div>
  </div>
</template>

<script>
  import { rate } from '@humans/rate'

  export default {
    components: {
      ...rate
    },
    data () {
      return {
        rate: 3
      }
    },
    methods: {
      onChange (value) {
        console.log(value)
      }
    }
  }
</script>
