(this["webpackJsonpferns-fitness"]=this["webpackJsonpferns-fitness"]||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var i=n(0),s=n(1),c=n.n(s),a=n(17),r=n.n(a),o=n(3),l=n(4),u=n(6),j=n(5),d=n(2),h=n(16),b=(n(32),n(33),n(12)),m=n(9),x=(n(39),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).header=c.a.createRef(),e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t={behavior:"smooth",block:"end"};return Object(i.jsxs)("div",{id:"header",ref:this.header,children:[Object(i.jsx)("div",{className:"logo-wrapper",children:Object(i.jsx)("div",{className:"logo-image",children:Object(i.jsxs)("svg",{ref:function(t){return e.logoImage=t},version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 300 300",enableBackground:"new 0 0 300 300",xmlSpace:"preserve",children:[Object(i.jsx)("defs",{children:Object(i.jsx)("path",{id:"circlePath",d:" M 150, 150 m -120, 0 a 120,120 0 0,1 240,0 a 120,120 0 0,1 -240,0 "})}),Object(i.jsxs)("g",{children:[Object(i.jsx)("use",{xlinkHref:"#circlePath",fill:"none"}),Object(i.jsxs)("text",{fill:"#fff",fontSize:"35px",fontWeight:"bold",letterSpacing:"5px",children:[Object(i.jsx)("textPath",{startOffset:"-10",xlinkHref:"#circlePath",stroke:"#FFF",fill:"#FFF",children:"\u2022"}),Object(i.jsx)("textPath",{startOffset:"23",xlinkHref:"#circlePath",stroke:"#FFF",fill:"transparent",children:"FERNS FITNESS"}),Object(i.jsx)("textPath",{startOffset:"400",xlinkHref:"#circlePath",stroke:"#FFF",fill:"transparent",children:"FERNS FITNESS"}),Object(i.jsx)("textPath",{startOffset:"367.5",xlinkHref:"#circlePath",stroke:"#FFF",fill:"#FFF",children:"\u2022"})]})]})]})})}),Object(i.jsx)("div",{className:"nav",children:Object(i.jsxs)(b.BrowserRouter,{children:[Object(i.jsx)(m.HashLink,{className:"link",to:"./#",scroll:function(e){e.scrollIntoView(t)},children:"Home"}),Object(i.jsx)(m.HashLink,{className:"link",to:"./#about",scroll:function(e){e.scrollIntoView(t)},children:"About"}),Object(i.jsx)(m.HashLink,{className:"link",to:"./#services",scroll:function(e){e.scrollIntoView(t)},children:"Services"}),Object(i.jsx)(m.HashLink,{className:"link",to:"./#testimonials",scroll:function(e){e.scrollIntoView(t)},children:"Testimonials"}),Object(i.jsx)(m.HashLink,{className:"link",to:"./#contact",scroll:function(e){e.scrollIntoView(t)},children:"Contact"})]})})]})}}]),n}(s.Component)),f=(n(40),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).hero=c.a.createRef(),e.heroLogo=c.a.createRef(),e.logoWrapper=c.a.createRef(),e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){d.a.registerPlugin(h.a),d.a.to(this.heroLogo.current,{rotate:"+=360",duration:45,ease:"linear",repeat:-1}),d.a.to(this.logoWrapper.current,{opacity:0,yPercent:100,scrollTrigger:{trigger:this.hero.current,scrub:!0,start:"top top",end:"bottom top"}})}},{key:"render",value:function(){return Object(i.jsxs)("div",{ref:this.hero,className:"section pink",id:"hero",children:[Object(i.jsx)("div",{className:"background"}),Object(i.jsx)("div",{className:"inner",children:Object(i.jsxs)("div",{className:"logo-wrapper",ref:this.logoWrapper,children:[Object(i.jsx)("div",{className:"logo-image",children:Object(i.jsxs)("svg",{ref:this.heroLogo,version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 300 300",enableBackground:"new 0 0 300 300",xmlSpace:"preserve",children:[Object(i.jsx)("defs",{children:Object(i.jsx)("path",{id:"circlePath",d:" M 150, 150 m -120, 0 a 120,120 0 0,1 240,0 a 120,120 0 0,1 -240,0 "})}),Object(i.jsxs)("g",{children:[Object(i.jsx)("use",{xlinkHref:"#circlePath",fill:"none"}),Object(i.jsxs)("text",{fill:"#fff",fontSize:"35px",fontWeight:"bold",letterSpacing:"5px",children:[Object(i.jsx)("textPath",{startOffset:"-10",xlinkHref:"#circlePath",stroke:"#FFF",fill:"#FFF",children:"\u2022"}),Object(i.jsx)("textPath",{startOffset:"23",xlinkHref:"#circlePath",stroke:"#FFF",fill:"transparent",children:"FERNS FITNESS"}),Object(i.jsx)("textPath",{startOffset:"400",xlinkHref:"#circlePath",stroke:"#FFF",fill:"transparent",children:"FERNS FITNESS"}),Object(i.jsx)("textPath",{startOffset:"367.5",xlinkHref:"#circlePath",stroke:"#FFF",fill:"#FFF",children:"\u2022"})]})]})]})}),Object(i.jsxs)("div",{className:"logo-text",children:["Personal Trainer",Object(i.jsx)("br",{})," & Body Coach"]})]})})]})}}]),n}(s.Component)),O=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).about=c.a.createRef(),e.sectionTitle=c.a.createRef(),e.sectionText=c.a.createRef(),e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){d.a.registerPlugin(h.a);var e=d.a.fromTo([this.sectionTitle.current,this.sectionText.current],{opacity:0,yPercent:50},{opacity:1,yPercent:0});h.a.create({trigger:this.about.current,animation:e,start:"top 25%",toggleActions:"play none none none",once:!0})}},{key:"render",value:function(){return Object(i.jsxs)("div",{className:"section white",id:"about",ref:this.about,children:[Object(i.jsx)("div",{className:"background"}),Object(i.jsx)("div",{className:"inner",children:Object(i.jsx)("div",{className:"inner-wrapper main-second",children:Object(i.jsxs)("div",{className:"main",children:[Object(i.jsxs)("div",{className:"main-container",children:[Object(i.jsx)("h2",{className:"section-title",ref:this.sectionTitle,children:"About"}),Object(i.jsx)("p",{className:"section-text",ref:this.sectionText,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non vestibulum ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut feugiat leo vitae cursus tristique. Praesent eu lorem eget ex pharetra gravida. Aliquam erat volutpat. Sed euismod sapien in condimentum iaculis. In suscipit libero."})]}),Object(i.jsx)("div",{className:"second",children:Object(i.jsx)("div",{className:"second-container"})})]})})})]})}}]),n}(s.Component),p=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).services=c.a.createRef(),e.sectionTitle=c.a.createRef(),e.sectionText=c.a.createRef(),e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){d.a.registerPlugin(h.a);var e=d.a.fromTo([this.sectionTitle.current,this.sectionText.current],{opacity:0,yPercent:50},{opacity:1,yPercent:0});h.a.create({trigger:this.services.current,animation:e,start:"top 25%",toggleActions:"play none none none",once:!0})}},{key:"render",value:function(){return Object(i.jsxs)("div",{className:"section pink",id:"services",ref:this.services,children:[Object(i.jsx)("div",{className:"background"}),Object(i.jsx)("div",{className:"inner",children:Object(i.jsx)("div",{className:"inner-wrapper main-second",children:Object(i.jsxs)("div",{className:"main",children:[Object(i.jsxs)("div",{className:"main-container",children:[Object(i.jsx)("h2",{className:"section-title",ref:this.sectionTitle,children:"Services"}),Object(i.jsx)("p",{className:"section-text",ref:this.sectionText,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non vestibulum ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut feugiat leo vitae cursus tristique. Praesent eu lorem eget ex pharetra gravida. Aliquam erat volutpat. Sed euismod sapien in condimentum iaculis. In suscipit libero."})]}),Object(i.jsx)("div",{className:"second",children:Object(i.jsx)("div",{className:"second-container"})})]})})})]})}}]),n}(s.Component),v=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).testimonials=c.a.createRef(),e.sectionTitle=c.a.createRef(),e.sectionText=c.a.createRef(),e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){d.a.registerPlugin(h.a);var e=d.a.fromTo([this.sectionTitle.current,this.sectionText.current],{opacity:0,yPercent:50},{opacity:1,yPercent:0});h.a.create({trigger:this.testimonials.current,animation:e,start:"top 25%",toggleActions:"play none none none",once:!0})}},{key:"render",value:function(){return Object(i.jsxs)("div",{className:"section white",id:"testimonials",ref:this.testimonials,children:[Object(i.jsx)("div",{className:"background"}),Object(i.jsx)("div",{className:"inner",children:Object(i.jsx)("div",{className:"inner-wrapper main-second",children:Object(i.jsxs)("div",{className:"main",children:[Object(i.jsxs)("div",{className:"main-container",children:[Object(i.jsx)("h2",{className:"section-title",ref:this.sectionTitle,children:"Testimonials"}),Object(i.jsx)("p",{className:"section-text",ref:this.sectionText,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non vestibulum ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut feugiat leo vitae cursus tristique. Praesent eu lorem eget ex pharetra gravida. Aliquam erat volutpat. Sed euismod sapien in condimentum iaculis. In suscipit libero."})]}),Object(i.jsx)("div",{className:"second",children:Object(i.jsx)("div",{className:"second-container"})})]})})})]})}}]),n}(s.Component),g=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).contact=c.a.createRef(),e.sectionTitle=c.a.createRef(),e.sectionText=c.a.createRef(),e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){d.a.registerPlugin(h.a);var e=d.a.fromTo([this.sectionTitle.current,this.sectionText.current],{opacity:0,yPercent:50},{opacity:1,yPercent:0});h.a.create({trigger:this.contact.current,animation:e,start:"top 25%",toggleActions:"play none none none",once:!0})}},{key:"render",value:function(){return Object(i.jsxs)("div",{className:"section pink",id:"contact",ref:this.contact,children:[Object(i.jsx)("div",{className:"background"}),Object(i.jsx)("div",{className:"inner",children:Object(i.jsx)("div",{className:"inner-wrapper main-second",children:Object(i.jsxs)("div",{className:"main",children:[Object(i.jsxs)("div",{className:"main-container",children:[Object(i.jsx)("h2",{className:"section-title",ref:this.sectionTitle,children:"Contact"}),Object(i.jsx)("p",{className:"section-text",ref:this.sectionText,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non vestibulum ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut feugiat leo vitae cursus tristique. Praesent eu lorem eget ex pharetra gravida. Aliquam erat volutpat. Sed euismod sapien in condimentum iaculis. In suscipit libero."})]}),Object(i.jsx)("div",{className:"second",children:Object(i.jsx)("div",{className:"second-container"})})]})})})]})}}]),n}(s.Component),N=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"section",id:"footer",children:[Object(i.jsx)("div",{className:"background"}),Object(i.jsx)("div",{className:"inner",children:Object(i.jsxs)("p",{className:"section-text",children:["\xa9 2021 Ferns Fitness. All Rights Reserved.",Object(i.jsx)("br",{}),"Web Design by ",Object(i.jsx)("a",{href:"https://ollie.rocks",children:"Ollie"})]})})]})}}]),n}(s.Component),k=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).headerComponent=c.a.createRef(),e.heroComponent=c.a.createRef(),e.aboutComponent=c.a.createRef(),e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){d.a.registerPlugin(h.a);var e=this.headerComponent.current.header.current,t=e.childNodes[0],n=this.heroComponent.current.hero.current;d.a.set(t,{opacity:0}),d.a.to(e,{scrollTrigger:{trigger:n,start:"bottom 20%",onEnter:function(){e.classList.add("active"),d.a.to(t,{opacity:1,duration:.25})},onLeaveBack:function(){e.classList.remove("active"),d.a.to(t,{opacity:0,duration:.25})}}})}},{key:"render",value:function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(x,{ref:this.headerComponent}),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(f,{ref:this.heroComponent}),Object(i.jsx)(O,{ref:this.aboutComponent}),Object(i.jsx)(p,{}),Object(i.jsx)(v,{}),Object(i.jsx)(g,{}),Object(i.jsx)(N,{})]})]})}}]),n}(s.Component),F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),i(e),s(e),c(e),a(e)}))};r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(k,{})}),document.getElementById("root")),F()}},[[41,1,2]]]);
//# sourceMappingURL=main.292b189f.chunk.js.map