import{d as a,G as i,L as e,al as n,p as h}from"./B24Dn2wT.js";const f=a({props:{src:{type:[String,Object],default:null}},setup(s){const r=t=>t&&t.startsWith("/")&&!t.startsWith("//")?n(t,h().app.baseURL):t;return{imgSrc:i(()=>{let t=s.src;try{t=JSON.parse(t)}catch{t=s.src}return typeof t=="string"?r(s.src):{light:r(t.light),dark:r(t.dark)}})}},render({imgSrc:s}){if(typeof s=="string")return e("img",{src:s,...this.$attrs});const r=[];return s.light&&r.push(e("img",{src:s.light,class:["dark-img"],...this.$attrs})),s.dark&&r.push(e("img",{src:s.dark,class:["light-img"],...this.$attrs})),r}});export{f as _};
