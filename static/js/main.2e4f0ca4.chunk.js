(this.webpackJsonpdan0102dan=this.webpackJsonpdan0102dan||[]).push([[0],[,,function(e,t,c){e.exports={home:"Home_home__3MBBc",text:"Home_text__2ldxS",swipeDown:"Home_swipeDown__33Nhl",downAndUp:"Home_downAndUp__1tPuf"}},function(e,t,c){e.exports={card:"Card_card__1eE8R",imageBlock:"Card_imageBlock__3g6Hu",textBlock:"Card_textBlock__2Rbyb"}},,function(e,t,c){e.exports={mockups:"NewRelease_mockups__5urfl"}},function(e,t,c){e.exports={block:"Block_block__20XCa",textBlock:"Block_textBlock__2sAlQ"}},,function(e,t,c){},function(e,t,c){},,function(e,t,c){e.exports={mockup:"Mockup_mockup__1vb9x",appearance:"Mockup_appearance__uYwwt"}},function(e,t,c){e.exports={socialCard:"SocialCard_socialCard__2HGB_"}},function(e,t,c){e.exports={horScroll:"Scripts_horScroll__1rInX"}},function(e,t,c){e.exports={flexBlock:"Social_flexBlock__35dBP"}},,,,,,,function(e,t,c){"use strict";c.r(t);var i=c(1),s=c(10),a=c.n(s),n=c(2),r=c(0),o=function(){return Object(r.jsxs)("div",{className:n.home,children:[Object(r.jsx)("div",{id:n.text,children:Object(r.jsxs)("h1",{children:["Hello!",Object(r.jsx)("br",{}),"I am Daniil Davydov."]})}),Object(r.jsx)("div",{className:n.swipeDown,children:Object(r.jsx)("h3",{children:"Swipe down \ud83d\udc47"})})]})},d=c(5),l=c(7),p=c(15),h=c(6),j=["heading","description","children"],m=function(e){var t=e.heading,c=e.description,i=e.children,s=Object(p.a)(e,j);return Object(r.jsxs)("div",Object(l.a)(Object(l.a)({className:h.block},s),{},{children:[Object(r.jsxs)("div",{id:h.textBlock,children:[Object(r.jsx)("h1",{children:t}),Object(r.jsx)("h3",{className:"secondaryText",children:c})]}),i]}))},b=c(3),x=function(e){var t=e.title,c=e.description,i=e.href,s=e.image,a=e.closed;return Object(r.jsxs)("div",{className:b.card,onClick:function(){return window.open(i,"_blank")},children:[Object(r.jsx)("div",{id:b.imageBlock,children:Object(r.jsx)("img",{src:s})}),Object(r.jsxs)("div",{id:b.textBlock,children:[Object(r.jsxs)("h3",{children:[t," ",a&&Object(r.jsx)("span",{className:"errorText",children:"(closed)"})]}),Object(r.jsx)("h4",{className:"secondaryText",children:c})]})]})},u=c(11),f=function(e){var t=e.image,c=e.scale,i=e.href;return Object(r.jsx)("div",{className:u.mockup,onClick:function(){return window.open(i,"_blank")},style:{height:3906/c,width:1919/c,animationDuration:"".concat(1*Math.random()+1.5,"s")},children:Object(r.jsx)("img",{src:t})})},g=c(12),_=function(e){var t=e.title,c=e.href,i=e.image;return Object(r.jsxs)("div",{className:g.socialCard,onClick:function(){return window.open(c,"_blank")},children:[Object(r.jsx)("img",{src:i}),Object(r.jsx)("h3",{children:t})]})},O=c.p+"static/media/newRelAl.66cc3ac2.png",k=c.p+"static/media/newRelAr.a419630e.png",v=c.p+"static/media/newRelMa.96529046.png",w=c.p+"static/media/expert.1eec23a3.png",B=c.p+"static/media/minesweeper.ce0fc9b5.png",y=c.p+"static/media/seaBattle.e07b834f.png",C=c.p+"static/media/paperShop.83139826.png",N=c.p+"static/media/gallows.bda2313f.png",S=c.p+"static/media/vk.8c770e36.svg",A=c.p+"static/media/instagram.b2f09c3d.svg",H=c.p+"static/media/twitter.045841b4.svg",R=c.p+"static/media/github.73060bf7.svg",D=c.p+"static/media/whatsapp.4eca3da9.svg",I=function(){return Object(i.useEffect)((function(){var e=document.getElementById(d.mockups);e.scrollLeft=(e.scrollWidth-e.offsetWidth)/2}),[]),Object(r.jsx)(m,{heading:"Musical novelties",description:"A service that notifies you when a track is released",style:{background:"var(--newReleaseBack)"},children:Object(r.jsxs)("div",{id:d.mockups,children:[Object(r.jsx)(f,{image:k,href:"https://vk.com/app7647010#59070642",scale:6.1}),Object(r.jsx)(f,{image:v,href:"https://vk.com/app7647010",scale:6}),Object(r.jsx)(f,{image:O,href:"https://vk.com/app7647010",scale:6.1})]})})},M=c(13),T=function(){return Object(r.jsx)(m,{heading:"Scripts",description:"I write bots for Telegram and VK",style:{background:"var(--scriptsBack)"},children:Object(r.jsxs)("div",{id:M.horScroll,children:[Object(r.jsx)(x,{title:"Expert",description:"Assistant for VK experts",href:"https://t.me/expertVK_bot/",image:w}),Object(r.jsx)(x,{closed:!0,title:"Minesweeper",description:"Find all the bombs",href:"https://vk.com/bot_sapper/",image:B}),Object(r.jsx)(x,{closed:!0,title:"Battleship",description:"Real-time battles",href:"https://vk.com/naval_fight/",image:y}),Object(r.jsx)(x,{closed:!0,title:"Paper sales",description:"Auto-sale of game currency",href:"https://vk.com/pap_shop/",image:C}),Object(r.jsx)(x,{closed:!0,title:"The gallows",description:"Determine the number",href:"https://vk.com/guess_the_number_js/",image:N})]})})},E=c(14),K=function(){return Object(r.jsx)(m,{heading:"Find me here",style:{background:"var(--socialBack)"},children:Object(r.jsxs)("div",{id:E.flexBlock,children:[Object(r.jsx)(_,{title:"VK",href:"https://vk.com/dan0102dan/",image:S}),Object(r.jsx)(_,{title:"Instagram",href:"https://instagram.com/dan0102dan/",image:A}),Object(r.jsx)(_,{title:"Twitter",href:"https://twitter.com/dan0102dan/",image:H}),Object(r.jsx)(_,{title:"GitHub",href:"https://github.com/dan0102dan/",image:R}),Object(r.jsx)(_,{title:"WhatsApp",href:"https://wa.me/79165096973?text=".concat(encodeURI("Hi! What's up?")),image:D})]})})},V=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(o,{}),Object(r.jsx)(I,{}),Object(r.jsx)(T,{}),Object(r.jsx)(K,{})]})};c(8),c(9);a.a.render(Object(r.jsx)(V,{}),document.getElementById("root"))}],[[21,1,2]]]);