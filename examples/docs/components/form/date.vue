<template>
  <mn-card-wrapper>
    <strong slot="header">Date form</strong>
    <mn-card slot="body">
      <!-- date -->
      <mn-card-item>
        <label slot="addon" class="form-label">Date</label>
        <mn-form-date slot="body" type="date" v-model="date"></mn-form-date>
      </mn-card-item>

      <!-- datetime-local -->
      <mn-card-item>
        <label slot="addon" class="form-label">DateTime</label>
        <mn-form-date slot="body" v-model="datetime"></mn-form-date>
      </mn-card-item>

      <!-- month -->
      <mn-card-item>
        <label slot="addon" class="form-label">month</label>
        <mn-form-date slot="body" type="month" v-model="month"></mn-form-date>
      </mn-card-item>

      <!-- week -->
      <mn-card-item>
        <label slot="addon" class="form-label">week</label>
        <mn-form-date slot="body" type="week" v-model="week"></mn-form-date>
      </mn-card-item>

      <!-- time -->
      <mn-card-item>
        <label slot="addon" class="form-label">time</label>
        <mn-form-date slot="body" type="time" v-model="time"></mn-form-date>
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
        week: undefined,
        time: undefined
      }
    }
  }
</script>
