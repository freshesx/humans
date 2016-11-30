<template>
  <mn-card-wrapper>
    <strong slot="header">Date form</strong>
    <mn-card slot="body">
      <!-- date -->
      <mn-card-item>
        <mn-form-label slot="addon">Date</mn-form-label>
        <mn-form-datetime slot="body" type="date" v-model="date"></mn-form-datetime>
      </mn-card-item>

      <!-- datetime-local -->
      <mn-card-item>
        <mn-form-label slot="addon">DateTime</mn-form-label>
        <mn-form-datetime slot="body" v-model="datetime"></mn-form-datetime>
      </mn-card-item>

      <!-- month -->
      <mn-card-item>
        <mn-form-label slot="addon">Month</mn-form-label>
        <mn-form-datetime slot="body" type="month" v-model="month"></mn-form-datetime>
      </mn-card-item>

      <!-- time -->
      <mn-card-item>
        <mn-form-label slot="addon">Time</mn-form-label>
        <mn-form-datetime slot="body" type="time" v-model="time"></mn-form-datetime>
      </mn-card-item>
    </mn-card>
  </mn-card-wrapper>
</template>

<script>
  export default {
    data () {
      return {
        date: undefined,
        datetime: '2016-09-09T08:00:00',
        month: undefined,
        time: undefined
      }
    }
  }
</script>
