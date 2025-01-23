import{q as l}from"./other-BdgVg5bl.js";import{_ as n}from"./common-q53V16-S.js";import"./vendor-D3q-ut_H.js";const u={id:"SystemNotice"},V={class:"content"},r={key:0,class:"row"},a={class:"row"},m={class:"row"},i={class:"row"},p={class:"row"},N={class:"row"},c={class:"row"},E={key:2,class:"row"},v={class:"row"},f={class:"row"},w={class:"row"},b={class:"row"},k={class:"row"},y=Vue.defineComponent({name:"NoticeSetting",__name:"NoticeSetting",props:{modelValue:{type:Boolean,default(){return!1}}},setup(U){const s=VueRouter.useRoute(),o=Vue.reactive({option:!0,option1:!1,option2:!1,option3:!0,option4:!1,option5:!1,option6:!1,option7:!0,option8:!0,option9:!1,option10:!1,option11:!1,option12:!1,type:"TASK"});return Vue.onMounted(()=>{o.type=s.query.type}),(B,e)=>{const d=Vue.resolveComponent("BaseHeader");return Vue.openBlock(),Vue.createElementBlock("div",u,[Vue.createVNode(d,null,{center:Vue.withCtx(()=>e[13]||(e[13]=[Vue.createElementVNode("span",{class:"f16"},"通知设置",-1)])),_:1}),Vue.createElementVNode("div",V,[e[27]||(e[27]=Vue.createElementVNode("div",{class:"title"},"消息免打扰",-1)),e[28]||(e[28]=Vue.createElementVNode("div",{class:"sub-title"},"开启后，新通知将用黄点展示，不再展示未读数字",-1)),o.type==="SYSTEM"?(Vue.openBlock(),Vue.createElementBlock("div",r,[e[14]||(e[14]=Vue.createElementVNode("div",{class:"left"},"系统通知",-1)),Vue.createVNode(l,{modelValue:o.option,"onUpdate:modelValue":e[0]||(e[0]=t=>o.option=t),theme:"bootstrap",color:"success"},null,8,["modelValue"])])):Vue.createCommentVNode("",!0),o.type==="TASK"?(Vue.openBlock(),Vue.createElementBlock(Vue.Fragment,{key:1},[Vue.createElementVNode("div",a,[e[15]||(e[15]=Vue.createElementVNode("div",{class:"left"},"运营任务",-1)),Vue.createVNode(l,{modelValue:o.option1,"onUpdate:modelValue":e[1]||(e[1]=t=>o.option1=t),theme:"bootstrap",color:"success"},null,8,["modelValue"])]),Vue.createElementVNode("div",m,[e[16]||(e[16]=Vue.createElementVNode("div",{class:"left"},"星图(任务)",-1)),Vue.createVNode(l,{modelValue:o.option2,"onUpdate:modelValue":e[2]||(e[2]=t=>o.option2=t),theme:"bootstrap",color:"success"},null,8,["modelValue"])]),Vue.createElementVNode("div",i,[e[17]||(e[17]=Vue.createElementVNode("div",{class:"left"},"成长任务",-1)),Vue.createVNode(l,{modelValue:o.option3,"onUpdate:modelValue":e[3]||(e[3]=t=>o.option3=t),theme:"bootstrap",color:"success"},null,8,["modelValue"])]),Vue.createElementVNode("div",p,[e[18]||(e[18]=Vue.createElementVNode("div",{class:"left"},"DUO来评审团",-1)),Vue.createVNode(l,{modelValue:o.option4,"onUpdate:modelValue":e[4]||(e[4]=t=>o.option4=t),theme:"bootstrap",color:"success"},null,8,["modelValue"])]),Vue.createElementVNode("div",N,[e[19]||(e[19]=Vue.createElementVNode("div",{class:"left"},"任务中心",-1)),Vue.createVNode(l,{modelValue:o.option5,"onUpdate:modelValue":e[5]||(e[5]=t=>o.option5=t),theme:"bootstrap",color:"success"},null,8,["modelValue"])]),Vue.createElementVNode("div",c,[e[20]||(e[20]=Vue.createElementVNode("div",{class:"left"},"中视频伙伴任务",-1)),Vue.createVNode(l,{modelValue:o.option6,"onUpdate:modelValue":e[6]||(e[6]=t=>o.option6=t),theme:"bootstrap",color:"success"},null,8,["modelValue"])])],64)):Vue.createCommentVNode("",!0),o.type==="LIVE"?(Vue.openBlock(),Vue.createElementBlock("div",E,[e[21]||(e[21]=Vue.createElementVNode("div",{class:"left"},"直播",-1)),Vue.createVNode(l,{modelValue:o.option7,"onUpdate:modelValue":e[7]||(e[7]=t=>o.option7=t),theme:"bootstrap",color:"success"},null,8,["modelValue"])])):Vue.createCommentVNode("",!0),o.type==="MONEY"?(Vue.openBlock(),Vue.createElementBlock(Vue.Fragment,{key:3},[Vue.createElementVNode("div",v,[e[22]||(e[22]=Vue.createElementVNode("div",{class:"left"},"钱包服务",-1)),Vue.createVNode(l,{modelValue:o.option8,"onUpdate:modelValue":e[8]||(e[8]=t=>o.option8=t),theme:"bootstrap",color:"success"},null,8,["modelValue"])]),Vue.createElementVNode("div",f,[e[23]||(e[23]=Vue.createElementVNode("div",{class:"left"},"收入服务",-1)),Vue.createVNode(l,{modelValue:o.option9,"onUpdate:modelValue":e[9]||(e[9]=t=>o.option9=t),theme:"bootstrap",color:"success"},null,8,["modelValue"])]),Vue.createElementVNode("div",w,[e[24]||(e[24]=Vue.createElementVNode("div",{class:"left"},"零钱服务",-1)),Vue.createVNode(l,{modelValue:o.option10,"onUpdate:modelValue":e[10]||(e[10]=t=>o.option10=t),theme:"bootstrap",color:"success"},null,8,["modelValue"])]),Vue.createElementVNode("div",b,[e[25]||(e[25]=Vue.createElementVNode("div",{class:"left"},"抖币服务",-1)),Vue.createVNode(l,{modelValue:o.option11,"onUpdate:modelValue":e[11]||(e[11]=t=>o.option11=t),theme:"bootstrap",color:"success"},null,8,["modelValue"])]),Vue.createElementVNode("div",k,[e[26]||(e[26]=Vue.createElementVNode("div",{class:"left"},"卡券服务",-1)),Vue.createVNode(l,{modelValue:o.option12,"onUpdate:modelValue":e[12]||(e[12]=t=>o.option12=t),theme:"bootstrap",color:"success"},null,8,["modelValue"])])],64)):Vue.createCommentVNode("",!0)])])}}}),x=n(y,[["__scopeId","data-v-93279c58"]]);export{x as default};
