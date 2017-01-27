<template>
  <div class="">
    <mn-card>
      <mn-card-item>Selecting one will hide the others.</mn-card-item>
      <mn-card-item>
        <mn-collapse :selected="0">
          <mn-collapse-pane title="item #1">
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </mn-collapse-pane>
          <mn-collapse-pane title="item #2">
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </mn-collapse-pane>
          <mn-collapse-pane title="item #3">
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </mn-collapse-pane>
        </mn-collapse>
      </mn-card-item>
    </mn-card>
    <mn-card>
      <mn-card-item>Selecting one will not hide the others.</mn-card-item>
      <mn-card-item>
        <mn-collapse type="flat">
          <mn-collapse-pane title="item #1">
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </mn-collapse-pane>
          <mn-collapse-pane title="item #2">
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </mn-collapse-pane>
          <mn-collapse-pane title="item #3">
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </mn-collapse-pane>
        </mn-collapse>
      </mn-card-item>
    </mn-card>
  </div>
</template>

<script>
  export default {

  }
</script>
