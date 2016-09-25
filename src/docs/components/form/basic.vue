<template>
  <div class="form-group">
    <div class="form-group-title">
      Basic form
    </div>
    <div class="card">
      <div class="card-lists">
        <div class="card-item">
          <div class="card-item-addon">
            <label class="form-label">Username</label>
          </div>
          <div class="card-item-body">
            <input class="form-control" type="text" placeholder="Type your username">
          </div>
        </div>
        <div class="card-item">
          <div class="card-item-addon">
            <label class="form-label">Password</label>
          </div>
          <div class="card-item-body">
            <input class="form-control" type="password" placeholder="Type your password">
          </div>
          <div class="card-item-help">
            <mn-icon name="notification"></mn-icon>
          </div>
        </div>
        <div class="card-item">
          <div class="card-item-addon">
            <label class="form-label">Phone</label>
          </div>
          <div class="card-item-body">
            <input class="form-control" type="text" placeholder="Type your phone number">
          </div>
          <div class="card-item-action">
            <button class="btn is-secondary m-b-0" href="#">Send code</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>
