<template>
  <div class="section">
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">Popup</h3>
      </div>
      <div class="card-block">
        <mn-btn class="is-primary is-block">Open popup</mn-btn>
      </div>
    </div>

    <mn-popup show>
      <div class="card m-b-1">
        <div class="card-block is-center-text">
          <small>This photo will be deleted from iCloud Photo Library on all your devices.</small>
        </div>
        <div class="card-btns">
          <button class="is-red-text">Delete Photo</button>
        </div>
      </div>
      <div class="card m-b-0">
        <div class="card-btns">
          <button class="is-blue-text"><strong>Cancel</strong></button>
        </div>
      </div>
    </mn-popup>
  </div>
</template>

<script>
  export default {

  }
</script>
