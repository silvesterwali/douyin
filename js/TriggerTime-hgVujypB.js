import{ao as t,ap as n,_ as V}from"./common-q53V16-S.js";import"./vendor-D3q-ut_H.js";const m={class:"TriggerTime"},d={class:"content"},E={key:0,class:"right"},T={key:0,class:"right"},a={key:0,class:"right"},g={key:0,class:"right"},c=Vue.defineComponent({name:"ChooseSchool",__name:"TriggerTime",setup(I){const s=VueRouter.useRoute(),r=Vue.reactive({triggerTime:t.TRIGGER_TIME.TIME60});Vue.onMounted(()=>{r.triggerTime=~~s.query.triggerTime});function o(u){r.triggerTime=u,localStorage.setItem("changeTriggerTime",u)}return(u,e)=>{const i=Vue.resolveComponent("BaseHeader");return Vue.openBlock(),Vue.createElementBlock("div",m,[Vue.createVNode(i,null,{center:Vue.withCtx(()=>e[4]||(e[4]=[Vue.createElementVNode("span",{class:"f16"},"触发时间",-1)])),_:1}),Vue.createElementVNode("div",d,[Vue.createElementVNode("div",{class:"row",onClick:e[0]||(e[0]=l=>o(Vue.unref(t).TRIGGER_TIME.TIME40))},[e[6]||(e[6]=Vue.createElementVNode("div",{class:"left"},"40分钟",-1)),r.triggerTime===Vue.unref(t).TRIGGER_TIME.TIME40?(Vue.openBlock(),Vue.createElementBlock("div",E,e[5]||(e[5]=[Vue.createElementVNode("img",{src:n,alt:""},null,-1)]))):Vue.createCommentVNode("",!0)]),Vue.createElementVNode("div",{class:"row",onClick:e[1]||(e[1]=l=>o(Vue.unref(t).TRIGGER_TIME.TIME60))},[e[8]||(e[8]=Vue.createElementVNode("div",{class:"left"},"60分钟",-1)),r.triggerTime===Vue.unref(t).TRIGGER_TIME.TIME60?(Vue.openBlock(),Vue.createElementBlock("div",T,e[7]||(e[7]=[Vue.createElementVNode("img",{src:n,alt:""},null,-1)]))):Vue.createCommentVNode("",!0)]),Vue.createElementVNode("div",{class:"row",onClick:e[2]||(e[2]=l=>o(Vue.unref(t).TRIGGER_TIME.TIME90))},[e[10]||(e[10]=Vue.createElementVNode("div",{class:"left"},"90分钟",-1)),r.triggerTime===Vue.unref(t).TRIGGER_TIME.TIME90?(Vue.openBlock(),Vue.createElementBlock("div",a,e[9]||(e[9]=[Vue.createElementVNode("img",{src:n,alt:""},null,-1)]))):Vue.createCommentVNode("",!0)]),Vue.createElementVNode("div",{class:"row",onClick:e[3]||(e[3]=l=>o(Vue.unref(t).TRIGGER_TIME.TIME120))},[e[12]||(e[12]=Vue.createElementVNode("div",{class:"left"},"120分钟",-1)),r.triggerTime===Vue.unref(t).TRIGGER_TIME.TIME120?(Vue.openBlock(),Vue.createElementBlock("div",g,e[11]||(e[11]=[Vue.createElementVNode("img",{src:n,alt:""},null,-1)]))):Vue.createCommentVNode("",!0)])])])}}}),f=V(c,[["__scopeId","data-v-5d336e50"]]);export{f as default};
