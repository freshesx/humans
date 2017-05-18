<template>
  <page>
    <mn-letter>
      <mn-letter-body>
        <h1>Card</h1>
        <small><mn-tag name="pink" size="sm">H!</mn-tag> 与其他的组件库相比，Card 是 Human 中最重要的一个组件。</small>
      </mn-letter-body>
    </mn-letter>

    <mn-columns>
      <mn-column desktop="6">
        <mn-section>
          <mn-section-note>图文组合列表</mn-section-note>
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
        </mn-section>

        <mn-section>
          <mn-section-note>深色</mn-section-note>
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
        </mn-section>

        <mn-section>
          <mn-section-note>Safari 磨砂玻璃</mn-section-note>
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
          <mn-section-note>@ 非 iOS、Sfari 游览器下，无法实现磨砂效果，仅能显示默认模式</mn-section-note>
        </mn-section>
      </mn-column>

      <mn-column desktop="6">
        <mn-section>
          <mn-section-note>Card Button</mn-section-note>
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
        </mn-section>

        <mn-section>
          <mn-section-note>表单控件</mn-section-note>
          <mn-card>
            <mn-card-item>
              <mn-card-prefix>
                <mn-label>
                  <div class="placeholder">Label</div>
                </mn-label>
              </mn-card-prefix>
              <mn-card-body>
                <div class="placeholder">Input</div>
              </mn-card-body>
              <mn-card-suffix action>
                <mn-btn theme="warning" size="sm">Send</mn-btn>
              </mn-card-suffix>
            </mn-card-item>
          </mn-card>
        </mn-section>
      </mn-column>
    </mn-columns>
  </page>
</template>

<script>
  import core from 'vue-human/suites/core'
  import tag from 'vue-human/suites/tag'
  import page from '../base/page'

  export default {
    components: {
      ...core.map(),
      ...tag.map(),
      page
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
