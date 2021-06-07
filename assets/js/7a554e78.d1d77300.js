(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{176:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(8),o=(r(0),r(270)),i={id:"intro",title:"Introduction",sidebar_label:"Introduction"},s={unversionedId:"upgrades/intro",id:"upgrades/intro",isDocsHomePage:!1,title:"Introduction",description:"Upgrading to a new Hydra version is usually an easy process.",source:"@site/docs/upgrades/intro.md",slug:"/upgrades/intro",permalink:"/docs/next/upgrades/intro",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/upgrades/intro.md",version:"current",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1623094063,formattedLastUpdatedAt:"6/7/2021",sidebar_label:"Introduction",sidebar:"docs",previous:{title:"Release process",permalink:"/docs/next/development/release"},next:{title:"Changes to @hydra.main() and hydra.initialize()",permalink:"/docs/next/upgrades/1.0_to_1.1/changes_to_hydra_main_config_path"}},l=[{value:"Major version upgrades",id:"major-version-upgrades",children:[]},{value:"Patch version upgrades",id:"patch-version-upgrades",children:[]},{value:"Dev release upgrades",id:"dev-release-upgrades",children:[]}],c={toc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Upgrading to a new Hydra version is usually an easy process."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"NOTE")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Hydra versioning has only major versions and patch versions. A bump of the first two version digits is considered a major release.\nA major release may have multiple followup patch releases that will fix bugs without introducing new functionality."))),Object(o.b)("h2",{id:"major-version-upgrades"},"Major version upgrades"),Object(o.b)("p",null,"Hydra will typically provide helpful warnings about required changes, sometimes pointing to an upgrade page that provides more details about the required changes."),Object(o.b)("p",null,"For a smooth upgrade experience, please follow these simple rules:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Upgrade to the latest patch version first"),".\ne.g: If you are upgrading from 1.0 to 1.1, be sure to upgrade to the latest 1.0 version first (1.0.6)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Address ALL runtime warnings issued by Hydra."),Object(o.b)("br",{parentName:"li"}),"A warning in one version is likely to become a far less friendly error in the next major version."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Do not skip major versions"),".",Object(o.b)("br",{parentName:"li"}),"e.g: If you are upgrading from Hydra 1.0 to Hydra 1.2 - Do it by",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Upgrading from 1.0 to 1.1, addressing all the warnings."),Object(o.b)("li",{parentName:"ul"},"Upgrading from 1.1 to 1.2, addressing all the warnings.")))),Object(o.b)("h2",{id:"patch-version-upgrades"},"Patch version upgrades"),Object(o.b)("p",null,"Patch releases normally contains only bug fixes and are thus safe and easy to upgrade (e.g. ",Object(o.b)("strong",{parentName:"p"},"1.0.3")," to ",Object(o.b)("strong",{parentName:"p"},"1.0.6"),").",Object(o.b)("br",{parentName:"p"}),"\n","In rare cases, patch releases will introduce new warnings. Be sure to address them before upgrading to the next major version."),Object(o.b)("h2",{id:"dev-release-upgrades"},"Dev release upgrades"),Object(o.b)("p",null,"Development releases are subject to breaking changes without notice. Please be aware that upgrading to a new development release\nis more likely to introduce some breakage. No attempt will be made to make upgrading between development releases easy."))}p.isMDXComponent=!0},270:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),b=n,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return r?a.a.createElement(m,s(s({ref:t},c),{},{components:r})):a.a.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);