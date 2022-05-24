# vue-tv-focusable-type

给[vue-tv-focusable](https://www.npmjs.com/package/vue-tv-focusable)添加类型

## 使用

将`shim-vue.d.ts`放到你的项目中即可

> :warning: 
> 
> **注意`shim-vue.d.ts`文件中最后需要加入`export {}`**(或者有`import`也行)来表明它是个[`TypeScript module`](https://www.typescriptlang.org/docs/handbook/modules.html)，否则增加的属性将会覆盖原来`vue`本身的属性，而不是增加。
## 参考

- [Augmenting Global Properties](https://vuejs.org/guide/typescript/options-api.html#augmenting-global-properties)
