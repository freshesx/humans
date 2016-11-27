<template>

  <mn-card>
    <mn-card-item>
      <h5 slot="body">Card media</h5>
      <mn-icon slot="addon" name="ios-navigate"></mn-icon>
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
    <mn-card-item>
      <article>
        <h3>What is Lorem Ipsum?</h3>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
      </article>
    </mn-card-item>
  </mn-card>

</template>

<script>
  export default {
    data () {
      return {
        // Simple image
        // blockImage: 'https://o9qu3mxgj.qnssl.com/holder/multicolored.jpg-cover.lg',
        // Media query image
        blockImage: [
          {
            min: 0,
            max: 700,
            scale: 400 / 200,
            src: 'https://o9qu3mxgj.qnssl.com/o_1ard82t21s7j9a0184ier9qaa7k.png-cover.md'
          },
          {
            min: 701,
            scale: 400 / 200,
            src: 'https://o9qu3mxgj.qnssl.com/holder/multicolored.jpg-cover.lg'
          }
        ]
      }
    }
  }
</script>
