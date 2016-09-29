<template>
  <div class="section" transition="is-slide-left">

    <div class="letter">
      <div class="letter-body">
        <h1>Card</h1>
        <small>card, header, block, lists, item, button</small>
      </div>
    </div>

    <div class="cols">
      <div class="col">
        <div class="card">
          <div class="card-header">
            <div class="card-title">Card</div>
          </div>
          <div class="card-block">
            <h3>What is Lorem Ipsum?</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
            <p>
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
          <div class="card-lists">
            <div class="card-item">
              <div class="card-item-body">Item title</div>
              <div class="card-item-help">description</div>
            </div>
            <div class="card-item is-link">
              <div class="card-item-addon">
                <mn-icon name="menu"></mn-icon>
              </div>
              <div class="card-item-body">Item title</div>
              <div class="card-item-help">description</div>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-header">
            <div class="card-title">Card</div>
          </div>
          <div class="card-media">
            <img src="https://o9qu3mxgj.qnssl.com/holder/multicolored.jpg-cover.lg">
          </div>
          <div class="card-block">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <mn-btn class="is-primary is-block">Submit</mn-btn>
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

<style lang="scss" scoped>
  .scoped-stage {
    height: 600px;
  }
  .scoped-e-1 {
    height: 300px;
  }
</style>
