import{c as D,a as S,b,d as l,e as o,f as C,u as V,g as B,h as P,i as R,j as u,F as A,r as _,k as T,l as W,o as j,m as v,n as f,p as d,w as m,q as a,N as k,s as $,t as w,v as L,x as Q,y,z,A as O}from"./index-e4e7b94a.js";import{u as q,N as E}from"./questions-e2018842.js";const M=i=>{const{textColor1:e,dividerColor:s,fontWeightStrong:n}=i;return{textColor:e,color:s,fontWeight:n}},F={name:"Divider",common:D,self:M},I=F,H=S("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[b("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[b("no-title",`
 display: flex;
 align-items: center;
 `)]),l("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),o("title-position-left",[l("line",[o("left",{width:"28px"})])]),o("title-position-right",[l("line",[o("right",{width:"28px"})])]),o("dashed",[l("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),o("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),l("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),b("dashed",[l("line",{backgroundColor:"var(--n-color)"})]),o("dashed",[l("line",{borderColor:"var(--n-color)"})]),o("vertical",{backgroundColor:"var(--n-color)"})]),G=Object.assign(Object.assign({},B.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),N=C({name:"Divider",props:G,setup(i){const{mergedClsPrefixRef:e,inlineThemeDisabled:s}=V(i),n=B("Divider","-divider",H,I,i,e),c=P(()=>{const{common:{cubicBezierEaseInOut:t},self:{color:g,textColor:p,fontWeight:h}}=n.value;return{"--n-bezier":t,"--n-color":g,"--n-text-color":p,"--n-font-weight":h}}),r=s?R("divider",void 0,c,i):void 0;return{mergedClsPrefix:e,cssVars:s?void 0:c,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){var i;const{$slots:e,titlePlacement:s,vertical:n,dashed:c,cssVars:r,mergedClsPrefix:t}=this;return(i=this.onRender)===null||i===void 0||i.call(this),u("div",{role:"separator",class:[`${t}-divider`,this.themeClass,{[`${t}-divider--vertical`]:n,[`${t}-divider--no-title`]:!e.default,[`${t}-divider--dashed`]:c,[`${t}-divider--title-position-${s}`]:e.default&&s}],style:r},n?null:u("div",{class:`${t}-divider__line ${t}-divider__line--left`}),!n&&e.default?u(A,null,u("div",{class:`${t}-divider__title`},this.$slots),u("div",{class:`${t}-divider__line ${t}-divider__line--right`})):null)}}),J={key:0},K=C({__name:"TheQuiz",setup(i){const e=_(""),s=T(),n=q(),c=W(),r=_([{text:"September"},{text:"Oktober"},{text:"November",isCorrectAnswer:!0},{text:"Dezember"}]),t=_("Wann findet die nächste Ausgabe der Wintimäss statt?");function g(h){h.isCorrectAnswer?(console.log("Correct Answer"),e.value="Das ist richtig!",s.update({answer1:!0})):(console.log("Wrong Answer"),e.value="Leider falsch.",s.answers.answer1=!1)}function p(){s.update({answer1:!1,answer2:!1}),n.update({sanQuestion1:!1,sanQuestion2:!1}),c.reset(),e.value=""}return j(()=>{}),(h,U)=>(v(),f("div",null,[d(a(k),{justify:"center"},{default:m(()=>[d(a(E),{width:"320",src:"assets/ambulance.jpg"})]),_:1}),$("p",null,w(t.value),1),d(a(N)),a(s).answers.answer1?Q("",!0):(v(),f("div",J,[d(a(k),{vertical:""},{default:m(()=>[(v(!0),f(A,null,L(r.value,x=>(v(),O(a(z),{size:"medium",color:"#f5dab8","text-color":"#000",block:"",key:x.text,onClick:X=>g(x)},{default:m(()=>[y(w(x.text),1)]),_:2},1032,["onClick"]))),128))]),_:1})])),$("p",null,w(e.value),1),d(a(N)),d(a(z),{block:"",onClick:p},{default:m(()=>[y("Reset")]),_:1})]))}}),ee=C({__name:"QuizView",setup(i){return(e,s)=>(v(),f("main",null,[d(K)]))}});export{ee as default};
