import{d as o,I as _,J as e,K as a,L as s,M as l,N as r,O as f,P as m,H as p,V as i,S as u}from"./index-0a584e81.js";import{N as d}from"./Image-ab836da5.js";const h=m("p",null,"Welche Notfallnummer musst du in einem solchen Notfall anrufen?",-1),g=o({__name:"TheQuestion",setup(t){return _(()=>{}),(n,c)=>(e(),a("div",null,[s(r(f),{justify:"center"},{default:l(()=>[s(r(d),{width:"400",src:"src/assets/fire_fighters.jpg"})]),_:1}),h]))}}),w=m("p",null,"118 ist richtige Antwort.",-1),N=o({__name:"TheCorrectAnswer",setup(t){const n=p();return _(()=>{n.update({answer2:!0})}),(c,k)=>(e(),a("div",null,[s(r(f),{justify:"center"},{default:l(()=>[s(r(d),{width:"400",src:"src/assets/fire_fighters.jpg"})]),_:1}),w]))}}),B=m("p",null,"Die 117 ist die Notfallnummer der Polizei.",-1),j=o({__name:"TheWrongAnswer",setup(t){return _(()=>{}),(n,c)=>(e(),a("div",null,[s(r(f),{justify:"center"},{default:l(()=>[s(r(d),{width:"400",src:"src/assets/fire_fighters.jpg"})]),_:1}),B]))}}),C=o({__name:"QuestionView",props:{isQuestion:Boolean,isCorrect:Boolean,isWrong:Boolean},setup(t){return(n,c)=>(e(),a("main",null,[t.isQuestion?(e(),i(g,{key:0})):u("",!0),t.isCorrect?(e(),i(N,{key:1})):u("",!0),t.isWrong?(e(),i(j,{key:2})):u("",!0)]))}});export{C as default};
