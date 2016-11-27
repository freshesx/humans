<template>
  <mn-card-wrapper>
    <strong slot="header">Date form</strong>
    <mn-card slot="body">
      <!-- date -->
      <mn-card-item>
        <label slot="addon" class="form-label">Date</label>
        <mn-form-datetime slot="body" type="date" v-model="date"></mn-form-datetime>
      </mn-card-item>

      <!-- datetime-local -->
      <mn-card-item>
        <label slot="addon" class="form-label">DateTime</label>
        <mn-form-datetime slot="body" v-model="datetime"></mn-form-datetime>
      </mn-card-item>

      <!-- month -->
      <mn-card-item>
        <label slot="addon" class="form-label">month</label>
        <mn-form-datetime slot="body" type="month" v-model="month"></mn-form-datetime>
      </mn-card-item>

      <!-- time -->
      <mn-card-item>
        <label slot="addon" class="form-label">time</label>
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
