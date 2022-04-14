"use strict";(self.webpackChunkradicle_docs=self.webpackChunkradicle_docs||[]).push([[717],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),h=o,f=u["".concat(l,".").concat(h)]||u[h]||d[h]||a;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4260:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),c=["components"],i={id:"clone",title:"Clone a project"},l=void 0,s={unversionedId:"using-radicle/clone",id:"using-radicle/clone",title:"Clone a project",description:"To start collaborating on a project, you first need to clone the project's to your local system.",source:"@site/docs/using-radicle/clone.md",sourceDirName:"using-radicle",slug:"/using-radicle/clone",permalink:"/docs/using-radicle/clone",editUrl:"https://github.com/radicle-dev/radicle-docs/blob/master/docs/using-radicle/clone.md",tags:[],version:"current",frontMatter:{id:"clone",title:"Clone a project"},sidebar:"docsSidebar",previous:{title:"View and share projects",permalink:"/docs/using-radicle/view-share"},next:{title:"Push changes",permalink:"/docs/using-radicle/push"}},p={},d=[],u={toc:d};function h(e){var t=e.components,i=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To start collaborating on a project, you first need to clone the project's to your local system."),(0,a.kt)("p",null,"When using the Radicle ",(0,a.kt)("a",{parentName:"p",href:"/docs/using-radicle/view-share"},"web interface"),", click on the ",(0,a.kt)("strong",{parentName:"p"},"Clone")," button to display a dropdown with the full\n",(0,a.kt)("inlineCode",{parentName:"p"},"rad clone...")," command, which you can paste into your terminal."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Finding the clone command via the web interface",src:n(4852).Z,width:"452",height:"251"})),(0,a.kt)("p",null,"If you choose not to use the web interface, you can also build the clone URL with the syntax\n",(0,a.kt)("inlineCode",{parentName:"p"},"rad://<seed-id>/<project-urn>"),", with the ",(0,a.kt)("inlineCode",{parentName:"p"},"rad:git:")," portion of the URN removed. Ask the project's maintainer if you\ndon't have either of these identifiers."),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"rad clone")," to fetch a copy of the project and check out the canonical branch on your local system."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ rad clone rad://willow.radicle.garden/hnrkmkfqk1yadewcgasm1s6mp5pn1hc5ch6wy\nGit version 2.35.1\n\nSyncing \ud83c\udf31 project rad:git:hnrkmkfqk1yadewcgasm1s6mp5pn1hc5ch6wy from https://willow.radicle.garden/\n...\n")),(0,a.kt)("p",null,"You'll be asked to verify whether you want to associate the key for your Radicle identity with this project \u2014 hit ",(0,a.kt)("inlineCode",{parentName:"p"},"Y")," to\naccept. Once the clone is finished, you can double-check the project URN and seed node."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ git config --local rad.seed\nhttps://willow.radicle.garden/\n$ rad .\nrad:git:hnrkmkfqk1yadewcgasm1s6mp5pn1hc5ch6wy\n")),(0,a.kt)("p",null,"You can also see who else has contributed to the project with ",(0,a.kt)("inlineCode",{parentName:"p"},"rad remote"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ rad remote\njoelhans hyyc74e14b4pddma6jko8385cnjdj154aorp71456gqb4o5uqwkwpk delegate\n")),(0,a.kt)("p",null,"The output will show one or more collaborators, some of which may also be a\n",(0,a.kt)("a",{parentName:"p",href:"/docs/understanding-radicle/glossary#delegate"},"delegate"),", along with the display name and Peer ID for each."))}h.isMDXComponent=!0},4852:function(e,t,n){t.Z=n.p+"assets/images/web-interface_clone-fa3a15d98ccc628833b85fe7a1474fdb.png"}}]);