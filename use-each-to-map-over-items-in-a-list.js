<style type='text/sass'>
  $colors : (blue, black, red);

  @each $color in $colors {
  .#{$color}-bg {background-color: $color;}
  }
  
  
  div {
    height: 200px;
    width: 200px;
  }
</style>

<div class="blue-bg"></div>
<div class="black-bg"></div>
<div class="red-bg"></div>