(()=>{var e,t,n={81268:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(67294),a=n(40346),o=n(73727);const s=function(e){var t=e.title,n=e.catchPhrase,s=e.link,i=e.author,c=e.timeAgo,l=e.reactEmoji;return r.createElement("div",{className:a.Z.card},r.createElement("div",null,r.createElement("h3",null,t),i||"",c||"",r.createElement("p",null,n),l||"",r.createElement("div",{className:a.Z["button-container"]},s?r.createElement(o.rU,{to:s.to},s.text):"")))}},41071:(e,t,n)=>{"use strict";var r=n(67294),a=n(73935),o=n(34575),s=n.n(o),i=n(93913),c=n.n(i),l=n(2205),u=n.n(l),d=n(78585),p=n.n(d),m=n(29754),f=n.n(m),h=n(59713),v=n.n(h),E=n(71570),g=(n(82526),n(41817),n(41539),n(88674),n(87757)),y=n.n(g),b=(n(35666),n(48926)),x=n.n(b),w=n(40346);const k=function(e){var t=e.title,n=e.desc;return r.createElement("div",{className:w.Z.banner},r.createElement("div",{className:w.Z.container},r.createElement("h1",null,t),r.createElement("p",null,n)))};n(21249);var N=n(81268),C=n(45697),P=n.n(C),S=function(e){var t=e.cards;return r.createElement("div",{className:w.Z.popular},r.createElement("h2",null,"Popular Laboratories"),r.createElement("p",null,"Select a laboratory and explore the algorithm with the program and input data."),r.createElement("div",{className:w.Z["popular-labs"]},t.map((function(e,t){return r.createElement(N.Z,{key:t,title:e.title,catchPhrase:e.catchPhrase})}))))};S.propTypes={cards:P().array.isRequired};const T=S,Z=JSON.parse('{"X":{"title":"Laboratory of Computer Algorithms","description":"The Javascript/Typescript programming language is used to implement basic algorithms.","navCards":[{"title":"Laboratory Collection","catchPhrase":"Explore the laboratories of algorithms implemented with the JavaScript/Typescript computer programming language."},{"title":"Algorithm Topics","catchPhrase":"Understand the computer algorithms used in the laboratories."}],"popularCards":[{"title":"Passing Cars","catchPhrase":"Time complexity of algorithm is how fast it perform the algorithm. Fast solutions are O(n), slow solutions are O(n2) or greater."},{"title":"Tape Equlibrium","catchPhrase":"Use a variable to add up and sum all values in an array.  Counting elements can be done for values in array m and kept in array of size n"},{"title":"Fibonacci Iteration","catchPhrase":"Use iteration and fibonacci algorithm"}]}}');n(47042),n(2707),n(92222),n(57327),n(69826),n(66992),n(33948);var I=n(76403),j=n(22222);async function O(e,{body:t,...n}={}){const r={method:t?"POST":"GET",...n,headers:{"Content-Type":"application/json",...n.headers}};let a;t&&(r.body=JSON.stringify(t));try{const t=await window.fetch(e,r);if(a=await t.json(),t.ok)return a;throw new Error(t.statusText)}catch(e){return Promise.reject(e.message?e.message:a)}}O.get=function(e,t={}){return O(e,{...t,method:"GET"})},O.post=function(e,t,n={}){return O(e,{...n,body:t})};var _=(0,I.hg)("posts/fetchPosts",x()(y().mark((function e(){var t;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get("/fakeApi/posts");case 2:return t=e.sent,e.next=5,t.posts;case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))),A=(0,I.hg)("posts/addNewPost",function(){var e=x()(y().mark((function e(t){var n,r,a,o;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.title,r=t.content,a=t.user,e.next=3,O.post("/fakeApi/posts",{post:{title:n,content:r,user:a}});case 3:return o=e.sent,console.log("Response post:",o.post,typeof o.post),e.abrupt("return",o.post);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),R=(0,I.oM)({name:"posts",initialState:{entries:[],status:"idle",error:void 0},reducers:{reactionAdded(e,t){var n=t.payload,r=n.postId,a=n.reaction,o=e.entries.find((function(e){return e.id===r}));o&&o.reactions[a]++},postUpdated(e,t){var n=t.payload,r=n.id,a=n.title,o=n.content,s=e.entries.find((function(e){return e.id===r}));s&&(s.title=a,s.content=o)}},extraReducers:function(e){e.addCase(_.pending,(function(e){e.status="loading"})),e.addCase(_.fulfilled,(function(e,t){e.status="succeeded",e.entries=e.entries.concat(t.payload)})),e.addCase(_.rejected,(function(e,t){e.status="failed",e.error=t.error.message})),e.addCase(A.fulfilled,(function(e,t){e.entries.push(t.payload)}))}}),F=R.actions,U=F.postUpdated,D=F.reactionAdded,M=R.reducer,L=function(e){return e.posts.entries},q=function(e,t){return e.posts.entries.find((function(e){return e.id===t}))},W=(0,j.P1)([L,function(e,t){return t}],(function(e,t){return e.filter((function(e){return e.user===t}))})),z=n(14890),B=n(84751),H=(0,I.hg)("users/fetchUsers",x()(y().mark((function e(){var t;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get("/fakeApi/users");case 2:return t=e.sent,e.abrupt("return",t.users);case 4:case"end":return e.stop()}}),e)})))),X=(0,I.oM)({name:"users",initialState:[],reducers:{},extraReducers:function(e){e.addCase(H.fulfilled,(function(e,t){return t.payload}))}}).reducer,G=function(e){return e.users},J=(n(89554),n(54747),n(319)),Y=n.n(J),Q=n(63038),K=n.n(Q),V=function(e){return e.notifications},$=(0,I.hg)("notifications/fetchNotifications",function(){var e=x()(y().mark((function e(t,n){var r,a,o,s,i,c;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.getState,console.log("async notis 1"),a=V(r()),o=K()(a,1),s=o[0],i=s?s.date:"",console.log("async notis 2",i),e.next=8,O.get("/fakeApi/notifications?since=".concat(i));case 8:return c=e.sent,console.log("async notis 2",c),e.abrupt("return",c.notifications);case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),ee=(0,I.oM)({name:"notifications",initialState:[],reducers:{allNotificationsRead(e){e.forEach((function(e){e.read=!0}))}},extraReducers:function(e){e.addCase($.fulfilled,(function(e,t){e.forEach((function(e){e.isNew=!e.read})),e.push.apply(e,Y()(t.payload)),e.sort((function(e,t){return t.date.localeCompare(e.date)}))}))}}),te=ee.actions.allNotificationsRead,ne=ee.reducer,re=(0,z.UY)({posts:M,users:X,notifications:ne}),ae=B.v9;n(26541);const oe=function(){var e=(0,r.useState)(""),t=K()(e,2),n=t[0],a=t[1],o=(0,r.useState)(""),s=K()(o,2),i=s[0],c=s[1],l=(0,r.useState)(""),u=K()(l,2),d=u[0],p=u[1],m=(0,r.useState)("idle"),f=K()(m,2),h=f[0],v=f[1],E=(0,B.I0)(),g=ae((function(e){return e.users})),b=[n,i,d].every(Boolean)&&"idle"===h,k=function(){var e=x()(y().mark((function e(){var t;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!b){e.next=18;break}return e.prev=1,v("pending"),e.next=5,E(A({title:n,content:i,user:d}));case 5:t=e.sent,(0,I.SI)(t),a(""),c(""),p(""),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.error("Failed to save the post: ",e.t0);case 15:return e.prev=15,v("idle"),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[1,12,15,18]])})));return function(){return e.apply(this,arguments)}}(),N=g.map((function(e){return r.createElement("option",{key:e.id,value:e.id},e.name)}));return r.createElement("form",null,r.createElement("label",{htmlFor:"postTitle"},"Post Title"),r.createElement("input",{type:"text",id:"postTitle",name:"postTitle",value:n,onChange:function(e){return a(e.target.value)}}),r.createElement("label",{htmlFor:"postAuthor"},"Author:"),r.createElement("select",{id:"postAuthor",value:d,onChange:function(e){return p(e.target.value)}},r.createElement("option",{value:""}),N),r.createElement("label",{htmlFor:"postContent"},"Content"),r.createElement("textarea",{id:"postContent",name:"postContent",value:i,onChange:function(e){return c(e.target.value)}}),r.createElement("div",{className:w.Z["button-container"]},r.createElement("button",{type:"button",onClick:k},"Save")))},se=function(e){var t=e.userId,n=ae((function(e){return e.users.find((function(e){return e.id===t}))}));return r.createElement("span",{className:w.Z.author},"by ",n?n.name:"Unknown author")};var ie=n(62823),ce=n(93813);const le=function(e){var t=e.timestamp,n="";if(t){var a=(0,ie.Z)(t),o=(0,ce.Z)(a);n="".concat(o," ago")}return r.createElement("span",{title:t,className:w.Z.timestamp}," ",r.createElement("i",null,n))};n(69720);var ue={thumbsUp:"👍",hooray:"🎉",heart:"❤️",rocket:"🚀",eyes:"👀"},de=function(e){var t=e.post,n=(0,B.I0)(),a=Object.entries(ue).map((function(e){var a=K()(e,2),o=a[0],s=a[1];return r.createElement("button",{key:o,type:"button",className:w.Z["reaction-button"],onClick:function(){return n(D({postId:t.id,reaction:o}))}},s," ",t.reactions[o])}));return r.createElement("div",{className:w.Z.reaction},a)};const pe=function(){var e,t=(0,B.I0)(),n=ae(L),a=ae((function(e){return e.posts.status})),o=ae((function(e){return e.posts.error}));return(0,r.useEffect)((function(){"idle"===a&&t(_())}),[a,t]),"loading"===a?e=r.createElement("div",{className:w.Z.loader},"Loading..."):"succeeded"===a?e=n.slice().sort((function(e,t){return t.date.localeCompare(e.date)})).map((function(e){return r.createElement(N.Z,{key:e.id,title:e.title,catchPhrase:e.content.substring(0,100),link:{text:"View Post",to:"/posts/".concat(e.id)},author:r.createElement(se,{userId:e.user}),timeAgo:r.createElement(le,{timestamp:e.date}),reactEmoji:r.createElement(de,{post:e})})})):"failed"===a&&(e=r.createElement("div",null,o)),r.createElement("div",{className:w.Z.posts},r.createElement("h2",null,"Posts to Popular Laboratories"),r.createElement("p",null,"Follow the posts made to Programming Laboratories"),r.createElement("div",{className:w.Z["posts-content"]},r.createElement(oe,null),r.createElement("div",{className:w.Z["posts-list"]},e)))};function me(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function fe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?me(Object(n),!0).forEach((function(t){v()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):me(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var he=(0,r.lazy)((function(){return n.e(124).then(n.bind(n,75339))}));function ve(e){return Ee.apply(this,arguments)}function Ee(){return(Ee=x()(y().mark((function e(t){var n;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.prev=3,e.next=6,n.json();case 6:n.parsedBody=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),console.log(e.t0);case 12:if(n.ok){e.next=14;break}throw new Error(n.statusText);case 14:return e.abrupt("return",n);case 15:case"end":return e.stop()}}),e,null,[[3,9]])})))).apply(this,arguments)}var ge=function(e){u()(i,e);var t,n,a,o=(n=i,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f()(n);if(a){var r=f()(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return p()(this,e)});function i(e){var t;return s()(this,i),(t=o.call(this,e)).state={title:"",description:"",navCards:[{title:" ",catchPhrase:""}],popularCards:[{title:" ",catchPhrase:""}],isFetching:!0},t}return c()(i,[{key:"fetchHomepagesWithFetch",value:(t=x()(y().mark((function e(){var t,n,r,a,o,s,i,c,l,u,d;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState(fe(fe({},this.state),{},{isFetching:!0})),e.prev=1,e.next=4,ve("/api/v1/homepage");case 4:(t=e.sent).parsedBody&&(console.log("api",t.parsedBody),n=t.parsedBody,r=n.title,a=n.description,o=n.navCards,s=n.popularCards,this.setState({title:r,description:a,navCards:o,popularCards:s,isFetching:!1})),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),i=Z.X,c=i.title,l=i.description,u=i.navCards,d=i.popularCards,this.setState({title:c,description:l,navCards:u,popularCards:d,isFetching:!1});case 12:case"end":return e.stop()}}),e,this,[[1,8]])}))),function(){return t.apply(this,arguments)})},{key:"componentDidMount",value:function(){this.fetchHomepagesWithFetch()}},{key:"render",value:function(){var e=this.state,t=e.title,n=e.description,a=e.navCards,o=e.popularCards;return e.isFetching?r.createElement("div",null,"Fetching home page ..."):r.createElement("div",null,r.createElement(k,{title:t,desc:n}),r.createElement("div",{className:w.Z.container},r.createElement(r.Suspense,{fallback:r.createElement("div",null,"Loading.....")},r.createElement(he,{cards:a})),r.createElement(pe,null),r.createElement(T,{cards:o})))}}]),i}(r.Component);v()(ge,"defaultProps",{children:[]});const ye=ge;n(4723);var be=n(73727),xe=function(e){var t=e.match.params.postId,n=ae((function(e){return q(e,t)}));return n?r.createElement("div",{className:w.Z.card},r.createElement("div",{className:w.Z.post},r.createElement("h2",null,n.title),r.createElement(se,{userId:n.user}),r.createElement(le,{timestamp:n.date}),r.createElement("p",{className:w.Z["post-content"]},n.content),r.createElement(de,{post:n}),r.createElement("div",{className:w.Z["button-container"]},r.createElement(be.rU,{to:"/editPost/".concat(n.id)},"Edit Post")))):r.createElement("section",null,r.createElement("h2",null,"Post not found!"))};xe.propTypes={match:P().exact({path:P().string,url:P().string,isExact:P().bool,params:P().exact({postId:P().string.isRequired}).isRequired}).isRequired};const we=xe;var ke=n(5977),Ne=function(e){var t=e.match.params.postId,n=ae((function(e){return q(e,t)})),a=(0,r.useState)(n?null==n?void 0:n.title:""),o=K()(a,2),s=o[0],i=o[1],c=(0,r.useState)(n?null==n?void 0:n.content:""),l=K()(c,2),u=l[0],d=l[1],p=n?null==n?void 0:n.user:"",m=n?null==n?void 0:n.date:"",f=n?null==n?void 0:n.reactions:{thumbsUp:0,hooray:0,heart:0,rocket:0,eyes:0},h=(0,B.I0)(),v=(0,ke.k6)();return r.createElement("div",{className:w.Z.card},r.createElement("div",{className:w.Z.post},r.createElement("form",null,r.createElement("label",{htmlFor:"postTitle"},"Post Title"),r.createElement("input",{type:"text",id:"postTitle",name:"postTitle",value:s,onChange:function(e){return i(e.target.value)}}),r.createElement("label",{htmlFor:"postContent"},"Content"),r.createElement("textarea",{id:"postContent",name:"postContent",value:u,onChange:function(e){return d(e.target.value)}}),r.createElement("div",{className:w.Z["button-container"]},r.createElement("button",{type:"button",onClick:function(){s&&u&&(h(U({id:t,title:s,content:u,user:p,date:m,reactions:f})),v.push("/posts/".concat(t)))}},"Save")))))};Ne.propTypes={match:P().exact({path:P().string,url:P().string,isExact:P().bool,params:P().exact({postId:P().string.isRequired}).isRequired}).isRequired};const Ce=Ne,Pe=function(){var e=ae(G);return r.createElement("div",{className:w.Z.users},r.createElement("h2",null,"Users"),r.createElement("ul",null,e.map((function(e){return r.createElement("li",{key:e.id},r.createElement(be.rU,{to:"/users/".concat(e.id)},e.name))}))))};var Se=function(e){var t=e.match.params.userId,n=ae((function(e){return function(e,t){return e.users.find((function(e){return e.id===t}))}(e,t)})),a=ae((function(e){return W(e,t)}));return n?r.createElement("div",{className:w.Z.card},r.createElement("div",{className:w.Z["user-card"]},r.createElement("h2",null,n.name),r.createElement("ul",null,a.map((function(e){return r.createElement("li",{key:e.id},r.createElement(be.rU,{to:"/posts/".concat(e.id)},e.title))}))))):r.createElement("section",null,r.createElement("h2",null,"User not found!"))};Se.propTypes={match:P().exact({path:P().string,url:P().string,isExact:P().bool,params:P().exact({userId:P().string.isRequired}).isRequired}).isRequired};const Te=Se,Ze=function(){var e=(0,B.I0)(),t=ae(G),n=ae(V);return(0,r.useEffect)((function(){e(te())})),r.createElement("div",{className:w.Z["notifications-list"]},r.createElement("h2",null,"Notifications"),n.map((function(e){var n=(0,ie.Z)(e.date),a=(0,ce.Z)(n),o=t.find((function(t){return t.id===e.user}))||{name:"Unknown User"},s="".concat(w.Z.notification);return e.isNew&&(s+=" ".concat(w.Z["is-new"])),r.createElement("div",{key:e.id,className:s},r.createElement("div",null,r.createElement("b",null,o.name)," ",e.message),r.createElement("div",{title:e.date},r.createElement("i",null,a," ago")))})))};var Ie=n(20724);const je=function(){var e,t=(0,B.I0)(),n=ae(V).filter((function(e){return!e.read})).length;return n>0&&(e=r.createElement("span",{className:w.Z.badge},n)),r.createElement("div",{className:w.Z["navbar-minimal"]},r.createElement("img",{src:Ie}),r.createElement(be.rU,{to:"/"},"Home"),r.createElement(be.rU,{to:"/users"},"Users"),r.createElement(be.rU,{to:"/notifications"},"Notifications",e),r.createElement("div",{className:w.Z["button-container"]},r.createElement("button",{onClick:function(){t($())}},"Refresh Notifications")))};var Oe=function(e){u()(o,e);var t,n,a=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=f()(t);if(n){var a=f()(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return p()(this,e)});function o(e){return s()(this,o),a.call(this,e)}return c()(o,[{key:"render",value:function(){return r.createElement(r.Fragment,null,r.createElement(be.VK,null,r.createElement(je,null),r.createElement(ke.rs,null,r.createElement(ke.AW,{exact:!0,path:"/",render:function(){return r.createElement(ye,null)}}),r.createElement(ke.AW,{exact:!0,path:"/posts/:postId",component:we}),r.createElement(ke.AW,{exact:!0,path:"/editPost/:postId",component:Ce}),r.createElement(ke.AW,{exact:!0,path:"/users",component:Pe}),r.createElement(ke.AW,{exact:!0,path:"/users/:userId",component:Te}),r.createElement(ke.AW,{exact:!0,path:"/notifications",component:Ze}),r.createElement(ke.l_,{to:"/"})),r.createElement("div",{className:w.Z.footer},r.createElement("div",{className:w.Z.container},r.createElement("p",null,"The Javascript/ Typescript laboratories. Contact: Programming Laboratory.")))))}}]),o}(r.Component);v()(Oe,"defaultProps",{done:!1});const _e=(0,E.w)(Oe),Ae=(0,I.xC)({reducer:re});var Re=n(24988),Fe=n(85384),Ue=n(66700),De=n(36377),Me=n.n(De);const Le=Re.Vs.extend({serializeIds:"always"});let qe=Me()();{let e,t=localStorage.getItem("randomTimestampSeed");t?e=new Date(t):(e=new Date,t=e.toISOString(),localStorage.setItem("randomTimestampSeed",t)),qe=Me()(t),(0,Ue.setRandom)(qe),(0,Fe.seed)(e.getTime())}function We(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(qe()*(t-e+1))+e}const ze=e=>e[We(0,e.length-1)],Be=["poked you","says hi!","is glad we're friends","sent you a gift"];new Re.xF({routes(){this.namespace="fakeApi",this.resource("users"),this.resource("posts"),this.resource("comments");const e=this;this.post("/posts",(function(t,n){const r=this.normalizedRequestAttrs();r.date=(new Date).toISOString();const a=t.users.find(r.userId);if(r.user=a,"error"===r.content)throw new Error("Could not save the post!");return e.create("post",r)})),this.get("/posts/:postId/comments",((e,t)=>e.posts.find(t.params.postId).comments)),this.get("/notifications",((e,t)=>{const n=We(1,5);let r;const a=new Date;return t.queryParams.since?r=(0,ie.Z)(t.queryParams.since):(r=new Date(a.valueOf()),r.setMinutes(r.getMinutes()-15)),{notifications:[...Array(n)].map((()=>{const t=ze(e.db.users),n=ze(Be);return{id:(0,I.x0)(),date:Fe.date.between(r,a).toISOString(),message:n,user:t.id,read:!1,isNew:!0}}))}}))},models:{user:Re.Hn.extend({posts:(0,Re.TY)()}),post:Re.Hn.extend({user:(0,Re.z2)(),comments:(0,Re.TY)()}),comment:Re.Hn.extend({post:(0,Re.z2)()}),notification:Re.Hn.extend({})},factories:{user:Re.Fk.extend({id:()=>(0,I.x0)(),firstName:()=>Fe.name.firstName(),lastName:()=>Fe.name.lastName(),name(){return Fe.name.findName(this.firstName,this.lastName)},username(){return Fe.internet.userName(this.firstName,this.lastName)},afterCreate(e,t){t.createList("post",3,{user:e})}}),post:Re.Fk.extend({id:()=>(0,I.x0)(),title:()=>(0,Ue.sentence)(),date:()=>Fe.date.recent(7),content:()=>(0,Ue.article)(1),reactions:()=>({thumbsUp:0,hooray:0,heart:0,rocket:0,eyes:0}),afterCreate(e,t){},user:(0,Re.Lb)()}),comment:Re.Fk.extend({id:()=>(0,I.x0)(),date:()=>Fe.date.past(2),text:()=>(0,Ue.paragraph)(),post:(0,Re.Lb)()})},serializers:{user:Le,post:Le,comment:Le},seeds(e){e.createList("user",3)}}),Ae.dispatch(H()),a.render(r.createElement(r.StrictMode,null,r.createElement(B.zt,{store:Ae},r.createElement(_e,{title:"Front Ends"}))),document.getElementById("app"))},40346:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r={"navbar-minimal":"_3nIGi9Bdg-W86wMUrButPd",badge:"_37Vf__T5WjZ_v_-yd04rtd","button-container":"_2DpYSkw1_34Setr0YnLqQB",banner:"L4AfGl_TH6AlKkmGtS47V",container:"_2w45mQoDyF67dWrSMGJ5Eo","home-nav":"_2Bmhe_l1BM0vpg_Ue0NgA_",card:"_2DLRxzQtalWn5vJ2Twhz8P","search-bar":"_1ljmm57gVXt4dJKPsHBMwZ",posts:"_3OErBPMN_5O38oZTws3S5z",post:"_1jxrsT1L9XqVxGQSXIFTcT",author:"_2dfxVmDISRpLcnbjAo7xOE",timestamp:"_33hsRxsHcm7IN1ZpJQW6yi","post-content":"_8vwpxwgTmf4yy3T8R3Txg","posts-content":"_16iOssS4l0HBp84WfAHGwU","posts-list":"_2YjczPPYP6N0skS8MHDWkU",users:"_23r8A8AWEtz4IZUtTz0jff","user-card":"_1l1kMe3dRBzXzAIp4jaIsI","notifications-list":"zWL5d6S8IUTMAwpGAcqnk",notification:"_3F6nxAx9ocv3E40Yc4cpOU","is-new":"_38F7M8DlH1DO3paY-q6KIs",popular:"_12kWmrlwWC8SwrMFDYAuma","popular-labs":"_1GLL8QgO8Pw7nYJazUa6d6",top:"_3R4NKXX8LF67m2jFWwXFyr",next:"_1NRFqqutP0aOIXawjKd-Hi",footer:"CZ9CfIbLEGbjajBOZ-aII",reaction:"fd9t1JClqvuiQTDmEHU3j","reaction-button":"HuPDyrqiij_PkRQTx4QUh",loader:"FK2Ubo5iKPbdcZjXmXcFo",load3:"_2FNf8hRixo18muZjil7rCd"}},20724:(e,t,n)=>{"use strict";e.exports=n.p+"6ce24c58023cc2f8fd88.svg"},63906:()=>{}},r={};function a(e){if(r[e])return r[e].exports;var t=r[e]={id:e,loaded:!1,exports:{}};return n[e].call(t.exports,t,t.exports,a),t.loaded=!0,t.exports}a.m=n,a.x=e=>{},a.amdD=function(){throw new Error("define cannot be used indirect")},a.amdO={},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,n)=>(a.f[n](e,t),t)),[])),a.u=e=>"hnav.4165a3063ecbf9d75651.bundle.js",a.miniCssF=e=>{},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="frontend:",a.l=(n,r,o,s)=>{if(e[n])e[n].push(r);else{var i,c;if(void 0!==o)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+o){i=d;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",t+o),i.src=n),e[n]=[r];var p=(t,r)=>{i.onerror=i.onload=null,clearTimeout(m);var a=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(r))),t)return t(r)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),c&&document.head.appendChild(i)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),a.p="/",(()=>{var e={143:0},t=[[41071,375]];a.f.j=(t,n)=>{var r=a.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise(((n,a)=>{r=e[t]=[n,a]}));n.push(r[2]=o);var s=a.p+a.u(t),i=new Error;a.l(s,(n=>{if(a.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",i.name="ChunkLoadError",i.type=o,i.request=s,r[1](i)}}),"chunk-"+t,t)}};var n=e=>{},r=(r,o)=>{for(var s,i,[c,l,u,d]=o,p=0,m=[];p<c.length;p++)i=c[p],a.o(e,i)&&e[i]&&m.push(e[i][0]),e[i]=0;for(s in l)a.o(l,s)&&(a.m[s]=l[s]);for(u&&u(a),r&&r(o);m.length;)m.shift()();return d&&t.push.apply(t,d),n()},o=self.webpackChunkfrontend=self.webpackChunkfrontend||[];function s(){for(var n,r=0;r<t.length;r++){for(var o=t[r],s=!0,i=1;i<o.length;i++){var c=o[i];0!==e[c]&&(s=!1)}s&&(t.splice(r--,1),n=a(a.s=o[0]))}return 0===t.length&&(a.x(),a.x=e=>{}),n}o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o));var i=a.x;a.x=()=>(a.x=i||(e=>{}),(n=s)())})(),a.x()})();