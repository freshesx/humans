<template>
  <div class="section">

    <div class="letter">
      <div class="letter-body">
        <h1 class="letter-title is-black-text">Vue Human</h1>
        <div class="letter-note">A component sets for vue & human UI.</div>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <h3 class="card-title">Bases</h3>
      </div>
      <div class="card-lists">
        <div class="card-item is-link" v-link="{ path: '/bases/colors' }">
          <div class="card-item-addon"><mn-icon name="menu"></mn-icon></div>
          <div class="card-item-body">colors</div>
        </div>
        <div class="card-item is-link" v-link="{ path: '/bases/typography' }">
          <div class="card-item-addon"><mn-icon name="menu"></mn-icon></div>
          <div class="card-item-body">typography</div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <h3 class="card-title">Grids</h3>
      </div>
      <div class="card-lists">
        <div class="card-item is-link" v-link="{ path: '/grids/flex' }">
          <div class="card-item-addon"><mn-icon name="menu"></mn-icon></div>
          <div class="card-item-body">flex</div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <h3 class="card-title">Components</h3>
      </div>
      <div class="card-lists">
        <div class="card-item is-link" v-link="{ path: '/components/button' }">
          <div class="card-item-addon"><mn-icon name="menu"></mn-icon></div>
          <div class="card-item-body">button</div>
        </div>
      </div>
      <div class="card-lists">
        <div class="card-item is-link" v-link="{ path: '/components/card' }">
          <div class="card-item-addon"><mn-icon name="menu"></mn-icon></div>
          <div class="card-item-body">card</div>
        </div>
      </div>
      <div class="card-lists">
        <div class="card-item is-link" v-link="{ path: '/components/form' }">
          <div class="card-item-addon"><mn-icon name="menu"></mn-icon></div>
          <div class="card-item-body">form</div>
        </div>
      </div>
      <div class="card-lists">
        <div class="card-item is-link" v-link="{ path: '/components/popup' }">
          <div class="card-item-addon"><mn-icon name="menu"></mn-icon></div>
          <div class="card-item-body">popup</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>
