(function(){var t={8674:function(t,e,o){"use strict";var r=o(9242),i=o(3396);function s(t,e){const o=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(o)}var n=o(89);const a={},l=(0,n.Z)(a,[["render",s]]);var c=l,u=o(2483);const d={class:"home"};function g(t,e,o,r,s,n){const a=(0,i.up)("router-link"),l=(0,i.up)("cursor");return(0,i.wg)(),(0,i.iD)("div",d,[(0,i.Wm)(a,{to:{name:"CarouselView"}},{default:(0,i.w5)((()=>[(0,i._)("div",{class:"view-button no-cursor","on:mouseover":e[0]||(e[0]=t=>s.cursor_color=s.hover_cursor_color),"on:mouseleave":e[1]||(e[1]=t=>s.cursor_color=s.reg_cursor_color)}," View Art ",32)])),_:1}),s.cursor_on?((0,i.wg)(),(0,i.j4)(l,{key:0,color:s.cursor_color},null,8,["color"])):(0,i.kq)("",!0)])}var h=o(7139);function _(t,e,o,r,s,n){return(0,i.wg)(),(0,i.iD)("div",{class:"cursor-circle",style:(0,h.j5)({left:s.x+"px",top:s.y+"px","background-color":"rgba("+o.color.toString()+","+s.transparency+")"})},null,4)}var m={props:{color:{type:Array,default:[0,0,0]}},data(){return{x:0,y:0,transparency:"0.6"}},mounted(){document.addEventListener("mousemove",this.updatePosition)},beforeDestroy(){document.removeEventListener("mousemove",this.updatePosition)},methods:{updatePosition(t){this.x=t.clientX-30,this.y=t.clientY-30}}};const p=(0,n.Z)(m,[["render",_]]);var f=p,v={name:"HomeView",components:{cursor:f},data(){return{cursor_on:!0,hovered:!1,hover_cursor_color:[0,200,200],reg_cursor_color:[0,0,0],cursor_color:[0,0,0]}}};const b=(0,n.Z)(v,[["render",g],["__scopeId","data-v-e0de9ca2"]]);var w=b;const y=t=>((0,i.dD)("data-v-5d6bc938"),t=t(),(0,i.Cn)(),t),j={class:"vl-parent"},x={key:0,class:"loading-text"},k={class:"image-container"},A=y((()=>(0,i._)("button",{class:"lightbox-nav nav-left"},null,-1))),P=["src"],S=y((()=>(0,i._)("button",{class:"lightbox-nav nav-right"},null,-1))),B={class:"caption"},C=y((()=>(0,i._)("div",{class:"start-text"},"Start",-1)));function H(t,e,r,s,n,a){const l=(0,i.up)("loading"),c=(0,i.up)("toggle"),u=(0,i.up)("cursor");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",j,[(0,i.Wm)(l,{active:n.loading,"onUpdate:active":e[0]||(e[0]=t=>n.loading=t),"is-full-page":!0},null,8,["active"])]),n.loading?((0,i.wg)(),(0,i.iD)("div",x,(0,h.zw)(n.loading_text),1)):(0,i.kq)("",!0),(0,i._)("div",k,[(0,i.Wm)(c,{onToggle:a.change_cursor,class:"toggle-button no-cursor",title:"Cursor",name:"CursorToggle",toggled:n.cursor_on,"on:mouseover":e[1]||(e[1]=t=>n.cursor_color=n.hover_cursor_color),"on:mouseleave":e[2]||(e[2]=t=>n.cursor_color=n.reg_cursor_color)},null,8,["onToggle","toggled"]),(0,i._)("div",{class:"close-button-animated-progress","on:mouseover":e[3]||(e[3]=t=>{n.closeButtonHover=!0,n.cursor_color=n.hover_cursor_color}),"on:mouseleave":e[4]||(e[4]=t=>{n.closeButtonHover=!1,n.cursor_color=n.reg_cursor_color})},[(0,i._)("span",{style:(0,h.j5)({width:n.closeButtonProgress+"px",height:n.closeButtonProgress+"px"})},null,4)],32),(0,i._)("div",{class:"close-button no-cursor","on:mouseover":e[5]||(e[5]=t=>n.cursor_color=n.hover_cursor_color),"on:mouseleave":e[6]||(e[6]=t=>n.cursor_color=n.reg_cursor_color)},null,32),(0,i._)("div",{class:"animated-progress left-arrow-progress","on:mouseover":e[7]||(e[7]=t=>{n.leftArrowHover=!0,n.cursor_color=n.hover_cursor_color}),"on:mouseleave":e[8]||(e[8]=t=>{n.leftArrowHover=!1,n.cursor_color=n.reg_cursor_color})},[(0,i._)("span",{style:(0,h.j5)({width:n.leftArrowProgress+"px"})},null,4)],32),A,(0,i._)("img",{class:"image-style",style:(0,h.j5)([n.music_started?{opacity:1}:{opacity:.6}]),ref:"art",src:o(7173)(`./${n.art_data[n.image_index].file}`),onMousemove:e[9]||(e[9]=(...t)=>a.updateNote&&a.updateNote(...t)),onMouseleave:e[10]||(e[10]=(...t)=>a.stop_music&&a.stop_music(...t)),onMouseover:e[11]||(e[11]=(...t)=>a.start_music_loop&&a.start_music_loop(...t))},null,44,P),(0,i._)("div",{class:"animated-progress right-arrow-progress","on:mouseover":e[12]||(e[12]=t=>{n.rightArrowHover=!0,n.cursor_color=n.hover_cursor_color}),"on:mouseleave":e[13]||(e[13]=t=>{n.rightArrowHover=!1,n.cursor_color=n.reg_cursor_color})},[(0,i._)("span",{style:(0,h.j5)({width:n.rightArrowProgress+"px"})},null,4)],32),S,(0,i._)("p",B,(0,h.zw)(n.art_data[n.image_index].citation),1)]),n.music_started?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("button",{key:1,class:"start-button no-cursor","on:mouseover":e[14]||(e[14]=t=>{n.startButtonHover=!0,n.cursor_color=n.hover_cursor_color}),"on:mouseleave":e[15]||(e[15]=t=>{n.startButtonHover=!1,n.cursor_color=n.reg_cursor_color})},[(0,i._)("span",{style:(0,h.j5)({width:n.startButtonProgress+"px"})},null,4),C],32)),n.cursor_on?((0,i.wg)(),(0,i.j4)(u,{key:2,color:n.cursor_color},null,8,["color"])):(0,i.kq)("",!0)])}o(7658);var T=o(5513),O=o.n(T),D=o(4311),$=o(1657);const z=["id","disabled","name"],E=["aria-checked","aria-disabled","aria-labelledby","aria-readonly"],I=["id","for"];function L(t,e,o,s,n,a){return(0,i.wg)(),(0,i.iD)("section",{class:(0,h.C_)([{"m-toggle--is-dark":o.darkTheme,"m-toggle--is-disabled":o.disabled},"m-toggle"])},[(0,i.wy)((0,i._)("input",{id:a.id,"onUpdate:modelValue":e[0]||(e[0]=t=>n.toggleState=t),disabled:o.disabled,name:o.name,class:"m-toggle__input",type:"checkbox"},null,8,z),[[r.e8,n.toggleState]]),(0,i._)("span",{"aria-checked":n.toggleState,"aria-disabled":o.disabled,"aria-labelledby":`${a.id}-label`,"aria-readonly":o.disabled,class:(0,h.C_)(["m-toggle__content",{"m-toggle__content--active":n.toggleState}]),role:"checkbox",onClick:e[1]||(e[1]=(...t)=>a.toggle&&a.toggle(...t))},null,10,E),(0,i._)("label",{id:`${a.id}-label`,for:a.id,class:"m-toggle__label"},(0,h.zw)(o.title),9,I)],2)}const W={name:"VueToggle",props:{activeColor:{type:String,default:"#9FD6AE"},darkTheme:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},fontSize:{type:String,default:"16px"},fontWeight:{type:String,default:"normal"},name:{type:String,required:!0},title:{type:String,required:!0},toggled:{type:Boolean,default:!1}},data(){return{toggleState:this.toggled}},methods:{toggle(){this.disabled||(this.toggleState=!this.toggleState,this.$emit("toggle",this.toggleState))}},computed:{id(){return this.name.replace(/ /g,"").toLowerCase()}}},N=()=>{(0,r.sj)((t=>({"152ae4d7":t.fontWeight,"45028e20":t.fontSize,c5f80e66:t.activeColor})))},V=W.setup;W.setup=V?(t,e)=>(N(),V(t,e)):N;var q=W;const M=(0,n.Z)(q,[["render",L],["__scopeId","data-v-21da8666"]]);var Z=M;const F=o(1089),J="https://backend.interactiveart.web.illinois.edu";var U={name:"ArtView",components:{Loading:O(),cursor:f,toggle:Z},props:["id"],data(){return{music_data:void 0,loading:!1,music_started:!1,painting_hover:!1,bpm:60,current_note:void 0,music_interval:void 0,resize_delay:500,timeoutId:0,base_url:"",art_data:F,image_index:0,cursor_color:[0,0,0],hover_cursor_color:[0,200,200],reg_cursor_color:[0,0,0],cursor_on:!0,rightArrowProgress:0,rightArrowHover:!1,leftArrowProgress:0,leftArrowHover:!1,closeButtonProgress:0,closeButtonHover:!1,startButtonProgress:0,startButtonHover:!1,loading_text:""}},created(){null!=this.id&&(this.image_index=this.id)},mounted(){window.addEventListener("resize",(()=>{this.image_height=this.$refs.art.clientHeight,this.image_width=this.$refs.art.clientWidth,this.music_started&&(this.loading=!0,clearTimeout(this.timeoutId),this.timeoutId=setTimeout(this.note_resize,this.resize_delay))})),location.toString().includes("localhost")||(this.base_url=J)},destroyed(){window.removeEventListener("resize",this.myEventHandler)},watch:{rightArrowProgress:{handler(t){t<100?setTimeout((()=>{t>=1&&this.rightArrowHover&&this.rightArrowProgress++}),20):setTimeout((()=>{this.right_button(),this.rightArrowProgress=0}),100)}},rightArrowHover:{handler(t){this.rightArrowProgress=1==t?1:0}},leftArrowProgress:{handler(t){t<100?setTimeout((()=>{t>=1&&this.leftArrowHover&&this.leftArrowProgress++}),20):setTimeout((()=>{this.left_button(),this.leftArrowProgress=0}),100)}},leftArrowHover:{handler(t){this.leftArrowProgress=1==t?1:0}},closeButtonProgress:{handler(t){t<100?setTimeout((()=>{t>=1&&this.closeButtonHover&&this.closeButtonProgress++}),20):setTimeout((()=>{this.$router.push({name:"home"}),this.closeButtonProgress=0}),100)}},closeButtonHover:{handler(t){this.closeButtonProgress=1==t?1:0}},startButtonProgress:{handler(t){t<100?setTimeout((()=>{t>=1&&this.startButtonHover&&this.startButtonProgress++}),20):setTimeout((()=>{this.start_viewing(),this.startButtonProgress=0}),100)}},startButtonHover:{handler(t){this.startButtonProgress=1==t?1:0}}},methods:{async note_resize(){await this.load_notes(),this.loading=!1},async load_notes(){this.image_height=this.$refs.art.clientHeight,this.image_width=this.$refs.art.clientWidth;var t=this.art_data[this.image_index].file,e=`${this.base_url}/coords/${t}/${this.image_width}/${this.image_height}`;console.log(`getting notes from backend at ${e}`),this.loading_text="analyzing image...";const o=await D.Z.get(e);this.music_data=o.data,this.current_note=this.music_data.sections[0].note,this.bpm=this.music_data.bpm,console.log(`bpm set to: ${this.bpm}`),console.log("notes loaded from backend")},updateNote(t){if(this.music_started&&!this.loading){var e=t.offsetX,o=t.offsetY,r=this.get_note(e,o);this.current_note=r.note,this.cursor_color=r.color}},play_current_note(){let t=this.current_note;this.synth.triggerAttack(t),console.log(`note playing: ${t}`)},start_music_loop(){!this.music_started||this.loading||this.painting_hover||(this.play_current_note(),this.music_interval=setInterval(this.play_current_note,this.bpm_to_ms(this.bpm)),this.painting_hover=!0)},stop_music(){clearInterval(this.music_interval),this.painting_hover=!1},async start_viewing(){this.loading=!0,await this.load_notes(),this.loading_text="loading piano...",this.synth=await new $.Z({minify:!0,onload:()=>{console.log("audio samples loaded"),this.loading=!1,this.music_started=!0,this.start_music_loop()}}).toDestination()},get_note(t,e){var o=function(o){var r=o.area[0],i=o.area[1],s=o.area[2],n=o.area[3];return t>=r&&e>=i&&t<=s&&e<=n},r=this.music_data.sections.filter(o);return r[0]},bpm_to_ms(t){return Math.round(60/t*1e3)},calc_index(t,e){return(t%e+e)%e},left_button(){var t=this.calc_index(this.image_index-1,this.art_data.length);this.image_index=t,this.music_started=!1},right_button(){var t=this.calc_index(this.image_index+1,this.art_data.length);this.image_index=t,this.music_started=!1},change_cursor(){this.cursor_on=!this.cursor_on,this.$emit("change_cursor")}}};const G=(0,n.Z)(U,[["render",H],["__scopeId","data-v-5d6bc938"]]);var R=G;const Y=t=>((0,i.dD)("data-v-1ffbeb24"),t=t(),(0,i.Cn)(),t),K=["src"],X=Y((()=>(0,i._)("button",{class:"view-button"}," View Art ",-1)));function Q(t,e,r,s,n,a){const l=(0,i.up)("router-link"),c=(0,i.up)("slide"),u=(0,i.up)("navigation"),d=(0,i.up)("pagination"),g=(0,i.up)("carousel");return(0,i.wg)(),(0,i.j4)(g,{itemsToShow:3},{addons:(0,i.w5)((()=>[(0,i.Wm)(u),(0,i.Wm)(d)])),default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.art_data,((t,e)=>((0,i.wg)(),(0,i.j4)(c,{key:t.file},{default:(0,i.w5)((()=>[(0,i._)("div",null,[(0,i._)("h2",null,(0,h.zw)(t.title),1),(0,i._)("img",{class:"car_img",src:o(7173)(`./${t.file}`)},null,8,K),(0,i._)("p",null,(0,h.zw)(t.artist),1),(0,i._)("p",null,(0,h.zw)(t.date),1),(0,i.Wm)(l,{to:"/art-view/"+e},{default:(0,i.w5)((()=>[X])),_:2},1032,["to"])])])),_:2},1024)))),128))])),_:1})}var tt=o(1658);const et=o(1089);var ot={name:"CarouselView",components:{Carousel:tt.lr,Slide:tt.Mi,Pagination:tt.tl,Navigation:tt.W_},data(){return{art_data:et}}};const rt=(0,n.Z)(ot,[["render",Q],["__scopeId","data-v-1ffbeb24"]]);var it=rt;const st=[{path:"/",name:"home",component:w},{path:"/about",name:"about",component:()=>o.e(443).then(o.bind(o,2233))},{path:"/art-view/:id",name:"ArtView",component:R,props:!0},{path:"/carousel-view",name:"CarouselView",component:it}],nt=(0,u.p7)({history:(0,u.PO)("/"),routes:st});var at=nt;(0,r.ri)(c).use(at).mount("#app")},7173:function(t,e,o){var r={"./art_data":1089,"./art_data.json":1089,"./circular-forms.jpg":2684,"./homage-to.jpg":2818,"./icons/exit.svg":3578,"./icons/left.svg":7042,"./icons/right.svg":3756,"./joy.jpg":4032,"./objects.jpg":3690,"./park.jpg":7078,"./test-art.jpg":5456};function i(t){var e=s(t);return o(e)}function s(t){if(!o.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}i.keys=function(){return Object.keys(r)},i.resolve=s,t.exports=i,i.id=7173},3578:function(t,e,o){"use strict";t.exports=o.p+"img/exit.5a6edfb9.svg"},7042:function(t,e,o){"use strict";t.exports=o.p+"img/left.c19300db.svg"},3756:function(t,e,o){"use strict";t.exports=o.p+"img/right.b6670b92.svg"},2684:function(t,e,o){"use strict";t.exports=o.p+"img/circular-forms.f18e24d6.jpg"},2818:function(t,e,o){"use strict";t.exports=o.p+"img/homage-to.a59f1ee3.jpg"},4032:function(t,e,o){"use strict";t.exports=o.p+"img/joy.7223429a.jpg"},3690:function(t,e,o){"use strict";t.exports=o.p+"img/objects.331dbfb3.jpg"},7078:function(t,e,o){"use strict";t.exports=o.p+"img/park.898a205c.jpg"},5456:function(t,e,o){"use strict";t.exports=o.p+"img/test-art.99bb4658.jpg"},1089:function(t){"use strict";t.exports=JSON.parse('[{"file":"joy.jpg","title":"The Joy of Life","artist":"Robert Delaunay","date":"1930","citation":"The Joy of Life"},{"file":"park.jpg","title":"A Sunday Afternoon on the Island of La Grande Jatte","artist":"Georges Seurat","date":"1886","citation":"A Sunday Afternoon on the Island of La Grande Jatte"},{"file":"test-art.jpg","title":"Squares with Concentric Circles","artist":"Wassily Kandinsky","date":"1913","citation":"Squares with Concentric Circles"},{"file":"circular-forms.jpg","title":"Circular Forms","artist":"Robert Delaunay","date":"1930","citation":"Circular Forms"},{"file":"homage-to.jpg","title":"Homage to Bleriot","artist":"Robert Delaunay","date":"1914","citation":"Homage to Bleriot"},{"file":"objects.jpg","title":"Site Inhabited by Objects","artist":"Jean Dubuffet","date":"1965","citation":"Site Inhabited by Objects"}]')}},e={};function o(r){var i=e[r];if(void 0!==i)return i.exports;var s=e[r]={exports:{}};return t[r].call(s.exports,s,s.exports,o),s.exports}o.m=t,function(){var t=[];o.O=function(e,r,i,s){if(!r){var n=1/0;for(u=0;u<t.length;u++){r=t[u][0],i=t[u][1],s=t[u][2];for(var a=!0,l=0;l<r.length;l++)(!1&s||n>=s)&&Object.keys(o.O).every((function(t){return o.O[t](r[l])}))?r.splice(l--,1):(a=!1,s<n&&(n=s));if(a){t.splice(u--,1);var c=i();void 0!==c&&(e=c)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[r,i,s]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){o.f={},o.e=function(t){return Promise.all(Object.keys(o.f).reduce((function(e,r){return o.f[r](t,e),e}),[]))}}(),function(){o.u=function(t){return"js/about.91c6fcd6.js"}}(),function(){o.miniCssF=function(t){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="interactive-art-ui:";o.l=function(r,i,s,n){if(t[r])t[r].push(i);else{var a,l;if(void 0!==s)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==e+s){a=d;break}}a||(l=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.setAttribute("data-webpack",e+s),a.src=r),t[r]=[i];var g=function(e,o){a.onerror=a.onload=null,clearTimeout(h);var i=t[r];if(delete t[r],a.parentNode&&a.parentNode.removeChild(a),i&&i.forEach((function(t){return t(o)})),e)return e(o)},h=setTimeout(g.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=g.bind(null,a.onerror),a.onload=g.bind(null,a.onload),l&&document.head.appendChild(a)}}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){o.p="/"}(),function(){var t={143:0};o.f.j=function(e,r){var i=o.o(t,e)?t[e]:void 0;if(0!==i)if(i)r.push(i[2]);else{var s=new Promise((function(o,r){i=t[e]=[o,r]}));r.push(i[2]=s);var n=o.p+o.u(e),a=new Error,l=function(r){if(o.o(t,e)&&(i=t[e],0!==i&&(t[e]=void 0),i)){var s=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;a.message="Loading chunk "+e+" failed.\n("+s+": "+n+")",a.name="ChunkLoadError",a.type=s,a.request=n,i[1](a)}};o.l(n,l,"chunk-"+e,e)}},o.O.j=function(e){return 0===t[e]};var e=function(e,r){var i,s,n=r[0],a=r[1],l=r[2],c=0;if(n.some((function(e){return 0!==t[e]}))){for(i in a)o.o(a,i)&&(o.m[i]=a[i]);if(l)var u=l(o)}for(e&&e(r);c<n.length;c++)s=n[c],o.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return o.O(u)},r=self["webpackChunkinteractive_art_ui"]=self["webpackChunkinteractive_art_ui"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=o.O(void 0,[998],(function(){return o(8674)}));r=o.O(r)})();
//# sourceMappingURL=app.af40a9be.js.map