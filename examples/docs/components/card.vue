<template>
  <div class="section">

    <div class="letter">
      <div class="letter-body">
        <h1>Card</h1>
        <small>card, header, block, lists, item, button</small>
      </div>
    </div>

    <div class="cols">
      <div class="col">

        <mn-card>
          <mn-card-item>
            <h5 slot="body">Card</h5>
            <mn-icon slot="addon" name="ios-navigate"></mn-icon>
          </mn-card-item>
          <mn-card-item>
            <article>
              <h3>What is Lorem Ipsum?</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <p>
                <mn-inline-image :options="inlineImage" width="120" style="float: left; margin-right: 1rem;"></mn-inline-image>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </p>
              <p>
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </article>
          </mn-card-item>
          <mn-card-item>
            <template slot="body">Item title</template>
            <template slot="help">description</template>
          </mn-card-item>
          <mn-card-item type="link">
            <mn-icon slot="addon" name="compass"></mn-icon>
            <template slot="body">Item title</template>
            <template slot="help">description</template>
          </mn-card-item>
        </mn-card>

      </div>
      <div class="col">

        <mn-card>
          <mn-card-item>
            <mn-icon slot="addon" name="ios-navigate"></mn-icon>
            <h5 slot="body">Card</h5>
          </mn-card-item>
          <mn-card-media>
            <mn-block-image :options="blockImage"></mn-block-image>
          </mn-card-media>
          <mn-card-item>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <mn-btn class="is-primary is-block">Submit</mn-btn>
          </mn-card-item>
        </mn-card>

      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        inlineImage: 'https://o9qu3mxgj.qnssl.com/holder/multicolored.jpg-cover.lg',
        blockImage: [
          {
            min: 0,
            max: 700,
            scale: 400 / 200,
            src: 'https://o9qu3mxgj.qnssl.com/o_1ard82t21s7j9a0184ier9qaa7k.png-cover.md'
          },
          {
            min: 701,
            src: 'https://o9qu3mxgj.qnssl.com/holder/multicolored.jpg-cover.lg'
          }
        ]
      }
    }
  }
</script>
