(this.webpackJsonpnba_player_stats=this.webpackJsonpnba_player_stats||[]).push([[0],{228:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(19),o=n.n(c),l=n(10),i=n(6),s=n(229),d=n(230),b=n(76),u=n(11),g=n.n(u),j=n(16),f=n(14),p=n.n(f),h={getTeams:function(){var e=Object(j.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("".concat("https://www.balldontlie.io/api/v1/teams"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},O={getPlayers:function(){var e=Object(j.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/api/players");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},m=n(75),S=20,x=function(e,t){for(var n=[],a=0;a<S;a++)n[a]=null;for(var r=S;r<e.length;r++){for(var c=0,o=1;o<=S;o++)c+=e[r-S+o][t];var l=c/S;n.push(l)}return n},k=function(e,t,n){for(var a=[],r=0;r<S;r++)a[r]=null;for(var c=S;c<e.length;c++)if(0===e[c][n])a.push(a[c-1]),e[c][t]=a[c-1];else{for(var o=0,l=1;l<=S;l++)o+=e[c-S+l][t];var i=o/S;a.push(i)}return a},C={pts:function(e){return x(e,"pts")},ast:function(e){return x(e,"ast")},reb:function(e){return x(e,"reb")},blk:function(e){return x(e,"blk")},stl:function(e){return x(e,"stl")},turnover:function(e){return x(e,"turnover")},min:function(e){return e=e.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{min:e.min?Number(e.min.split(":")[0]):null})})),x(e,"min")},pf:function(e){return x(e,"pf")},dreb:function(e){return x(e,"dreb")},oreb:function(e){return x(e,"oreb")},fg_pct:function(e){return k(e,"fg_pct","fga")},fg3_pct:function(e){return k(e,"fg3_pct","fg3a")},ft_pct:function(e){return k(e,"ft_pct","fta")},fga:function(e){return x(e,"fga")},fgm:function(e){return x(e,"fgm")},fg3a:function(e){return x(e,"fg3a")},fg3m:function(e){return x(e,"fg3m")},fta:function(e){return x(e,"fta")},ftm:function(e){return x(e,"ftm")}},L={maroonDot:"rgba(128,0,0,0.3)",maroonLine:"rgba(128,0,0,1.0)",brownDot:"rgba(170,110,40,0.3)",brownLine:"rgba(170,110,40,1.0)",oliveDot:"rgba(128,128,0,0.3)",oliveLine:"rgba(128,128,0,1.0)",tealDot:"rgba(0,128,128,0.3)",tealLine:"rgba(0,128,128,1.0)",navyDot:"rgba(0,0,128,0.3)",navyLine:"rgba(0,0,128,1.0)",redDot:"rgba(230,25,75,0.3)",redLine:"rgba(230,25,75,1.0)",orangeDot:"rgba(245,130,48,0.3)",orangeLine:"rgba(245,130,48,1.0)",yellowDot:"rgba(255,225,25,0.3)",yellowLine:"rgba(255,225,25,1.0)",limeDot:"rgba(210,245,60,0.3)",limeLine:"rgba(210,245,60,1.0)",greenDot:"rgba(60,180,75,0.3)",greenLine:"rgba(60,180,75,1.0)",cyanDot:"rgba(70,240,240,0.3)",cyanLine:"rgba(70,240,240,1.0)",blueDot:"rgba(0,130,200,0.3)",blueLine:"rgba(0,130,200,1.0)",purpleDot:"rgba(145,30,180,0.3)",purpleLine:"rgba(145,30,180,1.0)",magentaDot:"rgba(240,50,230,0.3)",magentaLine:"rgba(240,50,230,1.0)",greyDot:"rgba(128,128,128,0.3)",greyLine:"rgba(128,128,128,1.0)",pinkDot:"rgba(250,190,212,0.3)",pinkLine:"rgba(250,190,212,1.0)",apricotDot:"rgba(255,215,180,0.3)",apricotLine:"rgba(255,215,180,1.0)",beigeDot:"rgba(255,250,200,0.3)",beigeLine:"rgba(255,250,200,1.0)",mintDot:"rgba(170,255,195,0.3)",mintLine:"rgba(170,255,195,1.0)",lavenderDot:"rgba(220,190,255,0.3)",lavenderLine:"rgba(220,190,255,1.0)",whiteDot:"rgba(255,255,255,0.3)",whiteLine:"rgba(255,255,255,1.0)",lightGreyDot:"rgba(211,211,211,0.3)",lightGreyLine:"rgba(211,211,211,1.0)"},y=n(29),w=n.n(y),v=n(1),_=function(e){var t,n,a=e.playerStats,r=e.teams,c=e.postSeasonSelected,o=e.ptsSelected,i=e.astSelected,u=e.rebSelected,g=e.drebSelected,j=e.orebSelected,f=e.blkSelected,p=e.stlSelected,h=e.turnoverSelected,O=e.fgaSelected,S=e.fgmSelected,x=e.fg_pctSelected,k=e.fg3aSelected,y=e.fg3mSelected,_=e.fg3_pctSelected,D=e.ftaSelected,B=e.ftmSelected,F=e.ft_pctSelected,R=e.pfSelected,P=e.minSelected,N=e.selectedFirstSeason,T=e.selectedLastSeason,G=e.fetchingData,M=a.filter((function(e){return e.game.postseason===c})),A=M.map((function(e){return e.game.season})),E=Math.min.apply(Math,A),I=Math.max.apply(Math,A);t=N>E?N:E,n=T<I?T:I;var J=M.filter((function(e){return e.game.season>=N&&e.game.season<=T})).length,z={labels:M.filter((function(e){return e.game.season>=N&&e.game.season<=T})).map((function(e){return e.game.date.split("T")[0].concat("\n").concat(r.find((function(t){return t.id===e.game.visitor_team_id})).abbreviation).concat("@").concat(r.find((function(t){return t.id===e.game.home_team_id})).abbreviation).concat(e.game.postseason?" POST":" REG")})),datasets:[{label:"pts",data:M.map((function(e){return e.pts})),fill:!1,borderColor:L.lightGreyDot,pointBackgroundColor:L.lightGreyDot,showLine:!1,hidden:!o},{label:"pts trailing mean",fill:!1,borderColor:L.lightGreyLine,pointBackgroundColor:L.lightGreyLine,showLine:!0,pointRadius:0,data:C.pts(M),hidden:!o},{label:"ast",data:M.map((function(e){return e.ast})),fill:!1,borderColor:L.brownDot,pointBackgroundColor:L.brownDot,showLine:!1,hidden:!i},{label:"ast trailing mean",fill:!1,borderColor:L.brownLine,pointBackgroundColor:L.brownLine,showLine:!0,pointRadius:0,data:C.ast(M),hidden:!i},{label:"reb",data:M.map((function(e){return e.reb})),fill:!1,borderColor:L.oliveDot,pointBackgroundColor:L.oliveDot,showLine:!1,hidden:!u},{label:"reb trailing mean",fill:!1,borderColor:L.oliveLine,pointBackgroundColor:L.oliveLine,showLine:!0,pointRadius:0,data:C.reb(M),hidden:!u},{label:"blk",data:M.map((function(e){return e.blk})),fill:!1,borderColor:L.tealDot,pointBackgroundColor:L.tealDot,showLine:!1,hidden:!f},{label:"blk trailing mean",fill:!1,borderColor:L.tealLine,pointBackgroundColor:L.tealLine,showLine:!0,pointRadius:0,data:C.blk(M),hidden:!f},{label:"stl",data:M.map((function(e){return e.stl})),fill:!1,borderColor:L.navyDot,pointBackgroundColor:L.navyDot,showLine:!1,hidden:!p},{label:"stl trailing mean",fill:!1,borderColor:L.navyLine,pointBackgroundColor:L.navyLine,showLine:!0,pointRadius:0,data:C.stl(M),hidden:!p},{label:"turnover",data:M.map((function(e){return e.turnover})),fill:!1,borderColor:L.redDot,pointBackgroundColor:L.redDot,showLine:!1,hidden:!h},{label:"turnover trailing mean",fill:!1,borderColor:L.redLine,pointBackgroundColor:L.redLine,showLine:!0,pointRadius:0,data:C.turnover(M),hidden:!h},{label:"min",data:M.map((function(e){return e.min?Number(e.min.split(":")[0]):null})),fill:!1,borderColor:L.orangeDot,pointBackgroundColor:L.orangeDot,showLine:!1,hidden:!P},{label:"min trailing mean",fill:!1,borderColor:L.orangeLine,pointBackgroundColor:L.orangeLine,showLine:!0,pointRadius:0,data:C.min(M),hidden:!P},{label:"pf",data:M.map((function(e){return e.pf})),fill:!1,borderColor:L.yellowDot,pointBackgroundColor:L.yellowDot,showLine:!1,hidden:!R},{label:"pf trailing mean",fill:!1,borderColor:L.yellowLine,pointBackgroundColor:L.yellowLine,showLine:!0,pointRadius:0,data:C.pf(M),hidden:!R},{label:"dreb",data:M.map((function(e){return e.dreb})),fill:!1,borderColor:L.limeDot,pointBackgroundColor:L.limeDot,showLine:!1,hidden:!g},{label:"dreb trailing mean",fill:!1,borderColor:L.limeLine,pointBackgroundColor:L.limeLine,showLine:!0,pointRadius:0,data:C.dreb(M),hidden:!g},{label:"oreb",data:M.map((function(e){return e.oreb})),fill:!1,borderColor:L.greenDot,pointBackgroundColor:L.greenDot,showLine:!1,hidden:!j},{label:"oreb trailing mean",fill:!1,borderColor:L.greenLine,pointBackgroundColor:L.greenLine,showLine:!0,pointRadius:0,data:C.oreb(M),hidden:!j},{label:"fg_pct",data:M.map((function(e){return e.fg_pct<=1?100*e.fg_pct:e.fg_pct})),fill:!1,borderColor:L.cyanDot,pointBackgroundColor:L.cyanDot,showLine:!1,hidden:!x},{label:"fg_pct trailing mean",fill:!1,borderColor:L.cyanLine,pointBackgroundColor:L.cyanLine,showLine:!0,pointRadius:0,data:C.fg_pct(M.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{fg_pct:e.fg_pct<=1?100*e.fg_pct:e.fg_pct})}))),hidden:!x},{label:"fg3_pct",data:M.map((function(e){return e.fg3_pct<=1?100*e.fg3_pct:e.fg3_pct})),fill:!1,borderColor:L.blueDot,pointBackgroundColor:L.blueDot,showLine:!1,hidden:!_},{label:"fg3_pct trailing mean",fill:!1,borderColor:L.blueLine,pointBackgroundColor:L.blueLine,showLine:!0,pointRadius:0,data:C.fg3_pct(M.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{fg3_pct:e.fg3_pct<=1?100*e.fg3_pct:e.fg3_pct})}))),hidden:!_},{label:"ft_pct",data:M.map((function(e){return e.ft_pct<=1?100*e.ft_pct:e.ft_pct})),fill:!1,borderColor:L.purpleDot,pointBackgroundColor:L.purpleDot,showLine:!1,hidden:!F},{label:"ft_pct trailing mean",fill:!1,borderColor:L.purpleLine,pointBackgroundColor:L.purpleLine,showLine:!0,pointRadius:0,data:C.ft_pct(M.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{ft_pct:e.ft_pct<=1?100*e.ft_pct:e.ft_pct})}))),hidden:!F},{label:"fga",data:M.map((function(e){return e.fga})),fill:!1,borderColor:L.magentaDot,pointBackgroundColor:L.magentaDot,showLine:!1,hidden:!O},{label:"fga trailing mean",fill:!1,borderColor:L.magentaLine,pointBackgroundColor:L.magentaLine,showLine:!0,pointRadius:0,data:C.fga(M),hidden:!O},{label:"fgm",data:M.map((function(e){return e.fgm})),fill:!1,borderColor:L.greyDot,pointBackgroundColor:L.greyDot,showLine:!1,hidden:!S},{label:"fgm trailing mean",fill:!1,borderColor:L.greyLine,pointBackgroundColor:L.greyLine,showLine:!0,pointRadius:0,data:C.fgm(M),hidden:!S},{label:"fg3a",data:M.map((function(e){return e.fg3a})),fill:!1,borderColor:L.pinkDot,pointBackgroundColor:L.pinkDot,showLine:!1,hidden:!k},{label:"fg3a trailing mean",fill:!1,borderColor:L.pinkLine,pointBackgroundColor:L.pinkLine,showLine:!0,pointRadius:0,data:C.fg3a(M),hidden:!k},{label:"fg3m",data:M.map((function(e){return e.fg3m})),fill:!1,borderColor:L.apricotDot,pointBackgroundColor:L.apricotDot,showLine:!1,hidden:!y},{label:"fg3m trailing mean",fill:!1,borderColor:L.apricotLine,pointBackgroundColor:L.apricotLine,showLine:!0,pointRadius:0,data:C.fg3m(M),hidden:!y},{label:"fta",data:M.map((function(e){return e.fta})),fill:!1,borderColor:L.beigeDot,pointBackgroundColor:L.beigeDot,showLine:!1,hidden:!D},{label:"fta trailing mean",fill:!1,borderColor:L.beigeLine,pointBackgroundColor:L.beigeLine,showLine:!0,pointRadius:0,data:C.fta(M),hidden:!D},{label:"ftm",data:M.map((function(e){return e.ftm})),fill:!1,borderColor:L.mintDot,pointBackgroundColor:L.mintDot,showLine:!1,hidden:!B},{label:"ftm trailing mean",fill:!1,borderColor:L.mintLine,pointBackgroundColor:L.mintLine,showLine:!0,pointRadius:0,data:C.ftm(M),hidden:!B}]};return Object(v.jsxs)("div",{children:[Object(v.jsx)(s.a,{style:{color:"white",paddingLeft:"30px"},children:Object(v.jsx)(d.a,{children:G?Object(v.jsxs)(b.a,{children:[Object(v.jsx)(w.a,{type:"Grid",color:"white",height:"25",width:"25"}),Object(v.jsx)("br",{})]}):Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(b.a,{children:Object(v.jsxs)("div",{children:[a[0].player.first_name," ",a[0].player.last_name,", ",t," - ",n,", ",J," games"]})})})})}),Object(v.jsx)("div",{className:"chart",children:Object(v.jsx)(m.Line,{data:z,options:{legend:{onClick:function(e){return e.stopPropagation()},display:!1},scales:{xAxes:[{ticks:{display:!1}}]}}})})]})},D=n(21),B="https://www.balldontlie.io/api/v1/stats",F={getPlayerStatsFromApi:function(){var e=Object(j.a)(g.a.mark((function e(t,n){var a,r,c,o,l,i,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a="",r=0;r<t.length;r++)a+="&seasons[]=",a+=t[r];return e.next=4,p.a.get("".concat(B,"?seasons[]=").concat(a,"&player_ids[]=").concat(n,"&per_page=100"));case 4:c=e.sent,o=c.data.meta.total_pages,console.log("totalPages",o),l=[],i=1;case 9:if(!(i<=o)){e.next=18;break}return console.log("getting stats from page",i),e.next=13,p.a.get("".concat(B,"?seasons[]=").concat(a,"&player_ids[]=").concat(n,"&per_page=100&page=").concat(i));case 13:s=e.sent,l=l.concat(s.data.data);case 15:i++,e.next=9;break;case 18:return console.log(l),e.abrupt("return",l);case 20:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),getPlayerStatsFromDB:function(){var e=Object(j.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("".concat("/api/statsdb/statsfromdb","/").concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},R=function(e){var t=e.players,n=e.setSelectedPlayer,a=e.setPlayerStats,r=e.setFetchingData,c=t.map((function(e){return{label:e.fullName,value:e.fullName}})),o=function(e){r(!0);var n=t.find((function(t){return t.fullName===e}));console.log("searched player",n),F.getPlayerStatsFromDB(n.apiId).then((function(e){a(e.data.sort((function(e,t){return new Date(e.game.date).getTime()-new Date(t.game.date).getTime()}))),r(!1)}))};return Object(v.jsx)("div",{children:Object(v.jsx)(D.a,{options:c,onChange:function(e){return t=e.value,n(t),void o(t);var t},placeholder:"Select player"})})},P=function(e){for(var t=e.setSelectedFirstSeason,n=e.setSelectedLastSeason,a=e.selectedFirstSeason,r=e.selectedLastSeason,c=2020,o=[];c>=1980;)o.push({label:c.toString(),value:c.toString()}),c--;for(var l=1980,i=[];l<=2020;)i.push({label:l.toString(),value:l.toString()}),l++;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(d.a,{children:[Object(v.jsx)(b.a,{sm:4}),Object(v.jsx)(b.a,{sm:4,children:Object(v.jsx)(D.a,{options:i,onChange:function(e){return t(e.value)},closeMenuOnSelect:!0,placeholder:a.toString()})}),Object(v.jsx)(b.a,{sm:4})]}),Object(v.jsxs)(d.a,{children:[Object(v.jsx)(b.a,{sm:4}),Object(v.jsx)(b.a,{sm:4,children:Object(v.jsx)(D.a,{options:o,onChange:function(e){return n(e.value)},closeMenuOnSelect:!0,placeholder:r})}),Object(v.jsx)(b.a,{sm:4})]})]})},N=n(231),T=n(233),G=function(e){var t=e.setRegularSeasonSelected,n=e.setPostSeasonSelected,r=Object(a.useState)("1"),c=Object(i.a)(r,2),o=c[0],l=c[1];return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(N.a,{toggle:!0,size:"md",children:[{name:"regular",value:"1"},{name:"post",value:"2"}].map((function(e,a){return Object(v.jsx)(T.a,{type:"radio",variant:"outline-secondary",name:"radio",value:e.value,checked:o===e.value,onChange:function(e){return function(e){"1"===e.currentTarget.value&&(t(!0),n(!1)),"2"===e.currentTarget.value&&(t(!1),n(!0)),l(e.currentTarget.value)}(e)},children:e.name},a)}))})})},M=n(232),A=function(e){var t=e.ptsSelected,n=e.setPtsSelected,a=e.astSelected,r=e.setAstSelected,c=e.rebSelected,o=e.setRebSelected,l=e.drebSelected,i=e.setDrebSelected,s=e.orebSelected,d=e.setOrebSelected,b=e.blkSelected,u=e.setBlkSelected,g=e.stlSelected,j=e.setStlSelected,f=e.turnoverSelected,p=e.setTurnoverSelected,h=e.fgaSelected,O=e.setFgaSelected,m=e.fgmSelected,S=e.setFgmSelected,x=e.fg_pctSelected,k=e.setFg_pctSelected,C=e.fg3aSelected,y=e.setFg3aSelected,w=e.fg3mSelected,_=e.setFg3mSelected,D=e.fg3_pctSelected,B=e.setFg3_pctSelected,F=e.ftaSelected,R=e.setFtaSelected,P=e.ftmSelected,N=e.setFtmSelected,T=e.ft_pctSelected,G=e.setFt_pctSelected,A=e.pfSelected,E=e.minSelected,I=e.setMinSelected,J=e.setPfSelected,z=100;return Object(v.jsxs)("div",{style:{color:"white"},children:[Object(v.jsx)(M.a,{children:Object(v.jsx)("table",{children:Object(v.jsx)("tbody",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{style:{width:z,backgroundColor:L.lightGreyLine,color:"black"},children:Object(v.jsx)(M.a.Check,{inline:!0,onChange:function(){return n(!t)},type:"checkbox",label:"pts"})}),Object(v.jsx)("td",{style:{width:z,backgroundColor:L.brownLine,color:"black"},children:Object(v.jsx)(M.a.Check,{inline:!0,onChange:function(){return r(!a)},type:"checkbox",label:"ast"})}),Object(v.jsx)("td",{style:{width:z,backgroundColor:L.oliveLine,color:"black"},children:Object(v.jsx)(M.a.Check,{inline:!0,onChange:function(){return o(!c)},type:"checkbox",label:"reb"})}),Object(v.jsx)("td",{style:{width:z,backgroundColor:L.tealLine,color:"black"},children:Object(v.jsx)(M.a.Check,{inline:!0,onChange:function(){return u(!b)},type:"checkbox",label:"blk"})})]})})})}),Object(v.jsx)(M.a,{children:Object(v.jsx)("table",{children:Object(v.jsx)("tbody",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{style:{width:z,backgroundColor:L.navyLine},children:Object(v.jsx)(M.a.Check,{inline:!0,onChange:function(){return j(!g)},type:"checkbox",label:"stl"})}),Object(v.jsx)("td",{style:{width:z,backgroundColor:L.redLine,color:"black"},children:Object(v.jsx)(M.a.Check,{inline:!0,onChange:function(){return p(!f)},type:"checkbox",label:"to"})}),Object(v.jsx)("td",{style:{width:z,backgroundColor:L.yellowLine,color:"black"},children:Object(v.jsx)(M.a.Check,{inline:!0,onChange:function(){return J(!A)},type:"checkbox",label:"pf"})}),Object(v.jsx)("td",{style:{width:z,backgroundColor:L.orangeLine},children:Object(v.jsx)(M.a.Check,{inline:!0,onChange:function(){return I(!E)},type:"checkbox",label:"min"})})]})})})}),Object(v.jsx)(M.a,{children:Object(v.jsx)("table",{children:Object(v.jsx)("tbody",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{style:{width:z,backgroundColor:L.cyanLine,color:"black"},children:Object(v.jsx)(M.a.Check,{inline:!0,onChange:function(){return k(!x)},type:"checkbox",label:"fg_pct"})}),Object(v.jsx)("td",{style:{width:z,backgroundColor:L.magentaLine,color:"black"},children:Object(v.jsx)(M.a.Check,{inline:!0,onChange:function(){return O(!h)},type:"checkbox",label:"fga"})}),Object(v.jsx)("td",{style:{width:z,backgroundColor:L.greyLine,color:"black"},children:Object(v.jsx)(M.a.Check,{inline:!0,onChange:function(){return S(!m)},type:"checkbox",label:"fgm"})})]})})})}),Object(v.jsx)(M.a,{children:Object(v.jsx)("table",{children:Object(v.jsx)("tbody",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{style:{width:z,backgroundColor:L.blueLine,color:"black"},children:Object(v.jsx)(M.a.Check,{inline:!0,onChange:function(){return B(!D)},type:"checkbox",label:"fg3_pct"})}),Object(v.jsx)("td",{style:{width:z,backgroundColor:L.pinkLine,color:"black"},children:Object(v.jsx)(M.a.Check,{inline:!0,onChange:function(){return y(!C)},type:"checkbox",label:"fg3a"})}),Object(v.jsx)("td",{style:{width:z,backgroundColor:L.apricotLine,color:"black"},children:Object(v.jsx)(M.a.Check,{inline:!0,onChange:function(){return _(!w)},type:"checkbox",label:"fg3m"})})]})})})}),Object(v.jsx)(M.a,{children:Object(v.jsx)("table",{children:Object(v.jsx)("tbody",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{style:{width:z,backgroundColor:L.purpleLine,color:"black"},children:Object(v.jsx)(M.a.Check,{inline:!0,onChange:function(){return G(!T)},type:"checkbox",label:"ft_pct"})}),Object(v.jsx)("td",{style:{width:z,backgroundColor:L.beigeLine,color:"black"},children:Object(v.jsx)(M.a.Check,{inline:!0,onChange:function(){return R(!F)},type:"checkbox",label:"fta"})}),Object(v.jsx)("td",{style:{width:z,backgroundColor:L.mintLine,color:"black"},children:Object(v.jsx)(M.a.Check,{inline:!0,onChange:function(){return N(!P)},type:"checkbox",label:"ftm"})})]})})})}),Object(v.jsx)(M.a,{children:Object(v.jsx)("table",{children:Object(v.jsx)("tbody",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{style:{width:z,backgroundColor:L.limeLine,color:"black"},children:Object(v.jsx)(M.a.Check,{inline:!0,onChange:function(){return i(!l)},type:"checkbox",label:"dreb"})}),Object(v.jsx)("td",{style:{width:z,backgroundColor:L.greenLine,color:"black"},children:Object(v.jsx)(M.a.Check,{inline:!0,onChange:function(){return d(!s)},type:"checkbox",label:"oreb"})})]})})})}),Object(v.jsx)("br",{})]})},E=n.p+"static/media/ball_logov3.965d973b.png",I=function(){return Object(v.jsx)("img",{src:E,alt:"ball_logo",style:{width:"75px",height:"75px"}})},J=n(77);var z=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),o=Object(i.a)(c,2),u=o[0],g=o[1],j=Object(a.useState)([]),f=Object(i.a)(j,2),p=f[0],m=f[1],S=Object(a.useState)(""),x=Object(i.a)(S,2)[1],k=Object(a.useState)(1980),C=Object(i.a)(k,2),L=C[0],y=C[1],D=Object(a.useState)(2020),B=Object(i.a)(D,2),F=B[0],N=B[1],T=Object(a.useState)(!0),M=Object(i.a)(T,2),E=M[0],z=M[1],q=Object(a.useState)(!1),H=Object(i.a)(q,2),K=H[0],Q=H[1],U=Object(a.useState)(!1),V=Object(i.a)(U,2),W=V[0],X=V[1],Y=Object(a.useState)(!1),Z=Object(i.a)(Y,2),$=Z[0],ee=Z[1],te=Object(a.useState)(!1),ne=Object(i.a)(te,2),ae=ne[0],re=ne[1],ce=Object(a.useState)(!1),oe=Object(i.a)(ce,2),le=oe[0],ie=oe[1],se=Object(a.useState)(!1),de=Object(i.a)(se,2),be=de[0],ue=de[1],ge=Object(a.useState)(!1),je=Object(i.a)(ge,2),fe=je[0],pe=je[1],he=Object(a.useState)(!1),Oe=Object(i.a)(he,2),me=Oe[0],Se=Oe[1],xe=Object(a.useState)(!1),ke=Object(i.a)(xe,2),Ce=ke[0],Le=ke[1],ye=Object(a.useState)(!1),we=Object(i.a)(ye,2),ve=we[0],_e=we[1],De=Object(a.useState)(!1),Be=Object(i.a)(De,2),Fe=Be[0],Re=Be[1],Pe=Object(a.useState)(!1),Ne=Object(i.a)(Pe,2),Te=Ne[0],Ge=Ne[1],Me=Object(a.useState)(!1),Ae=Object(i.a)(Me,2),Ee=Ae[0],Ie=Ae[1],Je=Object(a.useState)(!1),ze=Object(i.a)(Je,2),qe=ze[0],He=ze[1],Ke=Object(a.useState)(!1),Qe=Object(i.a)(Ke,2),Ue=Qe[0],Ve=Qe[1],We=Object(a.useState)(!1),Xe=Object(i.a)(We,2),Ye=Xe[0],Ze=Xe[1],$e=Object(a.useState)(!1),et=Object(i.a)($e,2),tt=et[0],nt=et[1],at=Object(a.useState)(!1),rt=Object(i.a)(at,2),ct=rt[0],ot=rt[1],lt=Object(a.useState)(!1),it=Object(i.a)(lt,2),st=it[0],dt=it[1],bt=Object(a.useState)(!1),ut=Object(i.a)(bt,2),gt=ut[0],jt=ut[1],ft=Object(a.useState)(!1),pt=Object(i.a)(ft,2),ht=pt[0],Ot=pt[1];return Object(a.useEffect)((function(){h.getTeams().then((function(e){m(e.data)})),O.getPlayers().then((function(e){r(e.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{fullName:"".concat(e.firstName," ").concat(e.lastName)})})).sort((function(e,t){return e.lastName>t.lastName?1:t.lastName>e.lastName?-1:0})))}))}),[]),Object(v.jsx)(J.a,{children:Object(v.jsx)("div",{style:{backgroundColor:"#17202A",height:"100vh",display:"flex",flexDirection:"column",alignContent:"center"},children:Object(v.jsx)("div",{className:"container",style:{paddingTop:"2vh",backgroundColor:"#17202A"},children:Object(v.jsxs)(s.a,{children:[Object(v.jsxs)(d.a,{children:[Object(v.jsx)(b.a,{sm:4}),Object(v.jsx)(b.a,{sm:4,children:Object(v.jsx)(R,{players:n,setSelectedPlayer:x,setPlayerStats:g,fetchingData:ht,setFetchingData:Ot})}),Object(v.jsx)(b.a,{sm:4})]}),Object(v.jsx)(P,{setSelectedFirstSeason:y,setSelectedLastSeason:N,selectedFirstSeason:L,selectedLastSeason:F}),Object(v.jsx)("br",{}),0!==u.length||ht?Object(v.jsx)(v.Fragment,{}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(d.a,{style:{textAlign:"center"},children:[Object(v.jsx)(b.a,{sm:5,xs:1}),Object(v.jsx)(b.a,{sm:2,xs:10,children:Object(v.jsx)(I,{})}),Object(v.jsx)(b.a,{sm:5,xs:1})]}),Object(v.jsx)("br",{})]}),Object(v.jsxs)(d.a,{style:{textAlign:"center"},children:[Object(v.jsx)(b.a,{sm:5,xs:4}),Object(v.jsx)(b.a,{sm:2,xs:4,children:ht&&0===u.length?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("br",{}),Object(v.jsx)(w.a,{type:"Grid",color:"white",height:"75",width:"75"}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{})]}):Object(v.jsx)(v.Fragment,{})}),Object(v.jsx)(b.a,{sm:5,xs:4})]}),Object(v.jsx)(d.a,{className:"justify-content-md-center",children:Object(v.jsx)(b.a,{children:u.length>0?Object(v.jsx)(_,{playerStats:u,teams:p,regularSeasonSelected:E,postSeasonSelected:K,ptsSelected:W,astSelected:$,rebSelected:ae,drebSelected:le,orebSelected:be,blkSelected:fe,stlSelected:me,turnoverSelected:Ce,fgaSelected:ve,fgmSelected:Fe,fg_pctSelected:Te,fg3aSelected:Ee,fg3mSelected:qe,fg3_pctSelected:Ue,ftaSelected:Ye,ftmSelected:tt,ft_pctSelected:ct,pfSelected:st,minSelected:gt,selectedFirstSeason:L,selectedLastSeason:F,fetchingData:ht}):Object(v.jsx)(v.Fragment,{})})}),Object(v.jsx)("br",{}),Object(v.jsxs)(d.a,{children:[Object(v.jsx)(b.a,{sm:4}),Object(v.jsx)(b.a,{sm:4,children:Object(v.jsx)(A,{ptsSelected:W,setPtsSelected:X,astSelected:$,setAstSelected:ee,rebSelected:ae,setRebSelected:re,drebSelected:le,setDrebSelected:ie,orebSelected:be,setOrebSelected:ue,blkSelected:fe,setBlkSelected:pe,stlSelected:me,setStlSelected:Se,turnoverSelected:Ce,setTurnoverSelected:Le,fgaSelected:ve,setFgaSelected:_e,fgmSelected:Fe,setFgmSelected:Re,fg_pctSelected:Te,setFg_pctSelected:Ge,fg3aSelected:Ee,setFg3aSelected:Ie,fg3mSelected:qe,setFg3mSelected:He,fg3_pctSelected:Ue,setFg3_pctSelected:Ve,ftaSelected:Ye,setFtaSelected:Ze,ftmSelected:tt,setFtmSelected:nt,ft_pctSelected:ct,setFt_pctSelected:ot,pfSelected:st,setPfSelected:dt,minSelected:gt,setMinSelected:jt})}),Object(v.jsx)(b.a,{sm:4})]}),Object(v.jsxs)(d.a,{children:[Object(v.jsx)(b.a,{sm:4}),Object(v.jsx)(b.a,{sm:4,children:Object(v.jsx)(G,{regularSeasonSelected:E,postSeasonSelected:K,setRegularSeasonSelected:z,setPostSeasonSelected:Q})}),Object(v.jsx)(b.a,{sm:4})]}),Object(v.jsx)("br",{})]})})})})};o.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(z,{})}),document.getElementById("root"))}},[[228,1,2]]]);
//# sourceMappingURL=main.a267656c.chunk.js.map