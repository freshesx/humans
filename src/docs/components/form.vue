<template>
  <div>
    <section class="section">
      <div class="cols">
        <div class="col is-sm-6">
          <div class="card">
            <validator name="validation">
              <form novalidate>
                <div class="card-header">
                  <h3 class="card-title">Basic form</h3>
                </div>
                <div class="card-block">
                  <div class="errors">
                    <p v-if="$validation.username.required">Required your name.</p>
                  </div>
                </div>
                <div class="card-lists">
                  <div class="card-item">
                    <div class="card-item-addon">
                      <label class="form-label">Username</label>
                    </div>
                    <div class="card-item-body">
                      <input class="form-control" type="text" placeholder="Type your username" v-validate:username="['required']">
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
                      <mn-icon name="menu"></mn-icon>
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
                      <button class="btn is-primary m-b-0" href="#">Send code</button>
                    </div>
                  </div>
                  <div class="card-block">
                    {{ $validation | json }}
                  </div>
                </div>
              </form>
            <validator>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {

  }
</script>
