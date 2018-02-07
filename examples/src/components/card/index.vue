<template>
  <div>
    <mn-card>
      <mn-card-item v-for="i in 2" :key="i">
        <mn-card-prefix>
          <div class="placeholder" style="width: 80px; height: 80px;"></div>
        </mn-card-prefix>
        <mn-card-body>
          <h4>标题一</h4>
          <small>由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</small>
        </mn-card-body>
      </mn-card-item>
      <mn-card-item type="link">
        <mn-card-body>
          <small>查看更多</small>
        </mn-card-body>
      </mn-card-item>
    </mn-card>

    <mn-card theme="inverse">
      <mn-card-item v-for="i in 2" :key="i">
        <mn-card-prefix>
          <div class="placeholder" style="background: rgba(255, 255, 255, 0.2); width: 80px; height: 80px;"></div>
        </mn-card-prefix>
        <mn-card-body>
          <h4>标题一</h4>
          <small>由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</small>
        </mn-card-body>
      </mn-card-item>
      <mn-card-item type="link">
        <mn-card-body>
          <small>查看更多</small>
        </mn-card-body>
      </mn-card-item>
    </mn-card>

    <div class="glass-section">
      <mn-card theme="glass" class="has-none-margin-bottom" rounded>
        <mn-card-item v-for="i in 2" :key="i">
          <mn-card-prefix>
            <div class="placeholder"
              style="border-radius: 0.65rem; background: rgba(0, 0, 0, 0.1); width: 80px; height: 80px;"></div>
          </mn-card-prefix>
          <mn-card-body>
            <h4>标题一</h4>
            <small>由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</small>
          </mn-card-body>
        </mn-card-item>
        <mn-card-item type="link">
          <mn-card-body>
            <small>查看更多</small>
          </mn-card-body>
        </mn-card-item>
      </mn-card>
    </div>

    <mn-card>
      <mn-card-item>
        <mn-card-body>
          <h4>标题一</h4>
          <p>由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
        </mn-card-body>
      </mn-card-item>
      <mn-card-btns type="column">
        <button class="has-red-text">Cancel</button>
        <button class="has-blue-text">Confirm</button>
      </mn-card-btns>
    </mn-card>
  </div>
</template>

<script>
  import { MnCardSuites } from '@freshes/human'

  export default {
    components: {
      ...MnCardSuites
    }
  }
</script>

<style lang="scss" scoped>
  .placeholder {
    background: #eee;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(0, 0, 0, 0.1);
  }

  .glass-section {
    background: url("https://ois1yok9v.qnssl.com/home-banner-1.jpg");
    padding: 2rem 1rem;
    margin-bottom: 0.5rem;
  }
</style>
