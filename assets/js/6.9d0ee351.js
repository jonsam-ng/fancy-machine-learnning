(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{296:function(t,e,n){},346:function(t,e,n){"use strict";n(296)},359:function(t,e,n){"use strict";n.r(e);n(16);function i(t,e,n=50,i=3e3){var o=document.querySelectorAll(".global-tip"),s=(new Date).getTime(),c=0==o.length?0:o[o.length-1].getAttribute("data-top"),l=parseInt(c)+(0!=o.length?o[o.length-1].offsetHeight+17:n);let a=document.createElement("div");a.className=`global-tip tip-${e} ${s} gloablTip`,a.style.top=parseInt(c)+"px",a.setAttribute("data-top",l),"info"==e||1==e?a.innerHTML=`<i class="iconfont icon-info-circle-fill icon"></i><p class="tip-info-content">${t}</p>`:"success"==e||2==e?a.innerHTML=`<i class="iconfont icon-success-filling icon"></i><p class="tip-success-content">${t}</p>`:"danger"==e||3==e?a.innerHTML=`<i class="iconfont icon-error icon"></i><p class="tip-danger-content">${t}</p>`:"warning"!=e&&4!=e||(a.innerHTML=`<i class="iconfont icon-warning-fill icon"></i><p class="tip-warning-content">${t}</p>`),document.body.appendChild(a);let r=document.getElementsByClassName(s)[0];setTimeout(()=>{r.style.top=parseInt(l)+"px",r.style.opacity="1"},10),setTimeout(()=>{r.style.top="0px",r.style.opacity="0";var t=function(t){for(var e=[],n=t;n;n=n.nextSibling)1===n.nodeType&&n!==t&&e.push(n);return e}(r);for(let i=0;i<t.length;i++){var e=t[i],n=parseInt(e.getAttribute("data-top"))-e.offsetHeight-17;e.setAttribute("data-top",n),e.style.top=n+"px"}setTimeout(()=>{r.remove()},500)},i)}var o={mounted(){this.bgTimeColor()},watch:{},methods:{bgTimeColor(){var t=(new Date).getHours(),e=(new Date).getMinutes(),n=(new Date).getSeconds();t=t<10?"0"+t:t,e=e<10?"0"+e:e,n=n<10?"0"+n:n;let o=document.createElement("div");o.className="banner-color",t>=6&&t<11?i(`早上好呀~~，现在是 ${t}:${e}:${n}，吃早餐了吗？😊🤭`,"info",50,4e3):t>=12&&t<=16?i(`下午好呀~~，现在是 ${t}:${e}:${n}，繁忙的下午也要适当休息哦🥤🏀~~`,"info",50,4e3):t>=16&&t<=19?i(`到黄昏了~~，现在是 ${t}:${e}:${n}，该准备吃饭啦🥗🍖~~`,"info",50,4e3):t>=19&&t<24?i(`晚上好呀~~，现在是 ${t}:${e}:${n}，该准备洗漱睡觉啦🥱😪~~`,"info",50,4e3):t>=0&&t<6&&i(`别再熬夜了~~，现在是 ${t}:${e}:${n}，早点睡吧，让我们一起欣赏早上的太阳~~😇🛏`,"info",50,4e3),document.body.append(o)}}},s=(n(346),n(1)),c=Object(s.a)(o,(function(){return(0,this._self._c)("div")}),[],!1,null,null,null);e.default=c.exports}}]);