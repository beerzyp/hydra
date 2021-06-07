(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{123:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return c})),t.d(a,"metadata",(function(){return i})),t.d(a,"toc",(function(){return o})),t.d(a,"default",(function(){return s}));var n=t(3),r=t(8),p=(t(0),t(270)),c={id:"app_packaging",title:"Application packaging",sidebar_label:"Application packaging"},i={unversionedId:"advanced/app_packaging",id:"version-1.0/advanced/app_packaging",isDocsHomePage:!1,title:"Application packaging",description:"Example application",source:"@site/versioned_docs/version-1.0/advanced/packaging.md",slug:"/advanced/app_packaging",permalink:"/docs/advanced/app_packaging",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.0/advanced/packaging.md",version:"1.0",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1623094063,formattedLastUpdatedAt:"6/7/2021",sidebar_label:"Application packaging",sidebar:"version-1.0/docs",previous:{title:"Hydra plugins types",permalink:"/docs/advanced/plugins"},next:{title:"Hydra in Jupyter Notebooks",permalink:"/docs/advanced/jupyter_notebooks"}},o=[],l={toc:o};function s(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(p.b)("wrapper",Object(n.a)({},l,t,{components:a,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/examples/advanced/hydra_app_example"},Object(p.b)("img",{parentName:"a",src:"https://img.shields.io/badge/-Example%20application-informational",alt:"Example application"}))),Object(p.b)("p",null,"You can package your Hydra application along with its configuration.\nThere is a working example ",Object(p.b)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/examples/advanced/hydra_app_example"},"here"),"."),Object(p.b)("p",null,"You can run it with:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-yaml"},"$ python examples/advanced/hydra_app_example/hydra_app/main.py\ndataset:\n  name: imagenet\n  path: /datasets/imagenet\n")),Object(p.b)("p",null,"To install it, use:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-text"},"$ pip install examples/advanced/hydra_app_example\n...\nSuccessfully installed hydra-app-0.1\n")),Object(p.b)("p",null,"Run the installed app with:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-yaml"},"$ hydra_app\ndataset:\n  name: imagenet\n  path: /datasets/imagenet\n")),Object(p.b)("p",null,"The installed app will use the packaged configuration files."))}s.isMDXComponent=!0},270:function(e,a,t){"use strict";t.d(a,"a",(function(){return d})),t.d(a,"b",(function(){return m}));var n=t(0),r=t.n(n);function p(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){p(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),s=function(e){var a=r.a.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},d=function(e){var a=s(e.components);return r.a.createElement(l.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},b=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,p=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=s(t),b=n,m=d["".concat(c,".").concat(b)]||d[b]||u[b]||p;return t?r.a.createElement(m,i(i({ref:a},l),{},{components:t})):r.a.createElement(m,i({ref:a},l))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var p=t.length,c=new Array(p);c[0]=b;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<p;l++)c[l]=t[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);