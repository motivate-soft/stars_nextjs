_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[51],{"45SU":function(e,a,t){"use strict";var n=t("wx14"),r=t("9xET"),s=t.n(r),o=t("4IMT"),i=t.n(o),l=t("ZPTe"),c=t.n(l),u=t("iJl9"),p=t.n(u),m=t("o0o1"),d=t.n(m),g=t("HaE+"),f=t("qu0K"),h=t.n(f),b=t("ODXe"),x=t("q1tI"),w=t.n(x),y=(t("olOf"),t("vOnD")),v=t("Ye+W"),k=t("OKMn"),N=function(e){var a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return fetch("".concat(v.BACKEND_URL,"/api/users/contact_email"),a).then(E).catch((function(e){throw Error(e)}))};function E(e){if(e.ok)return e.json();if(400===e.status)throw Error("Bad request");e.text().then((function(e){throw Error(e)}))}var _=w.a.createElement,O={wrapperCol:{sm:{span:24}}},z=y.d.div.withConfig({displayName:"ContactForm__FormWrapper",componentId:"bb03xb-0"})(["button{width:240px;}"]);a.a=function(){var e=h.a.useForm(),a=Object(b.a)(e,1)[0],t=function(){var e=Object(g.a)(d.a.mark((function e(a){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N(a);case 3:if(t=e.sent,console.log("ContactForm",t),"ok"!==t.status){e.next=8;break}return Object(k.a)("success","Email has been submitted successfully!"),e.abrupt("return");case 8:Object(k.a)("warning","Sorry, there was an error while submitting your email"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),Object(k.a)("warning","Sorry, there was an error while submitting your email");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(a){return e.apply(this,arguments)}}();return _(z,null,_(h.a,Object(n.a)({},O,{form:a,name:"contact-info",className:"checkout-contact-form",onFinish:t,initialValues:{firstName:"",lastName:"",email:"",message:""},scrollToFirstError:!0}),_(s.a,{gutter:[32,16]},_(c.a,{lg:12,sm:24},_(h.a.Item,{name:"firstName",className:"isoInputWrapper",rules:[{required:!0,message:"Please input your firstName"}]},_(p.a,{size:"large",placeholder:"First Name"}))),_(c.a,{lg:12,sm:24},_(h.a.Item,{name:"lastName",className:"isoInputWrapper",rules:[{required:!0,message:"Please input your lastName"}]},_(p.a,{size:"large",placeholder:"Last Name"}))),_(c.a,{lg:24,sm:24},_(h.a.Item,{name:"email",className:"isoInputWrapper",rules:[{required:!0,message:"Please input your email"}]},_(p.a,{size:"large",placeholder:"Email"}))),_(c.a,{lg:24,sm:24},_(h.a.Item,{name:"message",className:"isoInputWrapper",rules:[{required:!0,message:"Please input your message"}]},_(p.a.TextArea,{rows:5,size:"large",placeholder:"message"}))),_(c.a,{sm:24},_(i.a,{type:"secondary",size:"large",htmlType:"submit"},"Submit")))))}},EDUr:function(e,a,t){"use strict";var n=t("vOnD"),r=t("Bk8I"),s=n.d.div.withConfig({displayName:"loaderstyle__LoaderComponent",componentId:"sc-1pxv3ii-0"})(["width:100%;height:100%;display:flex;align-items:center;justify-content:center;position:absolute;z-index:10000000000;top:0;right:0;@media only screen and (min-width:768px) and (max-width:1220px){width:calc(100% - 80px);}@media only screen and (max-width:767px){width:100%;}.isoContentLoader{width:50px;height:50px;animation:svgSpinner 1.4s linear infinite;}.isoContentLoaderCircle{animation:svgSpinnerCircle 1.4s ease-in-out infinite;stroke-dasharray:80px,200px;stroke-dashoffset:0px;stroke:",";stroke-linecap:round;}@keyframes svgSpinner{100%{transform:rotate(360deg);}}@keyframes svgSpinnerCircle{0%{stroke-dasharray:1px,200px;stroke-dashoffset:0px;}50%{stroke-dasharray:100px,200px;stroke-dashoffset:-15px;}100%{stroke-dasharray:100px,200px;stroke-dashoffset:-120px;}}"],Object(r.palette)("primary",0));a.a=s},Juyh:function(e,a,t){"use strict";t.r(a),t.d(a,"__N_SSG",(function(){return S})),t.d(a,"default",(function(){return j}));var n=t("q1tI"),r=t.n(n),s=t("8Kt/"),o=t.n(s),i=t("mq74"),l=t("9xET"),c=t.n(l),u=t("ZPTe"),p=t.n(u),m=t("4IMT"),d=t.n(m),g=t("Wasw"),f=t("iDsv"),h=t("45SU"),b=t("ryiZ"),x=t("oS8Y"),w=t("vOnD"),y=t("YEJx"),v=w.d.div.withConfig({displayName:"Aboutstyles__AboutWrapper",componentId:"sc-1ak65av-0"})(["h2{color:","}.check-boston-block{padding:50px 0;.image-wrapper{width:90%;padding-top:80%;background-size:cover;background-repeat:no-repeat;background-position:center;border-radius:8px 8px 8px 8px;box-shadow:0px 10px 1px #ddd,0 10px 20px #ccc;@media screen and (max-width:992px){width:100%;margin:0 !important;}}}.press-block{padding:50px 0;background-color:#F8F8F8;h2{text-align:center;}}.contact-info-block{padding:100px 0;h5{font-size:16px;font-weight:700;margin-bottom:20px;font-family:Raleway,sans-serif;}.social-icons-group{svg{margin:8px;fill:",";}}}"],Object(y.a)("primary",0),Object(y.a)("warning",0)),k=t("eJju"),N=t("YFqc"),E=t.n(N),_=t("gzNZ"),O=r.a.createElement;var z=function(e){var a=e.posts;return O(v,null,O(g.a,{as:"section",className:"main-background-2"}),O(f.a,{className:"check-boston-block"},O(c.a,{gutter:[32,32]},O(p.a,{lg:12,sm:24},O(k.a,{index:44,size:"lg",posts:a}),O(E.a,{href:"/locations#boston"},O(d.a,{type:"secondary",size:"large"},"CHECK OUT BOSTON"))),O(p.a,{lg:12,sm:24},O("div",{className:"image-wrapper",style:{backgroundImage:"url(".concat(_.a,")")}})))),O(g.a,{as:"section",className:"press-block"},O(f.a,null,O(k.a,{index:45,size:"lg",posts:a}))),O(f.a,{className:"contact-info-block"},O(c.a,{gutter:32},O(p.a,{lg:12,sm:24},O("h2",null,"Contact us"),O("p",null,"We are available to answer questions and provide suggestions or connect you with some of our additional personalized services. Please contact us using the form or the contact details below:"),O("h5",null,"(617)-855-9576 "),O("p",null,"info@starsofboston.com "),O("p",null,"1583 Beacon Street",O("br",null),"Brookline, MA 02446",O("br",null),"USA"),O(x.a,{size:28})),O(p.a,{lg:12,sm:24},O(h.a,null)))),O(b.a,null))},I=r.a.createElement,S=!0;function j(e){var a=e.posts;return I(r.a.Fragment,null,I(o.a,null,I("title",null,"About")),I(i.a,null,I(z,{posts:a})))}},eJju:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),s=(t("YFqc"),t("EDUr")),o=t("/MKj"),i=t("17x9"),l=t.n(i),c=t("vOnD"),u=t("YEJx"),p=r.a.createElement,m=c.d.div.withConfig({displayName:"EditPost__EditPostWrapper",componentId:"s7t4a1-0"})(["margin-top:0;h2,h4,h5{color:",";margin-top:0;margin-bottom:16px;}"],Object(u.a)("primary",0));function d(e){var a=e.index,t=e.posts,n=e.size,i=e.title,l=e.content,c=Object(o.d)((function(e){return e.Auth.idToken}));return p(m,null,t&&t.length>0?"":p(s.a,null),l?null:p(r.a.Fragment,null,"lg"===n&&p("h2",{className:"text-blue"},t&&t.length>0?t[a].title:""),"md"===n&&p("h4",{className:"text-blue"},t&&t.length>0?t[a].title:""),"sm"===n&&p("h5",{className:"text-blue"},t&&t.length>0?t[a].title:"")),i?null:p(r.a.Fragment,null,t&&t.length>0?p("div",{dangerouslySetInnerHTML:{__html:t[a].text}}):""),c&&t&&t.length>0&&p("div",{className:"text-center"},p("a",{href:"/admin/post?id=".concat(t[a].id),target:"_blank",className:"edit-btn"},"Edit")))}d.prototype={size:l.a.string,posts:l.a.array,title:l.a.bool,content:l.a.bool},d.defaultProps={size:"md",title:!1,content:!1},a.a=d},gzNZ:function(e,a,t){"use strict";a.a="/static/assets/9d9815ef4ea5f91a7f57ef3fcca1e860.jpg"},oS8Y:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t("q1tI"),r=t.n(n),s=t("dRoA"),o=r.a.createElement;function i(e){var a=e.size;e.color;return o("div",{className:"social-icons-group"},o("a",{target:"_blank",href:"//www.instagram.com/starsofboston"},o(s.g,{size:a})),o("a",{target:"_blank",href:"//twitter.com/starsofboston"},o(s.h,{size:a})),o("a",{target:"_blank",href:"//www.facebook.com/starsboston617"},o(s.e,{size:a})))}},rB5V:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return t("Juyh")}])},ryiZ:function(e,a,t){"use strict";t.d(a,"a",(function(){return E}));var n=t("9xET"),r=t.n(n),s=t("4IMT"),o=t.n(s),i=t("ZPTe"),l=t.n(i),c=t("iJl9"),u=t.n(c),p=t("o0o1"),m=t.n(p),d=t("HaE+"),g=t("qu0K"),f=t.n(g),h=t("ODXe"),b=t("q1tI"),x=t.n(b),w=t("vOnD"),y=t("iDsv"),v=t("YEJx"),k=x.a.createElement,N=w.d.div.withConfig({displayName:"Subscription__SubscriptionWrapper",componentId:"sc-138f60a-0"})(["h2{color:","}padding:130px 24px 120px;background:linear-gradient(to right,rgba(255,255,255,0.8),rgba(255,255,255,0.8)),url(",") no-repeat center;background-size:cover;button{display:block;margin:auto;min-width:15rem;}"],Object(v.a)("primary",0),"/static/assets/14f06e2e8aeaef2446e39887eea60e25.jpg");function E(){var e=f.a.useForm(),a=Object(h.a)(e,1)[0],t=function(){var e=Object(d.a)(m.a.mark((function e(a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return k(N,null,k(y.a,null,k("h2",null,"Subscribe for the latest news and offers"),k(f.a,{wrapperCol:24,form:a,name:"contact-info",className:"checkout-contact-form",onFinish:t,initialValues:{name:"",email:""},scrollToFirstError:!0},k(r.a,{gutter:[32,16]},k(l.a,{lg:8,sm:24},k(f.a.Item,{name:"name",rules:[{required:!0,message:"Please input your name"}]},k(u.a,{size:"large",placeholder:"Your Name"}))),k(l.a,{lg:8,sm:24},k(f.a.Item,{name:"email",rules:[{required:!0,message:"Please input your email"}]},k(u.a,{size:"large",placeholder:"Email"}))),k(l.a,{lg:8,sm:24},k(o.a,{type:"secondary",size:"large",htmlType:"submit"},"Sign up"))))))}}},[["rB5V",1,2,6,8,0,3,4,7,5,9,10,11,12,13,14,15,17,18,34,24]]]);