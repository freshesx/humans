<template>
  <div>
    <button @click="onOpenSingle">Datetime single</button>
    <button @click="onOpenRange">Datetime range</button>
  </div>
</template>

<script>
  import Datetime from 'vue-human/utils/Datetime'
  import DatetimeRange from 'vue-human/utils/DatetimeRange'

  export default {
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
