<template>
  <mn-card-wrapper>
    <strong slot="header">Basic form</strong>
    <mn-card slot="body">
      <mn-card-item>
        <label slot="addon" class="form-label">Username</label>
        <input slot="body" class="form-control" type="text" placeholder="Type your username">
      </mn-card-item>
      <mn-card-item>
        <label slot="addon" class="form-label">Password</label>
        <input slot="body" class="form-control" type="password" placeholder="Type your password">
        <mn-icon slot="help" name="notification" class="is-pink-text"></mn-icon>
      </mn-card-item>
      <mn-card-item>
        <label slot="addon" class="form-label">Phone</label>
        <input slot="body" class="form-control" type="text" placeholder="Type your phone number">
        <mn-btn slot="action" class="is-warning is-sm m-b-0">Send Code</mn-btn>
      </mn-card-item>
    </mn-card>
  </mn-card-wrapper>
</template>

<script>
  export default {

  }
</script>
