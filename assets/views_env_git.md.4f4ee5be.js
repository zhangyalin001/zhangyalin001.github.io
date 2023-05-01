import{_ as s,o as a,c as n,O as l}from"./chunks/framework.9482e208.js";const h=JSON.parse('{"title":"git安装及使用","description":"","frontmatter":{},"headers":[],"relativePath":"views/env/git.md","filePath":"views/env/git.md"}'),t={name:"views/env/git.md"},e=l(`<h1 id="git安装及使用" tabindex="-1">git安装及使用 <a class="header-anchor" href="#git安装及使用" aria-label="Permalink to &quot;git安装及使用&quot;">​</a></h1><ul><li><h3 id="git安装步骤" tabindex="-1">git安装步骤 <a class="header-anchor" href="#git安装步骤" aria-label="Permalink to &quot;git安装步骤&quot;">​</a></h3></li></ul><ol><li><p>去<a href="https://git-scm.com/downloads" target="_blank" rel="noreferrer">git官网</a>或<a href="https://registry.npmmirror.com/binary.html?path=git-for-windows/" target="_blank" rel="noreferrer">阿里镜像</a>下载软件</p></li><li><p>点击下载软件安装并选择安装路径、安装组件</p></li></ol><ul><li><h3 id="常用git命令" tabindex="-1">常用git命令 <a class="header-anchor" href="#常用git命令" aria-label="Permalink to &quot;常用git命令&quot;">​</a></h3></li></ul><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 基础配置，指定用户名、邮箱</span></span>
<span class="line"><span style="color:#A6ACCD;">git config --global user.name &quot;zhangyalin&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">git config --global user.email zhangyalin@163.com</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// 代码下载,project可选（指定下载后的项目名）</span></span>
<span class="line"><span style="color:#A6ACCD;">git clone git://xx/xx.git </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">project</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// 查看</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch 查看本地所有分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch -a 查看所有的分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch -vv 查看与本地分支及关联的远程分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git status 查看当前状态 </span></span>
<span class="line"><span style="color:#A6ACCD;">git pull 更新分支信息</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// 代码提交</span></span>
<span class="line"><span style="color:#A6ACCD;">git add . 添加代码到暂存区</span></span>
<span class="line"><span style="color:#A6ACCD;">git commit -m &quot;xxx&quot; 将暂存区内容添加到本地仓库中</span></span>
<span class="line"><span style="color:#A6ACCD;">git push 推送本地代码到关联的远程分支</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// 代码回滚</span></span>
<span class="line"><span style="color:#A6ACCD;">git log 查看commit的历史，复制要回滚到的id</span></span>
<span class="line"><span style="color:#A6ACCD;">git reset --hard &lt;id&gt; 或 git revert --hard &lt;id&gt;  reset去掉历史记录/revert不会去除记录</span></span>
<span class="line"><span style="color:#A6ACCD;">git push -f // 强制提交</span></span></code></pre></div>`,5),p=[e];function i(o,r,c,g,C,A){return a(),n("div",null,p)}const m=s(t,[["render",i]]);export{h as __pageData,m as default};
