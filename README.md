# styled-px2vw-plugin


Extension of [styled-components](https://www.styled-components.com/) with features for convert px to vw units. <br>

based on [styled-px2vw](https://github.com/hnzycfcfed/styled-px2vw)

## Installation
yarn:
```
yarn add styled-px2vw-plugin
```
npm:
```
npm i styled-px2vw-plugin -S
```

```javascript
import styled, { initStyledConfig } from 'styled-px2vw-plugin';
// 初始化配置设计稿宽度、过滤属性 （可选）
initStyledConfig({ viewportWidth: 750, ignoreAttrs: ['font-size', /.*font-size.*/] });

// 默认值
{
  viewportWidth: 750,
  ignoreAttrs: ['font-size'],
}

```

from
```javascript
import styled from 'styled-components';

const TestDiv = styled.div`
  height: 100%;
  font-size: 24px;
  padding: 0 20px;
  a {
    color: white;
  }
  @media screen and (min-width: ${() => 900 + 'px'}) {
    width: 900px;
  }
`;
```
to
```javascript
import styled from 'styled-px2vw';

const TestDiv = styled.div`
  height: 100%;
  font-size: 24px;
  padding: 0 20px; /** px2vw_ignore */
  padding: 0 20px;
  a {
    color: white;
  }
  @media screen and (min-width: ${() => 900 + 'px /** px2vw_ignore */'}) {
    width: 900px; /** px2vw_ignore */
  }
`;
```
output

![converted](/docs/示例输出.png)


