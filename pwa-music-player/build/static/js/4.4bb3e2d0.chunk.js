(this["webpackJsonppwa-playlist"]=this["webpackJsonppwa-playlist"]||[]).push([[4],{27:function(s,t,r){"use strict";var i=r(0),e=(r(28),r(1));class a extends i.Component{shouldComponentUpdate(s){return s.percent!==this.props.percent}render(){return Object(e.jsxs)("div",{className:"progress-bar",children:[Object(e.jsx)("div",{className:"progress-bar__mask",style:{transform:"scale(".concat(this.props.percent,", 1)")},children:Object(e.jsx)("div",{className:"progress-bar__progress"})}),Object(e.jsx)("div",{className:"progress-bar__bg"})]})}}t.a=a},28:function(s,t,r){},29:function(s,t,r){},30:function(s,t,r){},37:function(s,t,r){"use strict";r.r(t);var i=r(0),e=r(27),a=(r(29),r(1));class c extends i.Component{shouldComponentUpdate(s){return s.selectedTrack.id===this.props.track.id?s.selectedTrack.percentage!==this.props.selectedTrack.percentage:s.active!==this.props.active||s.selectedTrack.title!==this.props.selectedTrack.title}render(){const s=this.props.selectedTrack,t=s.id,r=s.percentage,i=s.playing;return Object(a.jsx)("li",{className:"row",children:Object(a.jsxs)("button",{className:"".concat(t===this.props.track.id&&i?"btn playing":"btn"),tabIndex:this.props.active?"0":"-1",onClick:this.props.onClick,"data-id":this.props.track.id,children:[Object(a.jsx)("div",{className:"album",children:Object(a.jsx)("img",{className:"album__cover",width:"50",height:"50",src:this.props.track.artwork_url||"data:image/png;base64,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",alt:"Album artwork from track ".concat(this.props.track.title,".")})}),Object(a.jsxs)("div",{className:"info",children:[Object(a.jsx)("h2",{className:"info__track",children:this.props.track.title}),Object(a.jsx)("span",{className:"info__artist",children:this.props.track.artist}),Object(a.jsx)("div",{className:"controls",children:Object(a.jsx)(e.a,{percent:t===this.props.track.id?r:0})})]})]})})}}var A=c;r(30);class n extends i.PureComponent{constructor(s){super(s),this.onClick=this.onClick.bind(this)}onClick(s){const t=Number(s.currentTarget.attributes["data-id"].value);this.props.onClick(t)}render(){return Object(a.jsx)(i.Fragment,{children:Object(a.jsx)("ul",{className:"track-list",children:this.props.tracks.map((s=>Object(a.jsx)(A,{active:this.props.active,selectedTrack:this.props.track,onClick:this.onClick,track:s},s.id)))})})}}t.default=n}}]);
//# sourceMappingURL=4.4bb3e2d0.chunk.js.map