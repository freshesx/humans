<template>
  <page>
    <mn-letter>
      <mn-letter-body><h1>Datetime</h1></mn-letter-body>
    </mn-letter>

    <mn-card>
      <mn-card-item>
        <mn-card-body>
          <mn-btn theme="primary" @click="onOpenSingle">Datetime single</mn-btn>
          <mn-btn theme="primary" @click="onOpenRange">Datetime range</mn-btn>
        </mn-card-body>
      </mn-card-item>
    </mn-card>
  </page>
</template>

<script>
  import core from 'vue-human/suites/core'
  import page from '../base/page'
  import Datetime from 'vue-human/utils/Datetime'
  import DatetimeRange from 'vue-human/utils/DatetimeRange'

  export default {
    components: {
      ...core.map(),
      page
    },
    methods: {
      onOpenSingle () {
        const popup = Datetime.create({ showDate: false }).show()
        popup.$on('confirm', display => {
          console.log(display)
        })
      },
      onOpenRange () {
        DatetimeRange.fromAt({ showSeconds: false })
          .toAt({ showSeconds: false })
          .show()
          .change(formats => {
            console.log(formats)
          })
      }
    }
  }
</script>
