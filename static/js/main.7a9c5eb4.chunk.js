(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a(20)},2:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=2},20:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(12),s=a(4),i=a(5),c=a(7),o=a(6),d=a(8),u=a(1),m=a.n(u),h=(a(11),function(e){var t=e.disabled,a=e.onClick,n=e.color,r=e.name;return l.a.createElement("p",{className:"control"},l.a.createElement("button",{className:"button is-".concat(n," is-outlined is-rounded is-medium"),disabled:t,onClick:a},r))}),v=function(e){var t=e.pause,a=e.onPausedToggle;return l.a.createElement("div",{className:"field is-grouped is-grouped-centered"},l.a.createElement(h,{disabled:t,onClick:a,color:"danger",name:"Pause"}),l.a.createElement(h,{disabled:!t,onClick:a,color:"success",name:"Resume"}))},E=function(e){var t=e.count,a=e.label;return l.a.createElement("div",{className:"level-item has-text-centered"},l.a.createElement("div",null,l.a.createElement("p",{className:"title"},t),l.a.createElement("p",{className:"heading"},a)))},f=function(e){var t=e.interval;return l.a.createElement("div",{className:"section"},l.a.createElement("nav",{className:"level"},l.a.createElement(E,{count:Math.floor(t.asDays()),label:"Days"}),l.a.createElement(E,{count:Math.floor(t.hours()).toString().padStart(2,"0"),label:"Hours"}),l.a.createElement(E,{count:Math.floor(t.minutes()).toString().padStart(2,"0"),label:"Minutes"}),l.a.createElement(E,{count:Math.floor(t.seconds()).toString().padStart(2,"0"),label:"Seconds"})))},g=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(l)))).state={date:"",valid:!0,dirty:!1},a.handleDateChange=function(e){var t=e.target.value,n=m()(t),l=n.isValid()&&n.isAfter(m()());a.setState({valid:l,date:t,dirty:!0}),l&&a.props.onDateReset(m()(n))},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.date,a=e.valid,n=e.dirty,r="input is-medium is-outlined is-rounded";return a&&n&&(r+=" is-success"),!a&&n&&(r+=" is-danger"),l.a.createElement("div",{className:"field is-grouped is-grouped-centered",style:{marginBottom:"50px"}},l.a.createElement("div",{className:"control has-text-centered"},l.a.createElement("input",{className:r,type:"text",value:t,onChange:this.handleDateChange,placeholder:"Type a date 2019-10-25"}),!a&&n&&l.a.createElement("i",{className:"help is-danger"},"Please endter valid (and futre!) date")))}}]),t}(l.a.Component),p=function(e){var t=e.active,a=e.onToggle,n=e.holidays;return l.a.createElement("div",{className:"modal ".concat(t?"is-active":"")},l.a.createElement("div",{className:"modal-background",onClick:a}),l.a.createElement("div",{className:"modal-card"},l.a.createElement("header",{className:"modal-card-head"},l.a.createElement("p",{className:"modal-card-title"},"Holidays"),l.a.createElement("button",{className:"delete","aria-label":"close",onClick:a})),l.a.createElement("section",{className:"modal-card-body"},l.a.createElement("table",{className:"table is-fullwidth is-hoverable is-striped is-bordered"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Date"),l.a.createElement("th",null,"Holiday"))),l.a.createElement("tbody",null,n.map(function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,e.calendar()),l.a.createElement("td",null,e.isHoliday()))})))),">"))},y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(o.a)(t).call(this,e))).handleTogglePaused=function(){a.setState(function(e,t){var n=e.pause;(n=!n)?a.pause():a.resume();var l={pause:n};return!n&&(l.currentDate=m()()),l})},a.handleDateReset=function(e){a.setState({nextDate:e})},a.handleHolidayToggle=function(){a.setState({showHolidays:!a.state.showHolidays})},a.state={currentDate:m()(),nextDate:m()({year:m()().year()+1}),pause:!1,showHolidays:!1},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.resume()}},{key:"componentWillUnmount",value:function(){this.pause()}},{key:"getRemainingTime",value:function(){var e=this.state,t=e.currentDate,a=e.nextDate.diff(t);return m.a.duration(a)}},{key:"pause",value:function(){clearInterval(this.interval)}},{key:"resume",value:function(){var e=this;this.interval=setInterval(function(){e.setState({currentDate:m()()})},1e3)}},{key:"getHolidays",value:function(){var e=this.state,t=e.currentDate,a=e.nextDate;return t.holidaysBetween(a)}},{key:"render",value:function(){var e=this.state,t=e.pause,a=e.nextDate,n=e.showHolidays,r=e.currentDate,s=this.getRemainingTime(),i=this.getHolidays();return l.a.createElement("section",{className:"hero is-info is-bold is-fullheight has-text-centered"},l.a.createElement("div",{className:"hero-body"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"title"},a.format("MMM Do YYYY")," is Coming Up!",l.a.createElement("button",{className:"button is-small is-rounded is-light is-outlined",style:{margin:"5px 0 0 10px"},onClick:this.handleHolidayToggle},"Holidays")),l.a.createElement(f,{interval:s}),l.a.createElement(g,{onDateReset:this.handleDateReset}),l.a.createElement(v,{pause:t,onPausedToggle:this.handleTogglePaused}),l.a.createElement("section",{className:"section"},l.a.createElement("i",null,r.format("dddd, MMM Do YYYY (UTCZ)"))),l.a.createElement(p,{holidays:i,active:n,onToggle:this.handleHolidayToggle}))))}}]),t}(l.a.Component);a(19);Object(r.render)(l.a.createElement(function(e){return l.a.createElement(y,null)},null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.7a9c5eb4.chunk.js.map