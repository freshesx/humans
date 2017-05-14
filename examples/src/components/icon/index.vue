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
          <h5><mn-icon :name="icons.contactOutline"></mn-icon> 基本用法</h5>
        </mn-card-item>
        <mn-card-item>
          <mn-card-body>
            <mn-icon :name="icons.contactOutline"></mn-icon> 你好
          </mn-card-body>
        </mn-card-item>
        <mn-card-item>
          <mn-card-body>
            <h1>
              <mn-icon :name="icons.contactOutline" vertical="-25px"></mn-icon> 你好
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
          <h5><mn-icon :name="icons.contactOutline"></mn-icon> 放大缩小</h5>
        </mn-card-item>
        <mn-card-item>
          <mn-card-body>
            <mn-icon :name="icons.contactOutline" :scale="0.6" vertical="-6px"></mn-icon> 你好
            <mn-icon :name="icons.contactOutline" vertical="-2px"></mn-icon> 你好
            <mn-icon :name="icons.contactOutline" :scale="2" vertical="10px"></mn-icon> 你好
          </mn-card-body>
        </mn-card-item>
      </mn-card>
      <mn-section-note>
        <div>@todo 目前仅能通过 vertical 属性来调整衬线对齐</div>
      </mn-section-note>
    </mn-section>

  </page>
</template>

<script>
  import core from 'vue-human/suites/core'
  import page from '../base/page'

  export default {
    components: {
      ...core.map(),
      page
    },
    data () {
      return {
        icons: {
          contactOutline: require('vue-human-icons/js/ios/contact-outline')
        }
      }
    }
  }
</script>
