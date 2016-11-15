<template>
  <mn-rows>
    <mn-row fixed visible>
      <demo-filter-bar></demo-filter-bar>
    </mn-row>
    <mn-row>
      <mn-scroller
        save
        bottom
        scrollToTop
        @pull-up="pullUp"
        @drag-down="dragDown"
        :pause="pause">

        <div class="section">
          <mn-letter>
            <h1>Form</h1>
            <small>input, radio, switch, select</small>
          </mn-letter>

          <mn-cols>
            <mn-col query="sm-6">
              <form-radio></form-radio>
              <form-basic></form-basic>
              <form-switch></form-switch>
              <form-select></form-select>
              <mn-btn type="primary" block>Submit</mn-btn>
            </mn-col>
          </mn-cols>
        </div>

        <mn-icon slot="topContent" name="load-c" spin></mn-icon>
      </mn-scroller>
    </mn-row>
  </mn-rows>
</template>

<script>
  import FormRadio from './radio'
  import FormBasic from './basic'
  import FormSwitch from './switch'
  import FormSelect from './select'
  import DemoFilterBar from '../filter-bar'

  export default {
    components: {
      FormRadio,
      FormBasic,
      FormSwitch,
      FormSelect,
      DemoFilterBar
    },
    data () {
      return {
        pause: false
      }
    },
    methods: {
      pullUp: function () {
        console.log('The end.')
      },
      dragDown: function (distance) {
        this.pause = true
        console.log('The start.')
        setTimeout(() => {
          this.pause = false
        }, 2000)
      }
    }
  }
</script>
