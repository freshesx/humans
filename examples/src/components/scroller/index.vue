<template>
  <div class="scroller-stage">
    <div class="scroller-heading">
      MnScroller
    </div>
    <div class="scroller-boding">
      <mn-box :finish-pull-fn="finishPull">
        <mn-scroller>
          <ul>
            <li v-for="i in 50" :key="i">{{ i }}</li>
          </ul>
        </mn-scroller>
        <div class="scroller-prefix" slot="prefix">
          <span v-if="!loading">下拉刷新</span>
          <span v-if="loading">刷新中</span>
        </div>
      </mn-box>
    </div>
  </div>
</template>

<script>
  import { scroller } from '@humans/scroller'
  import { box } from '@humans/box'

  function sleep (ms = 2000) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  export default {
    components: {
      ...box,
      ...scroller
    },
    data () {
      return {
        loading: false
      }
    },
    methods: {
      async finishPull (ratio) {
        if (ratio < 0.8) return
        this.loading = true
        await sleep()
        this.loading = false
      }
    }
  }
</script>

<style lang="scss" scoped>
.scroller-stage {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.scroller-heading {
  flex-shrink: 0;
  font-weight: bold;
  text-align: center;
  line-height: 50px;
  height: 50px;
  background: #fff;
  z-index: 100;
}

.scroller-boding {
  flex: 1;
  position: relative;
}

.scroller-prefix {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80px;
  background: rgba(black, 0.1);
}
</style>
