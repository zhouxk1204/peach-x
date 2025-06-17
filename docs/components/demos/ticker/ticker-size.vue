<docs>
- 预设尺寸：
    - `small`（小号）
    - `medium`（中号，默认值）
    - `large`（大号）
- 数字值（自动转换为 `px` 单位）：
例如 `16` 会被解析为 `16px`
- CSS 标准字体大小值，包括下列几种情况：
    - 绝对单位：`12px`、`1.5rem`、`0.8em`
    - 视口单位：`2vw`、`3vh`（响应式适配）
    - 百分比：`120%`（基于父元素字体大小）
</docs>
<template>
  <div class="demo-ticker-basic">
    <div>
      <div>今日下载量（small）：</div>
      <p-ticker :to="19998" size="small" />
    </div>
    <div>
      <div>今日访问量（medium）：</div>
      <p-ticker :to="19998" />
    </div>
    <div>
      <div>今日成交量（large）：</div>
      <p-ticker :to="19998" size="large" />
    </div>
    <div>
      <div>今日任务量（1.4em）：</div>
      <p-ticker :to="19998" size="1.4em" />
    </div>
    <div>
      <div>本月加班量（24px）：</div>
      <p-ticker :to="19998" size="24px" />
    </div>
  </div>
</template>
<style>
.demo-ticker-basic {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.demo-ticker-basic > div {
  display: flex;
  align-items: center;
  gap: 6px;
}

.demo-ticker-basic > div > div {
  width: 186px;
}
</style>
