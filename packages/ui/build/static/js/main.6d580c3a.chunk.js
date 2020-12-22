(this["webpackJsonpui-api3-dao"]=this["webpackJsonpui-api3-dao"]||[]).push([[0],{222:function(e,t){},229:function(e,t){},276:function(e,t,n){},277:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n(1),s=n.n(r),i=n(38),c=n.n(i),o=n(73),u=n(324),l=n(33);var d=function(){return Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{path:"/claims",children:Object(a.jsx)(Ne,{})}),Object(a.jsx)(l.a,{path:"/dao",children:Object(a.jsx)(Ae,{})}),Object(a.jsx)(l.a,{path:"/staking",children:Object(a.jsx)(Pe,{})}),Object(a.jsx)(l.a,{path:["/dashboard","/"],children:Object(a.jsx)(ge,{})})]})},p=n(320),b=n(332),j=n(309),h=n(117),x=Object(r.createContext)({});var m=function(e){return Object(a.jsx)(x.Provider,{value:{},children:Object(a.jsx)(v,{children:Object(a.jsx)(w,{children:Object(a.jsx)(g,{children:e.children})})})})},f=n(28),O=Object(r.createContext)({address:null,setAddress:function(){}});var v=function(e){var t=Object(r.useState)(null),n=Object(f.a)(t,2),s={address:n[0],setAddress:n[1]};return Object(a.jsx)(O.Provider,{value:s,children:e.children})},y=Object(r.createContext)({tokens:[],setTokens:function(){}});var g=function(e){var t=Object(r.useState)([]),n=Object(f.a)(t,2),s={tokens:n[0],setTokens:n[1]};return Object(a.jsx)(y.Provider,{value:s,children:e.children})},k=Object(r.createContext)({votes:[],setVotes:function(){}});var w=function(e){var t=Object(r.useState)([]),n=Object(f.a)(t,2),s={votes:n[0],setVotes:n[1]};return Object(a.jsx)(k.Provider,{value:s,children:e.children})},T=n(307),S=n(331),N=Object(T.a)((function(e){return Object(S.a)({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},link:{"&:visited":{color:"unset"},textDecoration:"unset"}})}));var C=function(){var e=N(),t=Object(r.useContext)(O);return Object(a.jsx)("div",{className:e.root,children:Object(a.jsx)(b.a,{position:"static",children:Object(a.jsxs)(j.a,{children:[Object(a.jsx)(h.a,{variant:"h6",className:e.title,children:Object(a.jsx)(o.b,{to:"/",className:e.link,children:"API3 DAO"})}),Object(a.jsx)(h.a,{className:e.title,children:Object(a.jsx)(o.b,{to:"/dashboard",className:e.link,children:"Dashboard"})}),Object(a.jsx)(h.a,{className:e.title,children:Object(a.jsx)(o.b,{to:"/staking",className:e.link,children:"Staking"})}),Object(a.jsx)(h.a,{className:e.title,children:Object(a.jsx)(o.b,{to:"/claims",className:e.link,children:"Claims"})}),Object(a.jsx)(h.a,{className:e.title,children:Object(a.jsx)(o.b,{to:"/dao",className:e.link,children:"DAO Gov"})}),t.address?Object(a.jsx)(Y,{address:t.address}):Object(a.jsx)(U,{})]})})})},A=n(0),I=n.n(A),P=n(9),F=n(326),M=n(315),D=n(7),_=n(8),E=n(61),B=n(108),V=E.providers.Web3Provider,R=function(){function e(){var t=this;Object(D.a)(this,e),this.provider=null,this.signer=null,this.getDefaultAddress=Object(P.a)(I.a.mark((function e(){var n,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.provider.getSigner();case 2:return n=e.sent,e.next=5,n.getAddress();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)}))),this.getWeb3=Object(P.a)(I.a.mark((function e(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.provider;case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),this.getNetwork=Object(P.a)(I.a.mark((function e(){var n,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(n=t.provider)||void 0===n?void 0:n.getNetwork();case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)}))),this.getNetworkName=Object(P.a)(I.a.mark((function e(){var n,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getNetwork();case 2:return n=e.sent,a="homestead"===n.name?"mainnet":n.name,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)}))),this.getNetworkId=Object(P.a)(I.a.mark((function e(){var n,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getNetwork();case 2:return n=e.sent,a=n.chainId,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)}))),this.getTxStatus=function(){var e=Object(P.a)(I.a.mark((function e(t){var n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"",e.next=3,fetch("");case 3:return n=e.sent,e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getSigner=Object(P.a)(I.a.mark((function e(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.signer);case 1:case"end":return e.stop()}}),e)}))),this.getContract=function(){var e=Object(P.a)(I.a.mark((function e(n,a){var r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new B.a(n,a,t.provider),e.abrupt("return",r);case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}return Object(_.a)(e,[{key:"initialize",value:function(){var e=Object(P.a)(I.a.mark((function e(){var t,n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=window,n=t.ethereum,e.next=4,n.enable();case 4:return this.provider=new V(n),e.next=7,this.provider.getSigner();case 7:this.signer=e.sent,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("Error instanciating Web3 Class",e.t0);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()}],[{key:"getInstance",value:function(){var t=Object(P.a)(I.a.mark((function t(){var n;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this._instance){t.next=5;break}return n=new e,t.next=4,n.initialize();case 4:this._instance=n;case 5:return t.abrupt("return",this._instance);case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()}]),e}();R._instance=void 0;var z=[{inputs:[{internalType:"address",name:"contractOwner",type:"address"},{internalType:"address",name:"mintingDestination",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"burnerAddress",type:"address"},{indexed:!1,internalType:"bool",name:"burnerStatus",type:"bool"}],name:"BurnerStatusUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"minterAddress",type:"address"},{indexed:!1,internalType:"bool",name:"minterStatus",type:"bool"}],name:"MinterStatusUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"burn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"burnerAddress",type:"address"}],name:"getBurnerStatus",outputs:[{internalType:"bool",name:"burnerStatus",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"minterAddress",type:"address"}],name:"getMinterStatus",outputs:[{internalType:"bool",name:"minterStatus",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"mint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bool",name:"burnerStatus",type:"bool"}],name:"updateBurnerStatus",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"minterAddress",type:"address"},{internalType:"bool",name:"minterStatus",type:"bool"}],name:"updateMinterStatus",outputs:[],stateMutability:"nonpayable",type:"function"}],H=n(24),W={API3:"0xd49f5f9e968bc345520ec8cc9cefe6dad756a009",API3Staked:"0xd49f5f9e968bc345520ec8cc9cefe6dad756a009"},G=Object(H.a)({},W),L=function(e,t){return e/Math.pow(10,t)},K=function(){var e=Object(P.a)(I.a.mark((function e(){var t,n,a,r,s,i,c,o,u,l,d,p,b;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.getInstance();case 2:return t=e.sent,e.next=5,t.getDefaultAddress();case 5:return n=e.sent,e.next=8,t.getContract(G.API3,z);case 8:return a=e.sent,e.next=11,t.getContract(G.API3Staked,z);case 11:return r=e.sent,e.next=14,a.totalSupply();case 14:return s=e.sent,e.next=17,a.balanceOf(n);case 17:return i=e.sent,e.next=20,a.decimals();case 20:return c=e.sent,e.next=23,r.totalSupply();case 23:return o=e.sent,e.next=26,r.balanceOf(n);case 26:return u=e.sent,e.next=29,r.decimals();case 29:return l=e.sent,d={totalSupply:L(Number(s.toString()),c),name:"API3",balance:L(Number(i.toString()),c)},p={totalSupply:L(Number(o.toString()),l),name:"API3Staked",balance:L(Number(u.toString()),l)},b={currentETHAddress:n,API3:d,API3Staked:p,tokens:[d,p]},e.abrupt("return",b);case 35:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();var U=function(){var e=Object(r.useContext)(O),t=Object(r.useContext)(y),n=function(){var n=Object(P.a)(I.a.mark((function n(){var a,r,s,i;return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,R.getInstance();case 2:return a=n.sent,n.next=5,a.getDefaultAddress();case 5:return r=n.sent,n.next=8,K();case 8:s=n.sent,i=s.tokens,e.setAddress(r),t.setTokens(i);case 12:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(a.jsx)(F.a,{children:Object(a.jsx)(M.a,{onClick:n,color:"secondary",children:"Connect"})})},J=Object(T.a)((function(e){return Object(S.a)({root:{}})}));var Y=function(e){var t=J(),n=e.address;return Object(a.jsxs)(h.a,{variant:"subtitle2",className:t.root,children:[n.slice(0,5),"...",n.slice(-5)]})},q=Object(T.a)((function(e){return Object(S.a)({box:{padding:10}})}));var Q=function(){var e=Object(r.useContext)(y),t=q(),n=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(h.a,{variant:"h4",children:"Connect Wallet"})})},s=function(e,n){return Object(a.jsx)(F.a,{className:t.box,children:Object(a.jsxs)(h.a,{variant:"subtitle1",children:[e.name,": ",e.balance]})},n)},i=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(F.a,{className:t.box,children:[e.tokens.length>0&&Object(a.jsx)(h.a,{variant:"h4",children:"Account Balances"}),e.tokens.map(s)]}),Object(a.jsxs)(F.a,{className:t.box,children:[e.tokens[0]&&Object(a.jsx)(h.a,{variant:"h4",children:"Global API3 Stats"}),Object(a.jsxs)(h.a,{variant:"subtitle1",children:["API3 tokens supply: ",e.tokens[0]?e.tokens[0].totalSupply:0]})]}),Object(a.jsx)(F.a,{className:t.box,children:Object(a.jsxs)(h.a,{variant:"subtitle1",children:["API3 staked tokens supply: ",e.tokens[1]?e.tokens[1].totalSupply:0]})})]})};return e.tokens.length>0?Object(a.jsx)(i,{}):Object(a.jsx)(n,{})};Object(T.a)((function(e){return Object(S.a)({box:{padding:10}})}));var X=n(327),Z=n(317),$=n(285),ee=n(318),te=n(329),ne=n(319),ae=n(333),re=n(330),se=n(325),ie=n(328),ce={voting:"0x6f97537528dabe30178f7eb335cf039a375f2f7b"},oe=function(){function e(){Object(D.a)(this,e),this.web3=void 0,this.org=void 0,this.signer=void 0,this.address=void 0,this.network=void 0}return Object(_.a)(e,[{key:"initialize",value:function(){var e=Object(P.a)(I.a.mark((function e(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.getInstance();case 3:return this.web3=e.sent,e.next=6,this.web3.getSigner();case 6:return this.signer=e.sent,e.next=9,this.web3.getDefaultAddress();case 9:return this.address=e.sent,this.network=4,e.next=13,Object(se.a)("api3dao.aragonid.eth","thegraph",{network:this.network});case 13:this.org=e.sent,e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.log("Error instanciating Aragon Class",e.t0);case 19:case"end":return e.stop()}}),e,this,[[0,16]])})));return function(){return e.apply(this,arguments)}}()},{key:"votes",value:function(){var e=Object(P.a)(I.a.mark((function e(){var t,n,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ie.a)(this.org.app("voting"));case 2:return t=e.sent,e.next=5,t.votes();case 5:return n=e.sent,a=function(e,t){return new Date(1e3*e.startDate)<new Date(1e3*t.startDate)?1:-1},e.abrupt("return",n.sort(a));case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"newVote",value:function(){var e=Object(P.a)(I.a.mark((function e(t,n,a){var r,s,i,c,o,u,l=this;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=[(r={stakingTarget:t,metadata:n=n||"no description was provided",executionScript:"0x00000001",castVote:!1,executesIfDecided:!1}).executionScript,r.metadata],i=this.org.appIntent(ce.voting,"newVote",s),console.log("intent",i),e.next=8,i.paths(this.address);case 8:c=e.sent,console.log("path",c),o=c.transactions,u=function(){var e=Object(P.a)(I.a.mark((function e(t,n){var r,s,i,c,o,u;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=(r=t).from,i=r.to,c=r.data,0!==n){e.next=15;break}return console.log("tx index 0",t),t={from:s,to:i,data:c},e.prev=4,e.next=7,null===(o=l.signer)||void 0===o?void 0:o.sendTransaction(t);case 7:u=e.sent,console.log("NewVote sign",u),a(),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),console.log("Popup error message callback error:",e.t0);case 15:1===n&&console.log("tx index 1",t);case 16:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t,n){return e.apply(this,arguments)}}(),o.map(u);case 13:case"end":return e.stop()}}),e,this)})));return function(t,n,a){return e.apply(this,arguments)}}()},{key:"vote",value:function(){var e=Object(P.a)(I.a.mark((function e(t,n){var a,r,s,i,c,o,u,l,d,p;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.org.appIntent(ce.voting,"vote",[t,n,!1]),e.next=3,r.paths(this.address);case 3:return s=e.sent,i=s.transactions,c=i[0],o=c.from,u=c.to,l=c.data,d={from:o,to:u,data:l},e.next=10,null===(a=this.signer)||void 0===a?void 0:a.sendTransaction(d);case 10:return p=e.sent,e.abrupt("return",p);case 12:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()}],[{key:"getInstance",value:function(){var t=Object(P.a)(I.a.mark((function t(){var n;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this._instance){t.next=5;break}return n=new e,t.next=4,n.initialize();case 4:this._instance=n;case 5:return t.abrupt("return",this._instance);case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()}]),e}();oe._instance=void 0;var ue=oe,le=Object(T.a)((function(e){return Object(S.a)({modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:50,height:"70%",width:"70%"},form:{display:"flex",justifyContent:"center",flexDirection:"column"},formControl:{paddingBottom:10},checkboxes:{display:"flex"},preview:{}})}));var de=function(e){var t=le(),n=e.open,s=e.handleClose,i=Object(r.useState)(0),c=Object(f.a)(i,2),o=c[0],u=c[1],l=Object(r.useState)(""),d=Object(f.a)(l,2),p=d[0],b=d[1],j=Object(r.useState)("Staking Target"),x=Object(f.a)(j,2),m=x[0],O=x[1],v=Object(r.useState)(!1),y=Object(f.a)(v,2),g=y[0],k=y[1],w=function(){k(!1),s()},T=function(){var e=Object(P.a)(I.a.mark((function e(){var t,n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue.getInstance();case 2:t=e.sent,n="\n      ".concat(p," +\n      new Staking Target proposed: ").concat(o,"\n    "),t.newVote(o,n,w);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(e){var t=e.target.value;O(t)};return Object(a.jsx)(X.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:t.modal,open:n,onClose:s,closeAfterTransition:!0,BackdropComponent:Z.a,BackdropProps:{timeout:500},children:Object(a.jsx)($.a,{in:n,children:Object(a.jsxs)(F.a,{className:t.paper,children:[Object(a.jsx)(h.a,{variant:"h4",children:"New Proposal"}),Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),k(!0),T()},className:t.form,children:[Object(a.jsxs)("div",{className:t.checkboxes,children:[Object(a.jsx)(ee.a,{label:"Staking Target",control:Object(a.jsx)(te.a,{onChange:S,name:"staking",checked:"Staking Target"===m,color:"primary",value:"Staking Target"})}),Object(a.jsx)(ee.a,{label:"Grants",control:Object(a.jsx)(te.a,{onChange:S,name:"grants",checked:"Grants"===m,color:"primary",value:"Grants"})}),Object(a.jsx)(ee.a,{label:"Governance",control:Object(a.jsx)(te.a,{onChange:S,name:"dao",checked:"Governance"===m,color:"primary",value:"Governance"})})]}),Object(a.jsxs)(ne.a,{className:t.formControl,children:[Object(a.jsx)(ae.a,{htmlFor:"target-amout",children:"Write a description"}),Object(a.jsx)(re.a,{id:"target-amout",type:"text",onChange:function(e){var t=e.target.value;b(t)}})]}),Object(a.jsxs)(ne.a,{className:t.formControl,children:[Object(a.jsx)(ae.a,{htmlFor:"target-amout",children:"Amount"}),Object(a.jsx)(re.a,{id:"target-amout",type:"number",onChange:function(e){var t=e.target.value;u(Number(t))}})]}),Object(a.jsx)(ne.a,{children:Object(a.jsx)(M.a,{color:"inherit",type:"submit",disabled:g,children:g?"Submitting... Please Wait":"Submit proposal"})})]}),Object(a.jsxs)(F.a,{className:t.preview,children:[Object(a.jsxs)("p",{children:["Proposal type: ",m]}),"Staking Target"===m&&Object(a.jsxs)("p",{children:["Preview Staking Target: ",o]}),Object(a.jsxs)("p",{children:["Preview Description: ",p]})]})]})})})},pe=Object(T.a)((function(e){return Object(S.a)({root:{}})}));var be=function(){var e=pe(),t=s.a.useState(!1),n=Object(f.a)(t,2),r=n[0],i=n[1],c=function(){var e=Object(P.a)(I.a.mark((function e(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i(!0);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:e.root,children:[Object(a.jsx)(M.a,{color:"inherit",className:e.root,onClick:function(){return c()},children:"New Proposal"}),Object(a.jsx)(de,{handleClose:function(){i(!1)},open:r})]})};Object(T.a)((function(e){return Object(S.a)({root:{},button:{marginRight:10}})}));var je={padding:10},he=Object(T.a)((function(e){return Object(S.a)({root:Object(H.a)({},je),voteItem:Object(H.a)({},je),voteListTitle:{paddingLeft:10}})}));var xe=function(){var e=he(),t=Object(r.useContext)(k);return Object(a.jsxs)(a.Fragment,{children:[t.votes.length>0?Object(a.jsx)(h.a,{variant:"h5",className:e.voteListTitle,children:"Vote List"}):Object(a.jsx)(h.a,{variant:"h5",className:e.voteListTitle,children:"Loading vote proposals..."}),Object(a.jsx)(F.a,{children:t.votes.map((function(t,n){return n=Number(t.id.slice(-4)),Object(a.jsxs)(F.a,{className:e.voteItem,children:[Object(a.jsxs)(F.a,{children:[Object(a.jsxs)("p",{children:["Vote #: ",n]}),Object(a.jsxs)("p",{children:["Vote ID: ",t.id.slice(-4)]})]}),Object(a.jsx)(F.a,{children:Object(a.jsxs)("p",{children:["Description of Vote: ",t.metadata]})}),Object(a.jsx)(fe,{voteIndex:n})]},n)})).slice(0,5)})]})},me=Object(T.a)((function(e){return Object(S.a)({root:{},button:{marginRight:10}})}));var fe=function(e){var t=me(),n=e.voteIndex,r=function(){var e=Object(P.a)(I.a.mark((function e(t,n){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue.getInstance();case 2:e.sent.vote(t,n);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(a.jsxs)(F.a,{children:[Object(a.jsx)(M.a,{className:t.button,onClick:function(){return r(n,!0)},color:"inherit",children:"Yes"}),Object(a.jsx)(M.a,{className:t.button,onClick:function(){return r(n,!1)},color:"inherit",children:"No"})]})},Oe=Object(T.a)((function(e){return Object(S.a)({root:{}})}));var ve=function(e){var t=Oe(),n=e.amount,s=Object(r.useState)(!1),i=Object(f.a)(s,2),c=i[0],o=i[1],u=function(){var e=Object(P.a)(I.a.mark((function e(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o(!0),console.log("Amount to stake thru props: ",n),setTimeout((function(){o(!1)}),5e3);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{className:t.root,children:Object(a.jsx)(M.a,{color:"inherit",className:t.root,onClick:u,children:c?"Staking tokens...":"Stake Tokens"})})};var ye=Object(T.a)((function(e){return Object(S.a)({root:{margin:30,padding:10},box:{padding:10}})}));var ge=function(){var e=ye();return Object(a.jsx)(p.a,{className:e.root,children:Object(a.jsx)(Q,{})})},ke=n(321),we=n(322),Te=n(323),Se=Object(T.a)((function(e){return Object(S.a)({root:{margin:30,padding:10},box:{padding:10}})}));var Ne=function(){var e=Se();return Object(a.jsx)(p.a,{className:e.root,children:Object(a.jsx)(ke.a,{dense:!0,className:e.root,children:[0,1,2,3].map((function(e){return Object(a.jsx)(we.a,{children:Object(a.jsx)(Te.a,{primary:"Claims item #".concat(e+1)})},e)}))})})},Ce=Object(T.a)((function(e){return Object(S.a)({root:{margin:30,padding:10},box:{padding:10}})}));var Ae=function(){var e=Ce(),t=Object(r.useContext)(k);return Object(r.useEffect)((function(){(function(){var e=Object(P.a)(I.a.mark((function e(){var n,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue.getInstance();case 2:return n=e.sent,e.next=5,n.votes();case 5:a=e.sent,t.setVotes(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(a.jsxs)(p.a,{className:e.root,children:[Object(a.jsx)(F.a,{className:e.box,children:Object(a.jsx)(h.a,{variant:"h4",children:"DAO Governance"})}),Object(a.jsx)(F.a,{className:e.box,children:Object(a.jsx)(be,{})}),Object(a.jsx)(F.a,{children:Object(a.jsx)(xe,{})})]})},Ie=Object(T.a)((function(e){return Object(S.a)({root:{margin:30,padding:10},box:{padding:10}})}));var Pe=function(){var e=Ie(),t=Object(r.useContext)(y),n=Object(r.useState)(0),s=Object(f.a)(n,2),i=s[0],c=s[1];return Object(a.jsxs)(p.a,{className:e.root,children:[Object(a.jsx)(F.a,{className:e.box,children:Object(a.jsxs)(h.a,{variant:"h6",children:["Staking Balance: ",t.tokens[1]?t.tokens[1].balance:0]})}),Object(a.jsx)(F.a,{className:e.box,children:Object(a.jsx)(h.a,{variant:"h6",children:"How much you want to stake?"})}),Object(a.jsxs)(F.a,{className:e.box,children:[Object(a.jsxs)(ae.a,{htmlFor:"target-amout",children:["Amount: ",i]}),Object(a.jsx)(re.a,{id:"target-amout",type:"number",onChange:function(e){var t=e.target.value;c(t)}})]}),Object(a.jsx)(F.a,{className:e.box,children:Object(a.jsx)(ve,{amount:i})})]})},Fe=Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_NETWORK:"RINKEBY",REACT_APP_TEST_IPFS:"TEST_IPFS"}),Me=n(197),De=Object(Me.a)(Object(H.a)(Object(H.a)({palette:{primary:{main:"#000000de",light:"#738DCE",dark:"#000000"},secondary:{main:"#FFFFFF",light:"#0059E2"},text:{primary:"#000",secondary:"#4A4A4A",light:"#F7F7F7"},info:{main:"#0034B6"}}},{h1:{fontSize:"42px",lineHeight:"42px"},h2:{fontSize:"27px",lineHeight:"133.84%"},h3:{fontSize:"20px",lineHeight:"143%"},body1:{fontSize:"16px",lineHeight:"143%"},body2:{fontWeight:"normal",fontSize:"16px",lineHeight:"143%"},subtitle1:{fontSize:"22px",lineHeight:"28px"},h4:{fontSize:"28px",lineHeight:"28px",fontWeight:600,marginBottom:6,color:"#000000"},subtitle2:{textAlign:"initial",fontSize:14}}),{},{overrides:{MuiTextField:{root:{backgroundColor:"#FFFFFF",color:"black",borderRadius:0,width:"100%","&:focus":{border:"0.5px solid",borderColor:"#0034B6",borderRadius:2},"&:active":{border:"0.5px solid",borderColor:"#0034B6",borderRadius:2},"&:placeholder":{color:"black"}}},MuiButtonBase:{root:{border:"solid"}},MuiCheckbox:{root:{border:"unset"}},MuiListItem:{root:{border:"unset"}}}}));var _e=function(){return Object(r.useEffect)((function(){console.log("getEnvVariables()",Fe)}),[]),Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(o.a,{children:Object(a.jsx)(m,{children:Object(a.jsxs)(u.a,{theme:De,children:[Object(a.jsx)(C,{}),Object(a.jsx)(d,{})]})})})})},Ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,335)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),s(e),i(e)}))};n(276);c.a.render(Object(a.jsx)(_e,{}),document.getElementById("root")),Ee()}},[[277,1,2]]]);
//# sourceMappingURL=main.6d580c3a.chunk.js.map