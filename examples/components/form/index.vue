<template>
  <transition name="has-slide">
    <mn-rows>
      <mn-row fixed visible>
        <demo-filter-bar></demo-filter-bar>
      </mn-row>
      <mn-row>
        <mn-scroller>

          <div class="section">
            <mn-letter>
              <h1>Form</h1>
              <small>input, radio, switch, select</small>
            </mn-letter>

            <mn-cols>
              <mn-col query="sm-6">
                <form-radio></form-radio>
                <form-checkbox></form-checkbox>
                <form-basic></form-basic>
                <form-date></form-date>
                <form-switch></form-switch>
                <form-select></form-select>
                <form-counter></form-counter>
                <mn-btn type="primary" block>Submit</mn-btn>
              </mn-col>
            </mn-cols>
          </div>

        </mn-scroller>
      </mn-row>
    </mn-rows>
  </transition>
</template>

<script>
  import FormRadio from './radio'
  import FormCheckbox from './checkbox'
  import FormBasic from './basic'
  import FormDate from './date'
  import FormSwitch from './switch'
  import FormSelect from './select'
  import FormCounter from './counter'
  import DemoFilterBar from '../filter-bar'

  export default {
    components: {
      FormRadio,
      FormCheckbox,
      FormBasic,
      FormDate,
      FormSwitch,
      FormSelect,
      FormCounter,
      DemoFilterBar
    }
  }
</script>
