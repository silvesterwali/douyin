import{c as _,as as N,f as m,aw as B,C as p,ax as x,ay as b,_ as S}from"./common-q53V16-S.js";import{u as C,v as F}from"./other-BdgVg5bl.js";import"./vendor-D3q-ut_H.js";const T=""+new URL("../assets/water-Cq3Nzf11.png",import.meta.url).href,K={class:"Share2Friend"},D={class:"search"},w={key:0,class:"search-select-friends"},O={class:"wrapper"},I=["src","onClick"],U={key:1,class:"search-icon",src:b,alt:""},L={key:0,class:"list"},R=["onClick"],Y=["src"],$={class:"desc"},q={class:"name"},z={key:0},H={style:{color:"#ffd800"}},M={key:1},j={key:0,class:"account"},A={key:0},G={style:{color:"#ffd800"}},J={key:1},P={key:1,class:"no-result"},Q={class:"list"},W=["onClick"],X=["src"],Z=["onClick"],ee=["src"],te=["onClick"],le=["src"],ae={key:0,class:"share2friend"},ne={class:"wrapper"},se={key:0,class:"create-chat"},oe=Vue.defineComponent({name:"Share2Friend",__name:"Share2Friend",setup(re){const f=C(),e=Vue.reactive({isCreateChat:!1,searchKey:"",indexOffsetTop:{},currentFixedIndicator:"",currentFixedIndicatorTop:"0px",friends:{all:{},recent:[],eachOther:[]},selectFriends:[],friendsSort:{},searchResult:[]});Vue.onMounted(()=>{y(),document.querySelectorAll(".index").forEach(c=>{e.indexOffsetTop[c.children[0].innerText]=c.offsetTop});let t=document.querySelectorAll(".item"),d=document.querySelector(".item:nth-child(2)").clientHeight,s=document.querySelector(".indicator"),l=s.offsetTop,o="rgb(143, 143, 158)";s.addEventListener("touchstart",c=>{let i=(c.touches[0].pageY-l)/d;i=Math.floor(i),n(i),e.currentFixedIndicatorTop=c.touches[0].pageY-28+"px"}),s.addEventListener("touchmove",c=>{let u=c.touches[0].pageY-l;e.currentFixedIndicatorTop=c.touches[0].pageY-28+"px";let i=u/d;i=Math.floor(i),i>=0&&i<27&&n(i)}),s.addEventListener("touchend",()=>e.currentFixedIndicator="");let n=c=>{t.forEach(u=>{u.style.color=o}),t[c].style.color="#fff",e.currentFixedIndicator=t[c].innerText,g(t[c])}}),Vue.watch(()=>e.searchKey,a=>{let t=_(e.friends.all);t.map(r=>{e.selectFriends.find(d=>d.id===r.id)&&(r.select=!0)}),e.searchResult=t.filter(r=>r.name.includes(a)||r.account.includes(a))});function h(a){V(a),e.searchKey=""}function k(){console.log("clear"),e.searchKey=""}function V(a){for(let s=0;s<e.friends.recent.length;s++){let l=e.friends.recent[s];if(l.name===a.name){l.select=!l.select;break}}for(let s=0;s<e.friends.eachOther.length;s++){let l=e.friends.eachOther[s];if(l.name===a.name){l.select=!l.select;break}}let t=!1,r=Object.keys(e.friendsSort);for(let s=0;s<r.length;s++){let l=r[s];for(let o=0;o<e.friendsSort[l].length;o++){let n=e.friendsSort[l][o];if(n.name===a.name){n.select=!n.select,t=!0;break}}if(t)break}let d=e.selectFriends.findIndex(s=>s.name===a.name);d!==-1?(a.select=!1,e.selectFriends.splice(d,1)):(a.select=!0,e.selectFriends.push(a))}async function y(){let a=await N();console.log("getFriends",a),a.success&&(e.friends=a.data,e.friends.all=e.friends.all.sort((t,r)=>t.pinyin<r.pinyin?-1:t.pinyin>r.pinyin?1:0),e.friends.all.map(t=>{e.friendsSort[t.pinyin]?e.friendsSort[t.pinyin].push(t):e.friendsSort[t.pinyin]=[t]}))}const v=Vue.ref();function g(a){let t;a.dataset.index?t="top":t=a.innerText,document.querySelector(`.${t}`)&&(v.value.scrollTop=document.querySelector(`.${t}`).offsetTop-100)}function E(a){let t=a.target.scrollTop+110,r=null;for(const d in e.indexOffsetTop)e.indexOffsetTop[d]<t&&(r=d);e.currentFixedIndicator=r}return(a,t)=>{const r=Vue.resolveComponent("BaseHeader"),d=Vue.resolveComponent("dy-back"),s=Vue.resolveComponent("dy-button");return Vue.openBlock(),Vue.createElementBlock("div",K,[Vue.createVNode(r,{backImg:"close",style:{"z-index":"7"}},{center:Vue.withCtx(()=>t[3]||(t[3]=[Vue.createElementVNode("span",{class:"f16"},"私信给",-1)])),bottom:Vue.withCtx(()=>[Vue.createElementVNode("div",D,[e.selectFriends.length?(Vue.openBlock(),Vue.createElementBlock("div",w,[Vue.createElementVNode("div",O,[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(e.selectFriends,(l,o)=>(Vue.openBlock(),Vue.createElementBlock("img",{src:Vue.unref(m)(l.avatar),key:o,onClick:n=>V(l)},null,8,I))),128))])])):(Vue.openBlock(),Vue.createElementBlock("img",U)),Vue.withDirectives(Vue.createElementVNode("input",{type:"text",placeholder:"搜索","onUpdate:modelValue":t[0]||(t[0]=l=>e.searchKey=l)},null,512),[[Vue.vModelText,e.searchKey]]),e.searchKey?(Vue.openBlock(),Vue.createElementBlock("img",{key:2,onClick:k,class:"clear",src:B})):Vue.createCommentVNode("",!0)])]),_:1}),Vue.withDirectives(Vue.createElementVNode("div",{class:"is-search",style:Vue.normalizeStyle({height:e.selectFriends.length&&e.searchResult.length?"calc(100% - 272rem)":"calc(100% - 112rem)"})},[e.searchResult.length?(Vue.openBlock(),Vue.createElementBlock("div",L,[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(e.searchResult,(l,o)=>(Vue.openBlock(),Vue.createElementBlock("div",{class:"local-row",key:o,onClick:n=>h(l)},[Vue.createVNode(p,{mode:"red",modelValue:l.select,"onUpdate:modelValue":n=>l.select=n},null,8,["modelValue","onUpdate:modelValue"]),Vue.createElementVNode("img",{src:Vue.unref(m)(l.avatar),alt:""},null,8,Y),Vue.createElementVNode("div",$,[Vue.createElementVNode("span",q,[l.name.indexOf(e.searchKey)>-1?(Vue.openBlock(),Vue.createElementBlock("span",z,[Vue.createTextVNode(Vue.toDisplayString(l.name.substr(0,l.name.indexOf(e.searchKey))),1),Vue.createElementVNode("span",H,Vue.toDisplayString(e.searchKey),1),Vue.createTextVNode(Vue.toDisplayString(l.name.substr(l.name.indexOf(e.searchKey)+e.searchKey.length)),1)])):(Vue.openBlock(),Vue.createElementBlock("span",M,Vue.toDisplayString(l.name),1))]),l.account?(Vue.openBlock(),Vue.createElementBlock("span",j,[t[4]||(t[4]=Vue.createTextVNode(" 抖音号： ")),l.account.indexOf(e.searchKey)>-1?(Vue.openBlock(),Vue.createElementBlock("span",A,[Vue.createTextVNode(Vue.toDisplayString(l.account.substr(0,l.account.indexOf(e.searchKey))),1),Vue.createElementVNode("span",G,Vue.toDisplayString(e.searchKey),1),Vue.createTextVNode(Vue.toDisplayString(l.account.substr(l.account.indexOf(e.searchKey)+e.searchKey.length)),1)])):(Vue.openBlock(),Vue.createElementBlock("span",J,Vue.toDisplayString(l.account),1))])):Vue.createCommentVNode("",!0)])],8,R))),128))])):(Vue.openBlock(),Vue.createElementBlock("div",P,t[5]||(t[5]=[Vue.createElementVNode("img",{src:F,alt:""},null,-1),Vue.createElementVNode("span",{class:"n1"},"搜索结果为空",-1),Vue.createElementVNode("span",{class:"n2"},"没有搜索到相关的联系人",-1)])))],4),[[Vue.vShow,e.searchKey]]),Vue.createElementVNode("div",{ref_key:"list",ref:v,style:Vue.normalizeStyle({paddingBottom:e.selectFriends.length?"160rem":0}),class:"content",onScroll:E},[Vue.createElementVNode("div",Q,[Vue.createElementVNode("div",{class:"row",onClick:t[1]||(t[1]=l=>Vue.unref(f)("/message/joined-group-chat"))},[t[6]||(t[6]=Vue.createElementVNode("span",null,"已加入的群聊",-1)),Vue.createVNode(d,{scale:.7,direction:"right"})]),t[7]||(t[7]=Vue.createElementVNode("div",{class:"title"},"最近聊天",-1)),(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(e.friends.recent,(l,o)=>(Vue.openBlock(),Vue.createElementBlock("div",{class:"local-row",key:o,onClick:n=>V(l)},[Vue.createVNode(p,{mode:"red",modelValue:l.select,"onUpdate:modelValue":n=>l.select=n},null,8,["modelValue","onUpdate:modelValue"]),Vue.createElementVNode("img",{src:Vue.unref(m)(l.avatar),alt:""},null,8,X),Vue.createElementVNode("span",null,Vue.toDisplayString(l.name),1)],8,W))),128)),t[8]||(t[8]=Vue.createElementVNode("div",{class:"title"},"互关好友",-1)),(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(e.friends.eachOther,(l,o)=>(Vue.openBlock(),Vue.createElementBlock("div",{class:"local-row",key:o,onClick:n=>V(l)},[Vue.createVNode(p,{mode:"red",modelValue:l.select,"onUpdate:modelValue":n=>l.select=n},null,8,["modelValue","onUpdate:modelValue"]),Vue.createElementVNode("img",{src:Vue.unref(m)(l.avatar),alt:""},null,8,ee),Vue.createElementVNode("span",null,Vue.toDisplayString(l.name),1)],8,Z))),128)),t[9]||(t[9]=Vue.createElementVNode("div",{class:"title"},"全部",-1)),(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(e.friendsSort,(l,o)=>(Vue.openBlock(),Vue.createElementBlock("div",{key:o},[Vue.createElementVNode("div",{class:Vue.normalizeClass([o==="#"?"top":o,"title"])},[Vue.createElementVNode("span",null,Vue.toDisplayString(o),1)],2),(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(l,(n,c)=>(Vue.openBlock(),Vue.createElementBlock("div",{class:"local-row",key:c,onClick:u=>V(n)},[Vue.createVNode(p,{mode:"red",modelValue:n.select,"onUpdate:modelValue":u=>n.select=u},null,8,["modelValue","onUpdate:modelValue"]),Vue.createElementVNode("img",{src:Vue.unref(m)(n.avatar),alt:""},null,8,le),Vue.createElementVNode("span",null,Vue.toDisplayString(n.name),1)],8,te))),128))]))),128))]),e.selectFriends.length&&e.searchResult.length?(Vue.openBlock(),Vue.createElementBlock("div",ae,[t[11]||(t[11]=Vue.createElementVNode("div",{class:"comment"},[Vue.createElementVNode("textarea",{placeholder:"有什么想和好友说的..."}),Vue.createElementVNode("img",{class:"poster",src:x,alt:""})],-1)),Vue.createElementVNode("div",ne,[e.selectFriends.length>1?(Vue.openBlock(),Vue.createElementBlock("div",se,[Vue.createVNode(p,{mode:"red",modelValue:e.isCreateChat,"onUpdate:modelValue":t[2]||(t[2]=l=>e.isCreateChat=l)},null,8,["modelValue"]),t[10]||(t[10]=Vue.createElementVNode("span",null,"创建群聊",-1))])):Vue.createCommentVNode("",!0),Vue.createVNode(s,{type:"primary"},{default:Vue.withCtx(()=>[Vue.createTextVNode(Vue.toDisplayString(e.selectFriends.length>1?"分别发送":"发送"),1)]),_:1})])])):Vue.createCommentVNode("",!0)],36),t[13]||(t[13]=Vue.createStaticVNode('<div class="indicator-ctn" data-v-84e8da8b><div class="indicator" data-v-84e8da8b><div class="item" data-index="top" data-v-84e8da8b>#</div><div class="item" data-v-84e8da8b>A</div><div class="item" data-v-84e8da8b>B</div><div class="item" data-v-84e8da8b>C</div><div class="item" data-v-84e8da8b>D</div><div class="item" data-v-84e8da8b>E</div><div class="item" data-v-84e8da8b>F</div><div class="item" data-v-84e8da8b>G</div><div class="item" data-v-84e8da8b>H</div><div class="item" data-v-84e8da8b>I</div><div class="item" data-v-84e8da8b>J</div><div class="item" data-v-84e8da8b>K</div><div class="item" data-v-84e8da8b>L</div><div class="item" data-v-84e8da8b>M</div><div class="item" data-v-84e8da8b>N</div><div class="item" data-v-84e8da8b>O</div><div class="item" data-v-84e8da8b>P</div><div class="item" data-v-84e8da8b>Q</div><div class="item" data-v-84e8da8b>R</div><div class="item" data-v-84e8da8b>S</div><div class="item" data-v-84e8da8b>T</div><div class="item" data-v-84e8da8b>U</div><div class="item" data-v-84e8da8b>V</div><div class="item" data-v-84e8da8b>W</div><div class="item" data-v-84e8da8b>X</div><div class="item" data-v-84e8da8b>Y</div><div class="item" data-v-84e8da8b>Z</div></div></div>',1)),e.currentFixedIndicator?(Vue.openBlock(),Vue.createElementBlock("div",{key:0,class:"hover",style:Vue.normalizeStyle({top:e.currentFixedIndicatorTop}),ref:"hover"},[t[12]||(t[12]=Vue.createElementVNode("img",{src:T,alt:""},null,-1)),Vue.createElementVNode("span",null,Vue.toDisplayString(e.currentFixedIndicator),1)],4)):Vue.createCommentVNode("",!0)])}}}),ue=S(oe,[["__scopeId","data-v-84e8da8b"]]);export{ue as default};
