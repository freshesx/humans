<template>
  <div>

    <div>
      <h1>Datetime Single Mode</h1>
      <mn-datetime-picker :display="models.datetime"
        @openPicker="openSingle"
      ></mn-datetime-picker>
    </div>

    <hr>

    <div>
      <h1>Time Single Mode</h1>
      <mn-datetime-picker :display="models.time"
        @openPicker="openSingleTime"
      ></mn-datetime-picker>
    </div>

    <hr>

    <div>
      <h1>Datetime Range Mode</h1>
      <mn-datetime-picker
        :display="`${models.fromDatetime} 至 ${models.toDatetime}`"
        @openPicker="openRange"
      ></mn-datetime-picker>
    </div>

    <div>
      <h1>Time Range Mode</h1>
      <mn-datetime-picker
        :display="`${models.fromTime} 到 ${models.toTime}`"
        @openPicker="openRangeTime"
      ></mn-datetime-picker>
    </div>
  </div>
</template>

<script>
  import input from '@humans/input'
  import {
    default as datetime,
    Datetime,
    DatetimeRange
  } from '@humans/datetime'

  export default {
    components: Object.assign({}, input, datetime),
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
      openSingle () {
        this.singleDatetime = Datetime.create({
          default: this.models.datetime
        }).show().on('confirm', format => {
          this.models.datetime = format
        })
      },
      openSingleTime () {
        this.singleTime = Datetime.create({
          default: this.models.time,
          showDate: false
        }).show().on('confirm', format => {
          this.models.time = format
        })
      },
      openRange () {
        this.rangeDatetime = DatetimeRange.create({
          default: this.models.fromDatetime
        }, {
          default: this.models.toDatetime
        }).show().change(formats => {
          this.models.fromDatetime = formats.from
          this.models.toDatetime = formats.to
        })
      },
      openRangeTime () {
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
