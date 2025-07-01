/// <reference types="vite/client" />

interface ImportMeta {
url: string;
}
// 在 env.d.ts 或 shim.d.ts 中補 .vue 模組宣告
// 這樣 TypeScript 才知道怎麼解析 .vue 檔案。
// 這個檔案要確保有被 tsconfig.json 中包含進去（通常 include: ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.vue"]）
declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}