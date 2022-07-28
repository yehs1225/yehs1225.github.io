"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[581],{3905:(n,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>m});var t=r(7294);function a(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function o(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function l(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function i(n,e){if(null==n)return{};var r,t,a=function(n,e){if(null==n)return{};var r,t,a={},o=Object.keys(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||(a[r]=n[r]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(a[r]=n[r])}return a}var p=t.createContext({}),c=function(n){var e=t.useContext(p),r=e;return n&&(r="function"==typeof n?n(e):l(l({},e),n)),r},u=function(n){var e=c(n.components);return t.createElement(p.Provider,{value:e},n.children)},s={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},f=t.forwardRef((function(n,e){var r=n.components,a=n.mdxType,o=n.originalType,p=n.parentName,u=i(n,["components","mdxType","originalType","parentName"]),f=c(r),m=a,d=f["".concat(p,".").concat(m)]||f[m]||s[m]||o;return r?t.createElement(d,l(l({ref:e},u),{},{components:r})):t.createElement(d,l({ref:e},u))}));function m(n,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=n,i.mdxType="string"==typeof n?n:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4656:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var t=r(7462),a=(r(7294),r(3905));const o={},l="Decorator",i={unversionedId:"Python/Python_decorator",id:"Python/Python_decorator",title:"Decorator",description:"\u5b78\u7fd2\u8cc7\u6e90 https://www.youtube.com/c/Coreyms",source:"@site/docs/Python/Python_decorator.md",sourceDirName:"Python",slug:"/Python/Python_decorator",permalink:"/docs/Python/Python_decorator",draft:!1,editUrl:"https://github.com/yehs1225/yehs1225.github.io/docs/Python/Python_decorator.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Data Types Basic",permalink:"/docs/Python/Python_data_types"},next:{title:"Function",permalink:"/docs/Python/Python_function"}},p={},c=[{value:"First-Class Functions",id:"first-class-functions",level:2},{value:"Closure",id:"closure",level:2},{value:"Decorator",id:"decorator-1",level:2},{value:"Type - Function",id:"type---function",level:3},{value:"Type - Class",id:"type---class",level:3},{value:"Combine 2 wrapper",id:"combine-2-wrapper",level:3},{value:"wrapper 1",id:"wrapper-1",level:4},{value:"wrapper 2",id:"wrapper-2",level:4},{value:"Combine 2 wrapper",id:"combine-2-wrapper-1",level:4},{value:"Decorator with arguments",id:"decorator-with-arguments",level:3},{value:"\u88dc\u5145\uff1aScope",id:"\u88dc\u5145scope",level:2},{value:"Local &amp; Global",id:"local--global",level:3},{value:"Built-in",id:"built-in",level:3}],u={toc:c};function s(n){let{components:e,...r}=n;return(0,a.kt)("wrapper",(0,t.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"decorator"},"Decorator"),(0,a.kt)("p",null,"\u5b78\u7fd2\u8cc7\u6e90 : ","[Corey]",": ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/c/Coreyms"},"https://www.youtube.com/c/Coreyms")),(0,a.kt)("h2",{id:"first-class-functions"},"First-Class Functions"),(0,a.kt)("p",null,'\u5982\u679c\u4e00\u7a0b\u5f0f\u8a9e\u8a00\u6709first-class functions\u4ee3\u8868\u5b83\u5c07function\u8996\u70ba"first-class citizens"\u3002'),(0,a.kt)("p",null,'\u800cfirst-class citizens\uff08\u6709\u6642\u53c8\u7a31\u4f5cfirst-class objects\uff09\u7684\u5b9a\u7fa9\uff1a\u4e00\u500b\u500b\u9ad4\uff08entity\uff09\u652f\u63f4\u5176\u4ed6\u500b\u9ad4\u9032\u884c\u5c0d\u5176\u4efb\u4f55\u64cd\u4f5c\uff08operation\uff09\uff0c\u9019\u4e9b\u64cd\u4f5c\u5305\u542b"\u88ab\u7576\u4f5cargument\u50b3\u5165"\u3001"\u88abfunction\u56de\u50b3"\u3001"\u88ab\u6307\u5b9a\uff08assigned\uff09\u6210variable"\u3002'),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u88ab\u6307\u5b9a\u6210variable & \u88ab\u7576\u4f5cargument\u50b3\u5165"),(0,a.kt)("p",{parentName:"li"},"\u6211\u5011\u5b9a\u7fa9\u4e86\u4e00function ",(0,a.kt)("inlineCode",{parentName:"p"},"square"),"\uff0c\u53ef\u4ee5\u5c07\u5176assign\u7d66\u8b8a\u6578",(0,a.kt)("inlineCode",{parentName:"p"},"f"),"\u3002\u53e6\u5916\uff0c\u539f\u672c\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"map()"),"\u5c31\u662f\u62fffunction\u4f5c\u70baargument\u7684\u4f8b\u5b50\uff0c\u5728\u9019\u88e1\u6211\u5011\u81ea\u5df1\u505a\u4e00\u500b",(0,a.kt)("inlineCode",{parentName:"p"},"map()"),"\u7684\u529f\u80fd\uff0c\u540c\u6a23\u4e5f\u662f\u4ee5function\u4f5c\u70baargument\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def square(x):\n    return x*x\n\nf = square\ndef my_map(func,arg_list):\n    result=[]\n    for _ in arg_list:\n        result.append(func(_))\n    return result\n\nsquares = my_map(square,[1,2,3,4,5])\nprint(squares)#[1,4,9,16,25]\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u88abfunction\u56de\u50b3"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def logger(msg):\n\n    def log_message():\n        print('Log:',msg)\n    \n    return log_message\n\nlog_hi = logger('Hi!')\nlog_hi()\n")))),(0,a.kt)("h2",{id:"closure"},"Closure"),(0,a.kt)("p",null,"Closure\u662f\u4e00\u500brecord\uff0c\u6703\u5132\u5b58function\u548cenvironment\uff1a\u53ef\u4ee5\u6620\u5c04\uff08mapping\uff09function\u5167\u7684\u6bcf\u4e00\u500bfree variable\u7684\u503c\u6216\u5132\u5b58\u4f4d\u7f6e\u5230\u5167\u90e8\u7684function\u7576\u4e2d\uff08\u7576closure\u88ab\u5275\u9020\u6642\uff09\u3002\u4e0d\u540c\u65bc\u4e00\u822cfunction\uff0c\u5728closure\u88e1\u7684function\u53ef\u4ee5\u900f\u904eclosure\u6216\u53d6\u539f\u5148\u4e0d\u5728\u5176\u4f5c\u7528\u57df\u7684\u6771\u897f\u3002"),(0,a.kt)("p",null,"\u50cf\u662f\u4e0b\u9762\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"inner_func()"),"\uff08\u7c21\u7a31inner\uff09\u61c9\u8a72\u662f\u5c6c\u65bc",(0,a.kt)("inlineCode",{parentName:"p"},"out_func()"),"\uff08\u7c21\u7a31outer\uff09\u7684\u4e00\u90e8\u5206\uff0c\u56e0\u6b64\u7167\u7406\u4f86\u8aaainner\u662f\u4e0d\u80fd\u62ff\u5230outer\u7684\u6771\u897f\u7684\uff0c\u4f46\u662f\u56e0\u70ba\u5728outer\u662f\u56de\u50b3\u5176\u5167\u90e8\u7684inner\uff0c\u4e5f\u5c31\u5f62\u6210\u4e86closure\uff0cinner\u53ef\u4ee5\u5b58\u53d6outer\u7684\u8b8a\u6578",(0,a.kt)("inlineCode",{parentName:"p"},"message"),"\uff0c\u6b64\u8b8a\u6578\u4e5f\u5c31\u7a31\u70bafree variable\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def out_func(msg):\n    message = msg\n\n    def inner_func():\n        print(message)#message\u5c0d\u4ed6\u4f86\u8aaa\u662ffree variable\uff0c\u56e0\u70ba\u4e26\u975e\u5b9a\u7fa9\u5728\u81ea\u5df1\u7684func\uff0c\u4f46\u53ef\u4ee5\u5b58\u53d6\n\n    return inner_func\n\nhi_func=out_func("hi")\nhello_func=out_func("hello")\n\nhi_func()\nhello_func()\n')),(0,a.kt)("h2",{id:"decorator-1"},"Decorator"),(0,a.kt)("h3",{id:"type---function"},"Type - Function"),(0,a.kt)("p",null,'decorator\u5176\u5be6\u5c31\u662f\u628a\u4e00function\u4e1f\u5165\u4e00\u500b\u5b9a\u7fa9\u597d\u7684decorator function\uff0c\u53bb\u505a\u60f3\u8981\u7684"\u4fee\u98fe"\uff0c\u4e5f\u5c31\u662f\u8aaa\u6211\u5011\u53ef\u4ee5\u5c07\u4e00\u4e9b\u5e38\u7528\u7684\u52d5\u4f5c\u529f\u80fd\u5b9a\u7fa9\u5728wrapper\u88e1\u9762\uff0c\u5e6b\u5176\u4ed6function\u589e\u6dfb\u9019\u4e9b\u529f\u80fd\u3002\u4e0b\u9762\u53ef\u4ee5\u770b\u5230\u6700\u539f\u59cb\u7684\u505a\u6cd5- Method 1\uff0c\u4ee5\u53ca\u4e00\u822c\u5e38\u898b\u7684decorator\u7528\u6cd5',(0,a.kt)("inlineCode",{parentName:"p"},"@decorator_func"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def decorator_func(original_func):\n    def wrapper_func():\n        print(\'wrapper executed this before {}\'.format(original_func.__name__))\n        return original_func()\n    return wrapper_func\n\n#Method 1 to use the decorator function\ndef display():\n    print("display function ran")\n    \ndecorated_display = decorator_func(display)\ndecorated_display()\n\n#Method 2 (common one)\n@decorator_func\ndef display():\n    print("display function ran")\n\ndisplay()\n#wrapper executed this before display\n#display function ran\n')),(0,a.kt)("p",null,"\u53e6\u5916\uff0c\u4e00\u822c\u4f86\u8aaa\uff0cfunction\u90fd\u6703\u5e36\u5165arguments\uff0c\u6240\u4ee5\u52a0\u5165",(0,a.kt)("inlineCode",{parentName:"p"},"wrapper_func(*args,**kwargs) "),"\uff0c\u4ee3\u8868\u53ef\u4ee5\u63a5\u53d7\u4efb\u610f\u6578\u76ee\u7684arguments\u548ckeyword arguments\uff0c\u4e5f\u4e00\u4f75\u56de\u50b3\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def decorator_func(original_func):\n    def wrapper_func(*args,**kwargs):\n        print('wrapper executed this before {}'.format(original_func.__name__))\n        return original_func(*args,**kwargs)\n    return wrapper_func\n\n@decorator_func\ndef display_info(name,age):\n    print('display_info ran with arguments({}, {})'.format(name,age))\n\ndisplay_info('Wendy',22)\n#wrapper executed this before display_info\n#display_info ran with arguments(Wendy, 22)\n")),(0,a.kt)("h3",{id:"type---class"},"Type - Class"),(0,a.kt)("p",null,"\u53ef\u4ee5\u6539\u6210class\u5f62\u5f0f\uff0c\u6703\u8f38\u51fa\u4e00\u6a23\u7684\u7d50\u679c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class decorator_class(object):\n\n    def __init__(self,original_func):\n        self.original_func = original_func\n\n    def __call__(self,*args,**kwargs):\n        print('call method executed this before {}'.format(self.original_func.__name__))\n        return self.original_func(*args,**kwargs)\n    \n@decorator_class\ndef display():\n    print(\"display function ran\")\n\n@decorator_class\ndef display_info(name,age):\n    print('display_info ran with arguments({}, {})'.format(name,age))\n\ndisplay_info('Wendy',22)\n\ndisplay()    \n")),(0,a.kt)("h3",{id:"combine-2-wrapper"},"Combine 2 wrapper"),(0,a.kt)("h4",{id:"wrapper-1"},"wrapper 1"),(0,a.kt)("p",null,"\u4f8b\u5982\u8a2d\u5b9a\u4e00\u500bwrapper\uff0c\u8f38\u51fa\u57f7\u884c\u7684function\u4f5c\u70ba\u6a94\u540d\uff0c\u88e1\u9762\u5132\u5b58\u8a72function\u63a5\u6536\u5230\u7684arguments\u548ckeyword arguments\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def my_logger(orig_func):\n    import logging\n    logging.basicConfig(filename = '{}.log'.format(orig_func.__name__),level=logging.INFO)\n\n    def wrapper(*args,**kwargs):\n        logging.info(\n            'Ran with args: {}, and kwargs: {}'.format(args,kwargs)\n        )\n        return my_logger\n    \n    return wrapper\n\n@my_logger\ndef display_info(name,age):\n    print('display_info ran with arguments ({}, {})'.format(name,age))\n\ndisplay_info('Denny',24)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"INFO:root:Ran with args: ('Wendy', 22), and kwargs: {}\nINFO:root:Ran with args: ('Denny', 24), and kwargs: {}\n")),(0,a.kt)("h4",{id:"wrapper-2"},"wrapper 2"),(0,a.kt)("p",null,"\u8a08\u7b97function\u57f7\u884c\u6642\u9593"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def my_timer(orig_func):\n    import time\n\n    def wrapper(*args,**kwargs):\n        t1 = time.time()\n        result = orig_func(*args,**kwargs)\n        t2 = time.time()-t1\n        print('{} ran in {} sec'.format(orig_func.__name__,t2))\n        return result\n    \n    return wrapper\n    \nimport time\n@my_timer\ndef display_info(name,age):\n    time.sleep(1)\n    print('display_info ran with arguments ({}, {})'.format(name,age))\n\ndisplay_info('Denny',24)\n#display_info ran with arguments (Denny, 24)\n#display_info ran in 1.0098938941955566 sec\n")),(0,a.kt)("h4",{id:"combine-2-wrapper-1"},"Combine 2 wrapper"),(0,a.kt)("p",null,"\u5982\u679c\u6211\u5011\u55ae\u7d14\u5c31\u662f\u628a\u525b\u624d\u7684\u5b9a\u7fa9\u597d\u7684decorator\u52a0\u4e0a\uff0c\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import time\n\n@my_logger\n@my_timer\ndef display_info(name,age):\n    time.sleep(1)\n    print('display_info ran with arguments ({}, {})'.format(name,age))\n\ndisplay_info('Denny',24)\n")),(0,a.kt)("p",null,"\u9019\u6a23\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"@"),"\u9806\u5e8f\uff0c\u5c31\u7b49\u65bc\u662f ",(0,a.kt)("strong",{parentName:"p"},"\u5148\u57f7\u884cmy_timer\u518d\u53bb\u57f7\u884cmy_logger")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"display_info = my_logger(my_timer(display_info('Denny',24)))\n")),(0,a.kt)("p",null,"\u63a5\u8457\u662f\u8005\u5370\u51fa\u57f7\u884c\u7684function\u540d\u7a31"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"print(display_info.__name__)\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u767c\u73fe\u8b8a\u6210wrapper\u3002\u6240\u4ee5\u6211\u5011\u61c9\u8a72\u8981\u5f15\u5165\u4e00\u9805\u5de5\u5177\u4f86\u78ba\u4fdd\u9032\u5165wrapper\u5f8c\uff0cfunction\u540d\u7a31\u4e0d\u6703\u88ab\u66f4\u52d5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from functools import wrap\n\ndef my_logger(orig_func):\n    #...\n    @wraps(orig_func)\n    def wrapper(*args,**kwargs):\n        #...    \n    return wrapper\n\ndef my_timer(orig_func):\n    #...\n    @wraps(orig_func)\n    def wrapper(*args,**kwargs):\n        #...\n    return wrapper\n")),(0,a.kt)("h3",{id:"decorator-with-arguments"},"Decorator with arguments"),(0,a.kt)("p",null,"\u5728\u4f7f\u7528decorator\u6642\u4e5f\u53ef\u4ee5\u50b3\u5165\u53c3\u6578\uff0c\u5728\u4e00\u4e9bframework\u4e2d\u5c24\u5176\u5e38\u898b\u3002"),(0,a.kt)("p",null,"\u5148\u770b\u6211\u5011\u521d\u59cb\u7684decorator\u2014\u4f5c\u7528\u70ba\u5c07\u8a72\u51fd\u6578\u8981\u56de\u50b3\u7684\u503c\u518d\u4e58\u4ee52\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from functools import wraps\n\n\ndef decorator_func(original_func):\n    @wraps(original_func)\n    def wrapper_func(*args, **kwargs):\n        print(f'Executed Before, {original_func.__name__}')\n        return 2*original_func(*args, **kwargs)\n    return wrapper_func\n\n\n@decorator_func\ndef calculate_func(x):\n    return x+1\n\n\nprint(calculate_func(3))\n# Executed Before, calculate_func\n# 8\n")),(0,a.kt)("p",null,"\u73fe\u5728\u52a0\u4e0a\u524d\u7db4\u8a5e\uff08prefix\uff09\uff0c\u5728decorator\u4e2d\u50b3\u5165\u3002\u57fa\u672c\u4e0a\u5c31\u662f\u518d\u591a\u4e00\u5c64\uff0c\u8b8a\u6210\u5de2\u72c0\u7684decorator\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from functools import wraps\n\n\ndef prefix_decorator(prefix):\n    def decorator_func(original_func):\n        @wraps(original_func)\n        def wrapper_func(*args, **kwargs):\n            print(f'{prefix}: Executed Before, {original_func.__name__}')\n            return 2*original_func(*args, **kwargs)\n        return wrapper_func\n    return decorator_func\n\n\n@prefix_decorator('TEST')\ndef calculate_func(x):\n    return x+1\n\n\nprint(calculate_func(3))\n# TEST: Executed Before, calculate_func\n# 8\n")),(0,a.kt)("h2",{id:"\u88dc\u5145scope"},"\u88dc\u5145\uff1aScope"),(0,a.kt)("p",null,"\u9019\u88e1\u727d\u626f\u5230\u5f88\u591a\u53c3\u6578\u7684\u50b3\u905e\uff0c\u6240\u4ee5\u6211\u5011\u5fc5\u9808\u8981\u4e86\u89e3Scope\u5982\u4f55\u904b\u4f5c\uff0c\u624d\u80fd\u6b63\u78ba\u5730\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"LEGB\uff0c\u4ee3\u8868python\u6703\u4f9d\u5e8f\u53bb\u5bdf\u770b\u8b8a\u6578\u7684\u9806\u5e8f\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Local"),(0,a.kt)("li",{parentName:"ol"},"Enclosing"),(0,a.kt)("li",{parentName:"ol"},"Global"),(0,a.kt)("li",{parentName:"ol"},"Built-in")),(0,a.kt)("p",null,"\u5176\u4e2dEnclosing\u5c31\u662f\u4e0a\u9762Closure\u7684\u6982\u5ff5\u3002"),(0,a.kt)("h3",{id:"local--global"},"Local & Global"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"x = 'global x'\n\ndef test():\n    x = 'local x'\n    print(x)\n\ntest()\nprint(x)\n# local x\n# global x\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"global"),"\u5ba3\u544a\u70ba\u5168\u57df\u8b8a\u6578"),(0,a.kt)("p",{parentName:"li"},"\u6240\u4ee5",(0,a.kt)("inlineCode",{parentName:"p"},"x = 'global x'"),"\u5176\u5be6\u4e0d\u9700\u8981\u4e86\u3002\u4f46\u9019\u4e26\u4e0d\u662f\u597d\u7684\u505a\u6cd5\uff0c\u6703\u8b93\u7dad\u6301\u8b8a\u6578\u7684\u4f5c\u7528\u6108\u8b8a\u5f97\u5f88\u4e82\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-python"},"x = 'global x'\n\ndef test():\n    global x\n    x = 'local x'\n    print(x)\n\ntest()\nprint(x)\n# local x\n# local x\n")))),(0,a.kt)("h3",{id:"built-in"},"Built-in"),(0,a.kt)("p",null,"\u4e00\u500bBuilt-in\u4f8b\u5b50\u662fpython\u5167\u5efa\u7684\u51fd\u5f0f\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"min()"),"\u53ef\u4ee5\u53d6\u51falist\u4e2d\u6700\u5c0f\u503c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"print(min([2,5,1,7]))\n# 1\n")),(0,a.kt)("p",null,"\u4f9d\u7167LEGB\u7684\u9806\u5e8f\uff0c\u82e5local\u5b9a\u7fa9\u4e86\u76f8\u540c\u540d\u7a31\u7684\u51fd\u5f0f\uff0c\u5c31\u6703\u512a\u5148\u9078\u7528\u3002"),(0,a.kt)("p",null,"\u6211\u5011\u5b9a\u7fa9\u65b0\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"min()"),"\u56de\u50b3\u7b2c\u4e00\u500b\u5143\u7d20\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def min(l):\n    return l[0]\n\nprint(min([2,5,1,7]))\n# 2\n")))}s.isMDXComponent=!0}}]);