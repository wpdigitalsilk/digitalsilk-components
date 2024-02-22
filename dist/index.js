!function(){"use strict";var e={n:function(t){var l=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(l,{a:l}),l},d:function(t,l){for(var o in l)e.o(l,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:l[o]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r:function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{IconPicker:function(){return x},Image:function(){return E},MediaDisplay:function(){return C},MediaPicker:function(){return y},MediaToolbar:function(){return m},OverlayDisplay:function(){return T},OverlayPicker:function(){return O},Video:function(){return f},getEditorSettings:function(){return n},getMedia:function(){return r},getPoster:function(){return i}});var l=require("@wordpress/data"),o=require("@wordpress/core-data");function r(e){return(0,l.useSelect)((t=>{const{getMedia:l,isResolving:r,hasFinishedResolution:a}=t(o.store),n=[e,{context:"view"}];return{mediaDetails:l(...n),isResolvingMedia:r("getMedia",n),hasResolvedMedia:a("getMedia",n)}}),[e])}var a=require("@wordpress/block-editor");function n(){return(0,l.useSelect)((e=>{const{getSettings:t}=e(a.store);return t()}),[])}function i(e,t){return(0,l.useSelect)((l=>{const{getMedia:r,isResolving:a,hasFinishedResolution:n}=l(o.store),i=[e,{context:"view"}],s=r(...i);return{posterUrl:s?.media?.sizes?.[t]?.source_url||s?.source_url||"",isResolvingPoster:a("getMedia",i),hasResolvedPoster:n("getMedia",i)}}),[e,t])}var s=require("@wordpress/element"),c=require("@wordpress/i18n"),d=require("@wordpress/components");const m=e=>{const{onSelect:t,onRemove:l,id:o,mediaType:n,multiple:i}=e,m=!!o,{mediaDetails:u}=r(o);return(0,s.createElement)(d.ToolbarGroup,{label:(0,c.__)("Media")},m?(0,s.createElement)(s.Fragment,null,(0,s.createElement)(a.MediaReplaceFlow,{mediaUrl:u?.source_url?u.source_url:"",onSelect:t,name:`Replace ${n}`}),(0,s.createElement)(d.ToolbarButton,{onClick:l},`Remove ${n}`)):(0,s.createElement)(a.MediaUploadCheck,null,(0,s.createElement)(a.MediaUpload,{onSelect:t,allowedTypes:[n],render:({open:e})=>(0,s.createElement)(d.ToolbarButton,{onClick:e},`Add ${n}`),multiple:i})))};m.defaultProps={mediaType:"image",multiple:!1};var u=require("@emotion/styled"),g=e.n(u);const p=g().div`
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
`,v=g().div`
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
`,_=e=>{const{media:t,onSelect:o,displayFocalPicker:i,allowMediaTypeSwitch:u,controlPanelLabel:g,multiple:_,showBlockControls:y,isBackground:h}=e,{id:E,mediaType:b,imageSize:C,lazyLoad:P,srcset:S,videoSource:w,videoUrl:x,focalPoint:M,videoControls:T}=t,{autoplay:k,isMuted:O,showControls:B,posterId:z,posterSize:F}=T,{imageSizes:I}=n(),{mediaDetails:N,isResolvingMedia:R}=r(E),[U,G]=(0,s.useState)([]),H=!!E;(0,s.useEffect)((()=>{if(I){const e=I.map((({slug:e,name:t})=>({value:e,label:t})));G(e)}}),[I]);const{embedPreview:L}=(0,l.useSelect)((e=>{const{getEmbedPreview:t}=e("core");return{embedPreview:!!x.length&&t(x)}}),[x]);if(R)return(0,s.createElement)(d.Spinner,null);const j=N?.media_details?.sizes?.[C]?.source_url??N?.source_url,$=e=>{const l={...t,...e};o(l)},V=()=>{const e={...t,id:0};o(e)},q=e=>{const l={...t.videoControls,...e};$({videoControls:l})};return(0,s.createElement)(s.Fragment,null,(0,s.createElement)(d.PanelBody,{title:g},u&&(0,s.createElement)(s.Fragment,null,(0,s.createElement)(d.__experimentalToggleGroupControl,{label:(0,c.__)("Media Type"),value:b,isBlock:!0,onChange:e=>(e=>{const l={...t,id:0,videoUrl:"",...e};o(l)})({mediaType:e})},(0,s.createElement)(d.__experimentalToggleGroupControlOption,{value:"image",label:(0,c.__)("Image")}),(0,s.createElement)(d.__experimentalToggleGroupControlOption,{value:"video",label:(0,c.__)("Video")})),"video"==b&&(0,s.createElement)(d.__experimentalToggleGroupControl,{label:(0,c.__)("Video Source"),value:w,isBlock:!0,onChange:e=>$({videoSource:e})},(0,s.createElement)(d.__experimentalToggleGroupControlOption,{value:"internal",label:(0,c.__)("Internal")}),(0,s.createElement)(d.__experimentalToggleGroupControlOption,{value:"external",label:(0,c.__)("External")}))),H?(0,s.createElement)(s.Fragment,null,"image"==b&&(0,s.createElement)(s.Fragment,null,(0,s.createElement)(m,{id:E,onSelect:e=>$({id:e?.id?e.id:0}),onRemove:V,mediaType:b,multiple:_}),i&&(0,s.createElement)(d.FocalPointPicker,{label:(0,c.__)("Focal Point Picker"),url:j,value:M,onChange:e=>$({focalPoint:e})}),(0,s.createElement)(d.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,c.__)("Lazy Load"),onChange:()=>$({lazyLoad:!P}),checked:P,help:"Disable this option if your image is in the first fold."}),(0,s.createElement)(d.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,c.__)("Enable Responsive Images (srcset)"),onChange:()=>$({srcset:!S}),checked:S,help:"Srcset is an HTML image attribute that specifies the list of images to use in different browser situations."}),(0,s.createElement)(a.__experimentalImageSizeControl,{isResizable:!1,onChangeImage:e=>$({imageSize:e}),slug:C,imageSizeOptions:U})),"video"==b&&(0,s.createElement)(s.Fragment,null,"external"==w?(0,s.createElement)(s.Fragment,null,(0,s.createElement)(d.TextControl,{label:"Embed URL",type:"url",value:x,onChange:e=>$({videoUrl:e}),help:"Paste the URL from one of the provided oEmbed providers"}),(0,s.createElement)(d.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,c.__)("Autoplay Video"),onChange:()=>q({autoplay:!k}),checked:k}),(0,s.createElement)(d.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,c.__)("Mute Video"),onChange:()=>q({isMuted:!O}),checked:O}),(0,s.createElement)(d.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,c.__)("Show Controls"),onChange:()=>q({showControls:!B}),checked:B}),L&&(0,s.createElement)(p,null,(0,s.createElement)("label",null,(0,c.__)("Embed Preview")),(0,s.createElement)("div",{className:"preview-wrap",dangerouslySetInnerHTML:{__html:L.html}}))):(0,s.createElement)(s.Fragment,null,(0,s.createElement)(d.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,c.__)("Autoplay Video"),onChange:()=>q({autoplay:!k}),checked:k}),(0,s.createElement)(d.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,c.__)("Mute Video"),onChange:()=>q({isMuted:!O}),checked:O}),(0,s.createElement)(d.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,c.__)("Show Controls"),onChange:()=>q({showControls:!B}),checked:B}),z?(0,s.createElement)(v,null,(0,s.createElement)("label",null,(0,c.__)("Video Preview")),(0,s.createElement)(f,{id:E,videoSource:w,videoUrl:x,videoControls:T,isPreview:!0}),(0,s.createElement)(a.__experimentalImageSizeControl,{imageSizeHelp:"Please select the poster image size",isResizable:!1,onChangeImage:e=>q({posterSize:e}),slug:F,imageSizeOptions:U}),(0,s.createElement)(d.ToolbarGroup,{label:(0,c.__)("Poster")},(0,s.createElement)(d.ToolbarButton,{onClick:()=>q({posterId:0})},(0,c.__)("Remove Poster")))):(0,s.createElement)(a.MediaUploadCheck,null,(0,s.createElement)(a.MediaPlaceholder,{labels:{title:"Upload Video Poster",instructions:""},onSelect:e=>q({posterId:e?.id?e.id:0}),accept:"image",allowedTypes:["image"]}))))):(0,s.createElement)(s.Fragment,null,"external"==w&&"video"==b?(0,s.createElement)(s.Fragment,null,(0,s.createElement)(d.TextControl,{label:"Embed URL",type:"url",value:x,onChange:e=>$({videoUrl:e}),help:"Paste the URL from one of the provided oEmbed providers"}),L&&(0,s.createElement)(p,null,(0,s.createElement)("label",null,(0,c.__)("Embed Preview")),(0,s.createElement)("div",{className:"preview-wrap",dangerouslySetInnerHTML:{__html:L.html}}))):(0,s.createElement)(a.MediaUploadCheck,null,(0,s.createElement)(a.MediaPlaceholder,{labels:{title:`Upload ${b}`,instructions:""},onSelect:e=>$({id:e?.id?e.id:0}),accept:`${b}/*`,multiple:_,allowedTypes:[b]})))),y&&"external"!==w&&(0,s.createElement)(a.BlockControls,{group:"block"},(0,s.createElement)(m,{id:E,onSelect:e=>$({id:e?.id?e.id:0}),onRemove:V,mediaType:b,multiple:_})))},y=e=>{const{isControl:t}=e;return(0,s.createElement)(s.Fragment,null,t?(0,s.createElement)(_,e):(0,s.createElement)(a.InspectorControls,null,(0,s.createElement)(_,e)))};function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o])}return e},h.apply(this,arguments)}y.defaultProps={media:{id:0,mediaType:"image",lazyLoad:!0,imageSize:"full",videoSource:"internal",videoUrl:"",focalPoint:{x:.5,y:.5},videoControls:{autoplay:!1,isMuted:!0,showControls:!0,posterId:0,posterSize:"full"}},displayFocalPicker:!0,allowMediaTypeSwitch:!1,controlPanelLabel:(0,c.__)("Media Settings"),multiple:!1,isControl:!0,showBlockControls:!0,isBackground:!1};const E=e=>{const{id:t,imageSize:l,focalPoint:o,isBackground:a,...n}=e,i=!!t,{mediaDetails:c,isResolvingMedia:m}=r(t),u=c?.media_details?.sizes?.[l]?.source_url??c?.source_url,g=c?.alt_text;if(a&&o&&(.5!==o.x||.5!==o.y)){const e={objectFit:"cover",objectPosition:`${100*o.x}% ${100*o.y}%`};n.style={...n.style,...e}}return(0,s.createElement)(s.Fragment,null,a?(0,s.createElement)("div",{className:"ds-media is-background"},i?(0,s.createElement)("img",h({src:u,className:"ds-media__image",alt:g},n)):(0,s.createElement)(d.Placeholder,{className:"ds-media__image ds-media-placeholder",withIllustration:!0})):(0,s.createElement)(s.Fragment,null,i?m?(0,s.createElement)(d.Spinner,null):(0,s.createElement)("img",{src:u,className:"ds-media__image",alt:g}):(0,s.createElement)(d.Placeholder,{className:"ds-media__image ds-media-placeholder",withIllustration:!0})))};function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o])}return e},b.apply(this,arguments)}E.defaultProps={imageSize:"full",focalPoint:{x:.5,y:.5},isBackground:!1};const f=e=>{const{id:t,videoSource:o,videoUrl:a,videoControls:n,isBackground:c,isPreview:m}=e,{autoplay:u,isMuted:g,showControls:p,posterId:v,posterSize:_}=n;let y=!!t;const{mediaDetails:h,isResolvingMedia:E}=r(t),{posterUrl:f}=i(v,_),{embedPreview:C}=(0,l.useSelect)((e=>{const{getEmbedPreview:t}=e("core");return{embedPreview:!!a.length&&t(a)}}),[a]);let P=a,S=E,w="";"internal"==o&&h&&(P=h?.source_url?h.source_url:"",w=h?.mime_type?h.mime_type:"",S=E),"external"==o&&a&&(y=!0,S=!1);const x={poster:f};return(0,s.createElement)(s.Fragment,null,c?(0,s.createElement)("div",{className:"ds-media is-background"},y?S?(0,s.createElement)(d.Spinner,null):(0,s.createElement)(s.Fragment,null,"internal"==o&&(0,s.createElement)("div",{className:"ds-media__video"},(0,s.createElement)("video",b({muted:g,controls:!!m||p,disablePictureInPicture:!0,className:"ds-media__video-element"},x),(0,s.createElement)("source",{src:P,type:w}))),"external"==o&&(0,s.createElement)(s.Fragment,null,C&&(0,s.createElement)("div",{className:"ds-media__video",dangerouslySetInnerHTML:{__html:C.html}}))):(0,s.createElement)(d.Placeholder,{className:"ds-media__image ds-media-placeholder",withIllustration:!0})):(0,s.createElement)(s.Fragment,null,y?S?(0,s.createElement)(d.Spinner,null):(0,s.createElement)(s.Fragment,null,"internal"==o&&(0,s.createElement)("video",b({muted:g,controls:!!m||p,disablePictureInPicture:!0,className:"ds-media__video-element"},x),(0,s.createElement)("source",{src:P,type:w})),"external"==o&&(0,s.createElement)(s.Fragment,null,C&&(0,s.createElement)("div",{className:"ds-media__video",dangerouslySetInnerHTML:{__html:C.html}}))):(0,s.createElement)(d.Placeholder,{className:"ds-media__image ds-media-placeholder",withIllustration:!0})))};f.defaultProps={id:0,isBackground:!1,videoSource:"internal",videoUrl:"",videoControls:{autoplay:!1,isMuted:!0,showControls:!0,posterId:0,posterSize:"full"},isPreview:!1};const C=e=>{const{media:t,isBackground:l}=e,{id:o,mediaType:r,imageSize:a,videoSource:n,videoUrl:i,focalPoint:c,videoControls:d}=t;return(0,s.createElement)(s.Fragment,null,"image"===r&&(0,s.createElement)(E,{id:o,imageSize:a,focalPoint:c,isBackground:l}),"video"===r&&(0,s.createElement)(f,{id:o,videoSource:n,videoUrl:i,videoControls:d,isBackground:l}))};C.defaultProps={media:{id:0,mediaType:"image",lazyLoad:!0,srcset:!0,imageSize:"full",videoSource:"internal",videoUrl:"",focalPoint:{x:.5,y:.5},videoControls:{autoplay:!1,isMuted:!0,showControls:!0,posterId:0,posterSize:"full"}},isBackground:!1};var P=require("@wordpress/api-fetch"),S=e.n(P);const w=g().ul`
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
`,x=e=>{const{onSelectIcon:t,icon:l,width:o,height:r}=e,[n,i]=(0,s.useState)(""),[m,u]=(0,s.useState)([]),[g,p]=(0,s.useState)(l);(0,s.useEffect)((()=>{(async()=>{try{const e=await S()({path:"/ds/v1/icons/"});i(e?.sprite||""),u(e?.icons||[])}catch(e){console.log("Error fetching icons"),console.warn(e)}})()}),[]);return(0,s.createElement)(s.Fragment,null,(0,s.createElement)(a.InspectorControls,null,(0,s.createElement)(d.PanelBody,{title:(0,c.__)("Icon Picker")},(0,s.createElement)(w,null,m.map((e=>(0,s.createElement)("li",{key:e.name,onClick:()=>(e=>{p(e),t(e)})(e),className:g?.name===e.name?"selected":""},(0,s.createElement)("img",{src:e.url,alt:e.name}))))))),(0,s.createElement)("svg",{className:`icon icon-${l}`,"aria-hidden":"true",width:o,height:r,role:"img"},(0,s.createElement)("use",{href:`${n}#${l}`})))};function M(){return M=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o])}return e},M.apply(this,arguments)}x.defaultProps={width:44,height:44,icon:{}};const T=e=>{const{overlay:t}=e,{hasOverlay:l,overlayType:o,overlayColor:r,overlayGradient:a,overlayOpacity:n}=t,i={style:{...{opacity:n/100}}};let c="";if("color"===o&&r){const e=r?.slug?r.slug:"";e&&(c=`has-${e}-background-color`)}if("gradient"===o&&a){const e=a?.slug?a.slug:"";e&&(c=`has-${e}-gradient-background`)}return(0,s.createElement)(s.Fragment,null," ",l&&(0,s.createElement)("div",M({className:`background-overlay ${c}`},i)))};T.defaultProps={overlay:{hasOverlay:!1,overlayColor:{},overlayGradient:{},overlayOpacity:25,overlayType:"color"}};const k=e=>{const{overlay:t,onSelect:l}=e,{hasOverlay:o,overlayType:r,overlayColor:a,overlayGradient:i,overlayOpacity:m}=t,{colors:u,gradients:g}=n(),p=e=>{const o={...t,...e};l(o)};return(0,s.createElement)(s.Fragment,null,(0,s.createElement)(d.PanelBody,{title:(0,c.__)("Background Overlay")},(0,s.createElement)(d.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,c.__)("Has Overlay"),onChange:()=>p({hasOverlay:!o}),checked:o})),o&&(0,s.createElement)(d.PanelBody,{title:(0,c.__)("Overlay Settings")},(0,s.createElement)(d.RangeControl,{__nextHasNoMargin:!0,label:(0,c.__)("Overlay Opacity"),value:m,onChange:e=>p({overlayOpacity:e}),min:0,max:100}),(0,s.createElement)(d.__experimentalToggleGroupControl,{label:(0,c.__)("Overlay Type"),value:r,isBlock:!0,onChange:e=>p({overlayType:e})},(0,s.createElement)(d.__experimentalToggleGroupControlOption,{value:"color",label:(0,c.__)("Color")}),(0,s.createElement)(d.__experimentalToggleGroupControlOption,{value:"gradient",label:(0,c.__)("Gradient")})),"color"===r&&(0,s.createElement)(d.ColorPalette,{colors:u,value:a?.color,onChange:e=>(e=>{const t=u.find((t=>t.color===e));p(t?{overlayColor:t}:{overlayColor:{}})})(e),disableCustomColors:!0}),"gradient"===r&&(0,s.createElement)(d.GradientPicker,{__nextHasNoMargin:!0,value:i?.gradient?i.gradient:"",gradients:g,onChange:e=>(e=>{const t=g.find((t=>t.gradient===e));p(t?{overlayGradient:t}:{overlayGradient:{}})})(e),disableCustomGradients:!0,asButtons:!0})))},O=e=>{const{isControl:t}=e;return(0,s.createElement)(s.Fragment,null,t?(0,s.createElement)(k,e):(0,s.createElement)(a.InspectorControls,null,(0,s.createElement)(k,e)))};O.defaultProps={overlay:{hasOverlay:!1,overlayColor:{},overlayGradient:{},overlayOpacity:25,overlayType:"color"},isControl:!0},module.exports=t}();
//# sourceMappingURL=index.js.map