(this["webpackJsonpsimple-gallery-react"]=this["webpackJsonpsimple-gallery-react"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),r=a(8),n=a.n(r),i=(a(13),a(2)),l=a(3),o=a(4),h=a(6),j=a(5),b=a(0),m=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).state={menuStatus:!1,navClass:"nav-links-hide",menuWord:"Menu"},s.menuTrigger=s.menuTrigger.bind(Object(o.a)(s)),s}return Object(l.a)(a,[{key:"menuTrigger",value:function(){0==this.state.menuStatus?this.setState({menuStatus:!0,navClass:"nav-links-show",menuWord:"Close"}):this.setState({menuStatus:!1,navClass:"nav-links-hide",menuWord:"Menu"})}},{key:"render",value:function(){return Object(b.jsx)(c.a.Fragment,{children:Object(b.jsxs)("nav",{className:"nav",children:[Object(b.jsx)("p",{id:"menu",onClick:this.menuTrigger,children:this.state.menuWord}),Object(b.jsxs)("div",{className:this.state.navClass,children:[Object(b.jsx)("a",{href:"#people",className:"",children:"people"}),Object(b.jsx)("a",{href:"#nature",className:"",children:"nature"}),Object(b.jsx)("a",{href:"#tech",className:"",children:"tech"}),Object(b.jsx)("a",{href:"#animals",className:"",children:"animals"}),Object(b.jsx)("a",{href:"#arch",className:"",children:"architecture"})]}),Object(b.jsx)("div",{className:"logo-cont",children:Object(b.jsx)("a",{href:"http://instagram.com/codes.study",target:"_blank",children:Object(b.jsx)("img",{src:"data:image/png;base64,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",alt:""})})})]})})}}]),a}(c.a.PureComponent);function d(){return Object(b.jsx)(c.a.Fragment,{children:Object(b.jsxs)("div",{className:"welcome",children:[Object(b.jsxs)("div",{className:"wel-photos",children:[Object(b.jsx)("div",{className:"ph-1",children:Object(b.jsx)("img",{src:"./1.jpg",alt:""})}),Object(b.jsx)("div",{className:"ph-2",children:Object(b.jsx)("img",{src:"./3.jpg",alt:""})}),Object(b.jsx)("div",{className:"ph-3",children:Object(b.jsx)("img",{src:"./4.jpg",alt:""})}),Object(b.jsx)("div",{className:"ph-4",children:Object(b.jsx)("img",{src:"./2.jpg",alt:""})})]}),Object(b.jsxs)("div",{className:"wel-text",children:[Object(b.jsx)("h1",{children:"Get the best collection of photos!"}),Object(b.jsx)("br",{}),Object(b.jsxs)("p",{children:["The pictures are memories ",Object(b.jsx)("br",{}),"These are the most pictures in defferent categories. ",Object(b.jsx)("br",{}),"We have the ",Object(b.jsx)("b",{children:"People"}),", ",Object(b.jsx)("b",{children:"Animals"}),", ",Object(b.jsx)("b",{children:"Technology"}),", ",Object(b.jsx)("b",{children:"Beaty"}),", ",Object(b.jsx)("b",{children:"Materials"}),", ",Object(b.jsx)("b",{children:"Architecture"}),".. pictures. ",Object(b.jsx)("br",{}),"We hope you enjoy viewing the world. ",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("b",{children:Object(b.jsx)("i",{children:"Guidlines to use"})})," ",Object(b.jsx)("br",{}),"1. Hover over the image to like it, if you are using computer. ",Object(b.jsx)("br",{}),"2. Click on the image to like it, if you are using mobile phone."]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("h3",{children:"I LIKE PICTURES"})]})]})})}var u=c.a.memo(d),g=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).likeIt=s.likeIt.bind(Object(o.a)(s)),s}return Object(l.a)(a,[{key:"likeIt",value:function(e){var t=document.getElementById(e.num),a=document.querySelector("[data-likes = '".concat(e.num,"']"));t.className.includes("notLiked")?(t.className="fas fa-heart liked",a.innerHTML=e.likes+1):(t.className="fas fa-heart notLiked",a.innerHTML=e.likes)}},{key:"render",value:function(){var e=this,t=(Math.floor(100*Math.random()),Math.floor(1e3*Math.random()),Math.floor(10*Math.random()),[{num:"1".concat(this.props.category),likes:Math.floor(100*Math.random())},{num:"2".concat(this.props.category),likes:Math.floor(100*Math.random())},{num:"3".concat(this.props.category),likes:Math.floor(1e3*Math.random())},{num:"4".concat(this.props.category),likes:Math.floor(100*Math.random())},{num:"5".concat(this.props.category),likes:Math.floor(100*Math.random())},{num:"6".concat(this.props.category),className:this.likeIt,likes:Math.floor(10*Math.random())},{num:"7".concat(this.props.category),className:this.likeIt,likes:Math.floor(100*Math.random())},{num:"8".concat(this.props.category),className:this.likeIt,likes:Math.floor(1e3*Math.random())},{num:"9".concat(this.props.category),className:this.likeIt,likes:Math.floor(10*Math.random())},{num:"10".concat(this.props.category),className:this.likeIt,likes:Math.floor(100*Math.random())},{num:"11".concat(this.props.category),className:this.likeIt,likes:Math.floor(1e3*Math.random())},{num:"12".concat(this.props.category),className:this.likeIt,likes:Math.floor(10*Math.random())}]);return Object(b.jsxs)("div",{className:"real-cont",id:this.props.category,children:[Object(b.jsxs)("h1",{children:[this.props.categoryName," Pictures"]}),Object(b.jsx)("div",{className:"real-pics",children:t.map((function(t,a){return Object(b.jsxs)("div",{className:"img-cont",children:[Object(b.jsx)("img",{src:"https://www.placeimg.com/640/480/".concat(e.props.category,"/").concat(t.num),alt:""}),Object(b.jsxs)("div",{className:"img-wrapper",children:[Object(b.jsxs)("h3",{children:["Category: ",e.props.categoryName]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("h1",{children:Object(b.jsx)("i",{className:"fas fa-heart notLiked",id:t.num,onClick:function(){return e.likeIt(t)}})}),Object(b.jsx)("p",{"data-likes":t.num,children:t.likes})]})]},a)}))})]})}}]),a}(c.a.Component),p=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"footer",children:Object(b.jsx)("a",{href:"http://instagram.com/codes.study",target:"_blank",children:"Issa Jean Marie ~ 2021"})})}}]),a}(c.a.PureComponent),O=function(){return Object(b.jsxs)(c.a.Fragment,{children:[Object(b.jsx)(m,{}),Object(b.jsx)(u,{}),Object(b.jsx)(g,{categoryName:"People",category:"people"}),Object(b.jsx)(g,{categoryName:"Nature",category:"nature"}),Object(b.jsx)(g,{categoryName:"Tech",category:"tech"}),Object(b.jsx)(g,{categoryName:"Animal",category:"animals"}),Object(b.jsx)(g,{categoryName:"Architecture",category:"arch"}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)(p,{})]})};n.a.render(Object(b.jsx)(O,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.0a3cd614.chunk.js.map