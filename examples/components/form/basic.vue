<template>
  <mn-card-wrapper>
    <strong slot="header">Basic form</strong>
    <mn-card slot="body">
      <mn-card-item>
        <label slot="addon" class="form-label">Username</label>
        <mn-form-text slot="body" v-model="username" placeholder="username"></mn-form-text>
      </mn-card-item>
      <mn-card-item>
        <label slot="addon" class="form-label">Password</label>
        <mn-form-text slot="body" type="password" v-model="password" placeholder="password"></mn-form-text>
        <mn-icon slot="help" name="ios-information" class="is-pink-text"></mn-icon>
      </mn-card-item>
      <mn-card-item>
        <label slot="addon" class="form-label">Phone</label>
        <mn-form-text slot="body" v-model="phone" placeholder="phone"></mn-form-text>
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
