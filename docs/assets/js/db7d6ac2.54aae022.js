"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[1295],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||s;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7464:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=n(7462),o=n(3366),s=(n(7294),n(3905)),a=["components"],i={id:"soft_assertions",title:"Soft Assertions",slug:"soft-assertions.html"},l=void 0,c={unversionedId:"assertions/soft_assertions",id:"assertions/soft_assertions",isDocsHomePage:!1,title:"Soft Assertions",description:"Normally, assertions like shouldBe throw an exception when they fail.",source:"@site/docs/assertions/soft_assertions.md",sourceDirName:"assertions",slug:"/assertions/soft-assertions.html",permalink:"/docs/assertions/soft-assertions.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/assertions/soft_assertions.md",tags:[],version:"current",frontMatter:{id:"soft_assertions",title:"Soft Assertions",slug:"soft-assertions.html"},sidebar:"assertions",previous:{title:"Clues",permalink:"/docs/assertions/clues.html"},next:{title:"Eventually",permalink:"/docs/assertions/eventually.html"}},u=[],f={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Normally, assertions like ",(0,s.kt)("inlineCode",{parentName:"p"},"shouldBe")," throw an exception when they fail.\nBut sometimes you want to perform multiple assertions in a test, and\nwould like to see all of the assertions that failed. Kotest provides\nthe ",(0,s.kt)("inlineCode",{parentName:"p"},"assertSoftly")," function for this purpose."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},"assertSoftly {\n  foo shouldBe bar\n  foo should contain(baz)\n}\n")),(0,s.kt)("p",null,"If any assertions inside the block failed, the test will continue to\nrun. All failures will be reported in a single exception at the end of\nthe block."),(0,s.kt)("p",null,"Another version of ",(0,s.kt)("inlineCode",{parentName:"p"},"assertSoftly")," takes a test target and lambda with test target as its receiver."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'assertSoftly(foo) {\n    shouldNotEndWith("b")\n    length shouldBe 3\n}\n')),(0,s.kt)("p",null,"We can configure assert softly to be implicitly added to every test via ",(0,s.kt)("a",{parentName:"p",href:"/docs/framework/project-config.html"},"project config"),"."))}p.isMDXComponent=!0}}]);