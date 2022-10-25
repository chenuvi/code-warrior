// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";
import glob from "glob";

// 保存每个页面的名称和路径，后面会用到
const multiPage = {};
// 保存页面文件路径
const pageEntry = {};

function getFile() {
  const allEntry = glob.sync("/package/**/index.html");
  allEntry.forEach((entry: string) => {
    const pathArr = entry.split("/");
    const name = pathArr[pathArr.length - 2];
    multiPage[name] = {
      name,
      rootPage: `/package/${name}/index.html`,
    };
    pageEntry[name] = resolve(__dirname, `/package/${name}/index.html`);
  });
}
// 调用一下
getFile();

export default defineConfig({
  build: {
    rollupOptions: {
      input: pageEntry,
    },
  },
});
