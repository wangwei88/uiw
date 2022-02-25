"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[766],{80766:function(e,n,l){l.r(n),n.default="SearchTree \u5e26\u641c\u7d22\u7684Tree\u9009\u62e9\u63a7\u4ef6\n===\n\n[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-search-tree/file/README.md)\n[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-search-tree.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-search-tree)\n[![npm version](https://img.shields.io/npm/v/@uiw/react-search-tree.svg?label=@uiw/react-search-tree)](https://npmjs.com/@uiw/react-search-tree)\n\n\u4f7f\u7528\u6811\u9009\u62e9\u63a7\u4ef6\u53ef\u4ee5\u5b8c\u6574\u5c55\u73b0\u5176\u4e2d\u7684\u5c42\u7ea7\u5173\u7cfb\uff0c\u5e76\u5177\u6709\u9009\u4e2d\u72b6\u6001\u3002\u65b0\u7ec4\u4ef6 v4.11.7+ \u652f\u6301\u3002\n\n```jsx\nimport { SearchTree } from 'uiw';\n// or\nimport SearchTree from '@uiw/react-search-tree';\n```\n\n### \u57fa\u7840\u5b9e\u4f8b\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport { TreeChecked, SearchTree, Card, Row, Col } from 'uiw';\n\nconst data = [\n  {\n    label: '\u4e0a\u6d77\u5e02',\n    key: '1-0-0',\n    children:[\n      { label: '\u9ec4\u6d66\u533a', key: '1-0-1' },\n      { label: '\u5362\u6e7e\u533a', key: '1-0-2' },\n      {\n        label: '\u5f90\u6c47\u533a',\n        key: '1-0-3',\n        children:[\n          { label: '\u534a\u6dde\u56ed\u8def\u8857\u9053', key: '1-1-0' },\n          { label: '\u5357\u4eac\u4e1c\u8def\u8857\u9053', key: '1-2-0' },\n          { label: '\u5916\u6ee9\u8857\u9053', key: '1-3-0' },\n        ]\n      },\n    ]\n  },\n  {\n    label: '\u5317\u4eac\u5e02',\n    key: '2-0-0',\n    children:[\n      { label: '\u4e1c\u57ce\u533a', key: '2-1-0' },\n      { label: '\u897f\u57ce\u533a', key: '2-2-0' },\n      {\n        label: '\u5d07\u6587\u533a',\n        key: '2-3-0',\n        children:[\n          { label: '\u4e1c\u82b1\u5e02\u8857\u9053', key: '2-3-1' },\n          { label: '\u4f53\u80b2\u9986\u8def\u8857\u9053', key: '2-3-2' },\n          { label: '\u524d\u95e8\u8857\u9053', key: '2-3-3' },\n        ]\n      },\n    ]\n  },\n  { label: '\u6fb3\u95e8', key: '3' },\n];\n\nconst Demo = () => (\n  <SearchTree\n    allowClear={true}\n    onSearch={(searchValue)=>console.log('SearchTree-> SearchTreeOption',searchValue)}\n    onChange={(selectedAll, selectd, isChecked)=>console.log('SearchTree-> onChange',selectedAll, selectd, isChecked)}\n    value={[{ label: '\u4e1c\u82b1\u5e02\u8857\u9053', value: '2-3-1' }]}\n    options={data}\n    placeholder=\"\u8bf7\u8f93\u5165\u9009\u62e9\"\n  />\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\n## Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| allowClear | \u652f\u6301\u6e05\u9664 | Boolean | `false` |\n| disabled | \u7981\u7528\u9009\u62e9\u5668 | Boolean | `false` |\n| value | \u6307\u5b9a\u5f53\u524d\u9009\u4e2d\u7684\u6761\u76ee | [{label:string, value:string}] | - |\n| options | \u4e0b\u62c9\u6570\u636e\u6e90 | [{label:string, value:string}] | - |\n| placeholder | \u9009\u62e9\u6846\u9ed8\u8ba4\u6587\u5b57 | String | - |\n| size | \u9009\u62e9\u6846\u5c3a\u5bf8 | Enum{large, default, small } | `default` |\n| onChange | \u9009\u4e2d option\uff0c\u6216 input \u7684 value\uff0c\u8c03\u7528\u6b64\u51fd\u6570 | function(selectdAll, selectd, isChecked)=>void | - |\n| onSearch | \u6587\u672c\u6846\u503c\u53d8\u5316\u65f6\u56de\u8c03 | function(searchValue) | - |\n| loading | \u52a0\u8f7d\u4e2d\u72b6\u6001 | Boolean | `false` |\n\n"}}]);
//# sourceMappingURL=766.acf5771d.chunk.js.map