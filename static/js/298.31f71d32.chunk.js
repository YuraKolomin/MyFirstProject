"use strict";(self.webpackChunkfirst_app=self.webpackChunkfirst_app||[]).push([[298],{1298:function(t,s,e){e.r(s),e.d(s,{default:function(){return v}});var n=e(2791),i={postsBlock:"MyPosts_postsBlock__WRYd7",posts:"MyPosts_posts__HFHb-",descriptionBlock:"MyPosts_descriptionBlock__SVyGH",backgroundImage:"MyPosts_backgroundImage__3qWl5"},r="Post_item__a7jAS",o=e(184),a=function(t){return(0,o.jsxs)("div",{className:r,children:[(0,o.jsx)("img",{src:t.image,alt:""}),t.message,(0,o.jsx)("div",{children:(0,o.jsxs)("span",{children:["Likes ",t.likesCount]})})]})},c=e(7743),u=e(1087),l=n.memo((function(t){var s=t.posts.map((function(t){return(0,o.jsx)(a,{image:t.image,message:t.message,likesCount:t.likesCount},t.id)})),e=n.createRef();return t.profile?(0,o.jsx)("div",{className:i.content,children:(0,o.jsxs)("div",{className:i.postsBlock,children:[(0,o.jsx)("div",{children:(0,o.jsx)("img",{className:i.backgroundImage,src:t.mainBackground,alt:""})}),(0,o.jsxs)("div",{className:i.descriptionBlock,children:[(0,o.jsx)("div",{children:t.profile.fullName}),(0,o.jsx)("div",{children:t.profile.lookingForAJob}),(0,o.jsx)("div",{children:t.profile.lookingForAJobDescription}),(0,o.jsx)("img",{src:t.profile.photos.small,alt:""}),(0,o.jsx)("div",{children:(0,o.jsx)(u.rU,{target:"_blank",to:"https://".concat(t.profile.contacts.github),children:"GitHub"})}),(0,o.jsx)("div",{children:(0,o.jsx)(u.rU,{target:"_blank",to:"https://".concat(t.profile.contacts.vk),children:"VK"})}),(0,o.jsx)("div",{children:(0,o.jsx)(u.rU,{target:"_blank",to:"https://".concat(t.profile.contacts.facebook),children:"Facebook"})}),(0,o.jsx)("div",{children:(0,o.jsx)(u.rU,{target:"_blank",to:"https://".concat(t.profile.contacts.instagram),children:"Instagram"})}),(0,o.jsx)("div",{children:(0,o.jsx)(u.rU,{target:"_blank",to:"https://".concat(t.profile.contacts.twitter),children:"Twitter"})}),(0,o.jsx)("div",{children:(0,o.jsx)(u.rU,{target:"_blank",to:"https://".concat(t.profile.contacts.youtube),children:"Youtube"})}),(0,o.jsx)("div",{children:(0,o.jsx)(u.rU,{target:"_blank",to:"https://".concat(t.profile.contacts.mainLink),children:"MainLink"})})]}),(0,o.jsx)("h2",{children:"My posts"}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{children:(0,o.jsx)("textarea",{onChange:function(){var s=e.current.value;t.updateNewPostText(s)},ref:e,value:t.newPostText})}),(0,o.jsx)("div",{children:(0,o.jsx)("button",{onClick:function(){t.addPost()},children:"Add post"})})]}),(0,o.jsx)("div",{className:i.posts,children:s})]})}):(0,o.jsx)(c.Z,{})})),d=e(8161),h=e(4420),p=(0,h.$j)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText,mainBackground:t.profilePage.mainBackground}}),(function(t){return{addPost:function(){t((0,d.Wl)())},updateNewPostText:function(s){t((0,d._M)(s))}}}))(l),f=e(9439),x=function(t){(0,n.useState)(!1);var s=(0,n.useState)(!1),e=(0,f.Z)(s,2),i=e[0],r=e[1],a=(0,n.useState)(t.status),c=(0,f.Z)(a,2),u=c[0],l=c[1];(0,n.useEffect)((function(){l(t.status)}),[t.status]);return(0,o.jsxs)("div",{children:[!i&&(0,o.jsx)("div",{children:(0,o.jsx)("span",{onDoubleClick:function(){r(!0)},children:t.status||"-----"})}),i&&(0,o.jsx)("div",{children:(0,o.jsx)("input",{onChange:function(t){l(t.currentTarget.value)},autoFocus:!0,onBlur:function(){r(!1),t.updateStatus(u)},value:u})})]})},j=function(t){return(0,o.jsxs)("div",{children:[(0,o.jsx)(x,{status:t.status,updateStatus:t.updateStatus}),(0,o.jsx)(p,{store:t.store,profile:t.profile})]})},g=e(7689),k=e(1548);var v=(0,e(1154).qC)((0,h.$j)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{setUserProfileThunk:d.TE,updateStatusThunk:d.dw,getStatusThunk:d.$b}),k.D)((function(t){var s=(0,g.UO)().userId;return s||(s=30910),(0,n.useEffect)((function(){t.setUserProfileThunk(s),t.getStatusThunk(s)}),[s]),(0,o.jsx)("div",{children:(0,o.jsx)(j,{profile:t.profile,status:t.status,updateStatus:t.updateStatusThunk})})}))},1548:function(t,s,e){e.d(s,{D:function(){return c}});var n=e(1413),i=e(7689),r=(e(2791),e(4420)),o=e(184),a=function(t){return{isAuth:t.auth.isAuth}},c=function(t){return(0,r.$j)(a)((function(s){return s.isAuth?(0,o.jsx)(t,(0,n.Z)({},s)):(0,o.jsx)(i.Fg,{to:"/login"})}))}}}]);
//# sourceMappingURL=298.31f71d32.chunk.js.map