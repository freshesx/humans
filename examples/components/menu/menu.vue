<template>
  <div class="">
    <mn-card>
      <mn-card-item>Selecting one will hide the others.</mn-card-item>
      <mn-card-item>
        <mn-menu :selected="0">
          <mn-menu-pane title="Title #1">
            <ul class="user-menu">
              <li>some subMenu</li>
              <li>some subMenu</li>
              <li>some subMenu</li>
            </ul>
          </mn-menu-pane>
          <mn-menu-pane title="Title #2">
            <ul class="user-menu">
              <li>some subMenu</li>
              <li>some subMenu</li>
              <li>some subMenu</li>
            </ul>
          </mn-menu-pane>
          <mn-menu-pane title="Title #3">
            <ul class="user-menu">
              <li>some subMenu</li>
              <li>some subMenu</li>
              <li>some subMenu</li>
            </ul>
          </mn-menu-pane>
        </mn-menu>
      </mn-card-item>
    </mn-card>
    <mn-card>
      <mn-card-item>Selecting one will not hide the others.</mn-card-item>
      <mn-card-item>
        <mn-menu type="flat">
          <mn-menu-pane title="Title #1">
            <ul class="user-menu">
              <li>some subMenu</li>
              <li>some subMenu</li>
              <li>some subMenu</li>
            </ul>
          </mn-menu-pane>
          <mn-menu-pane title="Title #2">
            <ul class="user-menu">
              <li>some subMenu</li>
              <li>some subMenu</li>
              <li>some subMenu</li>
            </ul>
          </mn-menu-pane>
          <mn-menu-pane title="Title #3">
            <ul class="user-menu">
              <li>some subMenu</li>
              <li>some subMenu</li>
              <li>some subMenu</li>
            </ul>
          </mn-menu-pane>
        </mn-menu>
      </mn-card-item>
    </mn-card>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped lang="scss">
  .user-menu {
    list-style: none;
    width: 100%;
    padding: 0 1rem;
    margin: 0;

    li {
      line-height: 2.5rem;
    }
  }
</style>
