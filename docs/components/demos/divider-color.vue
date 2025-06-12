<docs>
您可以通过 `color` 属性设置分割线的颜色，支持所有合法 `CSS` 颜色值（如 `hex`, `rgb`, `rgba`, `hsl` 等）。
</docs>
<template>
  <div>
    <p>
      People don’t realize how much they hate commuting.
      A nice house farther from work is not worth the fraction 
      of your life you are giving to boredom and fatigue.
    </p>
    <p-divider :height="4" color="red" />
    <p>
      There’s some evidence that introverts and extroverts both
      benefit from being pushed to be more extroverted. 
      Consider this the next time you aren’t sure if you feel like going out.
    </p>
    <p-divider color="#c03797" :height="4"/>
    <p>
      History remembers those who got to market first.
      Getting your creation out into the world is 
      more important than getting it perfect.
    </p>
  </div>
</template>