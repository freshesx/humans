<template>
  <mn-card-wrapper>
    <strong slot="header">Basic form</strong>
    <mn-card slot="body">
      <mn-card-item>
        <mn-form-label slot="addon">Username</mn-form-label>
        <mn-input slot="body" v-model="username" placeholder="username"></mn-input>
      </mn-card-item>
      <mn-card-item>
        <mn-form-label slot="addon">Password</mn-form-label>
        <mn-input slot="body" type="password" v-model="password" placeholder="password"></mn-input>
        <mn-icon slot="help" name="ios-information" class="has-pink-text"></mn-icon>
      </mn-card-item>
      <mn-card-item>
        <mn-form-label slot="addon">Phone</mn-form-label>
        <mn-input slot="body" v-model="phone" placeholder="phone"></mn-input>
        <mn-btn slot="action" class="is-warning is-sm m-b-0">Send Code</mn-btn>
      </mn-card-item>
    </mn-card>
  </mn-card-wrapper>
</template>

<script>
  export default {
    data () {
      return {
        username: undefined,
        password: undefined,
        phone: undefined
      }
    }
  }
</script>
