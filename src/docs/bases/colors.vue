<template>
  <div>
    <h3>Color</h3>

    <div>
      最近添加2
    </div>

    <div v-for="color in colors">
      <div class="scoped-tile">
        <div class="scoped-tile-box" :class="getBoxClass(color.className)"></div>
        <div class="scoped-tile-title" :class="getTextClass(color.className)">{{ color.className }}</div>
      </div>
    </div>

    <h3>Background color</h3>

    <ul>
      <li v-for="color in colors">
        bg-{{ color.className }}
      </li>
    </ul>

    <h3>Text color</h3>

    <ul>
      <li v-for="color in colors">
        text-{{ color.className }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    methods: {
      getBoxClass (className) {
        return {
          [`bg-${className}`]: true
        }
      },
      getTextClass (className) {
        return {
          [`text-${className}`]: true
        }
      }
    },
    data () {
      return {
        colors: [
          { className: 'red' },
          { className: 'orange' },
          { className: 'yellow' },
          { className: 'green' },
          { className: 'teal-blue' },
          { className: 'blue' },
          { className: 'purple' },
          { className: 'pink' }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .scoped-tile {
    float: left;
  }

  .scoped-tile-box {
    width: 60px;
    height: 60px;
    border-radius: 12px;
    margin: 0 20px 12px 20px;
  }

  .scoped-tile-title {
    text-align: center;
  }
</style>
