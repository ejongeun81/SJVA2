(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{427:function(e,t,a){"use strict";var n=a(1);n.oneOfType([n.shape({Features:n.object.isRequired,Hashes:n.array.isRequired,Name:n.string.isRequired,Precision:n.number.isRequired,String:n.string.isRequired}),n.object]),n.shape({remoteName:n.string.isRequired,remotePath:n.string.isRequired}),n.string,n.bool,n.bool,n.shape({Path:n.string.isRequired,Name:n.string.isRequired,Size:n.number,MimeType:n.string,ModTime:n.string.isRequired,IsDir:n.bool.isRequired}),n.shape({rate:n.string.isRequired})},449:function(e,t,a){"use strict";var n=a(38),r=a(39),l=a(90),c=a(89),o=a(91),s=a(0),i=a.n(s),u=a(443),d=a(516),m=a(444),p=a(654),h=a(138),b=a(88),g=a(429),f=a(105),E=a(140),v=a(471),w=a(481),y={tooltips:{enabled:!1,custom:w.CustomTooltips},maintainAspectRatio:!1,scales:{yAxes:[{ticks:{beginAtZero:!0}}],xAxes:[{ticks:{display:!1}}]}};function C(e){var t=e.job,a=t.name,n=t.eta,r=t.percentage,l=t.speed,c=t.speedAvg,o=t.size,s=t.bytes;return a&&!isNaN(l)?i.a.createElement(u.a,null,i.a.createElement(d.a,null,"Running Jobs"),i.a.createElement(m.a,null,i.a.createElement("p",null,a)," ",i.a.createElement(p.a,{value:r,className:"mb-2"},r," %")," ",i.a.createElement("p",null,i.a.createElement("strong",null,"Speed: "),Object(f.g)(l),"PS")," ",i.a.createElement("p",null,i.a.createElement("strong",null,"Average Speed: "),Object(f.g)(c),"PS")," ",i.a.createElement("p",null,i.a.createElement("strong",null,"Total transferred: "),Object(f.g)(s))," ",i.a.createElement("p",null,i.a.createElement("strong",null,"Size: "),Object(f.g)(o)),i.a.createElement("p",null,i.a.createElement("strong",null,"ETA: "),Object(f.j)(n)))):null}function j(e){var t=e.job,a=t.name,n=t.percentage,r=t.speed,l=t.size;return i.a.createElement(i.a.Fragment,null,i.a.createElement(h.a,{className:"runningJobs"},l&&r?i.a.createElement(b.a,{lg:12,className:"itemName"}," ",function(e){return e.length>30?e.substr(0,30)+" ... "+e.substr(-5):e}(a)," "," ","(",Object(f.g)(l),") - ",Object(f.g)(r),"PS "):i.a.createElement(b.a,{lg:12},"Calculating")),i.a.createElement(h.a,null,i.a.createElement(b.a,{lg:12},i.a.createElement(p.a,{value:n,className:"mb-2"},n," %"))))}function S(e){var t=e.stats,a=t.speed,n=t.bytes,r=t.checks,l=t.elapsedTime,c=t.deletes,o=t.errors,s=t.transfers;return i.a.createElement(u.a,null,i.a.createElement(d.a,null,i.a.createElement("strong",null,"Global Stats")),i.a.createElement(m.a,null,i.a.createElement("table",{className:"table"},i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null,"Bytes Transferred:"),i.a.createElement("td",null,Object(f.g)(n))),i.a.createElement("tr",null,i.a.createElement("td",null,"Average Speed:"),i.a.createElement("td",null,Object(f.g)(a),"PS")),i.a.createElement("tr",null,i.a.createElement("td",null,"Checks:"),i.a.createElement("td",null,r)),i.a.createElement("tr",null,i.a.createElement("td",null,"Deletes:"),i.a.createElement("td",null,c)),i.a.createElement("tr",null,i.a.createElement("td",null,"Running since:"),i.a.createElement("td",null,Object(f.j)(l))),i.a.createElement("tr",{className:o>0?"table-danger":""},i.a.createElement("td",null,"Errors:"),i.a.createElement("td",null,o)),i.a.createElement("tr",null,i.a.createElement("td",null,"Transfers:"),i.a.createElement("td",null,s))))))}function O(e){var t=e.transferring;return void 0!==t?t.map(function(e,t){return i.a.createElement(C,{key:e.name,job:e})}):null}function k(e){var t=e.transferring;return void 0!==t?t.map(function(e,t){return i.a.createElement(j,{key:e.name,job:e})}):null}var N=function(e){function t(e,a){var r;return Object(n.a)(this,t),(r=Object(l.a)(this,Object(c.a)(t).call(this,e,a))).toggleShowing=function(){r.setState(function(e){return{isShowing:!e.isShowing}})},r.state={isShowing:!0},r}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.jobs,n=t.isConnected,r=t.lineChartData,l=a.transferring,c=this.props.mode;return"full-status"===c?n?i.a.createElement(h.a,null,i.a.createElement(b.a,{sm:12,lg:4},i.a.createElement(S,{stats:a})),i.a.createElement(b.a,{sm:12,lg:4},i.a.createElement(u.a,null,i.a.createElement(d.a,null,"Speed"),i.a.createElement(m.a,null,i.a.createElement("div",{className:"chart-wrapper"},i.a.createElement(v.b,{data:r,options:y}))))),i.a.createElement(b.a,{sm:12,lg:4},i.a.createElement(O,{transferring:l}))):i.a.createElement("div",null,"Not connected to rclone."):"card"===c?n?i.a.createElement(k,{transferring:l}):i.a.createElement("div",null,"Not connected to rclone."):"modal"===c?l&&l.length>0?i.a.createElement(u.a,{className:"progress-modal d-none d-sm-block"},i.a.createElement(d.a,{onClick:function(){return e.toggleShowing()}},"Progress",i.a.createElement("div",{className:"card-header-actions"},i.a.createElement(g.a,{color:"link"},i.a.createElement("i",{className:"fa fa-close fa-lg"})))),i.a.createElement(m.a,{className:this.state.isShowing?"progress-modal-body":"d-none"},i.a.createElement(k,{transferring:l}))):null:void 0}}]),t}(i.a.Component);t.a=Object(E.b)(function(e,t){var a=e.status.speed,n={};if(a){var r=[],l=[],c=[],o=a.length;a.slice(o-50,o-1).forEach(function(e,t){r.push(Math.ceil(e.elapsedTime)),l.push(Object(f.c)(e.speed).toFixed(2)),c.push(Object(f.c)(e.speedAvg).toFixed(2))}),n={labels:r,datasets:[{label:"Speed (kbps)",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:l},{label:"Average Speed (kbps)",fill:!0,lineTension:.1,backgroundColor:"rgba(187,69,14,0.4)",borderColor:"rgb(192,76,58)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgb(187,69,14)",pointBackgroundColor:"#ff7459",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:c}]}}return{jobs:e.status.jobs,isConnected:e.status.isConnected,error:e.status.error,lineChartData:n}},{})(N)},456:function(e,t,a){"use strict";a.d(t,"c",function(){return i}),a.d(t,"a",function(){return u}),a.d(t,"b",function(){return d}),a.d(t,"d",function(){return m});var n=a(106),r=a.n(n),l=a(144),c=a(104),o=a(2),s=a(67),i=function(){return function(){var e=Object(l.a)(r.a.mark(function e(t,a){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=a(),n.status.checkStatus&&c.a.post(s.a.stats).then(function(e){return t({type:o.o,status:o.C,payload:e.data})},function(e){return t({type:o.o,status:o.A,payload:e})});case 2:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}()},u=function(e){return function(){var t=Object(l.a)(r.a.mark(function t(a){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a({type:o.n,payload:e});case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},d=function(){return function(){var e=Object(l.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:c.a.post(s.a.bwlimit).then(function(e){return t({type:o.p,status:o.C,payload:e.data})},function(e){return t({type:o.p,status:o.A,payload:e})});case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(l.a)(r.a.mark(function t(a){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:c.a.post(s.a.bwlimit,{rate:e}).then(function(e){return a({type:o.D,status:o.C,payload:e.data})},function(e){return a({type:o.D,status:o.A,payload:e})});case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}},470:function(e,t,a){"use strict";var n=a(38),r=a(39),l=a(90),c=a(89),o=a(91),s=a(0),i=a.n(s),u=a(443),d=a(516),m=a(444),p=a(429),h=a(52),b=a.n(h),g=a(449),f=a(140),E=a(456),v=a(53);function w(){return b.a.createPortal(i.a.createElement(g.a,{mode:"modal"}),document.getElementById(v.d))}var y=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).toggleCheckStatus=function(){var e=a.props,t=e.checkStatus,n=e.enableCheckStatus;console.log(t,n),n(!t)},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){var e=this;this.props.getStatus(),this.refreshInterval=setInterval(function(){return e.props.getStatus()},v.f)}},{key:"componentWillUnmount",value:function(){clearInterval(this.refreshInterval)}},{key:"render",value:function(){var e=this.props,t=e.isConnected,a=e.mode,n=e.checkStatus,r=localStorage.getItem(v.c),l=localStorage.getItem(v.g);return"card"===a?i.a.createElement(u.a,{className:"text-center "+(t?"card-accent-info":"card-accent-warning")},i.a.createElement(d.a,null,"rclone status"),i.a.createElement(m.a,null,i.a.createElement(C,{checkStatus:n,connectivityStatus:t,ipAddress:r,userName:l}))):i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{type:"primary",onClick:this.toggleCheckStatus,className:t?"bg-info  d-none d-lg-block":"bg-warning d-none d-lg-block"}," ",n?t?"CONNECTED":"DISCONNECTED":"DISABLED"),i.a.createElement(w,null))}}]),t}(i.a.Component);function C(e){var t=e.connectivityStatus,a=e.checkStatus,n=e.ipAddress,r=e.userName;return a?t?i.a.createElement("p",null,"The rclone backend is connected and working as expected.",i.a.createElement("br",null),"Current IP address is ",n,i.a.createElement("br",null),i.a.createElement("strong",null," Username: "),r):i.a.createElement("p",null,"Cannot connect to rclone backend. There is a problem with connecting to ",n,"."):i.a.createElement("p",null,"Not monitoring connectivity status. Tap the icon in navbar to start.")}y.defaultProps={mode:"card"};t.a=Object(f.b)(function(e){return{isConnected:e.status.isConnected,isDisabled:e.status.isDisabled,checkStatus:e.status.checkStatus}},{getStatus:E.c,enableCheckStatus:E.a})(y)},805:function(e,t,a){"use strict";a.r(t);var n=a(38),r=a(39),l=a(90),c=a(89),o=a(91),s=a(0),i=a.n(s),u=a(138),d=a(88),m=a(470),p=a(449),h=a(433),b=a(443),g=a(444),f=a(654),E=a(28),v=a.n(E),w=a(667),y=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.className,a=e.cssModule,n=e.header,r=e.icon,l=e.color,c=e.value,o=e.children,s=e.invert,u=Object(h.a)(e,["className","cssModule","header","icon","color","value","children","invert"]),d={style:"",color:l,value:c},m={style:"",bgColor:"",icon:r};s&&(d.style="progress-white",d.color="",m.style="text-white",m.bgColor="bg-"+l);var p=Object(w.mapToCssModules)(v()(t,m.style,m.bgColor),a);return d.style=v()("progress-xs mt-3 mb-0",d.style),i.a.createElement(b.a,Object.assign({className:p},u),i.a.createElement(g.a,null,i.a.createElement("div",{className:"h1 text-muted text-right mb-2"},i.a.createElement("i",{className:m.icon})),i.a.createElement("div",{className:"h4 mb-0"},n),i.a.createElement("small",{className:"text-muted text-uppercase font-weight-bold"},o),i.a.createElement(f.a,{className:d.style,color:d.color,value:d.value})))}}]),t}(s.Component);y.defaultProps={header:"87.500",icon:"icon-people",color:"info",value:"25",children:"Visitors",invert:!1};var C=y,j=a(105),S=a(143),O=a(429),k=a(516),N=a(445),B=a(518),T=a(519),x=a(434),R=a(666),A=a(140),D=a(456),I=(a(427),function(e){function t(e,a){var r;return Object(n.a)(this,t),(r=Object(l.a)(this,Object(c.a)(t).call(this,e,a))).getBandwidth=function(){(0,r.props.getBandwidth)()},r.setBandwidth=function(){var e=r.state,t=e.bandwidthText;if(e.hasError)S.b.error("Error in form");else{var a=r.props.setBandwidth;a(t||"0M")}},r.changeBandwidthInput=function(e){var t=e.target.value,a=Object(j.m)(t);r.setState({bandwidthText:t,hasError:""!==t&&!a})},r.toggleShowChangeBandwidth=function(){r.setState(function(e){return{showChangeBandwidth:!e.showChangeBandwidth}})},r.state={bandwidthText:"",hasError:!1,showChangeBandwidth:!1},r}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.getBandwidth()}},{key:"render",value:function(){var e=this.state,t=e.bandwidthText,a=e.hasError,n=e.showChangeBandwidth,r=this.props.bandwidth;return i.a.createElement(u.a,null,i.a.createElement(d.a,{lg:n?6:12,sm:12},i.a.createElement(C,{icon:"icon-speedometer",color:"danger",header:"off"!==r.rate?r.rate:"Unlimited",lg:6,sm:12},"Current bandwidth ",i.a.createElement(O.a,{color:"link",onClick:this.toggleShowChangeBandwidth},n?"Close":"Change",i.a.createElement("i",{className:"fa fa-lg fa-angle-"+(n?"left":"right")})))),i.a.createElement(d.a,{lg:6,sm:12,className:n?"":"d-none"},i.a.createElement(b.a,null,i.a.createElement(k.a,null,"Change bandwidth"),i.a.createElement(g.a,null,i.a.createElement(N.a,{onSubmit:this.setBandwidth},i.a.createElement(B.a,{row:!0},i.a.createElement(T.a,{for:"bandwidthValue",sm:5},"New Bandwidth"),i.a.createElement(d.a,{sm:7},i.a.createElement(x.a,{type:"text",value:t,valid:!a,invalid:a,id:"bandwidthValue",onChange:this.changeBandwidthInput}),i.a.createElement(R.a,{valid:!0},"Keep empty to reset."),i.a.createElement(R.a,null,"The bandwidth should be of the form 1M|2M|1G|1K|1.1K etc"))),i.a.createElement(O.a,{className:"float-right",color:"success",type:"submit"},"Set"))))))}}]),t}(i.a.Component)),q=Object(A.b)(function(e){return{isConnected:e.status.isConnected,bandwidth:e.status.bandwidth}},{getBandwidth:D.b,setBandwidth:D.d})(I),M=a(53),P=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.checkStatus,t=localStorage.getItem(M.c);return i.a.createElement("div",{"data-test":"homeComponent"},i.a.createElement("h2",null,"Welcome to Rclone dashboard. "),i.a.createElement("p",null,"Begin by creating a new remote config from the left sidebar."),i.a.createElement(u.a,null,i.a.createElement(d.a,{lg:4,sm:12},i.a.createElement(m.a,{ipAddress:t,mode:"card"})),i.a.createElement(d.a,{lg:4,sm:12},i.a.createElement(q,null))),i.a.createElement("h2",null,"Jobs"),e?i.a.createElement(p.a,{mode:"full-status"}):i.a.createElement("p",null,"Not Monitoring"))}}]),t}(i.a.Component);t.default=Object(A.b)(function(e){return{checkStatus:e.status.checkStatus}},{})(P)}}]);
//# sourceMappingURL=17.effbcb23.chunk.js.map