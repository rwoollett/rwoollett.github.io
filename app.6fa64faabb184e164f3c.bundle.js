(()=>{"use strict";var e,t,a,r,n={346:(e,t,a)=>{a.d(t,{Z:()=>r});const r={"navbar-minimal":"_3nIGi9Bdg-W86wMUrButPd",banner:"L4AfGl_TH6AlKkmGtS47V","button-container":"_2DpYSkw1_34Setr0YnLqQB",container:"_2w45mQoDyF67dWrSMGJ5Eo","home-nav":"_2Bmhe_l1BM0vpg_Ue0NgA_",card:"_2DLRxzQtalWn5vJ2Twhz8P","search-bar":"_1ljmm57gVXt4dJKPsHBMwZ",posts:"_3OErBPMN_5O38oZTws3S5z",post:"_1jxrsT1L9XqVxGQSXIFTcT",author:"_2dfxVmDISRpLcnbjAo7xOE",timestamp:"_33hsRxsHcm7IN1ZpJQW6yi","post-content":"_8vwpxwgTmf4yy3T8R3Txg","posts-content":"_16iOssS4l0HBp84WfAHGwU","posts-list":"_2YjczPPYP6N0skS8MHDWkU",popular:"_12kWmrlwWC8SwrMFDYAuma","popular-labs":"_1GLL8QgO8Pw7nYJazUa6d6",top:"_3R4NKXX8LF67m2jFWwXFyr",next:"_1NRFqqutP0aOIXawjKd-Hi",footer:"CZ9CfIbLEGbjajBOZ-aII",reaction:"fd9t1JClqvuiQTDmEHU3j","reaction-button":"HuPDyrqiij_PkRQTx4QUh"}},792:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(294),n=a(346),o=a(727);const s=({title:e,catchPhrase:t,link:a,author:s,timeAgo:l,reactEmoji:i})=>r.createElement("div",{className:n.Z.card},r.createElement("div",null,r.createElement("h3",null,e),s||"",l||"",r.createElement("p",null,t),i||"",r.createElement("div",{className:n.Z["button-container"]},a?r.createElement(o.rU,{to:a.to},a.text):"")))},766:(e,t,a)=>{var r=a(294),n=a(935),o=a(570),s=a(346);const l=({title:e,desc:t})=>r.createElement("div",{className:s.Z.banner},r.createElement("div",{className:s.Z.container},r.createElement("h1",null,e),r.createElement("p",null,t)));var i=a(792),c=a(697),d=a.n(c);const m=({cards:e})=>r.createElement("div",{className:s.Z.popular},r.createElement("h2",null,"Popular Laboratories"),r.createElement("p",null,"Select a laboratory and explore the algorithm with the program and input data."),r.createElement("div",{className:s.Z["popular-labs"]},e.map(((e,t)=>r.createElement(i.Z,{key:t,title:e.title,catchPhrase:e.catchPhrase})))));m.propTypes={cards:d().array.isRequired};const u=m,p=JSON.parse('{"X":{"title":"Laboratory of Computer Algorithms","description":"The Javascript/Typescript programming language is used to implement basic algorithms.","navCards":[{"title":"Laboratory Collection","catchPhrase":"Explore the laboratories of algorithms implemented with the JavaScript/Typescript computer programming language."},{"title":"Algorithm Topics","catchPhrase":"Understand the computer algorithms used in the laboratories."}],"popularCards":[{"title":"Passing Cars","catchPhrase":"Time complexity of algorithm is how fast it perform the algorithm. Fast solutions are O(n), slow solutions are O(n2) or greater."},{"title":"Tape Equlibrium","catchPhrase":"Use a variable to add up and sum all values in an array.  Counting elements can be done for values in array m and kept in array of size n"},{"title":"Fibonacci Iteration","catchPhrase":"Use iteration and fibonacci algorithm"}]}}');var h=a(890),v=a(751),E=a(407),f=a(535);const g={thumbsUp:0,hooray:0,heart:0,rocket:0,eyes:0},b=[{id:"1",title:"First Post!",content:"Hello!",user:"2",date:(0,f.Z)(new Date,{minutes:10}).toISOString(),reactions:g},{id:"2",title:"Second Post",content:"More text",user:"2",date:(0,f.Z)(new Date,{minutes:5}).toISOString(),reactions:g},{id:"3",title:"Third Post",content:"More text",user:"1",date:(0,f.Z)(new Date,{minutes:1}).toISOString(),reactions:g}],y=(0,E.oM)({name:"posts",initialState:b,reducers:{reactionAdded(e,t){const{postId:a,reaction:r}=t.payload,n=e.find((e=>e.id===a));n&&("thumbsUp"!==r&&"hooray"!==r&&"heart"!==r&&"rocket"!==r&&"eyes"!==r||n.reactions[r]++)},postAdded:{reducer(e,t){e.push(t.payload)},prepare:(e,t,a)=>({payload:{id:(0,E.x0)(),date:(new Date).toISOString(),user:a,title:e,content:t,reactions:g}})},postUpdated(e,t){const{id:a,title:r,content:n}=t.payload,o=e.find((e=>e.id===a));o&&(o.title=r,o.content=n)}}}),{postAdded:x,postUpdated:P,reactionAdded:C}=y.actions,{reducer:w}=y,S=(0,E.oM)({name:"users",initialState:[{id:"0",name:"Tianna Jenkins"},{id:"1",name:"Kevin Grant"},{id:"2",name:"Madison Price"}],reducers:{}}),{reducer:T}=S,Z=(0,h.UY)({posts:w,users:T}),k=v.v9,N=()=>{const[e,t]=(0,r.useState)(""),[a,n]=(0,r.useState)(""),[o,l]=(0,r.useState)(""),i=(0,v.I0)(),c=k((e=>e.users)).map((e=>r.createElement("option",{key:e.id,value:e.id},e.name)));return r.createElement("form",null,r.createElement("label",{htmlFor:"postTitle"},"Post Title"),r.createElement("input",{type:"text",id:"postTitle",name:"postTitle",value:e,onChange:e=>t(e.target.value)}),r.createElement("label",{htmlFor:"postAuthor"},"Author:"),r.createElement("select",{id:"postAuthor",value:o,onChange:e=>l(e.target.value)},r.createElement("option",{value:""}),c),r.createElement("label",{htmlFor:"postContent"},"Content"),r.createElement("textarea",{id:"postContent",name:"postContent",value:a,onChange:e=>n(e.target.value)}),r.createElement("div",{className:s.Z["button-container"]},r.createElement("button",{type:"button",onClick:()=>{e&&a&&o&&(i(x(e,a,o)),t(""),n(""))}},"Save")))},_=({userId:e})=>{const t=k((t=>t.users.find((t=>t.id===e))));return r.createElement("span",{className:s.Z.author},"by ",t?t.name:"Unknown author")};var j=a(855),O=a(146);const F=({timestamp:e})=>{let t="";if(e){const a=(0,j.Z)(e);t=`${(0,O.Z)(a)} ago`}return r.createElement("span",{title:e,className:s.Z.timestamp}," ",r.createElement("i",null,t))},I={thumbsUp:"👍",hooray:"🎉",heart:"❤️",rocket:"🚀",eyes:"👀"},A=({post:e})=>{const t=Object.entries(e.reactions),a=(0,v.I0)(),n=Object.entries(I).map((([n,o])=>r.createElement("button",{key:n,type:"button",className:s.Z["reaction-button"],onClick:()=>a(C({postId:e.id,reaction:n}))},o," ",t.map((([e,t])=>{if(e===n)return t})))));return r.createElement("div",{className:s.Z.reaction},n)},U=function(){const e=k((e=>e.posts)).slice().sort(((e,t)=>t.date.localeCompare(e.date)));return r.createElement("div",{className:s.Z.posts},r.createElement("h2",null,"Posts to Popular Laboratories"),r.createElement("p",null,"Follow the posts made to Programming Laboratories"),r.createElement("div",{className:s.Z["posts-content"]},r.createElement(N,null),r.createElement("div",{className:s.Z["posts-list"]},e.map((e=>r.createElement(i.Z,{key:e.id,title:e.title,catchPhrase:e.content.substring(0,100),link:{text:"View Post",to:`/posts/${e.id}`},author:r.createElement(_,{userId:e.user}),timeAgo:r.createElement(F,{timestamp:e.date}),reactEmoji:r.createElement(A,{post:e})}))))))};var M=function(e,t,a,r){return new(a||(a=Promise))((function(n,o){function s(e){try{i(r.next(e))}catch(e){o(e)}}function l(e){try{i(r.throw(e))}catch(e){o(e)}}function i(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(s,l)}i((r=r.apply(e,t||[])).next())}))};const L=(0,r.lazy)((()=>a.e(124).then(a.bind(a,910))));class q extends r.Component{constructor(e){super(e),this.state={title:"",description:"",navCards:[{title:" ",catchPhrase:""}],popularCards:[{title:" ",catchPhrase:""}],isFetching:!0}}fetchHomepagesWithFetch(){return M(this,void 0,void 0,(function*(){let e;this.setState(Object.assign(Object.assign({},this.state),{isFetching:!0}));try{if(e=yield function(e){return M(this,void 0,void 0,(function*(){const e=yield fetch("/api/v1/homepage");try{e.parsedBody=yield e.json()}catch(e){console.log(e)}if(!e.ok)throw new Error(e.statusText);return e}))}(),e.parsedBody){console.log("api",e.parsedBody);const{title:t,description:a,navCards:r,popularCards:n}=e.parsedBody;this.setState({title:t,description:a,navCards:r,popularCards:n,isFetching:!1})}}catch(e){console.log("Error",e);const{title:t,description:a,navCards:r,popularCards:n}=p.X;this.setState({title:t,description:a,navCards:r,popularCards:n,isFetching:!1})}}))}componentDidMount(){this.fetchHomepagesWithFetch()}render(){const{title:e,description:t,navCards:a,popularCards:n,isFetching:o}=this.state;return o?r.createElement("div",null,"Fetching home page ..."):r.createElement("div",null,r.createElement(l,{title:e,desc:t}),r.createElement("div",{className:s.Z.container},r.createElement(r.Suspense,{fallback:r.createElement("div",null,"Loading.....")},r.createElement(L,{cards:a})),r.createElement(U,null),r.createElement(u,{cards:n})))}}q.defaultProps={children:[]};const B=q;var R=a(727);const W=({match:e})=>{const{postId:t}=e.params,a=k((e=>e.posts.find((e=>e.id===t))));return a?r.createElement("div",{className:s.Z.card},r.createElement("div",{className:s.Z.post},r.createElement("h2",null,a.title),r.createElement(_,{userId:a.user}),r.createElement(F,{timestamp:a.date}),r.createElement("p",{className:s.Z["post-content"]},a.content),r.createElement(A,{post:a}),r.createElement("div",{className:s.Z["button-container"]},r.createElement(R.rU,{to:`/editPost/${a.id}`},"Edit Post")))):r.createElement("section",null,r.createElement("h2",null,"Post not found!"))};W.propTypes={match:d().exact({path:d().string,url:d().string,isExact:d().bool,params:d().exact({postId:d().string.isRequired}).isRequired}).isRequired};const D=W;var H=a(977);const J=({match:e})=>{const{postId:t}=e.params,a=k((e=>e.posts.find((e=>e.id===t)))),[n,o]=(0,r.useState)(a?null==a?void 0:a.title:""),[l,i]=(0,r.useState)(a?null==a?void 0:a.content:""),c=a?null==a?void 0:a.user:"",d=a?null==a?void 0:a.date:"",m=a?null==a?void 0:a.reactions:{thumbsUp:0,hooray:0,heart:0,rocket:0,eyes:0},u=(0,v.I0)(),p=(0,H.k6)();return r.createElement("div",{className:s.Z.card},r.createElement("div",{className:s.Z.post},r.createElement("form",null,r.createElement("label",{htmlFor:"postTitle"},"Post Title"),r.createElement("input",{type:"text",id:"postTitle",name:"postTitle",value:n,onChange:e=>o(e.target.value)}),r.createElement("label",{htmlFor:"postContent"},"Content"),r.createElement("textarea",{id:"postContent",name:"postContent",value:l,onChange:e=>i(e.target.value)}),r.createElement("div",{className:s.Z["button-container"]},r.createElement("button",{type:"button",onClick:()=>{n&&l&&(u(P({id:t,title:n,content:l,user:c,date:d,reactions:m})),p.push(`/posts/${t}`))}},"Save")))))};J.propTypes={match:d().exact({path:d().string,url:d().string,isExact:d().bool,params:d().exact({postId:d().string.isRequired}).isRequired}).isRequired};const G=J;var Q=a(724),X=a.t(Q);const z=()=>(console.log("i,age",X),r.createElement("div",{className:s.Z["navbar-minimal"]},r.createElement("img",{src:Q}),r.createElement(R.rU,{to:"/"},"Home"))),Y=(0,E.xC)({reducer:Z});class K extends r.Component{constructor(e){super(e)}render(){return r.createElement(r.Fragment,null,r.createElement(v.zt,{store:Y},r.createElement(R.VK,null,r.createElement(z,null),r.createElement(H.rs,null,r.createElement(H.AW,{exact:!0,path:"/",render:()=>r.createElement(B,null)}),r.createElement(H.AW,{exact:!0,path:"/posts/:postId",component:D}),r.createElement(H.AW,{exact:!0,path:"/editPost/:postId",component:G}),r.createElement(H.l_,{to:"/"})),r.createElement("div",{className:s.Z.footer},r.createElement("div",{className:s.Z.container},r.createElement("p",null,"The Javascript/ Typescript laboratories. Contact: Programming Laboratory."))))))}}K.defaultProps={done:!1};const V=(0,o.w)(K);n.render(r.createElement(r.StrictMode,null,r.createElement(V,{title:"Front Ends"})),document.getElementById("app"))},724:(e,t,a)=>{e.exports=a.p+"6ce24c58023cc2f8fd88.svg"}},o={};function s(e){if(o[e])return o[e].exports;var t=o[e]={id:e,loaded:!1,exports:{}};return n[e](t,t.exports,s),t.loaded=!0,t.exports}s.m=n,s.x=e=>{},s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,s.t=function(a,r){if(1&r&&(a=this(a)),8&r)return a;if("object"==typeof a&&a){if(4&r&&a.__esModule)return a;if(16&r&&"function"==typeof a.then)return a}var n=Object.create(null);s.r(n);var o={};e=e||[null,t({}),t([]),t(t)];for(var l=2&r&&a;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>o[e]=()=>a[e]));return o.default=()=>a,s.d(n,o),n},s.d=(e,t)=>{for(var a in t)s.o(t,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},s.f={},s.e=e=>Promise.all(Object.keys(s.f).reduce(((t,a)=>(s.f[a](e,t),t)),[])),s.u=e=>"hnav.b67bc5d2f864a87e7953.bundle.js",s.miniCssF=e=>{},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},r="frontend:",s.l=(e,t,n,o)=>{if(a[e])a[e].push(t);else{var l,i;if(void 0!==n)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var m=c[d];if(m.getAttribute("src")==e||m.getAttribute("data-webpack")==r+n){l=m;break}}l||(i=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.setAttribute("data-webpack",r+n),l.src=e),a[e]=[t];var u=(t,r)=>{l.onerror=l.onload=null,clearTimeout(p);var n=a[e];if(delete a[e],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((e=>e(r))),t)return t(r)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=u.bind(null,l.onerror),l.onload=u.bind(null,l.onload),i&&document.head.appendChild(l)}},s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.p="/",(()=>{var e={143:0},t=[[766,723]];s.f.j=(t,a)=>{var r=s.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else{var n=new Promise(((a,n)=>{r=e[t]=[a,n]}));a.push(r[2]=n);var o=s.p+s.u(t),l=new Error;s.l(o,(a=>{if(s.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var n=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",l.name="ChunkLoadError",l.type=n,l.request=o,r[1](l)}}),"chunk-"+t,t)}};var a=e=>{},r=(r,n)=>{for(var o,l,[i,c,d,m]=n,u=0,p=[];u<i.length;u++)l=i[u],s.o(e,l)&&e[l]&&p.push(e[l][0]),e[l]=0;for(o in c)s.o(c,o)&&(s.m[o]=c[o]);for(d&&d(s),r&&r(n);p.length;)p.shift()();return m&&t.push.apply(t,m),a()},n=self.webpackChunkfrontend=self.webpackChunkfrontend||[];function o(){for(var a,r=0;r<t.length;r++){for(var n=t[r],o=!0,l=1;l<n.length;l++){var i=n[l];0!==e[i]&&(o=!1)}o&&(t.splice(r--,1),a=s(s.s=n[0]))}return 0===t.length&&(s.x(),s.x=e=>{}),a}n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n));var l=s.x;s.x=()=>(s.x=l||(e=>{}),(a=o)())})(),s.x()})();