(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(a,e,t){a.exports={profile:"Profile_profile__1d4gf",avatar:"Profile_avatar__38tf7",name:"Profile_name__w75SX",list:"Profile_list__3-YN7",label:"Profile_label__3UsDI",stats:"Profile_stats__3wDOg"}},function(a,e,t){a.exports={transactionHistory:"TransactionHistory_transactionHistory__7QE1C",transactionHeading:"TransactionHistory_transactionHeading__1tsQO",transactionContent:"TransactionHistory_transactionContent__omkG6",element:"TransactionHistory_element__2EAJw"}},,function(a,e,t){a.exports={list:"FriendList_list__35L1-",item:"FriendList_item__2x5CT",status:"FriendList_status__1QlrW",isOnline:"FriendList_isOnline__1fCE7",isOffline:"FriendList_isOffline__2l8CB",avatar:"FriendList_avatar__3Maij",name:"FriendList_name__3FCYN"}},function(a,e,t){a.exports={statistics:"Statistics_statistics___Tbtd",styles:"Statistics_styles__3zutP",stats:"Statistics_stats__1PSAt",item:"Statistics_item__XKSXA",label:"Statistics_label__3NAH5",percentage:"Statistics_percentage__2xZ8u"}},function(a){a.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg","stats":{"followers":5603,"views":4827,"likes":1308}}')},,function(a){a.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},,function(a){a.exports=JSON.parse('[{"avatar":"https://www.flaticon.com/svg/static/icons/svg/763/763704.svg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998671.svg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1623/1623681.svg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/2977/2977285.svg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998749.svg","name":"Poly","isOnline":false,"id":1284}]')},function(a){a.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},,,,,,function(a,e,t){},,function(a,e,t){"use strict";t.r(e);var s=t(3),c=t.n(s),n=t(9),i=t.n(n),r=t(1),l=t.n(r),d=t(0),o=function(a){var e=a.name,t=a.avatar,s=a.tag,c=a.location,n=a.stats;return Object(d.jsxs)("div",{className:l.a.profile,children:[Object(d.jsxs)("div",{className:l.a.description,children:[Object(d.jsx)("img",{src:t,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",className:l.a.avatar}),Object(d.jsx)("p",{className:l.a.name,children:e}),Object(d.jsxs)("p",{className:l.a.tag,children:["@",s]}),Object(d.jsx)("p",{className:l.a.location,children:c})]}),Object(d.jsxs)("ul",{className:l.a.stats,children:[Object(d.jsxs)("li",{className:l.a.list,children:[Object(d.jsx)("span",{className:l.a.label,children:"Followers"}),Object(d.jsx)("span",{className:l.a.quantity,children:n.followers})]}),Object(d.jsxs)("li",{className:l.a.list,children:[Object(d.jsx)("span",{className:l.a.label,children:"Views"}),Object(d.jsx)("span",{className:l.a.quantity,children:n.views})]}),Object(d.jsxs)("li",{className:l.a.list,children:[Object(d.jsx)("span",{className:l.a.label,children:"Likes"}),Object(d.jsx)("span",{className:l.a.quantity,children:n.likes})]})]})]},e)},b=t(5),m=t.n(b),j=function(a){var e=a.title,t=a.stats;return Object(d.jsxs)("section",{className:m.a.statistics,children:[Object(d.jsx)("h2",{className:m.a.title,children:e}),Object(d.jsx)("ul",{className:m.a.stats,children:t.map((function(a){return Object(d.jsxs)("li",{className:m.a.item,children:[Object(d.jsx)("span",{className:m.a.label,children:a.label}),Object(d.jsxs)("span",{className:m.a.percentage,children:[a.percentage,"%"]})]},a.id)}))})]})};j.defaultProps={title:""};var u=j,p=t(4),f=t.n(p),O=function(a){var e=a.id,t=a.avatar,s=a.name,c=a.isOnline;return Object(d.jsxs)("li",{className:f.a.item,children:[Object(d.jsx)("span",{className:!0===c?f.a.isOnline:f.a.isOffline,children:c}),Object(d.jsx)("img",{className:f.a.avatar,src:t,alt:s,width:"48"}),Object(d.jsx)("p",{className:f.a.name,children:s})]},e)},_=function(a){var e=a.friends;return Object(d.jsx)("ul",{className:f.a.list,children:e.map((function(a){return Object(d.jsx)(O,{avatar:a.avatar,name:a.name,isOnline:a.isOnline},a.id)}))})},y=t(2),h=t.n(y),x=function(a){var e=a.items;return Object(d.jsxs)("table",{className:h.a.transactionHistory,children:[Object(d.jsx)("thead",{className:h.a.name,children:Object(d.jsxs)("tr",{className:h.a.transactionHeading,children:[Object(d.jsx)("th",{className:h.a.element,children:"Type"}),Object(d.jsx)("th",{className:h.a.element,children:"Amount"}),Object(d.jsx)("th",{className:h.a.element,children:"Currency"})]})}),Object(d.jsx)("tbody",{children:e.map((function(a){return Object(d.jsxs)("tr",{className:h.a.transactionContent,children:[Object(d.jsx)("td",{className:h.a.element,children:a.type}),Object(d.jsx)("td",{className:h.a.element,children:a.amount}),Object(d.jsx)("td",{className:h.a.element,children:a.currency})]},a.id)}))})]})},v=t(6),g=t(8),w=t(10),N=t(11),S=(t(17),function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(o,{name:v.name,tag:v.tag,location:v.location,avatar:v.avatar,stats:v.stats}),Object(d.jsx)(u,{title:"Upload stats",stats:g}),Object(d.jsx)(u,{stats:g}),Object(d.jsx)(_,{friends:w}),Object(d.jsx)(x,{items:N})]})});t(18);i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(S,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.09a4460c.chunk.js.map