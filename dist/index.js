/*! For license information please see index.js.LICENSE.txt */
!function(){"use strict";var e={287:function(e,t){var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),p=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,h={};function v(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||f}function y(){}function b(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||f}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var _=b.prototype=new y;_.constructor=b,g(_,v.prototype),_.isPureReactComponent=!0;var E=Array.isArray,w=Object.prototype.hasOwnProperty,k={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var a,o={},l=null,i=null;if(null!=t)for(a in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(l=""+t.key),t)w.call(t,a)&&!C.hasOwnProperty(a)&&(o[a]=t[a]);var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===o[a]&&(o[a]=s[a]);return{$$typeof:n,type:e,key:l,ref:i,props:o,_owner:k.current}}function x(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var P=/\/+/g;function T(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,a,o,l){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var s=!1;if(null===e)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return l=l(s=e),e=""===o?"."+T(s,0):o,E(l)?(a="",null!=e&&(a=e.replace(P,"$&/")+"/"),O(l,t,a,"",(function(e){return e}))):null!=l&&(x(l)&&(l=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(l,a+(!l.key||s&&s.key===l.key?"":(""+l.key).replace(P,"$&/")+"/")+e)),t.push(l)),1;if(s=0,o=""===o?".":o+":",E(e))for(var c=0;c<e.length;c++){var u=o+T(i=e[c],c);s+=O(i,t,a,u,l)}else if(u=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"===typeof u)for(e=u.call(e),c=0;!(i=e.next()).done;)s+=O(i=i.value,t,a,u=o+T(i,c++),l);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function $(e,t,n){if(null==e)return e;var r=[],a=0;return O(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function M(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var R={current:null},N={transition:null},I={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:N,ReactCurrentOwner:k};t.Fragment=a},540:function(e,t,n){e.exports=n(287)}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};!function(){n.r(r),n.d(r,{IconPicker:function(){return $},Image:function(){return _},Link:function(){return Je},LinkWrap:function(){return We},MediaDisplay:function(){return C},MediaPicker:function(){return y},MediaToolbar:function(){return m},OverlayDisplay:function(){return R},OverlayPicker:function(){return I},Repeater:function(){return F},ThemeIcon:function(){return P},Video:function(){return w},getEditorSettings:function(){return l},getMedia:function(){return a},getOutsideClickRef:function(){return c},getPoster:function(){return i}});var e=require("@wordpress/data"),t=require("@wordpress/core-data");function a(n){return(0,e.useSelect)((e=>{const{getMedia:r,isResolving:a,hasFinishedResolution:o}=e(t.store),l=[n,{context:"view"}];return{mediaDetails:r(...l),isResolvingMedia:a("getMedia",l),hasResolvedMedia:o("getMedia",l)}}),[n])}var o=require("@wordpress/block-editor");function l(){return(0,e.useSelect)((e=>{const{getSettings:t}=e(o.store);return t()}),[])}function i(n,r){return(0,e.useSelect)((e=>{const{getMedia:a,isResolving:o,hasFinishedResolution:l}=e(t.store),i=[n,{context:"view"}],s=a(...i);return{posterUrl:s?.media?.sizes?.[r]?.source_url||s?.source_url||"",isResolvingPoster:o("getMedia",i),hasResolvedPoster:l("getMedia",i)}}),[n,r])}var s=require("@wordpress/element");function c(e){const t=(0,s.useRef)();return(0,s.useEffect)((()=>{const n=n=>{t.current&&!t.current.contains(n.target)&&e(n)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),()=>{document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}}),[t,e]),t}var u=require("@wordpress/i18n"),d=require("@wordpress/components");const m=e=>{const{onSelect:t,onRemove:n,id:r,mediaType:l,multiple:i}=e,c=!!r,{mediaDetails:m}=a(r);return(0,s.createElement)(d.ToolbarGroup,{label:(0,u.__)("Media")},c?(0,s.createElement)(s.Fragment,null,(0,s.createElement)(o.MediaReplaceFlow,{mediaUrl:m?.source_url?m.source_url:"",onSelect:t,name:`Replace ${l}`}),(0,s.createElement)(d.ToolbarButton,{onClick:n},`Remove ${l}`)):(0,s.createElement)(o.MediaUploadCheck,null,(0,s.createElement)(o.MediaUpload,{onSelect:t,allowedTypes:[l],render:({open:e})=>(0,s.createElement)(d.ToolbarButton,{onClick:e},`Add ${l}`),multiple:i})))};m.defaultProps={mediaType:"image",multiple:!1};var p=require("@emotion/styled"),f=n.n(p);const g=f().div`
	label {
		font-size: 11px;
		font-weight: 500;
		line-height: 1.4;
		text-transform: uppercase;
		display: inline-block;
		margin-bottom: 8px;
		padding: 0px;
	}

	.preview-wrap {
		position: relative;
		padding-bottom: 56.25%;
		height: 0;
		overflow: hidden;
		iframe,
		video {
			max-width: 100%;
			vertical-align: top;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			border: 0;
		}
	}
`,h=f().div`
	> label {
		font-size: 11px;
		font-weight: 500;
		line-height: 1.4;
		text-transform: uppercase;
		display: inline-block;
		margin-bottom: 8px;
		padding: 0px;
	}

	.ds-media__image,
	.ds-media__video-element,
	.ds-media__video {
		margin-bottom: 20px;
	}
`,v=t=>{const{media:n,onSelect:r,displayFocalPicker:i,allowMediaTypeSwitch:c,controlPanelLabel:p,multiple:f,showBlockControls:v,isBackground:y}=t,{id:b,mediaType:_,imageSize:E,lazyLoad:k,srcset:C,videoSource:S="internal",videoUrl:x="",focalPoint:P={},videoControls:T={}}=n,{autoplay:O=!1,isMuted:$=!0,showControls:M=!0,posterId:R=0,posterSize:N="full"}=T,{imageSizes:I}=l(),{mediaDetails:j,isResolvingMedia:B}=a(b),[L,F]=(0,s.useState)([]),z=!!b;(0,s.useEffect)((()=>{if(I){const e=I.map((({slug:e,name:t})=>({value:e,label:t})));F(e)}}),[I]);const{embedPreview:U}=(0,e.useSelect)((e=>{const{getEmbedPreview:t}=e("core");return{embedPreview:!!x.length&&t(x)}}),[x]);if(B)return(0,s.createElement)(d.Spinner,null);const A=j?.media_details?.sizes?.[E]?.source_url??j?.source_url,G=e=>{const t={...n,...e};r(t)},q=()=>{const e={...n,id:0};r(e)},H=e=>{const t={...n.videoControls,...e};G({videoControls:t})};return(0,s.createElement)(s.Fragment,null,(0,s.createElement)(d.PanelBody,{title:p},c&&(0,s.createElement)(s.Fragment,null,(0,s.createElement)(d.__experimentalToggleGroupControl,{label:(0,u.__)("Media Type"),value:_,isBlock:!0,onChange:e=>(e=>{const t={...n,id:0,videoUrl:"",...e};r(t)})({mediaType:e})},(0,s.createElement)(d.__experimentalToggleGroupControlOption,{value:"image",label:(0,u.__)("Image")}),(0,s.createElement)(d.__experimentalToggleGroupControlOption,{value:"video",label:(0,u.__)("Video")})),"video"==_&&(0,s.createElement)(d.__experimentalToggleGroupControl,{label:(0,u.__)("Video Source"),value:S,isBlock:!0,onChange:e=>G({videoSource:e})},(0,s.createElement)(d.__experimentalToggleGroupControlOption,{value:"internal",label:(0,u.__)("Internal")}),(0,s.createElement)(d.__experimentalToggleGroupControlOption,{value:"external",label:(0,u.__)("External")}))),z?(0,s.createElement)(s.Fragment,null,"image"==_&&(0,s.createElement)(s.Fragment,null,(0,s.createElement)(m,{id:b,onSelect:e=>G({id:e?.id?e.id:0}),onRemove:q,mediaType:_,multiple:f}),i&&(0,s.createElement)(d.FocalPointPicker,{label:(0,u.__)("Focal Point Picker"),url:A,value:P,onChange:e=>G({focalPoint:e})}),(0,s.createElement)(d.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,u.__)("Lazy Load"),onChange:()=>G({lazyLoad:!k}),checked:k,help:"Disable this option if your image is in the first fold."}),(0,s.createElement)(d.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,u.__)("Enable Responsive Images (srcset)"),onChange:()=>G({srcset:!C}),checked:C,help:"Srcset is an HTML image attribute that specifies the list of images to use in different browser situations."}),(0,s.createElement)(o.__experimentalImageSizeControl,{isResizable:!1,onChangeImage:e=>G({imageSize:e}),slug:E,imageSizeOptions:L})),"video"==_&&(0,s.createElement)(s.Fragment,null,"external"==S?(0,s.createElement)(s.Fragment,null,(0,s.createElement)(d.TextControl,{label:"Embed URL",type:"url",value:x,onChange:e=>G({videoUrl:e}),help:"Paste the URL from one of the provided oEmbed providers"}),(0,s.createElement)(d.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,u.__)("Autoplay Video"),onChange:()=>H({autoplay:!O}),checked:O}),(0,s.createElement)(d.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,u.__)("Mute Video"),onChange:()=>H({isMuted:!$}),checked:$}),(0,s.createElement)(d.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,u.__)("Show Controls"),onChange:()=>H({showControls:!M}),checked:M}),U&&(0,s.createElement)(g,null,(0,s.createElement)("label",null,(0,u.__)("Embed Preview")),(0,s.createElement)("div",{className:"preview-wrap",dangerouslySetInnerHTML:{__html:U.html}}))):(0,s.createElement)(s.Fragment,null,(0,s.createElement)(d.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,u.__)("Autoplay Video"),onChange:()=>H({autoplay:!O}),checked:O}),(0,s.createElement)(d.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,u.__)("Mute Video"),onChange:()=>H({isMuted:!$}),checked:$}),(0,s.createElement)(d.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,u.__)("Show Controls"),onChange:()=>H({showControls:!M}),checked:M}),R?(0,s.createElement)(h,null,(0,s.createElement)("label",null,(0,u.__)("Video Preview")),(0,s.createElement)(w,{id:b,videoSource:S,videoUrl:x,videoControls:T,isPreview:!0}),(0,s.createElement)(o.__experimentalImageSizeControl,{imageSizeHelp:"Please select the poster image size",isResizable:!1,onChangeImage:e=>H({posterSize:e}),slug:N,imageSizeOptions:L}),(0,s.createElement)(d.ToolbarGroup,{label:(0,u.__)("Poster")},(0,s.createElement)(d.ToolbarButton,{onClick:()=>H({posterId:0})},(0,u.__)("Remove Poster")))):(0,s.createElement)(o.MediaUploadCheck,null,(0,s.createElement)(o.MediaPlaceholder,{labels:{title:"Upload Video Poster",instructions:""},onSelect:e=>H({posterId:e?.id?e.id:0}),accept:"image",allowedTypes:["image"]}))))):(0,s.createElement)(s.Fragment,null,"external"==S&&"video"==_?(0,s.createElement)(s.Fragment,null,(0,s.createElement)(d.TextControl,{label:"Embed URL",type:"url",value:x,onChange:e=>G({videoUrl:e}),help:"Paste the URL from one of the provided oEmbed providers"}),U&&(0,s.createElement)(g,null,(0,s.createElement)("label",null,(0,u.__)("Embed Preview")),(0,s.createElement)("div",{className:"preview-wrap",dangerouslySetInnerHTML:{__html:U.html}}))):(0,s.createElement)(o.MediaUploadCheck,null,(0,s.createElement)(o.MediaPlaceholder,{labels:{title:`Upload ${_}`,instructions:""},onSelect:e=>G({id:e?.id?e.id:0}),accept:`${_}/*`,multiple:f,allowedTypes:[_]})))),v&&"external"!==S&&(0,s.createElement)(o.BlockControls,{group:"block"},(0,s.createElement)(m,{id:b,onSelect:e=>G({id:e?.id?e.id:0}),onRemove:q,mediaType:_,multiple:f})))},y=e=>{const{isControl:t}=e;return(0,s.createElement)(s.Fragment,null,t?(0,s.createElement)(v,e):(0,s.createElement)(o.InspectorControls,null,(0,s.createElement)(v,e)))};function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b.apply(this,arguments)}y.defaultProps={media:{id:0,mediaType:"image",lazyLoad:!0,imageSize:"full",videoSource:"internal",videoUrl:"",focalPoint:{x:.5,y:.5},videoControls:{autoplay:!1,isMuted:!0,showControls:!0,posterId:0,posterSize:"full"}},displayFocalPicker:!0,allowMediaTypeSwitch:!1,controlPanelLabel:(0,u.__)("Media Settings"),multiple:!1,isControl:!0,showBlockControls:!0,isBackground:!1};const _=e=>{const{id:t,imageSize:n,focalPoint:r,isBackground:o,...l}=e,i=!!t,{mediaDetails:c,isResolvingMedia:u}=a(t),m=c?.media_details?.sizes?.[n]?.source_url??c?.source_url,p=c?.alt_text;if(o&&r&&(.5!==r.x||.5!==r.y)){const e={objectFit:"cover",objectPosition:`${100*r.x}% ${100*r.y}%`};l.style={...l.style,...e}}return(0,s.createElement)(s.Fragment,null,o?(0,s.createElement)("div",{className:"ds-media is-background"},i?(0,s.createElement)("img",b({src:m,className:"ds-media__image",alt:p},l)):(0,s.createElement)(d.Placeholder,{className:"ds-media__image ds-media-placeholder",withIllustration:!0})):(0,s.createElement)(s.Fragment,null,i?u?(0,s.createElement)(d.Spinner,null):(0,s.createElement)("img",{src:m,className:"ds-media__image",alt:p}):(0,s.createElement)(d.Placeholder,{className:"ds-media__image ds-media-placeholder",withIllustration:!0})))};function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},E.apply(this,arguments)}_.defaultProps={imageSize:"full",focalPoint:{x:.5,y:.5},isBackground:!1};const w=t=>{const{id:n,videoSource:r,videoUrl:o,videoControls:l,isBackground:c,isPreview:u}=t,{autoplay:m,isMuted:p,showControls:f,posterId:g,posterSize:h}=l;let v=!!n;const{mediaDetails:y,isResolvingMedia:b}=a(n),{posterUrl:_}=i(g,h),{embedPreview:w}=(0,e.useSelect)((e=>{const{getEmbedPreview:t}=e("core");return{embedPreview:!!o.length&&t(o)}}),[o]);let k=o,C=b,S="";"internal"==r&&y&&(k=y?.source_url?y.source_url:"",S=y?.mime_type?y.mime_type:"",C=b),"external"==r&&o&&(v=!0,C=!1);const x={poster:_};return(0,s.createElement)(s.Fragment,null,c?(0,s.createElement)("div",{className:"ds-media is-background"},v?C?(0,s.createElement)(d.Spinner,null):(0,s.createElement)(s.Fragment,null,"internal"==r&&(0,s.createElement)("div",{className:"ds-media__video"},(0,s.createElement)("video",E({muted:p,controls:!!u||f,disablePictureInPicture:!0,className:"ds-media__video-element"},x),(0,s.createElement)("source",{src:k,type:S}))),"external"==r&&(0,s.createElement)(s.Fragment,null,w&&(0,s.createElement)("div",{className:"ds-media__video",dangerouslySetInnerHTML:{__html:w.html}}))):(0,s.createElement)(d.Placeholder,{className:"ds-media__image ds-media-placeholder",withIllustration:!0})):(0,s.createElement)(s.Fragment,null,v?C?(0,s.createElement)(d.Spinner,null):(0,s.createElement)(s.Fragment,null,"internal"==r&&(0,s.createElement)("video",E({muted:p,controls:!!u||f,disablePictureInPicture:!0,className:"ds-media__video-element"},x),(0,s.createElement)("source",{src:k,type:S})),"external"==r&&(0,s.createElement)(s.Fragment,null,w&&(0,s.createElement)("div",{className:"ds-media__video",dangerouslySetInnerHTML:{__html:w.html}}))):(0,s.createElement)(d.Placeholder,{className:"ds-media__image ds-media-placeholder",withIllustration:!0})))};function k(){return k=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},k.apply(this,arguments)}w.defaultProps={id:0,isBackground:!1,videoSource:"internal",videoUrl:"",videoControls:{autoplay:!1,isMuted:!0,showControls:!0,posterId:0,posterSize:"full"},isPreview:!1};const C=e=>{const{media:t,isBackground:n,...r}=e,{id:a,mediaType:o,imageSize:l,videoSource:i,videoUrl:c,focalPoint:u,videoControls:d}=t;return(0,s.createElement)(s.Fragment,null,"image"===o&&(0,s.createElement)(_,k({id:a,imageSize:l,focalPoint:u,isBackground:n},r)),"video"===o&&(0,s.createElement)(w,k({id:a,videoSource:i,videoUrl:c,videoControls:d,isBackground:n},r)))};C.defaultProps={media:{id:0,mediaType:"image",lazyLoad:!0,srcset:!0,imageSize:"full",videoSource:"internal",videoUrl:"",focalPoint:{x:.5,y:.5},videoControls:{autoplay:!1,isMuted:!0,showControls:!0,posterId:0,posterSize:"full"}},isBackground:!1};var S=require("@wordpress/api-fetch"),x=n.n(S);const P=e=>{const{icon:t,width:n,height:r}=e;return(0,s.createElement)(s.Fragment,null,t&&(0,s.createElement)("svg",{className:`icon icon-${t}`,"aria-hidden":"true",width:n,height:r,role:"img"},(0,s.createElement)("use",{href:`#sprite-${t}`})))};P.defaultProps={width:40,height:40};const T=f().ul`
	list-style: none;
	margin: 0;
	padding: 0;
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-gap: 12px;
	li {
		display: flex;
		align-items: center;
		color: #000;
		justify-content: center;
		margin: 0;
		padding: 3px;
		border: 2px solid transparent;
	}

	li.selected {
		border-color: #000;
	}
`,O=e=>{const{onSelect:t,icon:n,width:r,height:a,panelTitle:o,isExpanded:l}=e,[i,c]=(0,s.useState)([]),[u,m]=(0,s.useState)(n);(0,s.useEffect)((()=>{(async()=>{try{const e=await x()({path:"/ds/v1/icons/"});c(e?.icons||[])}catch(e){console.log("Error fetching icons"),console.warn(e)}})()}),[]);return(0,s.createElement)(s.Fragment,null,(0,s.createElement)(d.PanelBody,{title:o,initialOpen:l},(0,s.createElement)(T,null,i.map((e=>(0,s.createElement)("li",{key:e,onClick:()=>(e=>{m(e),t(e)})(e),className:u===e?"selected":""},(0,s.createElement)(P,{icon:e,width:r,height:a})))))))},$=e=>{const{isControl:t}=e;return(0,s.createElement)(s.Fragment,null,t?(0,s.createElement)(O,e):(0,s.createElement)(o.InspectorControls,null,(0,s.createElement)(O,e)))};function M(){return M=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},M.apply(this,arguments)}$.defaultProps={icon:{},width:40,height:40,isControl:!0,panelTitle:(0,u.__)("Icon Picker"),isExpanded:!0};const R=e=>{const{overlay:t}=e,{hasOverlay:n,overlayType:r,overlayColor:a,overlayGradient:o,overlayOpacity:l}=t,i={style:{...{opacity:l/100}}};let c="";if("color"===r&&a){const e=a?.slug?a.slug:"";e&&(c=`has-${e}-background-color`)}if("gradient"===r&&o){const e=o?.slug?o.slug:"";e&&(c=`has-${e}-gradient-background`)}return(0,s.createElement)(s.Fragment,null," ",n&&(0,s.createElement)("div",M({className:`background-overlay ${c}`},i)))};R.defaultProps={overlay:{hasOverlay:!1,overlayColor:{},overlayGradient:{},overlayOpacity:25,overlayType:"color"}};const N=e=>{const{overlay:t,onSelect:n}=e,{hasOverlay:r,overlayType:a,overlayColor:o,overlayGradient:i,overlayOpacity:c}=t,{colors:m,gradients:p}=l(),f=e=>{const r={...t,...e};n(r)};return(0,s.createElement)(s.Fragment,null,(0,s.createElement)(d.PanelBody,{title:(0,u.__)("Background Overlay")},(0,s.createElement)(d.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,u.__)("Has Overlay"),onChange:()=>f({hasOverlay:!r}),checked:r})),r&&(0,s.createElement)(d.PanelBody,{title:(0,u.__)("Overlay Settings")},(0,s.createElement)(d.RangeControl,{__nextHasNoMargin:!0,label:(0,u.__)("Overlay Opacity"),value:c,onChange:e=>f({overlayOpacity:e}),min:0,max:100}),(0,s.createElement)(d.__experimentalToggleGroupControl,{label:(0,u.__)("Overlay Type"),value:a,isBlock:!0,onChange:e=>f({overlayType:e})},(0,s.createElement)(d.__experimentalToggleGroupControlOption,{value:"color",label:(0,u.__)("Color")}),(0,s.createElement)(d.__experimentalToggleGroupControlOption,{value:"gradient",label:(0,u.__)("Gradient")})),"color"===a&&(0,s.createElement)(d.ColorPalette,{colors:m,value:o?.color,onChange:e=>(e=>{const t=m.find((t=>t.color===e));f(t?{overlayColor:t}:{overlayColor:{}})})(e),disableCustomColors:!0}),"gradient"===a&&(0,s.createElement)(d.GradientPicker,{__nextHasNoMargin:!0,value:i?.gradient?i.gradient:"",gradients:p,onChange:e=>(e=>{const t=p.find((t=>t.gradient===e));f(t?{overlayGradient:t}:{overlayGradient:{}})})(e),disableCustomGradients:!0,asButtons:!0})))},I=e=>{const{isControl:t}=e;return(0,s.createElement)(s.Fragment,null,t?(0,s.createElement)(N,e):(0,s.createElement)(o.InspectorControls,null,(0,s.createElement)(N,e)))};I.defaultProps={overlay:{hasOverlay:!1,overlayColor:{},overlayGradient:{},overlayOpacity:25,overlayType:"color"},isControl:!0};var j=n(540),B=require("@wordpress/icons"),L=require("uuid");const F=({children:e,onChange:t,value:n,defaultValue:r=[],addButtonLabel:a,removeButtonLabel:l,minItems:i,maxItems:c,initialItems:u,removeLayout:m,showBlockControls:p})=>{function f(){if(c&&n.length>=c)return;const e=Array.isArray(r)&&r.length>0?[r[0]]:[];r.length||e.push([]),e[0].id=(0,L.v4)(),t([...n,...e])}function g(e){const r=JSON.parse(JSON.stringify(n)).filter(((t,n)=>e!==n));t(r)}return(0,s.useEffect)((()=>{if(u&&u>0&&0===n.length){let e=u;c&&u>c&&(e=c),0!==i&&function(e){const n=Array.isArray(r)?[...r]:[];for(let t=1;t<e;t++){const e={...n[0],id:(0,L.v4)()};n.push(e)}t(n)}(e)}}),[u]),(0,s.createElement)(s.Fragment,null,p&&(0,s.createElement)(o.BlockControls,{group:"block"},(0,s.createElement)(d.ToolbarButton,{label:a,icon:B.plusCircle,onClick:()=>f()})),n&&n.length?n.map(((r,a)=>{const o=i!==n.length?(0,s.createElement)("div",{className:`ds-repeater-remove-item ${m}`},(0,s.createElement)(d.Button,{icon:B.close,label:l,onClick:()=>g(a)})):null;return(0,s.createElement)(j.Fragment,{key:a},e(r,o,(e=>function(e,r){const a=JSON.parse(JSON.stringify(n));a[r]="object"===typeof e&&null!==e?{...a[r],...e}:e,t(a)}(e,a)),(()=>g(a)),r.id,a))})):null,(!c||n.length<c)&&(0,s.createElement)("div",{className:"ds-repeater-add-item"},(0,s.createElement)(d.Button,{variant:"link",onClick:()=>f(),icon:B.plusCircle,iconPosition:"right"},a)))};F.defaultProps={defaultValue:[],addButtonLabel:(0,u.__)("Add Item"),removeButtonLabel:(0,u.__)("Remove Item"),minItems:1,initialItems:1,removeLayout:"vertical",showBlockControls:!0};var z=require("@emotion/react");var U=function(){function e(e){var t=this;this._insertTag=function(e){var n;n=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{n.insertRule(e,n.cssRules.length)}catch(e){0}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),A=Math.abs,G=String.fromCharCode,q=Object.assign;function H(e){return e.trim()}function D(e,t,n){return e.replace(t,n)}function V(e,t){return e.indexOf(t)}function J(e,t){return 0|e.charCodeAt(t)}function K(e,t,n){return e.slice(t,n)}function Q(e){return e.length}function W(e){return e.length}function X(e,t){return t.push(e),e}var Y=1,Z=1,ee=0,te=0,ne=0,re="";function ae(e,t,n,r,a,o,l){return{value:e,root:t,parent:n,type:r,props:a,children:o,line:Y,column:Z,length:l,return:""}}function oe(e,t){return q(ae("",null,null,"",null,null,0),e,{length:-e.length},t)}function le(){return ne=te>0?J(re,--te):0,Z--,10===ne&&(Z=1,Y--),ne}function ie(){return ne=te<ee?J(re,te++):0,Z++,10===ne&&(Z=1,Y++),ne}function se(){return J(re,te)}function ce(){return te}function ue(e,t){return K(re,e,t)}function de(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function me(e){return Y=Z=1,ee=Q(re=e),te=0,[]}function pe(e){return re="",e}function fe(e){return H(ue(te-1,ve(91===e?e+2:40===e?e+1:e)))}function ge(e){for(;(ne=se())&&ne<33;)ie();return de(e)>2||de(ne)>3?"":" "}function he(e,t){for(;--t&&ie()&&!(ne<48||ne>102||ne>57&&ne<65||ne>70&&ne<97););return ue(e,ce()+(t<6&&32==se()&&32==ie()))}function ve(e){for(;ie();)switch(ne){case e:return te;case 34:case 39:34!==e&&39!==e&&ve(ne);break;case 40:41===e&&ve(e);break;case 92:ie()}return te}function ye(e,t){for(;ie()&&e+ne!==57&&(e+ne!==84||47!==se()););return"/*"+ue(t,te-1)+"*"+G(47===e?e:ie())}function be(e){for(;!de(se());)ie();return ue(e,te)}var _e="-ms-",Ee="-moz-",we="-webkit-",ke="comm",Ce="rule",Se="decl",xe="@keyframes";function Pe(e,t){for(var n="",r=W(e),a=0;a<r;a++)n+=t(e[a],a,e,t)||"";return n}function Te(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case Se:return e.return=e.return||e.value;case ke:return"";case xe:return e.return=e.value+"{"+Pe(e.children,r)+"}";case Ce:e.value=e.props.join(",")}return Q(n=Pe(e.children,r))?e.return=e.value+"{"+n+"}":""}function Oe(e){return pe($e("",null,null,null,[""],e=me(e),0,[0],e))}function $e(e,t,n,r,a,o,l,i,s){for(var c=0,u=0,d=l,m=0,p=0,f=0,g=1,h=1,v=1,y=0,b="",_=a,E=o,w=r,k=b;h;)switch(f=y,y=ie()){case 40:if(108!=f&&58==J(k,d-1)){-1!=V(k+=D(fe(y),"&","&\f"),"&\f")&&(v=-1);break}case 34:case 39:case 91:k+=fe(y);break;case 9:case 10:case 13:case 32:k+=ge(f);break;case 92:k+=he(ce()-1,7);continue;case 47:switch(se()){case 42:case 47:X(Re(ye(ie(),ce()),t,n),s);break;default:k+="/"}break;case 123*g:i[c++]=Q(k)*v;case 125*g:case 59:case 0:switch(y){case 0:case 125:h=0;case 59+u:-1==v&&(k=D(k,/\f/g,"")),p>0&&Q(k)-d&&X(p>32?Ne(k+";",r,n,d-1):Ne(D(k," ","")+";",r,n,d-2),s);break;case 59:k+=";";default:if(X(w=Me(k,t,n,c,u,a,i,b,_=[],E=[],d),o),123===y)if(0===u)$e(k,t,w,w,_,o,d,i,E);else switch(99===m&&110===J(k,3)?100:m){case 100:case 108:case 109:case 115:$e(e,w,w,r&&X(Me(e,w,w,0,0,a,i,b,a,_=[],d),E),a,E,d,i,r?_:E);break;default:$e(k,w,w,w,[""],E,0,i,E)}}c=u=p=0,g=v=1,b=k="",d=l;break;case 58:d=1+Q(k),p=f;default:if(g<1)if(123==y)--g;else if(125==y&&0==g++&&125==le())continue;switch(k+=G(y),y*g){case 38:v=u>0?1:(k+="\f",-1);break;case 44:i[c++]=(Q(k)-1)*v,v=1;break;case 64:45===se()&&(k+=fe(ie())),m=se(),u=d=Q(b=k+=be(ce())),y++;break;case 45:45===f&&2==Q(k)&&(g=0)}}return o}function Me(e,t,n,r,a,o,l,i,s,c,u){for(var d=a-1,m=0===a?o:[""],p=W(m),f=0,g=0,h=0;f<r;++f)for(var v=0,y=K(e,d+1,d=A(g=l[f])),b=e;v<p;++v)(b=H(g>0?m[v]+" "+y:D(y,/&\f/g,m[v])))&&(s[h++]=b);return ae(e,t,n,0===a?Ce:i,s,c,u)}function Re(e,t,n){return ae(e,t,n,ke,G(ne),K(e,2,-2),0)}function Ne(e,t,n,r){return ae(e,t,n,Se,K(e,0,r),K(e,r+1,-1),r)}var Ie=function(e,t,n){for(var r=0,a=0;r=a,a=se(),38===r&&12===a&&(t[n]=1),!de(a);)ie();return ue(e,te)},je=function(e,t){return pe(function(e,t){var n=-1,r=44;do{switch(de(r)){case 0:38===r&&12===se()&&(t[n]=1),e[n]+=Ie(te-1,t,n);break;case 2:e[n]+=fe(r);break;case 4:if(44===r){e[++n]=58===se()?"&\f":"",t[n]=e[n].length;break}default:e[n]+=G(r)}}while(r=ie());return e}(me(e),t))},Be=new WeakMap,Le=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;"rule"!==n.type;)if(!(n=n.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||Be.get(n))&&!r){Be.set(e,!0);for(var a=[],o=je(t,a),l=n.props,i=0,s=0;i<o.length;i++)for(var c=0;c<l.length;c++,s++)e.props[s]=a[i]?o[i].replace(/&\f/g,l[c]):l[c]+" "+o[i]}}},Fe=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function ze(e,t){switch(function(e,t){return 45^J(e,0)?(((t<<2^J(e,0))<<2^J(e,1))<<2^J(e,2))<<2^J(e,3):0}(e,t)){case 5103:return we+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return we+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return we+e+Ee+e+_e+e+e;case 6828:case 4268:return we+e+_e+e+e;case 6165:return we+e+_e+"flex-"+e+e;case 5187:return we+e+D(e,/(\w+).+(:[^]+)/,we+"box-$1$2"+_e+"flex-$1$2")+e;case 5443:return we+e+_e+"flex-item-"+D(e,/flex-|-self/,"")+e;case 4675:return we+e+_e+"flex-line-pack"+D(e,/align-content|flex-|-self/,"")+e;case 5548:return we+e+_e+D(e,"shrink","negative")+e;case 5292:return we+e+_e+D(e,"basis","preferred-size")+e;case 6060:return we+"box-"+D(e,"-grow","")+we+e+_e+D(e,"grow","positive")+e;case 4554:return we+D(e,/([^-])(transform)/g,"$1"+we+"$2")+e;case 6187:return D(D(D(e,/(zoom-|grab)/,we+"$1"),/(image-set)/,we+"$1"),e,"")+e;case 5495:case 3959:return D(e,/(image-set\([^]*)/,we+"$1$`$1");case 4968:return D(D(e,/(.+:)(flex-)?(.*)/,we+"box-pack:$3"+_e+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+we+e+e;case 4095:case 3583:case 4068:case 2532:return D(e,/(.+)-inline(.+)/,we+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Q(e)-1-t>6)switch(J(e,t+1)){case 109:if(45!==J(e,t+4))break;case 102:return D(e,/(.+:)(.+)-([^]+)/,"$1"+we+"$2-$3$1"+Ee+(108==J(e,t+3)?"$3":"$2-$3"))+e;case 115:return~V(e,"stretch")?ze(D(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==J(e,t+1))break;case 6444:switch(J(e,Q(e)-3-(~V(e,"!important")&&10))){case 107:return D(e,":",":"+we)+e;case 101:return D(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+we+(45===J(e,14)?"inline-":"")+"box$3$1"+we+"$2$3$1"+_e+"$2box$3")+e}break;case 5936:switch(J(e,t+11)){case 114:return we+e+_e+D(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return we+e+_e+D(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return we+e+_e+D(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return we+e+_e+e+e}return e}var Ue=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Se:e.return=ze(e.value,e.length);break;case xe:return Pe([oe(e,{value:D(e.value,"@","@"+we)})],r);case Ce:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Pe([oe(e,{props:[D(t,/:(read-\w+)/,":-moz-$1")]})],r);case"::placeholder":return Pe([oe(e,{props:[D(t,/:(plac\w+)/,":"+we+"input-$1")]}),oe(e,{props:[D(t,/:(plac\w+)/,":-moz-$1")]}),oe(e,{props:[D(t,/:(plac\w+)/,_e+"input-$1")]})],r)}return""}))}}],Ae=function(e){var t=e.key;if("css"===t){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var r=e.stylisPlugins||Ue;var a,o,l={},i=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),n=1;n<t.length;n++)l[t[n]]=!0;i.push(e)}));var s,c,u=[Te,(c=function(e){s.insert(e)},function(e){e.root||(e=e.return)&&c(e)})],d=function(e){var t=W(e);return function(n,r,a,o){for(var l="",i=0;i<t;i++)l+=e[i](n,r,a,o)||"";return l}}([Le,Fe].concat(r,u));o=function(e,t,n,r){s=n,Pe(Oe(e?e+"{"+t.styles+"}":t.styles),d),r&&(m.inserted[t.name]=!0)};var m={key:t,sheet:new U({key:t,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:l,registered:{},insert:o};return m.sheet.hydrate(i),m},Ge=require("@wordpress/compose");const qe=e=>{const{children:t,cacheKey:n}=e,r=(0,Ge.useInstanceId)(qe),a=Ae({key:n||r}),[o,l]=(0,s.useState)(a),i=(0,Ge.useRefEffect)((e=>(e&&l(Ae({key:n||r,container:e})),()=>{l(a)})),[n,r]);return(0,s.createElement)(s.Fragment,null,(0,s.createElement)("span",{ref:i,style:{display:"none"}}),(0,s.createElement)(z.CacheProvider,{value:o},t))};function He(){return He=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},He.apply(this,arguments)}function De(e,t){switch(e){case"post":case"page":return{type:"post",subtype:e};case"category":return{type:"term",subtype:"category"};case"tag":return{type:"term",subtype:"post_tag"};case"post_format":return{type:"post-format"}}switch(t){case"taxonomy":return{type:"term",subtype:e};case"post-type":return{type:"post",subtype:e};default:return{}}}const Ve=f()(o.RichText)`
	--color--warning: #f00;

	/* Reset margins for this block alone. */
	--global--spacing-vertical: 0;
	--global--spacing-vertical: 0;

	color: var(--wp--style--color--link);
	position: relative;
	display: block;
	align-items: center;
	gap: 0.5em;
	text-decoration: underline;

	/* This holds the text URL input */
	& > div {
		text-decoration: underline;
	}

	.dashicon {
		text-decoration: none;
		font-size: 1em;
		width: 1.5em;
		height: 1.5em;
		border-radius: 50%;
		background: transparent;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--color--warning);
	}
`,Je=({value:e,type:t,opensInNewTab:n,url:r,onLinkChange:a,onTextChange:l,onLinkRemove:i,kind:m,placeholder:p,className:f,isControl:g,controlLabel:h,...v})=>{const[y,b]=(0,s.useState)(!1),[_,E]=(0,s.useState)(!1),w=(0,s.useRef)(),k=c((()=>b(!1))),C={url:r,opensInNewTab:n,title:e};return(0,s.useEffect)((()=>{E(!!r&&!!e)}),[r,e]),(0,s.createElement)(qe,{cacheKey:"ds-link-component"},g&&(0,s.createElement)("p",{className:"ds-link__label-desc"},h),(0,s.createElement)(Ve,He({tagName:"a",className:`ds-link__label ${f} ${g?"contol-label":""}`,value:e,onChange:l,placeholder:p,__unstablePastePlainText:!0,allowedFormats:[],onClick:()=>b(!0),ref:w},v)),!_&&(0,s.createElement)(d.Tooltip,{text:(0,u.__)("URL or Text has not been set")},(0,s.createElement)("span",null,(0,s.createElement)(d.Icon,{icon:"warning"}))),y&&(0,s.createElement)(d.Popover,{anchor:w.current,ref:k,focusOnMount:!1},(0,s.createElement)(o.__experimentalLinkControl,{hasTextControl:!0,value:C,showInitialSuggestions:!0,noDirectEntry:!!t,noURLSuggestion:!!t,suggestionsQuery:De(t,m),onChange:a,onRemove:i,settings:[{id:"opensInNewTab",title:(0,u.__)("Open in new tab")}]})))};function Ke(){return Ke=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ke.apply(this,arguments)}function Qe(e,t){switch(e){case"post":case"page":return{type:"post",subtype:e};case"category":return{type:"term",subtype:"category"};case"tag":return{type:"term",subtype:"post_tag"};case"post_format":return{type:"post-format"}}switch(t){case"taxonomy":return{type:"term",subtype:e};case"post-type":return{type:"post",subtype:e};default:return{}}}Je.defaultProps={value:"",url:"",className:"",onLinkRemove:void 0,type:"",kind:"",placeholder:(0,u.__)("Link text..."),isControl:!1,controlLabel:(0,u.__)("Link Text")};const We=({type:e,linkText:t,url:n,opensInNewTab:r,tagName:a,onLinkChange:l,onLinkRemove:i,kind:m,children:p,...f})=>{const[g,h]=(0,s.useState)(!1),[v,y]=(0,s.useState)(!1),b=(0,s.useRef)(),_=c((()=>h(!1))),E={url:n,opensInNewTab:r,title:t},w=`${a}`;return(0,s.useEffect)((()=>{y(!!n)}),[n]),(0,s.createElement)(s.Fragment,null,(0,s.createElement)(w,Ke({onClick:()=>h(!0),ref:b},f),p,!v&&(0,s.createElement)(d.Tooltip,{text:(0,u.__)("URL has not been set")},(0,s.createElement)("span",{className:"invalid-link"},(0,s.createElement)(d.Icon,{icon:"warning"})))),g&&(0,s.createElement)(d.Popover,{anchor:b.current,ref:_,focusOnMount:!1},(0,s.createElement)(o.__experimentalLinkControl,{hasTextControl:!0,value:E,showInitialSuggestions:!0,noDirectEntry:!!e,noURLSuggestion:!!e,suggestionsQuery:Qe(e,m),onChange:l,onRemove:i,settings:[{id:"opensInNewTab",title:(0,u.__)("Open in new tab")}]})))};We.defaultProps={linkText:"",url:"",onLinkRemove:void 0,type:"",kind:"",tagName:"a"}}(),module.exports=r}();
//# sourceMappingURL=index.js.map