
/* 
 * Copyright 2011 Nextmeta Inc.
 */
function checkAll(a){if(!a.length&&!a.disabled)a.checked=!0;else for(i=0;i<a.length;i++)a[i].checked=!0}function uncheckAll(a){if(!a.length&&!a.disabled)a.checked=!1;else for(i=0;i<a.length;i++)a[i].checked=!1}function go(a){document.forms[0].action=a;document.forms[0].submit()}function jumpBox(a){location.href=a.options[a.selectedIndex].value}
function popup(a,b,c){window.open(a,"POPUP","toolbar=no,width="+b+",height="+c+",fullscreen=no,status=no,menubar=no,scrollbars=no,resizable=yes,directories=no,location=no")}function popupScroll(a,b,c){window.open(a,"POPUP","toolbar=no,width="+b+",height="+c+",directories=no,status=no,scrollbars=1,resizable=1,menubar=0")}function htmlEncode(a){return $("<div/>").text(a).html()}function htmlDecode(a){return $("<div/>").html(a).text()}
function isNumeric(a){return void 0==a||null==a?!1:isNaN(a)?!1:!0}function safeAdd(a){return void 0==a||null==a?0:isNaN(a)?0:a}function isMissing(a){return 0==trim($("#"+a).val()).length?!0:!1}function isEmpty(a){var b="",b=void 0==a||null==a?"":String(a);return 0==trim(b).length?!0:!1}function trim(a){a=String(a).replace(/^\s+/,"");for(var b=a.length-1;0<=b;b--)if(/\S/.test(a.charAt(b))){a=a.substring(0,b+1);break}return a}
function leftOfChar(a,b){if(void 0==a||null==a||void 0==b||null==b)return"";var c=a.indexOf(b);return-1<c?left(a,c):""}function left(a,b){return void 0==a||null==a||0>b?"":b>a.length?a:a.substr(0,b)}function rightOfChar(a,b){if(void 0==a||null==a||void 0==b||null==b)return"";var c=a.indexOf(b);return-1<c?right(a,a.length-(c+b.length)):""}function right(a,b){return void 0==a||null==a||0>b?"":b>a.length?a:a.substr(a.length-b,b)}
function cloneObject(a){var b=a instanceof Array?[]:{},c;for(c in a){var d=a[c];if(null!=d)if("object"==typeof d)if(d instanceof Array){b[c]=[];for(var e=0;e<d.length;e++)"object"!=typeof d[e]?b[c].push(d[e]):b[c].push(cloneObject(d[e]))}else b[c]=cloneObject(d);else b[c]=d;else b[c]=d}return b}var dtCh="/",minYear=1900,maxYear=2079;function isInteger(a){var b;for(b=0;b<a.length;b++){var c=a.charAt(b);if("0">c||"9"<c)return!1}return!0}
function stripCharsInBag(a,b){var c,d="";for(c=0;c<a.length;c++){var e=a.charAt(c);-1==b.indexOf(e)&&(d+=e)}return d}function daysInFebruary(a){return 0==a%4&&(0!=a%100||0==a%400)?29:28}function DaysArray(a){for(var b=1;b<=a;b++){this[b]=31;if(4==b||6==b||9==b||11==b)this[b]=30;2==b&&(this[b]=29)}return this}
function isValidSmallDate(a){var b=DaysArray(12),c=a.indexOf(dtCh),d=a.indexOf(dtCh,c+1),e=a.substring(0,c),f=a.substring(c+1,d),g=a.substring(d+1);strYr=g;"0"==f.charAt(0)&&1<f.length&&(f=f.substring(1));"0"==e.charAt(0)&&1<e.length&&(e=e.substring(1));for(var h=1;3>=h;h++)"0"==strYr.charAt(0)&&1<strYr.length&&(strYr=strYr.substring(1));month=parseInt(e);day=parseInt(f);year=parseInt(strYr);return-1==c||-1==d||1>e.length||1>month||12<month||1>f.length||1>day||31<day||2==month&&day>daysInFebruary(year)||
day>b[month]||4!=g.length||0==year||year<minYear||year>maxYear||-1!=a.indexOf(dtCh,d+1)||!1==isInteger(stripCharsInBag(a,dtCh))?!1:!0}
function crrTools(){this.responseHandler=function(){};this.preRequestHandler=function(){};this.page=null;this.sendRequest=function(a,b){this.preRequestHandler(a,b);if(null!==this.page){var c={};c.action=a;c.value=b;var c=JSON.stringify(c),d=this.responseHandler;$.post(this.page+"?crr=1",{request:c},function(a){d(a)},"json")}};this.sendRemoteRequest=function(a){if(null!==this.page){var b=this.responseHandler;this.preRequestHandler(a);$.post(this.page+"?crr=1",{request:JSON.stringify(a)},function(a){b(a)},
"json")}}}
(function(){"undefined"===typeof NMUtils&&(addSuccessAlert=function(a){$("#admin_notifications").fadeIn(250);var b=$('<li class="success">'+a+"</li>").insertAfter("#admin_notifications li:last-child");setTimeout(function(){NMUtils.hideNotification(b)},6E3)},addErrorAlert=function(a){$("#admin_notifications").fadeIn(250);var b=$('<li class="error">'+a+'<span class="close_notification">x</span></li>').insertAfter("#admin_notifications li:last-child");setTimeout(function(){NMUtils.hideNotification(b)},1E4)},
hideNotification=function(a){$($(a)).slideUp(250,function(){$($(a)).remove();2>$("#admin_notifications > li").length&&$("#admin_notifications").fadeOut(250)})},closeAllNotifications=function(){$("#admin_notifications").hide();$("#admin_notifications li.success").remove();$("#admin_notifications li.error").remove()},NMUtils={addSuccessAlert:addSuccessAlert,addErrorAlert:addErrorAlert,hideNotification:hideNotification,closeAllNotifications:closeAllNotifications})})();
/* 
 * Copyright 2011 Nextmeta Inc.
 */