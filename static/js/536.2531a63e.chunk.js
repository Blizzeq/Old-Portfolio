"use strict";(self.webpackChunkcv=self.webpackChunkcv||[]).push([[536],{4536:function(e,a,r){r.r(a),r.d(a,{default:function(){return Le}});var s=r(885),t=r(2791),i=r(409),n={_origin:"https://api.emailjs.com"},o=function(e,a,r){if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!a)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0},l=r(3144),c=r(5671),d=(0,l.Z)((function e(a){(0,c.Z)(this,e),this.status=a.status,this.text=a.responseText})),m=function(e,a){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(s,t){var i=new XMLHttpRequest;i.addEventListener("load",(function(e){var a=e.target,r=new d(a);200===r.status||"OK"===r.text?s(r):t(r)})),i.addEventListener("error",(function(e){var a=e.target;t(new d(a))})),i.open("POST",n._origin+e,!0),Object.keys(r).forEach((function(e){i.setRequestHeader(e,r[e])})),i.send(a)}))},f=function(e,a,r,s){var t=s||n._userID,i=function(e){var a;if(!(a="string"===typeof e?document.querySelector(e):e)||"FORM"!==a.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return a}(r);o(t,e,a);var l=new FormData(i);return l.append("lib_version","3.7.0"),l.append("service_id",e),l.append("template_id",a),l.append("user_id",t),m("/api/v1.0/email/send-form",l)},v=r(9140),u=r(1413),p=r(5987),x=r(1694),b=r.n(x),h=r(2007),N=r.n(h),Z=r(184),y=["as","className","type","tooltip"],j={type:N().string,tooltip:N().bool,as:N().elementType},g=t.forwardRef((function(e,a){var r=e.as,s=void 0===r?"div":r,t=e.className,i=e.type,n=void 0===i?"valid":i,o=e.tooltip,l=void 0!==o&&o,c=(0,p.Z)(e,y);return(0,Z.jsx)(s,(0,u.Z)((0,u.Z)({},c),{},{ref:a,className:b()(t,"".concat(n,"-").concat(l?"tooltip":"feedback"))}))}));g.displayName="Feedback",g.propTypes=j;var C=g,P=t.createContext({}),w=r(162),I=["id","bsPrefix","className","type","isValid","isInvalid","as"],k=t.forwardRef((function(e,a){var r=e.id,s=e.bsPrefix,i=e.className,n=e.type,o=void 0===n?"checkbox":n,l=e.isValid,c=void 0!==l&&l,d=e.isInvalid,m=void 0!==d&&d,f=e.as,v=void 0===f?"input":f,x=(0,p.Z)(e,I),h=(0,t.useContext)(P).controlId;return s=(0,w.vE)(s,"form-check-input"),(0,Z.jsx)(v,(0,u.Z)((0,u.Z)({},x),{},{ref:a,type:o,id:r||h,className:b()(i,s,c&&"is-valid",m&&"is-invalid")}))}));k.displayName="FormCheckInput";var F=k,E=["bsPrefix","className","htmlFor"],R=t.forwardRef((function(e,a){var r=e.bsPrefix,s=e.className,i=e.htmlFor,n=(0,p.Z)(e,E),o=(0,t.useContext)(P).controlId;return r=(0,w.vE)(r,"form-check-label"),(0,Z.jsx)("label",(0,u.Z)((0,u.Z)({},n),{},{ref:a,htmlFor:i||o,className:b()(s,r)}))}));R.displayName="FormCheckLabel";var T=R;var L=["id","bsPrefix","bsSwitchPrefix","inline","reverse","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],S=t.forwardRef((function(e,a){var r=e.id,s=e.bsPrefix,i=e.bsSwitchPrefix,n=e.inline,o=void 0!==n&&n,l=e.reverse,c=void 0!==l&&l,d=e.disabled,m=void 0!==d&&d,f=e.isValid,v=void 0!==f&&f,x=e.isInvalid,h=void 0!==x&&x,N=e.feedbackTooltip,y=void 0!==N&&N,j=e.feedback,g=e.feedbackType,I=e.className,k=e.style,E=e.title,R=void 0===E?"":E,S=e.type,V=void 0===S?"checkbox":S,O=e.label,z=e.children,H=e.as,M=void 0===H?"input":H,_=(0,p.Z)(e,L);s=(0,w.vE)(s,"form-check"),i=(0,w.vE)(i,"form-switch");var q=(0,t.useContext)(P).controlId,D=(0,t.useMemo)((function(){return{controlId:r||q}}),[q,r]),B=!z&&null!=O&&!1!==O||function(e,a){return t.Children.toArray(e).some((function(e){return t.isValidElement(e)&&e.type===a}))}(z,T),G=(0,Z.jsx)(F,(0,u.Z)((0,u.Z)({},_),{},{type:"switch"===V?"checkbox":V,ref:a,isValid:v,isInvalid:h,disabled:m,as:M}));return(0,Z.jsx)(P.Provider,{value:D,children:(0,Z.jsx)("div",{style:k,className:b()(I,B&&s,o&&"".concat(s,"-inline"),c&&"".concat(s,"-reverse"),"switch"===V&&i),children:z||(0,Z.jsxs)(Z.Fragment,{children:[G,B&&(0,Z.jsx)(T,{title:R,children:O}),j&&(0,Z.jsx)(C,{type:g,tooltip:y,children:j})]})})})}));S.displayName="FormCheck";var V=Object.assign(S,{Input:F,Label:T}),O=r(4942),z=(r(2391),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),H=t.forwardRef((function(e,a){var r,s,i=e.bsPrefix,n=e.type,o=e.size,l=e.htmlSize,c=e.id,d=e.className,m=e.isValid,f=void 0!==m&&m,v=e.isInvalid,x=void 0!==v&&v,h=e.plaintext,N=e.readOnly,y=e.as,j=void 0===y?"input":y,g=(0,p.Z)(e,z),C=(0,t.useContext)(P).controlId;(i=(0,w.vE)(i,"form-control"),h)?r=(0,O.Z)({},"".concat(i,"-plaintext"),!0):(s={},(0,O.Z)(s,i,!0),(0,O.Z)(s,"".concat(i,"-").concat(o),o),r=s);return(0,Z.jsx)(j,(0,u.Z)((0,u.Z)({},g),{},{type:n,size:l,ref:a,readOnly:N,id:c||C,className:b()(d,r,f&&"is-valid",x&&"is-invalid","color"===n&&"".concat(i,"-color"))}))}));H.displayName="FormControl";var M=Object.assign(H,{Feedback:C}),_=r(6543),q=(0,_.Z)("form-floating"),D=["controlId","as"],B=t.forwardRef((function(e,a){var r=e.controlId,s=e.as,i=void 0===s?"div":s,n=(0,p.Z)(e,D),o=(0,t.useMemo)((function(){return{controlId:r}}),[r]);return(0,Z.jsx)(P.Provider,{value:o,children:(0,Z.jsx)(i,(0,u.Z)((0,u.Z)({},n),{},{ref:a}))})}));B.displayName="FormGroup";var G=B,A=["as","bsPrefix","className"],K=["className"];var J=t.forwardRef((function(e,a){var r=function(e){var a=e.as,r=e.bsPrefix,s=e.className,t=(0,p.Z)(e,A);r=(0,w.vE)(r,"col");var i=(0,w.pi)(),n=(0,w.zG)(),o=[],l=[];return i.forEach((function(e){var a,s,i,c=t[e];delete t[e],"object"===typeof c&&null!=c?(a=c.span,s=c.offset,i=c.order):a=c;var d=e!==n?"-".concat(e):"";a&&o.push(!0===a?"".concat(r).concat(d):"".concat(r).concat(d,"-").concat(a)),null!=i&&l.push("order".concat(d,"-").concat(i)),null!=s&&l.push("offset".concat(d,"-").concat(s))})),[(0,u.Z)((0,u.Z)({},t),{},{className:b().apply(void 0,[s].concat(o,l))}),{as:a,bsPrefix:r,spans:o}]}(e),t=(0,s.Z)(r,2),i=t[0],n=i.className,o=(0,p.Z)(i,K),l=t[1],c=l.as,d=void 0===c?"div":c,m=l.bsPrefix,f=l.spans;return(0,Z.jsx)(d,(0,u.Z)((0,u.Z)({},o),{},{ref:a,className:b()(n,!f.length&&m)}))}));J.displayName="Col";var Q=J,X=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],U=t.forwardRef((function(e,a){var r=e.as,s=void 0===r?"label":r,i=e.bsPrefix,n=e.column,o=e.visuallyHidden,l=e.className,c=e.htmlFor,d=(0,p.Z)(e,X),m=(0,t.useContext)(P).controlId;i=(0,w.vE)(i,"form-label");var f="col-form-label";"string"===typeof n&&(f="".concat(f," ").concat(f,"-").concat(n));var v=b()(l,i,o&&"visually-hidden",n&&f);return c=c||m,n?(0,Z.jsx)(Q,(0,u.Z)({ref:a,as:"label",className:v,htmlFor:c},d)):(0,Z.jsx)(s,(0,u.Z)({ref:a,className:v,htmlFor:c},d))}));U.displayName="FormLabel",U.defaultProps={column:!1,visuallyHidden:!1};var W=U,Y=["bsPrefix","className","id"],$=t.forwardRef((function(e,a){var r=e.bsPrefix,s=e.className,i=e.id,n=(0,p.Z)(e,Y),o=(0,t.useContext)(P).controlId;return r=(0,w.vE)(r,"form-range"),(0,Z.jsx)("input",(0,u.Z)((0,u.Z)({},n),{},{type:"range",ref:a,className:b()(s,r),id:i||o}))}));$.displayName="FormRange";var ee=$,ae=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],re=t.forwardRef((function(e,a){var r=e.bsPrefix,s=e.size,i=e.htmlSize,n=e.className,o=e.isValid,l=void 0!==o&&o,c=e.isInvalid,d=void 0!==c&&c,m=e.id,f=(0,p.Z)(e,ae),v=(0,t.useContext)(P).controlId;return r=(0,w.vE)(r,"form-select"),(0,Z.jsx)("select",(0,u.Z)((0,u.Z)({},f),{},{size:i,ref:a,className:b()(n,r,s&&"".concat(r,"-").concat(s),l&&"is-valid",d&&"is-invalid"),id:m||v}))}));re.displayName="FormSelect";var se=re,te=["bsPrefix","className","as","muted"],ie=t.forwardRef((function(e,a){var r=e.bsPrefix,s=e.className,t=e.as,i=void 0===t?"small":t,n=e.muted,o=(0,p.Z)(e,te);return r=(0,w.vE)(r,"form-text"),(0,Z.jsx)(i,(0,u.Z)((0,u.Z)({},o),{},{ref:a,className:b()(s,r,n&&"text-muted")}))}));ie.displayName="FormText";var ne=ie,oe=t.forwardRef((function(e,a){return(0,Z.jsx)(V,(0,u.Z)((0,u.Z)({},e),{},{ref:a,type:"switch"}))}));oe.displayName="Switch";var le=Object.assign(oe,{Input:V.Input,Label:V.Label}),ce=["bsPrefix","className","children","controlId","label"],de=t.forwardRef((function(e,a){var r=e.bsPrefix,s=e.className,t=e.children,i=e.controlId,n=e.label,o=(0,p.Z)(e,ce);return r=(0,w.vE)(r,"form-floating"),(0,Z.jsxs)(G,(0,u.Z)((0,u.Z)({ref:a,className:b()(s,r),controlId:i},o),{},{children:[t,(0,Z.jsx)("label",{htmlFor:i,children:n})]}))}));de.displayName="FloatingLabel";var me=de,fe=["className","validated","as"],ve={_ref:N().any,validated:N().bool,as:N().elementType},ue=t.forwardRef((function(e,a){var r=e.className,s=e.validated,t=e.as,i=void 0===t?"form":t,n=(0,p.Z)(e,fe);return(0,Z.jsx)(i,(0,u.Z)((0,u.Z)({},n),{},{ref:a,className:b()(r,s&&"was-validated")}))}));ue.displayName="Form",ue.propTypes=ve;var pe=Object.assign(ue,{Group:G,Control:M,Floating:q,Check:V,Switch:le,Label:W,Text:ne,Range:ee,Select:se,FloatingLabel:me}),xe=r(5341),be=["as","bsPrefix","variant","size","active","className"],he=t.forwardRef((function(e,a){var r=e.as,t=e.bsPrefix,i=e.variant,n=e.size,o=e.active,l=e.className,c=(0,p.Z)(e,be),d=(0,w.vE)(t,"btn"),m=(0,xe.FT)((0,u.Z)({tagName:r},c)),f=(0,s.Z)(m,2),v=f[0],x=f[1].tagName;return(0,Z.jsx)(x,(0,u.Z)((0,u.Z)((0,u.Z)({},v),c),{},{ref:a,className:b()(l,d,o&&"active",i&&"".concat(d,"-").concat(i),n&&"".concat(d,"-").concat(n),c.href&&c.disabled&&"disabled")}))}));he.displayName="Button",he.defaultProps={variant:"primary",active:!1,disabled:!1};var Ne=he,Ze=r(239),ye=r(9007),je=r(1691),ge=r(2709),Ce=r(473),Pe=r(7472),we=["bsPrefix","show","closeLabel","closeVariant","className","children","variant","onClose","dismissible","transition"],Ie=(0,Pe.Z)("h4");Ie.displayName="DivStyledAsH4";var ke=(0,_.Z)("alert-heading",{Component:Ie}),Fe=(0,_.Z)("alert-link",{Component:je.Z}),Ee={variant:"primary",show:!0,transition:ge.Z,closeLabel:"Close alert"},Re=t.forwardRef((function(e,a){var r=(0,Ze.Ch)(e,{show:"onClose"}),s=r.bsPrefix,t=r.show,i=r.closeLabel,n=r.closeVariant,o=r.className,l=r.children,c=r.variant,d=r.onClose,m=r.dismissible,f=r.transition,v=(0,p.Z)(r,we),x=(0,w.vE)(s,"alert"),h=(0,ye.Z)((function(e){d&&d(!1,e)})),N=!0===f?ge.Z:f,y=(0,Z.jsxs)("div",(0,u.Z)((0,u.Z)({role:"alert"},N?void 0:v),{},{ref:a,className:b()(o,x,c&&"".concat(x,"-").concat(c),m&&"".concat(x,"-dismissible")),children:[m&&(0,Z.jsx)(Ce.Z,{onClick:h,"aria-label":i,variant:n}),l]}));return N?(0,Z.jsx)(N,(0,u.Z)((0,u.Z)({unmountOnExit:!0},v),{},{ref:void 0,in:t,children:y})):t?y:null}));Re.displayName="Alert",Re.defaultProps=Ee;var Te=Object.assign(Re,{Link:Fe,Heading:ke});var Le=function(e){var a=(0,t.useContext)(i.N).themeMode,r=(0,t.useRef)(),n=(0,t.useState)(0),o=(0,s.Z)(n,2),l=o[0],c=o[1],d=(0,t.useState)(!1),m=(0,s.Z)(d,2),u=m[0],p=m[1],x=function(e){e.preventDefault(),f("service_afpsyxl","template_v4qx4u4",r.current,"KMHJ2SCdbVqmNLQ9K").then((function(e){console.log(e.text),c(1)}),(function(e){console.log(e.text),c(2)}))};return(0,Z.jsx)("div",{className:"Contact-".concat(a),children:(0,Z.jsx)("div",{className:"Contact-Content",children:(0,Z.jsx)(v.Z,{className:"Card-Contact",children:(0,Z.jsxs)(pe,{noValidate:!0,validated:u,ref:r,onSubmit:function(e){!1===e.currentTarget.checkValidity()?(e.preventDefault(),e.stopPropagation()):x(e),p(!0)},className:"Form-Contact",children:[(0,Z.jsxs)(pe.Group,{className:"form-content",controlId:"formBasicEmail",children:[(0,Z.jsx)(pe.Label,{children:"Name"}),(0,Z.jsx)(pe.Control,{required:!0,type:"text",placeholder:"Name",name:"user_name"}),(0,Z.jsx)(pe.Control.Feedback,{type:"invalid",children:"Please provide a valid name."})]}),(0,Z.jsxs)(pe.Group,{className:"form-content",controlId:"formBasicEmail",children:[(0,Z.jsx)(pe.Label,{children:"Email address"}),(0,Z.jsx)(pe.Control,{required:!0,type:"email",placeholder:"Email",name:"user_email"}),(0,Z.jsx)(pe.Text,{className:"text-muted",children:"I'll never share your email with anyone else."}),(0,Z.jsx)(pe.Control.Feedback,{type:"invalid",children:"Please provide a valid email."})]}),(0,Z.jsxs)(pe.Group,{className:"form-content",controlId:"exampleForm.ControlTextarea1",children:[(0,Z.jsx)(pe.Label,{children:"Message"}),(0,Z.jsx)(pe.Control,{required:!0,as:"textarea",rows:2,placeholder:"Message",name:"message"}),(0,Z.jsx)(pe.Control.Feedback,{type:"invalid",children:"Please provide a valid message."})]}),0===l&&(0,Z.jsx)(Ne,{variant:"primary",type:"submit",className:"Button-Contact",children:"Contact me"}),1===l&&(0,Z.jsx)(Te,{variant:"success",className:"Alert",children:"Message sent successfully! I will contact you as soon as possible."}),2===l&&(0,Z.jsx)(Te,{variant:"danger",className:"Alert",children:"Message not sent! Please try again."})]})})})})}},9140:function(e,a,r){r.d(a,{Z:function(){return E}});var s=r(1413),t=r(5987),i=r(1694),n=r.n(i),o=r(2791),l=r(162),c=r(6543),d=r(7472),m=r(184),f=["bsPrefix","className","variant","as"],v=o.forwardRef((function(e,a){var r=e.bsPrefix,i=e.className,o=e.variant,c=e.as,d=void 0===c?"img":c,v=(0,t.Z)(e,f),u=(0,l.vE)(r,"card-img");return(0,m.jsx)(d,(0,s.Z)({ref:a,className:n()(o?"".concat(u,"-").concat(o):u,i)},v))}));v.displayName="CardImg";var u=v,p=r(6040),x=["bsPrefix","className","as"],b=o.forwardRef((function(e,a){var r=e.bsPrefix,i=e.className,c=e.as,d=void 0===c?"div":c,f=(0,t.Z)(e,x),v=(0,l.vE)(r,"card-header"),u=(0,o.useMemo)((function(){return{cardHeaderBsPrefix:v}}),[v]);return(0,m.jsx)(p.Z.Provider,{value:u,children:(0,m.jsx)(d,(0,s.Z)((0,s.Z)({ref:a},f),{},{className:n()(i,v)}))})}));b.displayName="CardHeader";var h=b,N=["bsPrefix","className","bg","text","border","body","children","as"],Z=(0,d.Z)("h5"),y=(0,d.Z)("h6"),j=(0,c.Z)("card-body"),g=(0,c.Z)("card-title",{Component:Z}),C=(0,c.Z)("card-subtitle",{Component:y}),P=(0,c.Z)("card-link",{Component:"a"}),w=(0,c.Z)("card-text",{Component:"p"}),I=(0,c.Z)("card-footer"),k=(0,c.Z)("card-img-overlay"),F=o.forwardRef((function(e,a){var r=e.bsPrefix,i=e.className,o=e.bg,c=e.text,d=e.border,f=e.body,v=e.children,u=e.as,p=void 0===u?"div":u,x=(0,t.Z)(e,N),b=(0,l.vE)(r,"card");return(0,m.jsx)(p,(0,s.Z)((0,s.Z)({ref:a},x),{},{className:n()(i,b,o&&"bg-".concat(o),c&&"text-".concat(c),d&&"border-".concat(d)),children:f?(0,m.jsx)(j,{children:v}):v}))}));F.displayName="Card",F.defaultProps={body:!1};var E=Object.assign(F,{Img:u,Title:g,Subtitle:C,Body:j,Link:P,Text:w,Header:h,Footer:I,ImgOverlay:k})},2391:function(e){var a=function(){};e.exports=a}}]);
//# sourceMappingURL=536.2531a63e.chunk.js.map