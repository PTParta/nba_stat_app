(this.webpackJsonpnba_player_stats=this.webpackJsonpnba_player_stats||[]).push([[0],{228:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(20),l=n.n(c),o=n(10),i=n(6),s=n(229),d=n(230),b=n(76),u=n(11),j=n.n(u),g=n(16),h=n(14),f=n.n(h),p={getTeams:function(){var e=Object(g.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat("https://www.balldontlie.io/api/v1/teams"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},O={getPlayers:function(){var e=Object(g.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("/api/players");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},m=n(75),x=function(e,t,n){for(var a=[],r=0;r<n;r++)a[r]=null;for(var c=n;c<e.length;c++){for(var l=0,o=1;o<=n;o++)l+=e[c-n+o][t];var i=l/n;a.push(i)}return a},S=function(e,t,n,a){for(var r=[],c=0;c<a;c++)r[c]=null;for(var l=a;l<e.length;l++){var o=0,i=0;if(0===e[l][n])r.push(r[l-1]);else{for(var s=1;s<=a;s++)0===e[l-a+s][n]||e[l-a+s][n]<e[l-a+s][t]||(o+=e[l-a+s][t],i+=e[l-a+s][n]);var d=o/i*100;r.push(d)}}return r},k={pts:function(e,t){return x(e,"pts",t)},ast:function(e,t){return x(e,"ast",t)},reb:function(e,t){return x(e,"reb",t)},blk:function(e,t){return x(e,"blk",t)},stl:function(e,t){return x(e,"stl",t)},turnover:function(e,t){return x(e,"turnover",t)},min:function(e,t){return e=e.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{min:e.min?Number(e.min.split(":")[0]):null})})),x(e,"min",t)},pf:function(e,t){return x(e,"pf",t)},dreb:function(e,t){return x(e,"dreb",t)},oreb:function(e,t){return x(e,"oreb",t)},fg_pct:function(e,t){return S(e,"fgm","fga",t)},fg3_pct:function(e,t){return S(e,"fg3m","fg3a",t)},ft_pct:function(e,t){return S(e,"ftm","fta",t)},fga:function(e,t){return x(e,"fga",t)},fgm:function(e,t){return x(e,"fgm",t)},fg3a:function(e,t){return x(e,"fg3a",t)},fg3m:function(e,t){return x(e,"fg3m",t)},fta:function(e,t){return x(e,"fta",t)},ftm:function(e,t){return x(e,"ftm",t)}},C={maroonDot:"rgba(128,0,0,0.3)",maroonLine:"rgba(128,0,0,1.0)",brownDot:"rgba(170,110,40,0.3)",brownLine:"rgba(170,110,40,1.0)",oliveDot:"rgba(128,128,0,0.3)",oliveLine:"rgba(128,128,0,1.0)",tealDot:"rgba(0,128,128,0.3)",tealLine:"rgba(0,128,128,1.0)",navyDot:"rgba(0,0,128,0.3)",navyLine:"rgba(0,0,128,1.0)",redDot:"rgba(230,25,75,0.3)",redLine:"rgba(230,25,75,1.0)",orangeDot:"rgba(245,130,48,0.3)",orangeLine:"rgba(245,130,48,1.0)",yellowDot:"rgba(255,225,25,0.3)",yellowLine:"rgba(255,225,25,1.0)",limeDot:"rgba(210,245,60,0.3)",limeLine:"rgba(210,245,60,1.0)",greenDot:"rgba(60,180,75,0.3)",greenLine:"rgba(60,180,75,1.0)",cyanDot:"rgba(70,240,240,0.3)",cyanLine:"rgba(70,240,240,1.0)",blueDot:"rgba(0,130,200,0.3)",blueLine:"rgba(0,130,200,1.0)",purpleDot:"rgba(145,30,180,0.3)",purpleLine:"rgba(145,30,180,1.0)",magentaDot:"rgba(240,50,230,0.3)",magentaLine:"rgba(240,50,230,1.0)",greyDot:"rgba(128,128,128,0.3)",greyLine:"rgba(128,128,128,1.0)",pinkDot:"rgba(250,190,212,0.3)",pinkLine:"rgba(250,190,212,1.0)",apricotDot:"rgba(255,215,180,0.3)",apricotLine:"rgba(255,215,180,1.0)",beigeDot:"rgba(255,250,200,0.3)",beigeLine:"rgba(255,250,200,1.0)",mintDot:"rgba(170,255,195,0.3)",mintLine:"rgba(170,255,195,1.0)",lavenderDot:"rgba(220,190,255,0.3)",lavenderLine:"rgba(220,190,255,1.0)",whiteDot:"rgba(255,255,255,0.3)",whiteLine:"rgba(255,255,255,1.0)",lightGreyDot:"rgba(211,211,211,0.3)",lightGreyLine:"rgba(211,211,211,1.0)"},y=n(29),L=n.n(y),v=n(1),w=function(e){var t,n,a=e.playerStats,r=e.teams,c=e.postSeasonSelected,l=e.ptsSelected,i=e.astSelected,u=e.rebSelected,j=e.drebSelected,g=e.orebSelected,h=e.blkSelected,f=e.stlSelected,p=e.turnoverSelected,O=e.fgaSelected,x=e.fgmSelected,S=e.fg_pctSelected,y=e.fg3aSelected,w=e.fg3mSelected,D=e.fg3_pctSelected,_=e.ftaSelected,B=e.ftmSelected,F=e.ft_pctSelected,R=e.pfSelected,T=e.minSelected,P=e.selectedFirstSeason,N=e.selectedLastSeason,A=e.fetchingData,G=e.trailingAverage,M=a.filter((function(e){return e.game.postseason===c})),E=M.map((function(e){return e.game.season})),I=Math.min.apply(Math,E),z=Math.max.apply(Math,E);t=P>I?P:I,n=N<z?N:z;var J=M.filter((function(e){return e.game.season>=P&&e.game.season<=N})).length,W={labels:M.filter((function(e){return e.game.season>=P&&e.game.season<=N})).map((function(e){return e.game.date.split("T")[0].concat("\n").concat(r.find((function(t){return t.id===e.game.visitor_team_id})).abbreviation).concat("@").concat(r.find((function(t){return t.id===e.game.home_team_id})).abbreviation).concat(e.game.postseason?" POST":" REG")})),datasets:[{label:"pts",data:M.map((function(e){return e.pts})),fill:!1,borderColor:C.lightGreyDot,pointBackgroundColor:C.lightGreyDot,showLine:!1,hidden:!l},{label:"pts trailing mean",fill:!1,borderColor:C.lightGreyLine,pointBackgroundColor:C.lightGreyLine,showLine:!0,pointRadius:0,data:k.pts(M,G),hidden:!l},{label:"ast",data:M.map((function(e){return e.ast})),fill:!1,borderColor:C.brownDot,pointBackgroundColor:C.brownDot,showLine:!1,hidden:!i},{label:"ast trailing mean",fill:!1,borderColor:C.brownLine,pointBackgroundColor:C.brownLine,showLine:!0,pointRadius:0,data:k.ast(M,G),hidden:!i},{label:"reb",data:M.map((function(e){return e.reb})),fill:!1,borderColor:C.oliveDot,pointBackgroundColor:C.oliveDot,showLine:!1,hidden:!u},{label:"reb trailing mean",fill:!1,borderColor:C.oliveLine,pointBackgroundColor:C.oliveLine,showLine:!0,pointRadius:0,data:k.reb(M,G),hidden:!u},{label:"blk",data:M.map((function(e){return e.blk})),fill:!1,borderColor:C.tealDot,pointBackgroundColor:C.tealDot,showLine:!1,hidden:!h},{label:"blk trailing mean",fill:!1,borderColor:C.tealLine,pointBackgroundColor:C.tealLine,showLine:!0,pointRadius:0,data:k.blk(M,G),hidden:!h},{label:"stl",data:M.map((function(e){return e.stl})),fill:!1,borderColor:C.navyDot,pointBackgroundColor:C.navyDot,showLine:!1,hidden:!f},{label:"stl trailing mean",fill:!1,borderColor:C.navyLine,pointBackgroundColor:C.navyLine,showLine:!0,pointRadius:0,data:k.stl(M,G),hidden:!f},{label:"turnover",data:M.map((function(e){return e.turnover})),fill:!1,borderColor:C.redDot,pointBackgroundColor:C.redDot,showLine:!1,hidden:!p},{label:"turnover trailing mean",fill:!1,borderColor:C.redLine,pointBackgroundColor:C.redLine,showLine:!0,pointRadius:0,data:k.turnover(M,G),hidden:!p},{label:"min",data:M.map((function(e){return e.min?Number(e.min.split(":")[0]):null})),fill:!1,borderColor:C.orangeDot,pointBackgroundColor:C.orangeDot,showLine:!1,hidden:!T},{label:"min trailing mean",fill:!1,borderColor:C.orangeLine,pointBackgroundColor:C.orangeLine,showLine:!0,pointRadius:0,data:k.min(M,G),hidden:!T},{label:"pf",data:M.map((function(e){return e.pf})),fill:!1,borderColor:C.yellowDot,pointBackgroundColor:C.yellowDot,showLine:!1,hidden:!R},{label:"pf trailing mean",fill:!1,borderColor:C.yellowLine,pointBackgroundColor:C.yellowLine,showLine:!0,pointRadius:0,data:k.pf(M,G),hidden:!R},{label:"dreb",data:M.map((function(e){return e.dreb})),fill:!1,borderColor:C.limeDot,pointBackgroundColor:C.limeDot,showLine:!1,hidden:!j},{label:"dreb trailing mean",fill:!1,borderColor:C.limeLine,pointBackgroundColor:C.limeLine,showLine:!0,pointRadius:0,data:k.dreb(M,G),hidden:!j},{label:"oreb",data:M.map((function(e){return e.oreb})),fill:!1,borderColor:C.greenDot,pointBackgroundColor:C.greenDot,showLine:!1,hidden:!g},{label:"oreb trailing mean",fill:!1,borderColor:C.greenLine,pointBackgroundColor:C.greenLine,showLine:!0,pointRadius:0,data:k.oreb(M,G),hidden:!g},{label:"fg_pct",data:M.map((function(e){return e.fg_pct<=1?100*e.fg_pct:e.fg_pct})),fill:!1,borderColor:C.cyanDot,pointBackgroundColor:C.cyanDot,showLine:!1,hidden:!S},{label:"fg_pct trailing mean",fill:!1,borderColor:C.cyanLine,pointBackgroundColor:C.cyanLine,showLine:!0,pointRadius:0,data:k.fg_pct(M.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{fg_pct:e.fg_pct<=1?100*e.fg_pct:e.fg_pct})})),G),hidden:!S},{label:"fg3_pct",data:M.map((function(e){return e.fg3_pct<=1?100*e.fg3_pct:e.fg3_pct})),fill:!1,borderColor:C.blueDot,pointBackgroundColor:C.blueDot,showLine:!1,hidden:!D},{label:"fg3_pct trailing mean",fill:!1,borderColor:C.blueLine,pointBackgroundColor:C.blueLine,showLine:!0,pointRadius:0,data:k.fg3_pct(M.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{fg3_pct:e.fg3_pct<=1?100*e.fg3_pct:e.fg3_pct})})),G),hidden:!D},{label:"ft_pct",data:M.map((function(e){return e.ft_pct<=1?100*e.ft_pct:e.ft_pct})),fill:!1,borderColor:C.purpleDot,pointBackgroundColor:C.purpleDot,showLine:!1,hidden:!F},{label:"ft_pct trailing mean",fill:!1,borderColor:C.purpleLine,pointBackgroundColor:C.purpleLine,showLine:!0,pointRadius:0,data:k.ft_pct(M.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{ft_pct:e.ft_pct<=1?100*e.ft_pct:e.ft_pct})})),G),hidden:!F},{label:"fga",data:M.map((function(e){return e.fga})),fill:!1,borderColor:C.magentaDot,pointBackgroundColor:C.magentaDot,showLine:!1,hidden:!O},{label:"fga trailing mean",fill:!1,borderColor:C.magentaLine,pointBackgroundColor:C.magentaLine,showLine:!0,pointRadius:0,data:k.fga(M,G),hidden:!O},{label:"fgm",data:M.map((function(e){return e.fgm})),fill:!1,borderColor:C.greyDot,pointBackgroundColor:C.greyDot,showLine:!1,hidden:!x},{label:"fgm trailing mean",fill:!1,borderColor:C.greyLine,pointBackgroundColor:C.greyLine,showLine:!0,pointRadius:0,data:k.fgm(M,G),hidden:!x},{label:"fg3a",data:M.map((function(e){return e.fg3a})),fill:!1,borderColor:C.pinkDot,pointBackgroundColor:C.pinkDot,showLine:!1,hidden:!y},{label:"fg3a trailing mean",fill:!1,borderColor:C.pinkLine,pointBackgroundColor:C.pinkLine,showLine:!0,pointRadius:0,data:k.fg3a(M,G),hidden:!y},{label:"fg3m",data:M.map((function(e){return e.fg3m})),fill:!1,borderColor:C.apricotDot,pointBackgroundColor:C.apricotDot,showLine:!1,hidden:!w},{label:"fg3m trailing mean",fill:!1,borderColor:C.apricotLine,pointBackgroundColor:C.apricotLine,showLine:!0,pointRadius:0,data:k.fg3m(M,G),hidden:!w},{label:"fta",data:M.map((function(e){return e.fta})),fill:!1,borderColor:C.beigeDot,pointBackgroundColor:C.beigeDot,showLine:!1,hidden:!_},{label:"fta trailing mean",fill:!1,borderColor:C.beigeLine,pointBackgroundColor:C.beigeLine,showLine:!0,pointRadius:0,data:k.fta(M,G),hidden:!_},{label:"ftm",data:M.map((function(e){return e.ftm})),fill:!1,borderColor:C.mintDot,pointBackgroundColor:C.mintDot,showLine:!1,hidden:!B},{label:"ftm trailing mean",fill:!1,borderColor:C.mintLine,pointBackgroundColor:C.mintLine,showLine:!0,pointRadius:0,data:k.ftm(M,G),hidden:!B}]};return Object(v.jsxs)("div",{children:[Object(v.jsx)(s.a,{style:{color:"white",paddingLeft:"30px"},children:Object(v.jsx)(d.a,{children:A?Object(v.jsxs)(b.a,{children:[Object(v.jsx)(L.a,{type:"Grid",color:"white",height:"25",width:"25"}),Object(v.jsx)("br",{})]}):Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(b.a,{children:Object(v.jsxs)("div",{children:[a[0].player.first_name," ",a[0].player.last_name,", ",t," - ",n,", ",J," games"]})})})})}),Object(v.jsx)("div",{className:"chart",children:Object(v.jsx)(m.Line,{data:W,options:{legend:{onClick:function(e){return e.stopPropagation()},display:!1},scales:{xAxes:[{ticks:{display:!1}}]}}})})]})},D=n(22),_="https://www.balldontlie.io/api/v1/stats",B={getPlayerStatsFromApi:function(){var e=Object(g.a)(j.a.mark((function e(t,n){var a,r,c,l,o,i,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a="",r=0;r<t.length;r++)a+="&seasons[]=",a+=t[r];return e.next=4,f.a.get("".concat(_,"?seasons[]=").concat(a,"&player_ids[]=").concat(n,"&per_page=100"));case 4:c=e.sent,l=c.data.meta.total_pages,console.log("totalPages",l),o=[],i=1;case 9:if(!(i<=l)){e.next=18;break}return console.log("getting stats from page",i),e.next=13,f.a.get("".concat(_,"?seasons[]=").concat(a,"&player_ids[]=").concat(n,"&per_page=100&page=").concat(i));case 13:s=e.sent,o=o.concat(s.data.data);case 15:i++,e.next=9;break;case 18:return console.log(o),e.abrupt("return",o);case 20:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),getPlayerStatsFromDB:function(){var e=Object(g.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat("/api/statsdb/statsfromdb","/").concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},F=function(e){var t=e.players,n=e.setSelectedPlayer,a=e.setPlayerStats,r=e.setFetchingData,c=t.map((function(e){return{label:e.fullName,value:e.fullName}})),l=function(e){r(!0);var n=t.find((function(t){return t.fullName===e}));console.log("searched player",n),B.getPlayerStatsFromDB(n.apiId).then((function(e){a(e.data.sort((function(e,t){return new Date(e.game.date).getTime()-new Date(t.game.date).getTime()}))),r(!1)}))};return Object(v.jsx)("div",{children:Object(v.jsx)(D.a,{options:c,onChange:function(e){return t=e.value,n(t),void l(t);var t},placeholder:"Select player"})})},R=function(e){for(var t=e.selectedFirstSeason,n=e.selectedLastSeason,a=e.setSelectedFirstSeason,r=e.setSelectedLastSeason,c=2020,l=[];c>=1979;)l.push({label:c.toString(),value:c.toString()}),c--;for(var o=1979,i=[];o<=2020;)i.push({label:o.toString(),value:o.toString()}),o++;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(d.a,{children:[Object(v.jsx)(b.a,{sm:4}),Object(v.jsx)(b.a,{sm:4,children:Object(v.jsx)(D.a,{options:i,onChange:function(e){return function(e){e.value>n?(a(n),r(e.value)):a(e.value)}(e)},closeMenuOnSelect:!0,placeholder:t.toString()})}),Object(v.jsx)(b.a,{sm:4})]}),Object(v.jsxs)(d.a,{children:[Object(v.jsx)(b.a,{sm:4}),Object(v.jsx)(b.a,{sm:4,children:Object(v.jsx)(D.a,{options:l,onChange:function(e){return function(e){e.value<t?(r(t),a(e.value)):r(e.value)}(e)},closeMenuOnSelect:!0,placeholder:n})}),Object(v.jsx)(b.a,{sm:4})]})]})},T=n(231),P=n(233),N=function(e){var t=e.setRegularSeasonSelected,n=e.setPostSeasonSelected,r=Object(a.useState)("1"),c=Object(i.a)(r,2),l=c[0],o=c[1];return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(T.a,{toggle:!0,size:"md",children:[{name:"regular",value:"1"},{name:"post",value:"2"}].map((function(e,a){return Object(v.jsx)(P.a,{type:"radio",variant:"outline-secondary",name:"radio",value:e.value,checked:l===e.value,onChange:function(e){return function(e){"1"===e.currentTarget.value&&(t(!0),n(!1)),"2"===e.currentTarget.value&&(t(!1),n(!0)),o(e.currentTarget.value)}(e)},children:e.name},a)}))})})},A=n(232),G=function(e){var t=e.ptsSelected,n=e.setPtsSelected,a=e.astSelected,r=e.setAstSelected,c=e.rebSelected,l=e.setRebSelected,o=e.drebSelected,i=e.setDrebSelected,s=e.orebSelected,d=e.setOrebSelected,b=e.blkSelected,u=e.setBlkSelected,j=e.stlSelected,g=e.setStlSelected,h=e.turnoverSelected,f=e.setTurnoverSelected,p=e.fgaSelected,O=e.setFgaSelected,m=e.fgmSelected,x=e.setFgmSelected,S=e.fg_pctSelected,k=e.setFg_pctSelected,y=e.fg3aSelected,L=e.setFg3aSelected,w=e.fg3mSelected,D=e.setFg3mSelected,_=e.fg3_pctSelected,B=e.setFg3_pctSelected,F=e.ftaSelected,R=e.setFtaSelected,T=e.ftmSelected,P=e.setFtmSelected,N=e.ft_pctSelected,G=e.setFt_pctSelected,M=e.pfSelected,E=e.minSelected,I=e.setMinSelected,z=e.setPfSelected,J=100;return Object(v.jsxs)("div",{style:{color:"white"},children:[Object(v.jsx)(A.a,{children:Object(v.jsx)("table",{children:Object(v.jsx)("tbody",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{style:{width:J,backgroundColor:C.lightGreyLine,color:"black"},children:Object(v.jsx)(A.a.Check,{inline:!0,onChange:function(){return n(!t)},type:"checkbox",label:"pts"})}),Object(v.jsx)("td",{style:{width:J,backgroundColor:C.brownLine,color:"black"},children:Object(v.jsx)(A.a.Check,{inline:!0,onChange:function(){return r(!a)},type:"checkbox",label:"ast"})}),Object(v.jsx)("td",{style:{width:J,backgroundColor:C.oliveLine,color:"black"},children:Object(v.jsx)(A.a.Check,{inline:!0,onChange:function(){return l(!c)},type:"checkbox",label:"reb"})}),Object(v.jsx)("td",{style:{width:J,backgroundColor:C.tealLine,color:"black"},children:Object(v.jsx)(A.a.Check,{inline:!0,onChange:function(){return u(!b)},type:"checkbox",label:"blk"})})]})})})}),Object(v.jsx)(A.a,{children:Object(v.jsx)("table",{children:Object(v.jsx)("tbody",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{style:{width:J,backgroundColor:C.navyLine},children:Object(v.jsx)(A.a.Check,{inline:!0,onChange:function(){return g(!j)},type:"checkbox",label:"stl"})}),Object(v.jsx)("td",{style:{width:J,backgroundColor:C.redLine,color:"black"},children:Object(v.jsx)(A.a.Check,{inline:!0,onChange:function(){return f(!h)},type:"checkbox",label:"to"})}),Object(v.jsx)("td",{style:{width:J,backgroundColor:C.yellowLine,color:"black"},children:Object(v.jsx)(A.a.Check,{inline:!0,onChange:function(){return z(!M)},type:"checkbox",label:"pf"})}),Object(v.jsx)("td",{style:{width:J,backgroundColor:C.orangeLine},children:Object(v.jsx)(A.a.Check,{inline:!0,onChange:function(){return I(!E)},type:"checkbox",label:"min"})})]})})})}),Object(v.jsx)(A.a,{children:Object(v.jsx)("table",{children:Object(v.jsx)("tbody",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{style:{width:J,backgroundColor:C.cyanLine,color:"black"},children:Object(v.jsx)(A.a.Check,{inline:!0,onChange:function(){return k(!S)},type:"checkbox",label:"fg_pct"})}),Object(v.jsx)("td",{style:{width:J,backgroundColor:C.magentaLine,color:"black"},children:Object(v.jsx)(A.a.Check,{inline:!0,onChange:function(){return O(!p)},type:"checkbox",label:"fga"})}),Object(v.jsx)("td",{style:{width:J,backgroundColor:C.greyLine,color:"black"},children:Object(v.jsx)(A.a.Check,{inline:!0,onChange:function(){return x(!m)},type:"checkbox",label:"fgm"})})]})})})}),Object(v.jsx)(A.a,{children:Object(v.jsx)("table",{children:Object(v.jsx)("tbody",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{style:{width:J,backgroundColor:C.blueLine,color:"black"},children:Object(v.jsx)(A.a.Check,{inline:!0,onChange:function(){return B(!_)},type:"checkbox",label:"fg3_pct"})}),Object(v.jsx)("td",{style:{width:J,backgroundColor:C.pinkLine,color:"black"},children:Object(v.jsx)(A.a.Check,{inline:!0,onChange:function(){return L(!y)},type:"checkbox",label:"fg3a"})}),Object(v.jsx)("td",{style:{width:J,backgroundColor:C.apricotLine,color:"black"},children:Object(v.jsx)(A.a.Check,{inline:!0,onChange:function(){return D(!w)},type:"checkbox",label:"fg3m"})})]})})})}),Object(v.jsx)(A.a,{children:Object(v.jsx)("table",{children:Object(v.jsx)("tbody",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{style:{width:J,backgroundColor:C.purpleLine,color:"black"},children:Object(v.jsx)(A.a.Check,{inline:!0,onChange:function(){return G(!N)},type:"checkbox",label:"ft_pct"})}),Object(v.jsx)("td",{style:{width:J,backgroundColor:C.beigeLine,color:"black"},children:Object(v.jsx)(A.a.Check,{inline:!0,onChange:function(){return R(!F)},type:"checkbox",label:"fta"})}),Object(v.jsx)("td",{style:{width:J,backgroundColor:C.mintLine,color:"black"},children:Object(v.jsx)(A.a.Check,{inline:!0,onChange:function(){return P(!T)},type:"checkbox",label:"ftm"})})]})})})}),Object(v.jsx)(A.a,{children:Object(v.jsx)("table",{children:Object(v.jsx)("tbody",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{style:{width:J,backgroundColor:C.limeLine,color:"black"},children:Object(v.jsx)(A.a.Check,{inline:!0,onChange:function(){return i(!o)},type:"checkbox",label:"dreb"})}),Object(v.jsx)("td",{style:{width:J,backgroundColor:C.greenLine,color:"black"},children:Object(v.jsx)(A.a.Check,{inline:!0,onChange:function(){return d(!s)},type:"checkbox",label:"oreb"})})]})})})}),Object(v.jsx)("br",{})]})},M=n.p+"static/media/ball_logov3.965d973b.png",E=function(){return Object(v.jsx)("img",{src:M,alt:"ball_logo",style:{width:"75px",height:"75px"}})},I=function(e){var t=e.setTrailingAverage,n=Object(a.useState)("25"),r=Object(i.a)(n,2),c=r[0],l=r[1];return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(T.a,{toggle:!0,size:"md",children:[{name:"5",value:"5"},{name:"10",value:"10"},{name:"25",value:"25"},{name:"50",value:"50"},{name:"100",value:"100"}].map((function(e,n){return Object(v.jsx)(P.a,{type:"radio",variant:"outline-secondary",name:"radio",value:e.value,checked:c===e.value,onChange:function(e){return function(e){l(e.currentTarget.value),t(Number(e.currentTarget.value))}(e)},children:e.name},n)}))})})},z=function(){return Object(v.jsxs)("div",{style:{color:"white"},children:[Object(v.jsx)("strong",{children:"Instructions"}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{children:"Select a player, data starts loading"}),Object(v.jsx)("br",{}),Object(v.jsx)("li",{children:"Select seasons. Default is 1979-2020"}),Object(v.jsx)("br",{}),Object(v.jsx)("li",{children:"Select stats"}),Object(v.jsx)("br",{}),Object(v.jsx)("li",{children:"Select the amount of games to be counted into the trailing average"}),Object(v.jsx)("br",{}),Object(v.jsx)("li",{children:"Select regular or post season"})]})]})},J=function(){return Object(v.jsxs)("div",{style:{color:"white"},children:[Object(v.jsx)("strong",{children:"Tips"}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{children:"With a mouse you can hover over individual data points to see more details. On a touch screen you can click the data point."}),Object(v.jsx)("br",{}),Object(v.jsx)("li",{children:"To see trends in a player's statistics you can change the amount of games that are counted into the trailing average. Play around and see how the line changes with different values"}),Object(v.jsx)("br",{}),Object(v.jsx)("li",{children:"To keep the chart readable you should have only a couple of stats selected at a time"}),Object(v.jsx)("br",{}),Object(v.jsx)("li",{children:"The best user experience comes with a large screen such as a tablet, laptop or desktop pc"}),Object(v.jsx)("br",{}),Object(v.jsx)("li",{children:"On a large screen you can open multiple windows in your browser and select multiple players to compare their statistics throughout their careers"}),Object(v.jsx)("br",{})]})]})},W=n(77);var q=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),l=Object(i.a)(c,2),u=l[0],j=l[1],g=Object(a.useState)([]),h=Object(i.a)(g,2),f=h[0],m=h[1],x=Object(a.useState)(""),S=Object(i.a)(x,2)[1],k=Object(a.useState)(1979),C=Object(i.a)(k,2),y=C[0],D=C[1],_=Object(a.useState)(2020),B=Object(i.a)(_,2),T=B[0],P=B[1],A=Object(a.useState)(!0),M=Object(i.a)(A,2),q=M[0],H=M[1],K=Object(a.useState)(!1),Q=Object(i.a)(K,2),U=Q[0],V=Q[1],X=Object(a.useState)(!1),Y=Object(i.a)(X,2),Z=Y[0],$=Y[1],ee=Object(a.useState)(!1),te=Object(i.a)(ee,2),ne=te[0],ae=te[1],re=Object(a.useState)(!1),ce=Object(i.a)(re,2),le=ce[0],oe=ce[1],ie=Object(a.useState)(!1),se=Object(i.a)(ie,2),de=se[0],be=se[1],ue=Object(a.useState)(!1),je=Object(i.a)(ue,2),ge=je[0],he=je[1],fe=Object(a.useState)(!1),pe=Object(i.a)(fe,2),Oe=pe[0],me=pe[1],xe=Object(a.useState)(!1),Se=Object(i.a)(xe,2),ke=Se[0],Ce=Se[1],ye=Object(a.useState)(!1),Le=Object(i.a)(ye,2),ve=Le[0],we=Le[1],De=Object(a.useState)(!1),_e=Object(i.a)(De,2),Be=_e[0],Fe=_e[1],Re=Object(a.useState)(!1),Te=Object(i.a)(Re,2),Pe=Te[0],Ne=Te[1],Ae=Object(a.useState)(!1),Ge=Object(i.a)(Ae,2),Me=Ge[0],Ee=Ge[1],Ie=Object(a.useState)(!1),ze=Object(i.a)(Ie,2),Je=ze[0],We=ze[1],qe=Object(a.useState)(!1),He=Object(i.a)(qe,2),Ke=He[0],Qe=He[1],Ue=Object(a.useState)(!1),Ve=Object(i.a)(Ue,2),Xe=Ve[0],Ye=Ve[1],Ze=Object(a.useState)(!1),$e=Object(i.a)(Ze,2),et=$e[0],tt=$e[1],nt=Object(a.useState)(!1),at=Object(i.a)(nt,2),rt=at[0],ct=at[1],lt=Object(a.useState)(!1),ot=Object(i.a)(lt,2),it=ot[0],st=ot[1],dt=Object(a.useState)(!1),bt=Object(i.a)(dt,2),ut=bt[0],jt=bt[1],gt=Object(a.useState)(!1),ht=Object(i.a)(gt,2),ft=ht[0],pt=ht[1],Ot=Object(a.useState)(!1),mt=Object(i.a)(Ot,2),xt=mt[0],St=mt[1],kt=Object(a.useState)(25),Ct=Object(i.a)(kt,2),yt=Ct[0],Lt=Ct[1];return Object(a.useEffect)((function(){p.getTeams().then((function(e){m(e.data)})),O.getPlayers().then((function(e){r(e.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{fullName:"".concat(e.firstName," ").concat(e.lastName)})})).sort((function(e,t){return e.lastName>t.lastName?1:t.lastName>e.lastName?-1:0})))}))}),[]),Object(v.jsx)(W.a,{children:Object(v.jsx)("div",{style:{backgroundColor:"#17202A",height:"130vh",display:"flex",flexDirection:"column",alignContent:"center"},children:Object(v.jsx)("div",{className:"container",style:{paddingTop:"2vh",backgroundColor:"#17202A"},children:Object(v.jsxs)(s.a,{children:[Object(v.jsxs)(d.a,{children:[Object(v.jsx)(b.a,{sm:4}),Object(v.jsx)(b.a,{sm:4,children:Object(v.jsx)(F,{players:n,setSelectedPlayer:S,setPlayerStats:j,fetchingData:xt,setFetchingData:St})}),Object(v.jsx)(b.a,{sm:4})]}),Object(v.jsx)(R,{setSelectedFirstSeason:D,setSelectedLastSeason:P,selectedFirstSeason:y,selectedLastSeason:T}),Object(v.jsx)("br",{}),0!==u.length||xt?Object(v.jsx)(v.Fragment,{}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(d.a,{style:{textAlign:"center"},children:[Object(v.jsx)(b.a,{sm:5,xs:1}),Object(v.jsx)(b.a,{sm:2,xs:10,children:Object(v.jsx)(E,{})}),Object(v.jsx)(b.a,{sm:5,xs:1})]}),Object(v.jsx)("br",{})]}),Object(v.jsxs)(d.a,{style:{textAlign:"center"},children:[Object(v.jsx)(b.a,{sm:5,xs:4}),Object(v.jsx)(b.a,{sm:2,xs:4,children:xt&&0===u.length?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("br",{}),Object(v.jsx)(L.a,{type:"Grid",color:"white",height:"75",width:"75"}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{})]}):Object(v.jsx)(v.Fragment,{})}),Object(v.jsx)(b.a,{sm:5,xs:4})]}),Object(v.jsx)(d.a,{className:"justify-content-md-center",children:Object(v.jsx)(b.a,{children:u.length>0?Object(v.jsx)(w,{playerStats:u,teams:f,regularSeasonSelected:q,postSeasonSelected:U,ptsSelected:Z,astSelected:ne,rebSelected:le,drebSelected:de,orebSelected:ge,blkSelected:Oe,stlSelected:ke,turnoverSelected:ve,fgaSelected:Be,fgmSelected:Pe,fg_pctSelected:Me,fg3aSelected:Je,fg3mSelected:Ke,fg3_pctSelected:Xe,ftaSelected:et,ftmSelected:rt,ft_pctSelected:it,pfSelected:ut,minSelected:ft,selectedFirstSeason:y,selectedLastSeason:T,fetchingData:xt,trailingAverage:yt}):Object(v.jsx)(v.Fragment,{})})}),Object(v.jsx)("br",{}),Object(v.jsxs)(d.a,{children:[Object(v.jsx)(b.a,{sm:4}),Object(v.jsx)(b.a,{sm:4,children:Object(v.jsx)(G,{ptsSelected:Z,setPtsSelected:$,astSelected:ne,setAstSelected:ae,rebSelected:le,setRebSelected:oe,drebSelected:de,setDrebSelected:be,orebSelected:ge,setOrebSelected:he,blkSelected:Oe,setBlkSelected:me,stlSelected:ke,setStlSelected:Ce,turnoverSelected:ve,setTurnoverSelected:we,fgaSelected:Be,setFgaSelected:Fe,fgmSelected:Pe,setFgmSelected:Ne,fg_pctSelected:Me,setFg_pctSelected:Ee,fg3aSelected:Je,setFg3aSelected:We,fg3mSelected:Ke,setFg3mSelected:Qe,fg3_pctSelected:Xe,setFg3_pctSelected:Ye,ftaSelected:et,setFtaSelected:tt,ftmSelected:rt,setFtmSelected:ct,ft_pctSelected:it,setFt_pctSelected:st,pfSelected:ut,setPfSelected:jt,minSelected:ft,setMinSelected:pt})}),Object(v.jsx)(b.a,{sm:4})]}),Object(v.jsxs)(d.a,{children:[Object(v.jsx)(b.a,{sm:4}),Object(v.jsxs)(b.a,{sm:4,children:[Object(v.jsx)("div",{style:{color:"white"},children:"trailing average"}),Object(v.jsx)(I,{setTrailingAverage:Lt})]}),Object(v.jsx)(b.a,{sm:4})]}),Object(v.jsx)("br",{}),Object(v.jsxs)(d.a,{children:[Object(v.jsx)(b.a,{sm:4}),Object(v.jsx)(b.a,{sm:4,children:Object(v.jsx)(N,{regularSeasonSelected:q,postSeasonSelected:U,setRegularSeasonSelected:H,setPostSeasonSelected:V})}),Object(v.jsx)(b.a,{sm:4})]}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsxs)(d.a,{float:"center",children:[Object(v.jsx)(b.a,{sm:2,xs:1}),Object(v.jsx)(b.a,{sm:8,xs:10,children:Object(v.jsx)(z,{})}),Object(v.jsx)(b.a,{sm:2,xs:1})]}),Object(v.jsx)("br",{}),Object(v.jsxs)(d.a,{float:"center",children:[Object(v.jsx)(b.a,{sm:2,xs:1}),Object(v.jsx)(b.a,{sm:8,xs:10,children:Object(v.jsx)(J,{})}),Object(v.jsx)(b.a,{sm:2,xs:1})]})]})})})})};l.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(q,{})}),document.getElementById("root"))}},[[228,1,2]]]);
//# sourceMappingURL=main.c728a927.chunk.js.map