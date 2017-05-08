<template>
  <mn-container>
    <mn-section>
      <mn-letter>
        <mn-letter-body>
          <h1>Button <small>按钮</small></h1>
        </mn-letter-body>
      </mn-letter>
    </mn-section>

    <mn-section>
      <mn-card>
        <mn-card-item>
          <mn-card-prefix>
            <mn-icon :name="icons.home"></mn-icon>
          </mn-card-prefix>
          <mn-card-body>
            <h5>基本用法</h5>
          </mn-card-body>
        </mn-card-item>
        <mn-card-item>
          <mn-card-body>
            <mn-btn theme="primary" :icon="icons.home" @click="onPressButton">按钮</mn-btn>
            <mn-btn theme="secondary">按钮</mn-btn>
            <mn-btn theme="inverse">按钮</mn-btn>
            <mn-btn theme="warning">按钮</mn-btn>
            <mn-btn theme="error">按钮</mn-btn>
          </mn-card-body>
        </mn-card-item>
      </mn-card>
      <mn-section-note>
        <div>@todo: 调整 theme 的方案</div>
        <div>@todo: 文档中加入关于 @ 事件的命名方式</div>
      </mn-section-note>
    </mn-section>

    <mn-section>
      <mn-card>
        <mn-card-item>
          <h5>按钮尺寸</h5>
        </mn-card-item>
        <mn-card-item>
          <mn-card-body>
            <mn-btn theme="primary" size="xs">按钮</mn-btn>
            <mn-btn theme="primary" size="sm">按钮</mn-btn>
            <mn-btn theme="primary">按钮</mn-btn>
          </mn-card-body>
        </mn-card-item>

        <mn-card-item>
          <mn-card-body>
            <mn-btn theme="primary" :icon="icons.home" size="xs">按钮</mn-btn>
            <mn-btn theme="primary" :icon="icons.home" size="sm">按钮</mn-btn>
            <mn-btn theme="primary" :icon="icons.home">按钮</mn-btn>
          </mn-card-body>
        </mn-card-item>
      </mn-card>
      <mn-section-note>
        @todo: 定义 xs 尺寸的按钮；是否调整 size 的命名？
      </mn-section-note>
    </mn-section>

    <mn-section>
      <mn-card>
        <mn-card-item>
          <h5>状态和事件</h5>
        </mn-card-item>
        <mn-card-item>
          <mn-card-body>
            <mn-btn theme="primary" @click="onPressButton">Normal</mn-btn>
            <mn-btn theme="primary" @click="onPressButton" active>Active</mn-btn>
            <mn-btn theme="primary" @click="onPressButton" @error="errorPressButton" disabled>Disabled</mn-btn>
          </mn-card-body>
        </mn-card-item>
      </mn-card>
      <mn-section-note>
        具有 <strong>click</strong>, <strong>error</strong> 事件
      </mn-section-note>
    </mn-section>

    <mn-section>
      <mn-card>
        <mn-card-item>
          <h5>圆形</h5>
        </mn-card-item>
        <mn-card-item>
          <mn-card-body>
            <mn-btn theme="primary">按钮</mn-btn>
            <mn-btn theme="primary" circle>按钮</mn-btn>
            <mn-btn theme="primary" :icon="icons.home" circle></mn-btn>
            <mn-btn theme="primary" circle size="sm">A</mn-btn>
            <mn-btn theme="primary" :icon="icons.home" circle size="sm"></mn-btn>
          </mn-card-body>
        </mn-card-item>
      </mn-card>
    </mn-section>

    <mn-section>
      <mn-card>
        <mn-card-item>
          <h5>块状</h5>
        </mn-card-item>
        <mn-card-item>
          <mn-card-body>
            <mn-btn theme="primary" :icon="icons.home" block margin>按钮</mn-btn>
            <mn-btn theme="secondary" block margin>按钮</mn-btn>
          </mn-card-body>
        </mn-card-item>
      </mn-card>
      <mn-section-note>
        @todo: 调整 theme 的方案
      </mn-section-note>
    </mn-section>

  </mn-container>
</template>

<script>
  import coreSuits from 'vue-human/components/coreSuits'

  export default {
    components: {
      ...coreSuits.map()
    },
    data () {
      return {
        icons: {
          home: require('vue-human-icons/js/ios/home')
        }
      }
    },
    methods: {
      onPressButton ($event, button) {
        button.loading = true

        setTimeout(() => {
          window.alert('刚刚发生了加载动画')
          button.loading = false
        }, 3000)
      },
      errorPressButton () {
        window.alert('当前按钮被禁用')
      }
    }
  }
</script>
