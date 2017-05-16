<template>
  <page>
    <mn-letter>
      <mn-letter-body><h1>Datetime</h1></mn-letter-body>
    </mn-letter>

    <mn-section>
      <mn-section-note>Datetime Single Mode</mn-section-note>
      <mn-card>
        <mn-card-item>
          <mn-card-prefix>
            <mn-label>Datetime</mn-label>
          </mn-card-prefix>
          <mn-card-body>
            <mn-datetime-picker :display="models.datetime" @openPicker="onOpenSingle"></mn-datetime-picker>
          </mn-card-body>
        </mn-card-item>
      </mn-card>
    </mn-section>

    <mn-section>
      <mn-section-note>Datetime Range Mode</mn-section-note>
      <mn-card>
        <mn-card-item>
          <mn-card-prefix>
            <mn-label>Range</mn-label>
          </mn-card-prefix>
          <mn-card-body>
            <mn-datetime-picker :display="`${models.fromDatetime} 至 ${models.toDatetime}`" @openPicker="onOpenRange"></mn-datetime-picker>
          </mn-card-body>
        </mn-card-item>
      </mn-card>
    </mn-section>
  </page>
</template>

<script>
  import core from 'vue-human/suites/core'
  import input from 'vue-human/suites/input'
  import page from '../base/page'
  import datetime from 'vue-human/suites/datetime'
  import Datetime from 'vue-human/utils/Datetime'
  import DatetimeRange from 'vue-human/utils/DatetimeRange'

  export default {
    components: {
      ...core.map(),
      ...input.map(),
      ...datetime.map(),
      page
    },
    data () {
      return {
        models: {
          datetime: '2017-03-12 12:00:00',
          fromDatetime: '2017-05-20 08:30:00',
          toDatetime: '2017-05-21 17:30:00'
        }
      }
    },
    methods: {
      onOpenSingle () {
        const currentAt = new Date(this.models.datetime)
        Datetime.create({ currentAt }).show().$on('confirm', display => {
          this.models.datetime = display
        })
      },
      onOpenRange () {
        const fromAt = new Date(this.models.fromDatetime)
        const toAt = new Date(this.models.toDatetime)

        DatetimeRange.fromAt({ currentAt: fromAt })
          .toAt({ currentAt: toAt })
          .show()
          .change(formats => {
            this.models.fromDatetime = formats.from
            this.models.toDatetime = formats.to
          })
      }
    }
  }
</script>
