"use strict";(self.webpackChunkradicle_docs=self.webpackChunkradicle_docs||[]).push([[734],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),h=a,y=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6017:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={id:"push",title:"Push your changes"},i=void 0,c={unversionedId:"using-radicle/push",id:"using-radicle/push",title:"Push your changes",description:"How you make changes to your local working copy of a Radicle project is entirely up to you. Once you're finished, add",source:"@site/docs/using-radicle/push.md",sourceDirName:"using-radicle",slug:"/using-radicle/push",permalink:"/using-radicle/push",draft:!1,editUrl:"https://github.com/radicle-dev/radicle-docs/blob/master/docs/using-radicle/push.md",tags:[],version:"current",frontMatter:{id:"push",title:"Push your changes"},sidebar:"docsSidebar",previous:{title:"View and share projects",permalink:"/using-radicle/view-share"},next:{title:"Clone a project",permalink:"/using-radicle/clone"}},s={},l=[],p={toc:l};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"How you make changes to your local working copy of a Radicle project is entirely up to you. Once you're finished, add\nand commit your changes with ",(0,a.kt)("inlineCode",{parentName:"p"},"git add")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"git commit")," just as you would when collaborating on any other Git-based\nforge like GitHub or GitLab. "),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"rad push")," to synchronize your changes with a secondary source tree within the project."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ rad push\nPushing \ud83c\udf31 to remote `rad`\n$ git push rad\nTo rad://hnrkmkfqk1yadewcgasm1s6mp5pn1hc5ch6wy.git\n   e2cc2f9..5198e4c  main -> main\n\nGit version 2.35.1\nRadicle signing key ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAILnTPdmcmdNPtJtBT/1S9G+4jOL0V0GD9pPYWgvXmxxQ\n\nSyncing \ud83c\udf31 project rad:git:hnrkmkfqk1yadewcgasm1s6mp5pn1hc5ch6wy to https://willow.radicle.garden/\n\nok Project synced.\n\n\ud83c\udf43 Your project is available at:\n\n   (web) https://app.radicle.xyz/seeds/willow.radicle.garden/rad:git:hnrkmkfqk1yadewcgasm1s6mp5pn1hc5ch6wy/remotes/hynh7gxq3u1c7gu7wupyw99k16tz5td8n6tmwdy9s1xcfwn6zucqfy\n   (git) https://willow.radicle.garden/hnrkmkfqk1yadewcgasm1s6mp5pn1hc5ch6wy.git\n")),(0,a.kt)("p",null,"Click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"(web)")," link to visit ",(0,a.kt)("em",{parentName:"p"},"your")," source tree within the project using the web app, which you can also navigate\nto using the tree selector."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Selecting a tree to view",src:n(4505).Z,width:"606",height:"203"})))}u.isMDXComponent=!0},4505:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/web-interface_trees-022a8b9035fb5b5713e82b91ba1a997d.png"}}]);