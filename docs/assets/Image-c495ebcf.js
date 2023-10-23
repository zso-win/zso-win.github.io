import{s as P,d as E,h as v,a2 as I,K as j,p as O,at as S,m as y,a4 as x,D as L,au as R,x as u,av as k,aw as C,ax as _}from"./index-f9a12699.js";const M=P&&"loading"in document.createElement("img"),z=(e={})=>{var n;const{root:a=null}=e;return{hash:`${e.rootMargin||"0px 0px 0px 0px"}-${Array.isArray(e.threshold)?e.threshold.join(","):(n=e.threshold)!==null&&n!==void 0?n:"0"}`,options:Object.assign(Object.assign({},e),{root:(typeof a=="string"?document.querySelector(a):a)||document.documentElement})}},m=new WeakMap,f=new WeakMap,b=new WeakMap,N=(e,n,a)=>{if(!e)return()=>{};const s=z(n),{root:o}=s.options;let l;const h=m.get(o);h?l=h:(l=new Map,m.set(o,l));let c,i;l.has(s.hash)?(i=l.get(s.hash),i[1].has(e)||(c=i[0],i[1].add(e),c.observe(e))):(c=new IntersectionObserver(d=>{d.forEach(g=>{if(g.isIntersecting){const w=f.get(g.target),p=b.get(g.target);w&&w(),p&&(p.value=!0)}})},s.options),c.observe(e),i=[c,new Set([e])],l.set(s.hash,i));let t=!1;const r=()=>{t||(f.delete(e),b.delete(e),t=!0,i[1].has(e)&&(i[0].unobserve(e),i[1].delete(e)),i[1].size<=0&&l.delete(s.hash),l.size||m.delete(o))};return f.set(e,r),b.set(e,a),r},T=Object.assign({alt:String,height:[String,Number],imgProps:Object,previewedImgProps:Object,lazy:Boolean,intersectionObserverOptions:Object,objectFit:{type:String,default:"fill"},previewSrc:String,fallbackSrc:String,width:[String,Number],src:String,previewDisabled:Boolean,loadDescription:String,onError:Function,onLoad:Function},C),$=E({name:"Image",props:T,inheritAttrs:!1,setup(e){const n=v(null),a=v(!1),s=v(null),o=I(_,null),{mergedClsPrefixRef:l}=o||j(e),h={click:()=>{if(e.previewDisabled||a.value)return;const t=e.previewSrc||e.src;if(o){o.setPreviewSrc(t),o.setThumbnailEl(n.value),o.toggleShow();return}const{value:r}=s;r&&(r.setPreviewSrc(t),r.setThumbnailEl(n.value),r.toggleShow())}},c=v(!e.lazy);O(()=>{var t;(t=n.value)===null||t===void 0||t.setAttribute("data-group-id",(o==null?void 0:o.groupId)||"")}),O(()=>{if(e.lazy&&e.intersectionObserverOptions){let t;const r=S(()=>{t==null||t(),t=void 0,t=N(n.value,e.intersectionObserverOptions,c)});y(()=>{r(),t==null||t()})}}),S(()=>{var t;e.src,(t=e.imgProps)===null||t===void 0||t.src,a.value=!1});const i=v(!1);return x(R,{previewedImgPropsRef:L(e,"previewedImgProps")}),Object.assign({mergedClsPrefix:l,groupId:o==null?void 0:o.groupId,previewInstRef:s,imageRef:n,showError:a,shouldStartLoading:c,loaded:i,mergedOnClick:t=>{var r,d;h.click(),(d=(r=e.imgProps)===null||r===void 0?void 0:r.onClick)===null||d===void 0||d.call(r,t)},mergedOnError:t=>{if(!c.value)return;a.value=!0;const{onError:r,imgProps:{onError:d}={}}=e;r==null||r(t),d==null||d(t)},mergedOnLoad:t=>{const{onLoad:r,imgProps:{onLoad:d}={}}=e;r==null||r(t),d==null||d(t),i.value=!0}},h)},render(){var e,n;const{mergedClsPrefix:a,imgProps:s={},loaded:o,$attrs:l,lazy:h}=this,c=(n=(e=this.$slots).placeholder)===null||n===void 0?void 0:n.call(e),i=this.src||s.src,t=u("img",Object.assign(Object.assign({},s),{ref:"imageRef",width:this.width||s.width,height:this.height||s.height,src:this.showError?this.fallbackSrc:h&&this.intersectionObserverOptions?this.shouldStartLoading?i:void 0:i,alt:this.alt||s.alt,"aria-label":this.alt||s.alt,onClick:this.mergedOnClick,onError:this.mergedOnError,onLoad:this.mergedOnLoad,loading:M&&h&&!this.intersectionObserverOptions?"lazy":"eager",style:[s.style||"",c&&!o?{height:"0",width:"0",visibility:"hidden"}:"",{objectFit:this.objectFit}],"data-error":this.showError,"data-preview-src":this.previewSrc||this.src}));return u("div",Object.assign({},l,{role:"none",class:[l.class,`${a}-image`,(this.previewDisabled||this.showError)&&`${a}-image--preview-disabled`]}),this.groupId?t:u(k,{theme:this.theme,themeOverrides:this.themeOverrides,clsPrefix:a,ref:"previewInstRef",showToolbar:this.showToolbar,showToolbarTooltip:this.showToolbarTooltip},{default:()=>t}),!o&&c)}});export{$ as N};