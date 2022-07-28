"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4691],{3905:(t,e,l)=>{l.d(e,{Zo:()=>f,kt:()=>k});var n=l(7294);function a(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function r(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function o(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?r(Object(l),!0).forEach((function(e){a(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function i(t,e){if(null==t)return{};var l,n,a=function(t,e){if(null==t)return{};var l,n,a={},r=Object.keys(t);for(n=0;n<r.length;n++)l=r[n],e.indexOf(l)>=0||(a[l]=t[l]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)l=r[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(a[l]=t[l])}return a}var u=n.createContext({}),p=function(t){var e=n.useContext(u),l=e;return t&&(l="function"==typeof t?t(e):o(o({},e),t)),l},f=function(t){var e=p(t.components);return n.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var l=t.components,a=t.mdxType,r=t.originalType,u=t.parentName,f=i(t,["components","mdxType","originalType","parentName"]),m=p(l),k=a,c=m["".concat(u,".").concat(k)]||m[k]||s[k]||r;return l?n.createElement(c,o(o({ref:e},f),{},{components:l})):n.createElement(c,o({ref:e},f))}));function k(t,e){var l=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=l.length,o=new Array(r);o[0]=m;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var p=2;p<r;p++)o[p]=l[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,l)}m.displayName="MDXCreateElement"},8120:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=l(7462),a=(l(7294),l(3905));const r={},o="[7] Network Flow",i={unversionedId:"Algorithm/Algorithm[7]",id:"Algorithm/Algorithm[7]",title:"[7] Network Flow",description:"The Maximum-Flow Problem",source:"@site/docs/Algorithm/Algorithm[7].md",sourceDirName:"Algorithm",slug:"/Algorithm/Algorithm[7]",permalink:"/docs/Algorithm/Algorithm[7]",draft:!1,editUrl:"https://github.com/yehs1225/yehs1225.github.io/docs/Algorithm/Algorithm[7].md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"[6]Dynamic Programming",permalink:"/docs/Algorithm/Algorithm[6]"},next:{title:"[8] NP and Computational Intractability",permalink:"/docs/Algorithm/Algorithm[8]"}},u={},p=[{value:"The Maximum-Flow Problem",id:"the-maximum-flow-problem",level:2},{value:"Flow Networks",id:"flow-networks",level:4},{value:"Defining Flow",id:"defining-flow",level:4},{value:"The Problem",id:"the-problem",level:4},{value:"Design Algorithm",id:"design-algorithm",level:2},{value:"The Residual Graph",id:"the-residual-graph",level:3},{value:"Augmenting Paths",id:"augmenting-paths",level:3},{value:"Ford-Fulkerson Algorithm",id:"ford-fulkerson-algorithm",level:3},{value:"Maximum Flows and Minimum Cuts",id:"maximum-flows-and-minimum-cuts",level:2},{value:"Analyze Algorithm\uff1aMax-Flow = Min-Cut",id:"analyze-algorithmmax-flow--min-cut",level:2}],f={toc:p};function s(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"7-network-flow"},"[7]"," Network Flow"),(0,a.kt)("h2",{id:"the-maximum-flow-problem"},"The Maximum-Flow Problem"),(0,a.kt)("p",null,"\u751f\u6d3b\u4e2d\u5e38\u7528\u5716\u5f62Graph\u4f86\u63cf\u8ff0\u7db2\u8def\u4ea4\u901a\u554f\u984c\uff08transportation networks\uff09\uff0c\u5176edges\u53ef\u7528\u4f86\u651c\u5e36\u4ea4\u901a\u91cf\uff08carry flow\uff09\uff0c\u800cnodes\u5247\u626e\u6f14\u8def\u7531\u9ede\uff08switches\uff09\u9023\u63a5\u4e0d\u540cedges\u3002Network\u6a21\u578b\u7576\u4e2d\u6709\u5e7e\u9805\u7d44\u6210\u5143\u7d20\uff1aedges\u4e0a\u7684capacities\uff0c\u8868\u793a\u53ef\u651c\u5e36\u91cf\uff1bnode source\u7522\u751f\u4ea4\u901a\u91cf\uff0cnode sink\u5438\u6536\u4ea4\u901a\u91cf\uff1b\u6700\u5f8c\u662ftraffic\u672c\u8eab\uff0c\u6703\u5728edges\u7576\u4e2d\u88ab\u50b3\u905e\u3002"),(0,a.kt)("h4",{id:"flow-networks"},"Flow Networks"),(0,a.kt)("p",null,"flow network\u662f\u4e00\u6709\u5411\u5716G = \uff08V,E\uff09\uff0c\u4e14\u6709\u4ee5\u4e0b\u7279\u9ede\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6bcf\u689d\u908a\u90fde\u90fd\u6709\u5176capacity\uff0c\u70ba\u4e00\u6b63\u6578\uff0c\u7528Ce\u8868\u793a\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5716\u4e2d\u7684\u9ede\u6709\u55ae\u4e00\u8d77\u59cb\u9edesource\uff08s\uff09\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5716\u4e2d\u7684\u9ede\u6709\u55ae\u4e00\u7d42\u9edesink\uff08t\uff09\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u9664\u4e86source\u3001sink\u4e4b\u5916\u7684\u9ede\u7a31\u70bainternal nodes\u3002")),(0,a.kt)("p",null,"\u5047\u8a2d\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6c92\u6709\u908a\u6d41\u5165source\uff1b\u6c92\u6709\u908a\u6d41\u51fasink\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u6bcf\u500bnode\u81f3\u5c11\u90fd\u6709\u4e00edge\u76f8\u9130\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u6240\u6709capacity\u7686\u70ba\u6574\u6578\u3002")),(0,a.kt)("h4",{id:"defining-flow"},"Defining Flow"),(0,a.kt)("p",null,"\u5b9a\u7fa9\u4f55\u8b02carry traffic or flow\u3002"),(0,a.kt)("p",null,"s-t flow \u662f\u4e00function f\uff0c\u6620\u5c04\u6bcf\u4e00\u689dedge\u5230\u4e00\u500b\u975e\u8ca0\u5be6\u6578\uff0cf : E->R+\uff1bf(e)\u4ee3\u8868edge e\u53ef\u651c\u5e36\u7684flow\u5bb9\u91cf\u3002\u4e26\u4e14flow f \u6eff\u8db3\u4e0b\u5217\u5169\u9805\u7279\u6027\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Capacity Conditions\uff08\u5bb9\u91cf\u9650\u5236\uff09"),"\uff1a\u5728\u6240\u6709E\u7576\u4e2d\u7684\u908ae, \u7686\u7b26\u5408 0 \u2264 f(e) \u2264 Ce."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Conservation conditions\uff08\u5b88\u6046\uff09")," \uff1a\u5c0d\u65bc\u9664\u4e86s\u3001t\u5916\u7684\u6240\u6709\u9edev\uff0c\u6240\u6709\u6d41\u9032v\u7684\u908ae \u03a3f(e) = \u6240\u6709\u6d41\u51fav\u7684\u908ae \u03a3f(e)")),(0,a.kt)("h4",{id:"the-problem"},"The Problem"),(0,a.kt)("p",null,"\u7d66\u5b9a\u4e00flow network\uff0c\u4e00\u500b\u81ea\u7136\u7684\u76ee\u6a19\u5c31\u662f\u5b89\u6392traffic\u4f86\u6700\u6709\u6548\u7387\u5730\u4f7f\u7528\u53ef\u5f97\u8cc7\u6e90\uff1a"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Given : a flow network"),(0,a.kt)("p",{parentName:"blockquote"},"Output\uff1aa flow of maximum possible value")),(0,a.kt)("p",null,"\u89c0\u5bdf\u9019\u4e00\u554f\u984c\uff0c\u53ef\u4ee5\u7528\u554f\u984c\u672c\u8eab\u7684\u67b6\u69cb\u53bb\u627e\u5230s-t flow\u7684\u4e0a\u9650\u503c\u3002\u5047\u8a2d\u5c07G\u5206\u70ba\u5169\u96c6\u5408A\u548cB\uff0c\u4f7f\u5f97s\u2208A\uff1bt\u2208B\u3002\u90a3\u9ebc\u53ef\u76f4\u89ba\u7406\u89e3\u7576\u4e00flow\u8981\u5f9es\u5230t\uff0c\u52e2\u5fc5\u5f97\u5728\u67d0\u4e00\u6642\u523b\u5f9eA\u5230B\uff0c\u56e0\u6b64\u6703\u88ab\u4e00\u689dedge\u7684capacity\u6240\u8a2d\u5b9a\u4e0a\u9650\u3002\u9019\u8868\u793a\u5716\u5f62\u4e2d\u7684\u6bcf\u4e00\u689d ",(0,a.kt)("strong",{parentName:"p"},"cut")," \u6703\u8a2d\u5b9aflow\u53ef\u80fd\u7684\u4e0a\u9650\u503c\u3002"),(0,a.kt)("h2",{id:"design-algorithm"},"Design Algorithm"),(0,a.kt)("p",null,"\u521d\u59cb\u6642\uff0c\u8a2d\u5b9af(e) = 0 for all e\u3002"),(0,a.kt)("p",null,'\u9996\u5148\u5617\u8a66"push" flow\u5f9es\u5230t\uff0cpath\u7531{(s,u) , (u,v) , (v,t)}\u7d44\u6210\u3002\u6311\u9078\u6700\u5927\u53ef\u901a\u904e\u91cf20\uff0c\u4e26\u66f4\u65b0\u9019\u4e9bedge\u7684f(e)=20\uff0c\u6c92\u7528\u5230\u7684\u5176\u4ed6\u5169\u689d\u5c31\u7dad\u63010\u3002\u73fe\u5728\u6211\u5011\u7684flow\u503c\u7dad\u6301\u572820\uff0c\u9019\u6a23\u662f\u6700\u5927\u53ef\u80fd\u7684\u503c\u55ce\uff1f\u4e0d!\u56e0\u70ba\u53ef\u80fd\u503c\u662f30\u3002\u554f\u984c\u51fa\u5728 \u2014 \u6211\u5011\u76ee\u524d\u57f7\u8457\u65bc\u60f3\u8981\u50c5\u7528\u4e00\u689d\uff53\uff0d\uff54\u8def\u5f91\u76f4\u63a5push\u5b8c\u6240\u6709flow\uff08\u5728\u4e0d\u8d85\u904e\u5404\u908a\u9650\u5236\u4e0b\uff09\u3002'),(0,a.kt)("p",null,"\u56e0\u6b64\u505a\u4e9b\u6539\u8b8a\uff0c\u6211\u5011\u770b(c)\u7576\u4e2d\u7684\u865b\u7dda\u90e8\u5206\uff0cpush 10\u5f9es\u5230v\uff0c\u9020\u6210v\u4e0d\u5b88\u6046\uff08\u6d41\u516520+10\uff1b\u6d41\u51fa20\uff09\uff0c\u56e0\u6b64\u6211\u5011 ",(0,a.kt)("strong",{parentName:"p"},"\u53d6\u6d88\u64cd\u4f5c(undo)"),"10\u5f9eu\u5230v\uff0c\u5982\u6b64\u78ba\u4fddv\u7684\u5b88\u6046\uff0c\u4f46\u662f\u8b8a\u6210u\u4e0d\u5b88\u6046\uff08\u6d41\u516520\uff1b\u6d41\u51fa10\uff09\uff0c\u56e0\u6b64\u6211\u5011push 10\u5f9eu\u5230t\u3002"),(0,a.kt)("p",null,"\u5c07\u4e0a\u8ff0\u64cd\u4f5c\u6574\u7406\u4e00\u4e0b\uff0c\u53ef\u77e5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6211\u5011\u53ef\u4ee5push ",(0,a.kt)("strong",{parentName:"li"},"forward")," \u5269\u9918\u53ef\u901a\u904e\u6d41\u91cf\uff08leftover\uff09\uff0c\u6700\u76f4\u89ba\u7684\u4f5c\u6cd5\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6211\u5011\u53ef\u4ee5push ",(0,a.kt)("strong",{parentName:"li"},"backward"),"\u5df2\u7d93\u6709\u651c\u5e36\u6d41\u91cf\u7684\u908a\uff0c\u4f86\u5206\u6563\u4e0d\u540c\u65b9\u5411\u7684\u6d41\u91cf\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{src:l(757).Z,width:"950",height:"342"})),(0,a.kt)("h3",{id:"the-residual-graph"},"The Residual Graph"),(0,a.kt)("p",null,"\u85c9\u7531\u4e0a\u9762\u53ef\u4ee5push forward & backward\u7684\u7279\u6027\uff0c\u6211\u5011\u5b9a\u7fa9\u4e00\u5716Gf\uff08Residual Graph\uff09\uff0c\u4e26\u6709\u4ee5\u4e0b\u7279\u6027\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Gf\u548cG\u7684node \u96c6\u5408\u6703\u662f\u4e00\u6a23\u7684\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"forward edges\uff1ae = (u,v) in Gf, \u5176\u5bb9\u91cf\u70baCe - f(e)\uff08leftover\uff09\u3002"),(0,a.kt)("p",{parentName:"li"},"\u56e0\u70ba\u5728e = (u,v) in G\u4e2d\uff0c\u5df2\u6709f(e)\u88ab\u4f7f\u7528\uff0c\u56e0\u6b64\u5728Gf\u6703\u662fCe - f(e)\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"backward edges : e' = (v,u) in Gf\uff0c\u5176\u5bb9\u91cf\u70baf(e)\u3002"),(0,a.kt)("p",{parentName:"li"},"\u56e0\u70ba\u5728e = (u,v) in G\u4e2d\uff0c\u5df2\u6709f(e)\u88ab\u4f7f\u7528\uff0c\u56e0\u6b64\u53ef\u4ee5 ",(0,a.kt)("strong",{parentName:"p"},"undo"),"\u7684\u91cf\u70baf(e)\u3002"))),(0,a.kt)("p",null,"\u6839\u64da\u4e0a\u9762\u5b9a\u7fa9\uff0c\u6211\u5011\u53ef\u4ee5\u77e5\u9053\u5728Gf\u7576\u4e2d\u7684\u908a\u6578\u91cf\u53ef\u80fd\u6703\u662fG\u7684\u5169\u500d\uff0c\u4e14\u901a\u5e38\u6211\u5011\u6703\u7a31residual graph\u4e2d\u7684capacity\u70baresidual capacity\uff0c\u4ee5\u8ddf\u539f\u59cbG\u7576\u4e2d\u7684\u5bb9\u91cfcapacity\u505a\u5340\u5225\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:l(3980).Z,width:"977",height:"331"})),(0,a.kt)("h3",{id:"augmenting-paths"},"Augmenting Paths"),(0,a.kt)("p",null,"\u73fe\u5728\u6211\u5011\u8981\u78ba\u5207\u5730\u5b9a\u7fa9\u4e00\u689dGf\u7576\u4e2d\u53ef\u7531s-t\u7684flow\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4ee4P\u70baGf\u7576\u4e2d\u4e00\u689dsimple path s-t\uff0c\u4e5f\u5c31\u662f\u8aaaP\u4e0d\u6703\u5230\u540c\u4e00\u9ede\u8d85\u904e\u4e00\u6b21\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5b9a\u7fa9bottleneck(P,f)\u70baP\u7576\u4e2d\u6700\u5c0f\u7684minimum residual capacity\uff08respect to f\uff09\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u63a5\u8005\u6211\u5011\u5b9a\u7fa9\u4e00\u64cd\u4f5c\u7a31\u70baaugment(f,P)\uff0c\u5176\u6703\u5728G\u7576\u4e2d\u7522\u751f\u65b0\u7684flow f ' \u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-pseudocode"},"augment(f,P)\nLet b = bottleneck(P,f)\nFor each edge (u,v)\u2208P\n    If e=(u,v) is a forward edge then\n        increase f(e) in G by b\n    Else ((u,v) is a backward edge, and let e=(v,u))\n        decrease f(e) in G by b\n    Endif\nEndfor\nReturn f\n")),(0,a.kt)("h3",{id:"ford-fulkerson-algorithm"},"Ford-Fulkerson Algorithm"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-pseudocode"},"Max-Flow\n    Initially f(e)=0 for all e in G\n    While there is an s-t path in the residual graph Gf\n        Let P be a simple s-t path in Gf\n        f\u2032 = augment(f,P)\n        Update f to be f\u2032\n        Update the residual graph Gf to be Gf\u2032\n    EndWhile\n    Return f\n")),(0,a.kt)("h2",{id:"maximum-flows-and-minimum-cuts"},"Maximum Flows and Minimum Cuts"),(0,a.kt)("p",null,"\u5c07G\u5206\u70ba\u5169\u96c6\u5408A\u548cB\uff0c\u4f7f\u5f97s\u2208A\uff1bt\u2208B\u3002\u90a3\u9ebc\u53ef\u76f4\u89ba\u7406\u89e3\u7576\u4e00flow\u8981\u5f9es\u5230t\uff0c\u52e2\u5fc5\u5f97\u5728\u67d0\u4e00\u6642\u523b\u5f9eA\u5230B\u3002\u6b63\u5f0f\u8aaa\u6cd5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"s-t cut\u662f\u9ede\u96c6\u5408V\u7684\uff08A,B\uff09\u5206\u5272(partition)\uff0c\u4f7f\u5f97s\u2208A\uff1bt\u2208B\u3002"),(0,a.kt)("li",{parentName:"ul"},"cut (A,B)\u7684\u5bb9\u91cf\u4ee5c(A,B)\u8868\u793a\uff0c\u6307\u7684\u662f\u52a0\u7e3d\u6240\u6709\u5f9eA\u6d41\u51fa\u7684\u908a\u7684flow\u503c\uff1ac(A,B) =  \u03a3(e out of A) Ce\uff08\u70ba\u6700\u7c97\u6dfa\u7684\u4e0a\u754c\uff09\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5b9a\u74061")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4ee4f\u70ba\u4efb\u610fs-t flow\uff1b\uff08A,B\uff09\u70ba\u4efb\u610fs-t cut\u3002\u90a3\u9ebcv(f) = f out(A) - f in(A)\u3002v for value\u3002")),(0,a.kt)("p",null,"\u9019\u500b\u5b9a\u7fa9\u6bd4\u4e00\u822c\u7684\u7c21\u55ae\u4e0a\u754c\u66f4\u5f37\u3002\u53ef\u85c9\u7531\u89c0\u5bdf\u6d41\u7d93cut\u7684flow\u91cf\u6e2cflow\u503c\u3002\u8a08\u7b97\u65b9\u5f0f\u70ba ",(0,a.kt)("strong",{parentName:"p"},"\u7e3d\u96e2\u958bA\u7684\u91cf - \u7e3d\u8ff4\u65cb\u56de\uff08swirls back into\uff09A\u7684\u91cf"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8b49\u660e")),(0,a.kt)("p",null,"\u6839\u64da\u5b9a\u7fa9v(f) = f out(s)\u3002\u5047\u8a2d f in (s) = 0\uff0c\u7576s\u6c92\u6709\u6d41\u5165\u7684\u908a\u6642\uff0c\u6211\u5011\u53ef\u4ee5\u5beb\u6210v(f) = f out(s) - f in(s)\u3002\u56e0\u70baA\u7576\u4e2d\u9664\u4e86s\u4e4b\u5916\u7684\u9edev\u90fd\u662f\u4e2d\u4ecb\u9ede\uff0c\u53ef\u77e5f out(v) - f in(v) = 0\u3002\u6700\u7d42\u53ef\u4ee5\u5beb\u6210"),(0,a.kt)("p",null,"\u03bd(f) =\v v\u2208A \u03a3(f out(v) \u2212 f in(v))\u3002\u56e0\u70ba\u88e1\u9762\u552f\u4e00\u4e0d\u70ba0\u7684\u503c\u5c31\u662f\u7576node\u88ab\u8a2d\u70bas\u6642\u3002"),(0,a.kt)("p",null,"\u8a66\u8457\u628a\u7b49\u5f0f\u53f3\u908a\u505a\u4fee\u6539\u3002\u8003\u616e\u4e00edge e\u65bc\u4e0b\u9762\u56db\u7a2e\u60c5\u6cc1"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"e\u7684\u5169\u7aef\u90fd\u5728A\uff1af(e)\u6703\u662f\u52a0\u7e3d\u4e00\u6b21+\u548c\u4e00\u6b21-\u7684\u7d50\u679c\uff0c\u76f8\u4e92\u62b5\u6d88\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"e\u7684\u5c3e\u7aef\u5728A\uff1a+\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"e\u7684\u982d\u90e8\u5728A\uff1a-\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"e\u7684\u5169\u7aef\u90fd\u4e0d\u5728A\uff1a\u6839\u672c\u5c31\u4e0d\u5728\u52a0\u7e3d\u88e1\u3002"),(0,a.kt)("p",{parentName:"li"},"v\u2208A \u03a3(f out(v) \u2212 f in(v)) = e out of A\u03a3f(e) - e into A\u03a3f(e) = f out(A) - f in(A)"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5b9a\u74062")),(0,a.kt)("p",null,"\u5ef6\u7e8c\u81ea\u5b9a\u74061\u3002"),(0,a.kt)("p",null,"\u56e0\u70baA\u3001B\u662f\u76f8\u5c0d\u7684\u95dc\u4fc2\uff08\u6d41\u51faA\u7684 = \u6d41\u9032B\u7684\uff09\uff0c\u56e0\u6b64\u5b9a\u88e11\u53ef\u4ee5\u8b8a\u6210\u4e0b\u9762\uff1a"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4ee4f\u70ba\u4efb\u610fs-t flow\uff1b\uff08A,B\uff09\u70ba\u4efb\u610fs-t cut\u3002\u90a3\u9ebcv(f) = f in(B) - f out(B)")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5b9a\u74063")),(0,a.kt)("p",null,"\u5ef6\u7e8c\u81ea\u5b9a\u74061\u30012\u3002"),(0,a.kt)("p",null,"\u82e5A = V-{t}\u4e14B={t}\uff0c\u90a3\u9ebc\u5b9a\u74062=v(f) = f in(B) - f out(B) = f in(t) - f out(t)\u3002\u5df2\u5047\u8a2dt\u6c92\u6709\u6d41\u51fa\u7684\u503c\uff1af out(t)=0\uff0c\u56e0\u6b64\u6211\u5011\u53ef\u4ee5\u5b9a\u7fa9flow\u503c\u7b49\u65bcf in(t)\uff0c\u4e5f\u5c31\u662f\u6700\u5f8c\u6d41\u5165sink t\u7684\u7e3d\u91cf\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5b9a\u74064")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4ee4f\u70ba\u4efb\u610fs-t flow\uff1b\uff08A,B\uff09\u70ba\u4efb\u610fs-t cut\u3002\u90a3\u9ebc\u03bd(f) \u2264 c(A, B)\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8b49\u660e")),(0,a.kt)("p",null," \u03bd(f) = f out(A) \u2212 fin(A)    ",(0,a.kt)("strong",{parentName:"p"},"[\u5b9a\u74061]"," ")),(0,a.kt)("p",null,"\u200b        \u2264 f out(A)                 ",(0,a.kt)("strong",{parentName:"p"},"[f in(A)\u22650]")),(0,a.kt)("p",null,"\u200b        = \v e out of A \u03a3 f(e) "),(0,a.kt)("p",null,"\u200b        \u2264 \v e out of A \u03a3 Ce     ",(0,a.kt)("strong",{parentName:"p"},"[\u5bb9\u91cf\u9650\u5236]")),(0,a.kt)("p",null,"\u200b        = c(A, B)"),(0,a.kt)("p",null,"\u5b9a\u74064\u770b\u4f3c\u6bd4\u5b9a\u74061\u8584\u5f31\uff0c\u7136\u800c\u5b9a\u74064\u7684\u53f3\u624b\u908a\u70baC(A,B)\u548c\u7279\u5b9a\u7684flow f\u7121\u95dc\u3002\u5176\u610f\u7fa9\u70ba ",(0,a.kt)("strong",{parentName:"p"},"\u6bcf\u4e00\u500bflow\u7684\u4e0a\u9650\u503c\u90fd\u88ab\u6bcf\u4e00\u500bcut\u7684\u5bb9\u91cf\u6240\u754c\u5b9a"),"\u3002\u4e5f\u5c31\u662f\u8aaa\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u7d66\u5b9a\u4e00G\u4e2d\u4e00s-t cut\u503cC'\uff0c\u6211\u5011\u53ef\u4ee5\u99ac\u4e0a\u77e5\u9053G\u4e2d\u4e0d\u5b58\u5728\u4e00s-t flow\u53ef\u4ee5\u5927\u65bcC'\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u7d66\u5b9a\u4e00G\u4e2d\u4e00s-t flow\u503cv'\uff0c\u6211\u5011\u53ef\u4ee5\u99ac\u4e0a\u77e5\u9053G\u4e2d\u4e0d\u5b58\u5728\u4e00s-t cut\u53ef\u4ee5\u5927\u65bcv'\u3002")),(0,a.kt)("h2",{id:"analyze-algorithmmax-flow--min-cut"},"Analyze Algorithm\uff1aMax-Flow = Min-Cut"),(0,a.kt)("p",null,"\u4ee4f'\u8868\u793a\u4e00Ford-Fulkerson\u56de\u50b3\u7684flow\u3002\u5e0c\u671b\u8b49\u660ef'\u662fG\u7576\u4e2dflow\u7684\u6700\u5927\u53ef\u80fd\u503c\u3002\u7528\u4e0a\u4e00\u7bc0\u6240\u8a0e\u8ad6\u7684\u65b9\u5f0f\uff0c\u6b32\u8b49\u660e\u6709\u4e00s-t cut\uff08A',B'\uff09\u4f7f\u5f97v(f') = c\uff08A' , B'\uff09\u3002\u6b64\u6f14\u7b97\u6cd5\u7d42\u6b62\u689d\u4ef6\u662fflow f\u5728residual graph Gf\u4e2d\u6c92\u6709s-t path\uff0c\u9019\u4e5f\u662f\u552f\u4e00\u9700\u8981\u7684\u7279\u6027\u4f86\u8b49\u660e\u8a72f\u662f\u6700\u5927\u53ef\u80fd\u503c\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5b9a\u74061")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u82e5 f \u662f\u4e00s-t flow\u4f7f\u5f97\u6c92\u6709s-t path\u5b58\u5728\u65bcGf\uff0c\u90a3\u9ebcG\u7576\u4e2d\u4fbf\u5b58\u5728\u4e00s-t cut\uff08A',B'\uff09\u4f7f\u5f97v(f) = c(A',B')\u3002\u65bc\u662ff\u662fG\u7576\u4e2d\u6700\u5927\u53ef\u80fd\u7684flow\u503c\uff0c\u4e14\uff08A',B'\uff09\u6709G\u7576\u4e2d\u4efb\u610fs-t cut\u7684\u6700\u5c0f\u5bb9\u91cf\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8b49\u660e")),(0,a.kt)("p",null,"\u4e0a\u9762\u6558\u8ff0\u8072\u7a31 \u300c\u5b58\u5728\u4e00cut\u6eff\u8db3\u4e00\u6211\u5011\u60f3\u8981\u7684\u7279\u6027\u300d\u3002\u73fe\u5728\u8981\u8b49\u660ecut\u78ba\u5be6\u5b58\u5728\u3002"),(0,a.kt)("p",null,"\u4ee4A' \u8868\u793a\u6eff\u8db3\u5728Gf\u4e2d\u6709s-v path\u7684\u6240\u6709\u9edev\uff1b\u4ee4B'\u8868\u793a\u5269\u4e0b\u7684\u9ede\uff0cB' = V - A'\u3002\u53c3\u7167\u4e0b\u5716\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\uff08A',B'\uff09\u78ba\u5be6\u662f\u4e00s-t cut\u3002s \u2208 A'\uff0c\u56e0\u70ba\u7e3d\u662f\u6709\u8def\u5f91\u53ef\u5f9es-s\u3002\u6b64\u5916\uff0ct \u2209 A\uff0c\u56e0\u70ba\u5728residual graph\u4e2d\u6c92\u6709s-t\u8def\u5f91\uff0c\u56e0\u6b64\uff0ct \u2208 B'\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5047\u8a2de = (u,v)\u662fG\u4e2d\u7684\u4e00\u908a\uff0c\u5176\u4e2du \u2208 A'\u4e14v \u2208 B'\u3002\u6211\u5011\u8072\u7a31f(e) = Ce\u3002\u82e5\u5426\uff0ce\u6703\u662fGf\u7576\u4e2d\u7684forward edge\uff0c\u4e14\u56e0\u70bau \u2208 A'\uff0cGf\u5b58\u5728\u4e00s-u path\uff0c\u518d\u52a0\u4e0ae\u6703\u5728Gf\u5f62\u6210s-v path\uff0c\u9055\u53cd\u4e00\u958b\u59cbv  \u2208 B'\u7684\u5047\u8a2d\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5047\u8a2dG\u4e2d\u5b58\u5728e' = (u',v')\uff0c\u5176\u4e2du' \u2208 B\uff1bv' \u2208 A\u3002\u6211\u5011\u8072\u7a31f(e') = 0\u3002\u82e5\u5426\uff0ce'\u6703\u5728Gf\u4e2d\u9020\u6210backward edge e'' = (v',u')\uff0c\u4e14\u56e0\u70bav' \u2208 A'\uff0c\u5728Gf\u4e2d\u5b58\u5728s-v' path\uff0c\u518d\u52a0\u4e0ae''\u6703\u5728Gf\u5f62\u6210s-u' path\uff0c\u9055\u53cd\u4e00\u958b\u59cbu' \u2208 B'\u7684\u5047\u8a2d\u3002")),(0,a.kt)("p",null,"\u6839\u64da\u4e0a\u9762\u7684\u91d0\u6e05\uff0c\u53ef\u77e5\uff0cf'\u5438\u6536\u4e86\u6240\u6709flow\u503c\uff08\u6240\u6709\u6d41\u51faA'\u7684\u908a\uff09\uff1b\u6240\u6709\u6d41\u5165A'\u7684\u908a\u90fd\u662f\u6c92\u7528\u7684\uff0c\u7d50\u8ad6\uff1a"),(0,a.kt)("p",null,"v(f)  = f out(A') - f in(A')"),(0,a.kt)("p",null,"\u200b        = e out of A' \u03a3 f(e) - e into A' \u03a3f(e)"),(0,a.kt)("p",null,"\u200b        = e out of A\u2019 \u03a3 c(e) - 0"),(0,a.kt)("p",null,"\u200b        = c(A' , B')"),(0,a.kt)("p",null,(0,a.kt)("img",{src:l(9671).Z,width:"771",height:"516"})))}s.isMDXComponent=!0},757:(t,e,l)=>{l.d(e,{Z:()=>n});const n=l.p+"assets/images/flow1-39593fd0416f07a63ed2d1ace0809e8d.jpg"},3980:(t,e,l)=>{l.d(e,{Z:()=>n});const n=l.p+"assets/images/flow2-bdcc1b33cc8fc15a84a4c52124c5f09c.jpg"},9671:(t,e,l)=>{l.d(e,{Z:()=>n});const n=l.p+"assets/images/flow3-9e71be72bf925cf3fecf9d2f0b5c5ba0.jpg"}}]);