"use strict";(self.webpackChunkdshop=self.webpackChunkdshop||[]).push([[5069],{25069:(Z,h,s)=>{s.d(h,{ProtectedListPage:()=>is});var t=s(74081),l=s(27279),r=s(51926),g=s(27997),c=s(73354),M=s(27875),C=s(37472),i=s(32370),o=s(48102),d=s(74758),D=s(93415),P=s(70774),m=s(38566),B=s(38101),A=s(93153),e=s(50086),b=s(73411),w=s(10989),q=s(86967),F=s(10701),ss=s(89053),N=s(4987),ts=s(6191),as=s(37370),E=s(82691),I=s(36938),z=s(78665),_s=s(26784),os=s(52448),ns=s(61020),U=s(40464),Q=s(59461),G=s(51447),es=s(47533),H=s(66947),vs=s(64797),Ts=s(85811),Ls=s(42816),Bs=s(15816),As=s(97442),xs=s(13576),Ws=s(87830),Rs=s(47184),Is=s(364),Us=s(71563),Ks=s(49204),js=s(47853),fs=s(74919),us=s(29206),ys=s(98934),Ss=s(43433),ps=s(75719),$s=s(8175),Zs=s(6078),bs=s(51943),Fs=s(55783),Ns=s(92249),zs=s(41942),Qs=s(22919),Gs=s(53915),Hs=s(75041),Vs=s(30200),Xs=s(91379),Ys=s(33299),Js=s(33409),ks=s(63645),ws=s(7988),qs=s(7055),st=s(26757),tt=s(58311),at=s(29510),_t=s(16946),ot=s(10124),nt=s(69530),et=s(86961),dt=s(51527),it=s(19764),Et=s(42982),lt=s(26126);const ds=()=>{const[K,v]=l.useState(!1),[j,O]=l.useState([]),Es=(0,Q.v9)(H.s),{formatMessage:_}=(0,ns.Z)(),{formatAPIError:x}=(0,E.So)(),W=(0,E.lm)();(0,E.go)();const{push:ls}=(0,G.k6)(),{pathname:V}=(0,G.TH)(),{isLoading:rs,allowedActions:{canCreate:f,canUpdate:u,canDelete:X}}=(0,E.ss)(Es.settings?.webhooks??{}),{get:Ms,post:Ds,put:Ps}=(0,E.kY)(),{notifyStatus:Y}=(0,r.G)(),{isLoading:Os,data:T=[],error:y,refetch:J}=(0,U.useQuery)("webhooks",async()=>{const{data:{data:a}}=await Ms("/admin/webhooks");return a});l.useEffect(()=>{if(y){W({type:"warning",message:x(y)});return}T&&Y(_({id:"Settings.webhooks.list.loading.success",defaultMessage:"Webhooks have been loaded"}))},[T,y,W,_,Y,x]);const k=(0,U.useMutation)(()=>Ds("/admin/webhooks/batch-delete",{ids:j}),{onError(a){W({type:"warning",message:x(a)}),v(!1)},onSuccess(){O([]),v(!1),J()}}),hs=(0,U.useMutation)(({id:a,...n})=>Ps(`/admin/webhooks/${a}`,n),{onError(a){W({type:"warning",message:x(a)})},onSuccess(){J()}}),gs=()=>k.mutate(),cs=a=>O(a?T.map(n=>n.id):[]),Cs=(a,n)=>O(a?$=>[...$,n]:$=>$.filter(ms=>ms!==n)),S=a=>()=>ls(`${V}/${a}`),p=rs||Os,R=T?.length??0,L=j.length;return(0,t.jsxs)(g.A,{children:[(0,t.jsx)(E.SL,{name:"Webhooks"}),(0,t.jsxs)(c.o,{"aria-busy":p,children:[(0,t.jsx)(M.T,{title:_({id:"Settings.webhooks.title",defaultMessage:"Webhooks"}),subtitle:_({id:"Settings.webhooks.list.description",defaultMessage:"Get POST changes notifications"}),primaryAction:f&&!p&&(0,t.jsx)(as.Q,{as:es.OL,startIcon:(0,t.jsx)(I.Z,{}),variant:"default",to:`${V}/create`,size:"S",children:_({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})})}),L>0&&X&&(0,t.jsx)(C.Z,{startActions:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.Z,{variant:"epsilon",textColor:"neutral600",children:_({id:"Settings.webhooks.to.delete",defaultMessage:"{webhooksToDeleteLength, plural, one {# webhook} other {# webhooks}} selected"},{webhooksToDeleteLength:L})}),(0,t.jsx)(o.z,{onClick:()=>v(!0),startIcon:(0,t.jsx)(z.Z,{}),size:"L",variant:"danger-light",children:_({id:"global.delete",defaultMessage:"Delete"})})]})}),(0,t.jsx)(d.D,{children:p?(0,t.jsx)(D.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)(E.dO,{})}):R>0?(0,t.jsxs)(P.i,{colCount:5,rowCount:R+1,footer:(0,t.jsx)(m.c,{onClick:f?S("create"):void 0,icon:(0,t.jsx)(I.Z,{}),children:_({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})}),children:[(0,t.jsx)(B.h,{children:(0,t.jsxs)(A.Tr,{children:[(0,t.jsx)(e.Th,{children:(0,t.jsx)(b.C,{"aria-label":_({id:"global.select-all-entries",defaultMessage:"Select all entries"}),indeterminate:L>0&&L<R,value:L===R,onValueChange:cs})}),(0,t.jsx)(e.Th,{width:"20%",children:(0,t.jsx)(i.Z,{variant:"sigma",textColor:"neutral600",children:_({id:"global.name",defaultMessage:"Name"})})}),(0,t.jsx)(e.Th,{width:"60%",children:(0,t.jsx)(i.Z,{variant:"sigma",textColor:"neutral600",children:_({id:"Settings.webhooks.form.url",defaultMessage:"URL"})})}),(0,t.jsx)(e.Th,{width:"20%",children:(0,t.jsx)(i.Z,{variant:"sigma",textColor:"neutral600",children:_({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})})}),(0,t.jsx)(e.Th,{children:(0,t.jsx)(w.T,{children:_({id:"Settings.webhooks.list.th.actions",defaultMessage:"Actions"})})})]})}),(0,t.jsx)(q.p,{children:T.map(a=>(0,t.jsxs)(A.Tr,{onClick:u?S(a.id):void 0,style:{cursor:u?"pointer":"default"},children:[(0,t.jsx)(e.Td,{onClick:n=>n.stopPropagation(),children:(0,t.jsx)(b.C,{"aria-label":`${_({id:"global.select",defaultMessage:"Select"})} ${a.name}`,value:j?.includes(a.id),onValueChange:n=>Cs(n,a.id),name:"select"})}),(0,t.jsx)(e.Td,{children:(0,t.jsx)(i.Z,{fontWeight:"semiBold",textColor:"neutral800",children:a.name})}),(0,t.jsx)(e.Td,{children:(0,t.jsx)(i.Z,{textColor:"neutral800",children:a.url})}),(0,t.jsx)(e.Td,{children:(0,t.jsx)(F.k,{children:(0,t.jsx)(ss.r,{onLabel:_({id:"global.enabled",defaultMessage:"Enabled"}),offLabel:_({id:"global.disabled",defaultMessage:"Disabled"}),label:`${a.name} ${_({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})}`,selected:a.isEnabled,onChange:n=>{n.stopPropagation(),hs.mutate({...a,isEnabled:!a.isEnabled})},visibleLabels:!0})})}),(0,t.jsx)(e.Td,{children:(0,t.jsxs)(F.k,{gap:1,children:[u&&(0,t.jsx)(N.h,{label:_({id:"Settings.webhooks.events.update",defaultMessage:"Update"}),icon:(0,t.jsx)(_s.Z,{}),noBorder:!0}),X&&(0,t.jsx)(N.h,{onClick:n=>{n.stopPropagation(),O([a.id]),v(!0)},label:_({id:"Settings.webhooks.events.delete",defaultMessage:"Delete webhook"}),icon:(0,t.jsx)(z.Z,{}),noBorder:!0})]})})]},a.id))})]}):(0,t.jsx)(ts.x,{icon:(0,t.jsx)(os.Z,{width:"160px"}),content:_({id:"Settings.webhooks.list.empty.description",defaultMessage:"No webhooks found"}),action:(0,t.jsx)(o.z,{variant:"secondary",startIcon:(0,t.jsx)(I.Z,{}),onClick:()=>f?S("create"):{},children:_({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})})})})]}),(0,t.jsx)(E.QH,{isOpen:K,onToggleDialog:()=>v(a=>!a),onConfirm:gs,isConfirmButtonLoading:k.isLoading})]})},is=()=>{const K=(0,Q.v9)(H.s);return(0,t.jsx)(E.O4,{permissions:K.settings?.webhooks.main,children:(0,t.jsx)(ds,{})})}},89053:(Z,h,s)=>{s.d(h,{r:()=>i});var t=s(74081),l=s(27279),r=s(19003),g=s(10701),c=s(93415);const M=r.default.div`
  background: ${({theme:o})=>o.colors.danger500};
  border: none;
  border-radius: 16px;
  position: relative;
  height: ${24/16}rem;
  width: ${40/16}rem;

  & span {
    font-size: ${({visibleLabels:o})=>o?"1rem":0};
  }

  &:before {
    content: '';
    background: ${({theme:o})=>o.colors.neutral0};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    transition: all 0.5s;
    left: ${({theme:o})=>o.spaces[1]};
    top: ${({theme:o})=>o.spaces[1]};
  }

  @media (prefers-reduced-motion: reduce) {
    &:before {
      transition: none;
    }
  }
`,C=r.default.button`
  background: transparent;
  padding: 0;
  border: none;

  &[aria-checked='true'] ${M} {
    background: ${({theme:o})=>o.colors.success500};
  }

  &[aria-checked='true'] ${M}:before {
    transform: translateX(1rem);
  }
`,i=l.forwardRef(({label:o,onChange:d,onLabel:D="On",offLabel:P="Off",selected:m,visibleLabels:B=!1,...A},e)=>(0,t.jsx)(C,{ref:e,role:"switch","aria-checked":m,"aria-label":o,onClick:d,visibleLabels:B,type:"button",...A,children:(0,t.jsxs)(g.k,{children:[(0,t.jsxs)(M,{children:[(0,t.jsx)("span",{children:D}),(0,t.jsx)("span",{children:P})]}),B&&(0,t.jsx)(c.x,{as:"span","aria-hidden":!0,paddingLeft:2,color:m?"success600":"danger600",children:m?D:P})]})}))},38566:(Z,h,s)=>{s.d(h,{c:()=>o});var t=s(74081),l=s(19003),r=s(93415),g=s(84366),c=s(10701),M=s(32370);const C=(0,l.default)(r.x)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:d})=>d.colors.primary600};
  }
`,i=(0,l.default)(r.x)`
  border-radius: 0 0 ${({theme:d})=>d.borderRadius} ${({theme:d})=>d.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,o=({children:d,icon:D,...P})=>(0,t.jsxs)("div",{children:[(0,t.jsx)(g.i,{}),(0,t.jsx)(i,{as:"button",background:"primary100",padding:5,...P,children:(0,t.jsxs)(c.k,{children:[(0,t.jsx)(C,{"aria-hidden":!0,background:"primary200",children:D}),(0,t.jsx)(r.x,{paddingLeft:3,children:(0,t.jsx)(M.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:d})})]})})]})}}]);
