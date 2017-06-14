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

    <mn-section>
      <mn-section-note>Time Single Mode</mn-section-note>
      <mn-card>
        <mn-card-item>
          <mn-card-prefix>
            <mn-label>Time</mn-label>
          </mn-card-prefix>
          <mn-card-body>
            <mn-datetime-picker :display="models.time" @openPicker="onOpenSingleTime"></mn-datetime-picker>
          </mn-card-body>
        </mn-card-item>
      </mn-card>
    </mn-section>

    <mn-section>
      <mn-section-note>Time Range Mode</mn-section-note>
      <mn-card>
        <mn-card-item>
          <mn-card-prefix>
            <mn-label>Time</mn-label>
          </mn-card-prefix>
          <mn-card-body>
            <mn-datetime-picker :display="`${models.fromTime} 到 ${models.toTime}`" @openPicker="onOpenRangeTime"></mn-datetime-picker>
          </mn-card-body>
        </mn-card-item>
      </mn-card>
      <mn-section-note>
        <div>@todo 新增 type 属性，参数有 “datetime”、“date”、“time”，用于简化配置。并根据不同的参数形式来设定 toAt 的增量为 1 天，1 小时等。</div>
        <div>从而重新比较 toAt，判断是 datetime，date，time 三个层面是否大于 fromAt。</div>
      </mn-section-note>
    </mn-section>
  </page>
</template>

<script>
  import input from 'vue-human/suites/input'
  import datetime from 'vue-human/suites/datetime'
  import Datetime from 'vue-human/utils/Datetime'
  import DatetimeRange from 'vue-human/utils/DatetimeRange'

  export default {
    components: {
      ...input.map(),
      ...datetime.map()
    },
    data () {
      return {
        models: {
          datetime: '2017-03-12 12:00:00',
          fromDatetime: '2017-05-20 08:30:00',
          toDatetime: '2017-05-21 17:30:00',
          time: '12:00:00',
          fromTime: '08:00:00',
          toTime: '17:00:00'
        }
      }
    },
    methods: {
      onOpenSingle () {
        this.singleDatetime = Datetime.create({
          default: this.models.datetime
        }).show().on('confirm', format => {
          this.models.datetime = format
        })
      },
      onOpenSingleTime () {
        this.singleTime = Datetime.create({
          default: this.models.time,
          showDate: false
        }).show().on('confirm', format => {
          this.models.time = format
        })
      },
      onOpenRange () {
        this.rangeDatetime = DatetimeRange.create({
          default: this.models.fromDatetime
        }, {
          default: this.models.toDatetime
        }).show().change(formats => {
          this.models.fromDatetime = formats.from
          this.models.toDatetime = formats.to
        })
      },
      onOpenRangeTime () {
        this.rangeTime = DatetimeRange.create({
          default: this.models.fromTime, showDate: false
        }, {
          default: this.models.toTime, showDate: false
        }).show().change(formats => {
          this.models.fromTime = formats.from
          this.models.toTime = formats.to
        })
      }
    },
    beforeDestroy () {
      if (this.singleDatetime) this.singleDatetime.destroy()
      if (this.singleTime) this.singleTime.destroy()
      if (this.rangeDatetime) this.rangeDatetime.destroy()
      if (this.rangeTime) this.rangeTime.destroy()
    }
  }
</script>
