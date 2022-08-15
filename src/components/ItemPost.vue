<template>
  <div class="post-it" draggable="true">
    <div class="post-it--details">
      <h3>
        <slot name="post-it--title"></slot>
      </h3>
      <p>
        <slot name="post-it--content"></slot>
      </p>
    </div>
    <div class="post-it--footer">
      <slot name="post-it--back"></slot>
    </div>
  </div>
</template>