<template>
  <div class="mn-cols">
    <div class="mn-col is-sm-2">
      <mn-card>
        <mn-card-heading>
          <mn-card-title>Menus</mn-card-title>
        </mn-card-heading>
        <mn-card-block>
          <h4>Bases</h4>
          <ul>
            <li><a v-link="{ path: '/bases/colors' }">colors</a></li>
            <li><a href="#">typography</a></li>
            <li><a href="#">more</a></li>
          </ul>
          <h4>Grids</h4>
          <ul>
            <li><a href="#">section</a></li>
            <li><a href="#">flex</a></li>
            <li><a href="#">spacing</a></li>
          </ul>
          <h4>Components</h4>
          <ul>
            <li><a v-link="{ path: '/components/button' }">button</a></li>
            <li><a href="#">icon</a></li>
            <li><a v-link="{ path: '/components/card' }">card</a></li>
            <li><a href="#">tab</a></li>
          </ul>
          <h4>API</h4>
          <ul>
            <li><a href="#">variables</a></li>
            <li><a href="#">mixins</a></li>
          </ul>
        </mn-card-block>
      </mn-card>
    </div>
    <div class="mn-col is-sm-10">
      <slot name="mainarea"></slot>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>
