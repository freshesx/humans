<template>
  <page>
    <mn-section>
      <mn-letter>
        <mn-letter-body>
          <h1>Icon <small>图标</small></h1>
        </mn-letter-body>
      </mn-letter>
    </mn-section>

    <mn-section>
      <mn-card>
        <mn-card-item>
          <mn-card-body>
            <img src="https://placeholdit.imgix.net/~text?txtsize=28&bg=0099ff&txtclr=ffffff&txt=&w=24&h=24" alt="" width="24px" height="24px" style="vertical-align: bottom;"> image 24px
          </mn-card-body>
        </mn-card-item>
        <mn-card-item>
          <mn-card-body>
            <img src="https://placeholdit.imgix.net/~text?txtsize=28&bg=0099ff&txtclr=ffffff&txt=&w=24&h=24" alt="" width="24px" height="24px" style="vertical-align: bottom;"> <small>image 16px</small>
          </mn-card-body>
        </mn-card-item>
        <mn-card-item>
          <mn-card-body style="line-height: 40px; font-size: 20px;">
            <img src="https://placeholdit.imgix.net/~text?txtsize=28&bg=0099ff&txtclr=ffffff&txt=&w=40&h=40" alt="" width="40px" height="40px" style="vertical-align: bottom;"> image 16px
          </mn-card-body>
        </mn-card-item>
      </mn-card>
    </mn-section>

    <mn-section>
      <mn-card>
        <mn-card-item>
          <h5><mn-icon :name="icons.contact"></mn-icon> 基本用法 Baseline group</h5>
        </mn-card-item>
        <mn-card-item>
          <mn-card-body>
            <mn-icon :name="icons.contact"></mn-icon> 你好
          </mn-card-body>
        </mn-card-item>
        <mn-card-item>
          <mn-card-body>
            <h1>
              <mn-icon :name="icons.contact" :scale="2.25"></mn-icon> 你好
            </h1>
          </mn-card-body>
        </mn-card-item>
      </mn-card>
      <mn-section-note>
        <div>图标的设计和使用的注意点在于衬线是否对齐</div>
      </mn-section-note>
    </mn-section>

    <mn-section>
      <mn-card>
        <mn-card-item>
          <h5><mn-icon :name="icons.nothing"></mn-icon> svg 不存在</h5>
        </mn-card-item>
      </mn-card>
    </mn-section>

    <mn-section>
      <mn-section-note>Loading status icon</mn-section-note>
      <mn-card>
        <mn-card-item>
          <mn-card-body>
            <mn-icon :name="icons.contact" :loading="loading"></mn-icon> 通讯录
          </mn-card-body>
        </mn-card-item>
        <mn-card-item>
          <mn-card-body>
            <mn-btn theme="primary" size="sm" @click="loading = !loading">{{ loading ? 'close' : 'open' }} icon loading</mn-btn>
          </mn-card-body>
        </mn-card-item>
      </mn-card>
    </mn-section>

  </page>
</template>

<script>
  export default {
    data () {
      return {
        icons: {
          contact: require('vue-human-icons/js/ios/contact-outline'),
          nothing: undefined
        },
        loading: false
      }
    }
  }
</script>
