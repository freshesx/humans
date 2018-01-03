<template>
  <div>
    <div>
      <h1>Menu</h1>
      <mn-menu class="menu" :selected="0">
        <mn-menu-pane>
          <mn-menu-title>
            <p class="title">Title #1</p>
          </mn-menu-title>
          <mn-menu-content>
            <ul class="content">
              <li>some subMenu</li>
              <li>some subMenu</li>
              <li>some subMenu</li>
            </ul>
          </mn-menu-content>
        </mn-menu-pane>
        <mn-menu-pane>
          <mn-menu-title>
            <p class="title">Title #2</p>
          </mn-menu-title>
          <mn-menu-content>
            <ul class="content">
              <li>some subMenu</li>
              <li>some subMenu</li>
              <li>some subMenu</li>
            </ul>
          </mn-menu-content>
        </mn-menu-pane>
        <mn-menu-pane>
          <mn-menu-title>
            <p class="title">Title #3</p>
          </mn-menu-title>
          <mn-menu-content>
            <ul class="content">
              <li>some subMenu</li>
              <li>some subMenu</li>
              <li>some subMenu</li>
            </ul>
          </mn-menu-content>
        </mn-menu-pane>
      </mn-menu>
    </div>

    <div>
      <h1>Menu</h1>
      <p>Selecting one will not hide the others.</p>
      <mn-menu class="menu" type="flat">
        <mn-menu-pane>
          <mn-menu-title>
            <p class="title">Title #1</p>
          </mn-menu-title>
          <mn-menu-content>
            <ul class="content">
              <li>some subMenu</li>
              <li>some subMenu</li>
              <li>some subMenu</li>
            </ul>
          </mn-menu-content>
        </mn-menu-pane>
        <mn-menu-pane>
          <mn-menu-title>
            <p class="title">Title #2</p>
          </mn-menu-title>
          <mn-menu-content>
            <ul class="content">
              <li>some subMenu</li>
              <li>some subMenu</li>
              <li>some subMenu</li>
            </ul>
          </mn-menu-content>
        </mn-menu-pane>
        <mn-menu-pane>
          <mn-menu-title>
            <p class="title">Title #3</p>
          </mn-menu-title>
          <mn-menu-content>
            <ul class="content">
              <li>some subMenu</li>
              <li>some subMenu</li>
              <li>some subMenu</li>
            </ul>
          </mn-menu-content>
        </mn-menu-pane>
      </mn-menu>
    </div>
  </div>
</template>

<script>
  import { menu } from '@humans/menu'

  export default {
    components: {
      ...menu
    }
  }
</script>

<style lang="scss" scoped>
  .menu {
    .content {
      list-style: none;
      width: 100%;
      padding: 0 1rem;
      margin: 0;

      li {
        line-height: 2.5rem;
      }
    }

    .title {
      background-color: #eee;
      margin: 0;
      padding: 1rem;
    }
  }
</style>
