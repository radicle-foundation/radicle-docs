"use strict";(self.webpackChunkradicle_docs=self.webpackChunkradicle_docs||[]).push([[272],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?i.createElement(f,s(s({ref:t},c),{},{components:n})):i.createElement(f,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var u=2;u<a;u++)s[u]=n[u];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5397:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var i=n(7462),r=(n(7294),n(3905));const a={id:"issues",title:"Create, view, and comment on issues"},s=void 0,o={unversionedId:"using-radicle/issues",id:"using-radicle/issues",title:"Create, view, and comment on issues",description:"rad supports creating, reading, reacting to, and commenting on issues.",source:"@site/docs/using-radicle/issues.md",sourceDirName:"using-radicle",slug:"/using-radicle/issues",permalink:"/using-radicle/issues",draft:!1,editUrl:"https://github.com/radicle-dev/radicle-docs/blob/master/docs/using-radicle/issues.md",tags:[],version:"current",frontMatter:{id:"issues",title:"Create, view, and comment on issues"},sidebar:"docsSidebar",previous:{title:"Radicle's collaboration workflow",permalink:"/using-radicle/collaboration"},next:{title:"Track, review, and merge patches",permalink:"/using-radicle/track-review-merge"}},l={},u=[{value:"Create an issue",id:"create-an-issue",level:2},{value:"View issues",id:"view-issues",level:2},{value:"Comment on existing issues",id:"comment-on-existing-issues",level:2},{value:"Delete issues",id:"delete-issues",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"rad")," supports creating, reading, reacting to, and commenting on issues."),(0,r.kt)("p",null,"We'll eventually bring these features to the Radicle ",(0,r.kt)("a",{parentName:"p",href:"https://app.radicle.xyz"},"web app"),", but for now, they work only on\nthe CLI."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This document details an experimental feature that's still undergoing active development. There will likely be bugs and breaking changes.")),(0,r.kt)("h2",{id:"create-an-issue"},"Create an issue"),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"rad issue new")," to open a temporary text file in your terminal for editing its title, labels, and description. Then\nrun ",(0,r.kt)("inlineCode",{parentName:"p"},"rad push")," to synchronize any issues you've stored locally with the Radicle network, which lets your collaborators\nview them."),(0,r.kt)("p",null,"Labels and descriptions aren't yet displayed in the CLI, but you can still add them now for later use."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"rad issue new --title <title> --description <text>")," to create an issue non-interactively.")),(0,r.kt)("h2",{id:"view-issues"},"View issues"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"rad issue list")," displays a list of existing issues, along with their unique ID and title. "),(0,r.kt)("p",null,"If you're a collaborator on project with multiple people contributing issues, you'll need to run ",(0,r.kt)("inlineCode",{parentName:"p"},"rad pull")," to receive\nthe latest state of the project to view issues."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$rad issue list\nhnrkbz8ta5uqzpjguhfoykdxo7s656k8w7z9o An example issue\nhnrknjfmh9xi8z1b6jj66zqf5qi8txbc64z3y A second example\n")),(0,r.kt)("h2",{id:"comment-on-existing-issues"},"Comment on existing issues"),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"rad comment <id>"),", replacing ",(0,r.kt)("inlineCode",{parentName:"p"},"<id>")," with the ID of an issue in your Radicle project, to "),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"As with new issues, ",(0,r.kt)("inlineCode",{parentName:"p"},"rad comment <id> --description <text>")," creates a comment non-interactively after replacing ",(0,r.kt)("inlineCode",{parentName:"p"},"<text>"),"\nwith your comment.")),(0,r.kt)("h2",{id:"delete-issues"},"Delete issues"),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"rad issue delete <id>")," to remote an issue from your Radicle project."))}p.isMDXComponent=!0}}]);