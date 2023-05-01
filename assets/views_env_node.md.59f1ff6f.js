import{_ as e,o as n,c as a,O as s}from"./chunks/framework.9482e208.js";const u=JSON.parse('{"title":"node及管理工具安装","description":"","frontmatter":{},"headers":[],"relativePath":"views/env/node.md","filePath":"views/env/node.md"}'),t={name:"views/env/node.md"},l=s(`<h1 id="node及管理工具安装" tabindex="-1">node及管理工具安装 <a class="header-anchor" href="#node及管理工具安装" aria-label="Permalink to &quot;node及管理工具安装&quot;">​</a></h1><p>因为每个项目依赖的node版本不同，所以需要安装一个node版本管理工具，比较常用的就是nvm</p><ul><li><h3 id="windos安装步骤" tabindex="-1">windos安装步骤 <a class="header-anchor" href="#windos安装步骤" aria-label="Permalink to &quot;windos安装步骤&quot;">​</a></h3></li></ul><ol><li><p>github找到nvm 1.1.7-setup.zip并下载，直接运行nvm-setup.exe（<a href="https://github.com/coreybutler/nvm-windows/releases" target="_blank" rel="noreferrer">下载地址</a>）</p></li><li><p>选择nvm安装路径 <img src="https://nvm.uihtm.com/images/step2.png" alt="alt 选择nvm安装路径"></p></li><li><p>选择nodejs路径 <img src="https://nvm.uihtm.com/images/step3.png" alt="alt 选择nvm安装路径"></p></li><li><p>确认安装即可 <img src="https://nvm.uihtm.com/images/step4.png" alt="alt 选择nvm安装路径"></p></li></ol><ul><li><h3 id="常用nvm命令" tabindex="-1">常用nvm命令 <a class="header-anchor" href="#常用nvm命令" aria-label="Permalink to &quot;常用nvm命令&quot;">​</a></h3></li></ul><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">nvm install &lt;version&gt;  安装指定版本node</span></span>
<span class="line"><span style="color:#A6ACCD;">nvm uninstall &lt;version&gt; 卸载指定版本node。</span></span>
<span class="line"><span style="color:#A6ACCD;">nvm list </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">available</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> 查看已安装版本node列表。可选参数available，显示可安装的所有版本</span></span>
<span class="line"><span style="color:#A6ACCD;">nvm use &lt;version&gt; ：切换指定版本node</span></span></code></pre></div>`,6),o=[l];function i(p,r,c,d,m,h){return n(),a("div",null,o)}const _=e(t,[["render",i]]);export{u as __pageData,_ as default};