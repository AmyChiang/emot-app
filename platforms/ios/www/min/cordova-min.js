!function(){var e="3.5.0",n,t;!function(){function e(e){var t=e.factory,r=function(t){var r=t;return"."===t.charAt(0)&&(r=e.id.slice(0,e.id.lastIndexOf(i))+i+t.slice(2)),n(r)};return e.exports={},delete e.factory,t(r,e.exports,e),e.exports}var r={},o=[],a={},i=".";n=function(n){if(!r[n])throw"module "+n+" not found";if(n in a){var t=o.slice(a[n]).join("->")+"->"+n;throw"Cycle in require graph: "+t}if(r[n].factory)try{return a[n]=o.length,o.push(n),e(r[n])}finally{delete a[n],o.pop()}return r[n].exports},t=function(e,n){if(r[e])throw"module "+e+" already defined";r[e]={id:e,factory:n}},t.remove=function(e){delete r[e]},t.moduleMap=r}(),"object"==typeof module&&"function"==typeof n&&(module.exports.require=n,module.exports.define=t),t("cordova",function(n,r,o){function a(e,n){var t=document.createEvent("Events");if(t.initEvent(e,!1,!1),n)for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r]);return t}var i=n("cordova/channel"),c=n("cordova/platform"),u=document.addEventListener,d=document.removeEventListener,s=window.addEventListener,l=window.removeEventListener,f={},v={};document.addEventListener=function(e,n,t){var r=e.toLowerCase();"undefined"!=typeof f[r]?f[r].subscribe(n):u.call(document,e,n,t)},window.addEventListener=function(e,n,t){var r=e.toLowerCase();"undefined"!=typeof v[r]?v[r].subscribe(n):s.call(window,e,n,t)},document.removeEventListener=function(e,n,t){var r=e.toLowerCase();"undefined"!=typeof f[r]?f[r].unsubscribe(n):d.call(document,e,n,t)},window.removeEventListener=function(e,n,t){var r=e.toLowerCase();"undefined"!=typeof v[r]?v[r].unsubscribe(n):l.call(window,e,n,t)};var p={define:t,require:n,version:e,platformId:c.id,addWindowEventHandler:function(e){return v[e]=i.create(e)},addStickyDocumentEventHandler:function(e){return f[e]=i.createSticky(e)},addDocumentEventHandler:function(e){return f[e]=i.create(e)},removeWindowEventHandler:function(e){delete v[e]},removeDocumentEventHandler:function(e){delete f[e]},getOriginalHandlers:function(){return{document:{addEventListener:u,removeEventListener:d},window:{addEventListener:s,removeEventListener:l}}},fireDocumentEvent:function(e,n,t){var r=a(e,n);"undefined"!=typeof f[e]?t?f[e].fire(r):setTimeout(function(){"deviceready"==e&&document.dispatchEvent(r),f[e].fire(r)},0):document.dispatchEvent(r)},fireWindowEvent:function(e,n){var t=a(e,n);"undefined"!=typeof v[e]?setTimeout(function(){v[e].fire(t)},0):window.dispatchEvent(t)},callbackId:Math.floor(2e9*Math.random()),callbacks:{},callbackStatus:{NO_RESULT:0,OK:1,CLASS_NOT_FOUND_EXCEPTION:2,ILLEGAL_ACCESS_EXCEPTION:3,INSTANTIATION_EXCEPTION:4,MALFORMED_URL_EXCEPTION:5,IO_EXCEPTION:6,INVALID_ACTION:7,JSON_EXCEPTION:8,ERROR:9},callbackSuccess:function(e,n){try{p.callbackFromNative(e,!0,n.status,[n.message],n.keepCallback)}catch(t){console.log("Error in error callback: "+e+" = "+t)}},callbackError:function(e,n){try{p.callbackFromNative(e,!1,n.status,[n.message],n.keepCallback)}catch(t){console.log("Error in error callback: "+e+" = "+t)}},callbackFromNative:function(e,n,t,r,o){var a=p.callbacks[e];a&&(n&&t==p.callbackStatus.OK?a.success&&a.success.apply(null,r):n||a.fail&&a.fail.apply(null,r),o||delete p.callbacks[e])},addConstructor:function(e){i.onCordovaReady.subscribe(function(){try{e()}catch(n){console.log("Failed to run constructor: "+n)}})}};o.exports=p}),t("cordova/argscheck",function(e,n,t){function r(e,n){return/.*?\((.*?)\)/.exec(e)[1].split(", ")[n]}function o(e,n,t,o){if(u.enableChecks){for(var a=null,i,s=0;s<e.length;++s){var l=e.charAt(s),f=l.toUpperCase(),v=t[s];if("*"!=l&&(i=c.typeName(v),(null!==v&&void 0!==v||l!=f)&&i!=d[f])){a="Expected "+d[f];break}}if(a)throw a+=", but got "+i+".",a='Wrong type for parameter "'+r(o||t.callee,s)+'" of '+n+": "+a,"undefined"==typeof jasmine&&console.error(a),TypeError(a)}}function a(e,n){return void 0===e?n:e}var i=e("cordova/exec"),c=e("cordova/utils"),u=t.exports,d={A:"Array",D:"Date",N:"Number",S:"String",F:"Function",O:"Object"};u.checkArgs=o,u.getValue=a,u.enableChecks=!0}),t("cordova/base64",function(e,n,t){function r(e){for(var n=e.byteLength,t="",r,o=c(),i=0;n-2>i;i+=3)r=(e[i]<<16)+(e[i+1]<<8)+e[i+2],t+=o[r>>12],t+=o[4095&r];return n-i==2?(r=(e[i]<<16)+(e[i+1]<<8),t+=o[r>>12],t+=a[(4095&r)>>6],t+="="):n-i==1&&(r=e[i]<<16,t+=o[r>>12],t+="=="),t}var o=n;o.fromArrayBuffer=function(e){var n=new Uint8Array(e);return r(n)},o.toArrayBuffer=function(e){for(var n="undefined"!=typeof atob?atob(e):new Buffer(e,"base64").toString("binary"),t=new ArrayBuffer(n.length),r=new Uint8Array(t),o=0,a=n.length;a>o;o++)r[o]=n.charCodeAt(o);return t};var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",i,c=function(){i=[];for(var e=0;64>e;e++)for(var n=0;64>n;n++)i[64*e+n]=a[e]+a[n];return c=function(){return i},i}}),t("cordova/builder",function(e,n,t){function r(e,n,t){for(var r in e)e.hasOwnProperty(r)&&n.apply(t,[e[r],r])}function o(e,t,r){n.replaceHookForTesting(e,t),e[t]=r,e[t]!==r&&u.defineGetter(e,t,function(){return r})}function a(e,n,t,r){r?u.defineGetter(e,n,function(){return console.log(r),delete e[n],o(e,n,t),t}):o(e,n,t)}function i(n,t,o,d){r(t,function(t,r){try{var s=t.path?e(t.path):{};o?("undefined"==typeof n[r]?a(n,r,s,t.deprecated):"undefined"!=typeof t.path&&(d?c(n[r],s):a(n,r,s,t.deprecated)),s=n[r]):"undefined"==typeof n[r]?a(n,r,s,t.deprecated):s=n[r],t.children&&i(s,t.children,o,d)}catch(l){u.alert("Exception building Cordova JS globals: "+l+' for key "'+r+'"')}})}function c(e,n){for(var t in n)n.hasOwnProperty(t)&&(e.prototype&&e.prototype.constructor===e?o(e.prototype,t,n[t]):"object"==typeof n[t]&&"object"==typeof e[t]?c(e[t],n[t]):o(e,t,n[t]))}var u=e("cordova/utils");n.buildIntoButDoNotClobber=function(e,n){i(n,e,!1,!1)},n.buildIntoAndClobber=function(e,n){i(n,e,!0,!1)},n.buildIntoAndMerge=function(e,n){i(n,e,!0,!0)},n.recursiveMerge=c,n.assignOrWrapInDeprecateGetter=a,n.replaceHookForTesting=function(){}}),t("cordova/channel",function(e,n,t){function r(e){if("function"!=typeof e)throw"Function required as first argument!"}var o=e("cordova/utils"),a=1,i=function(e,n){this.type=e,this.handlers={},this.state=n?1:0,this.fireArgs=null,this.numHandlers=0,this.onHasSubscribersChange=null},c={join:function(e,n){for(var t=n.length,r=t,o=function(){--r||e()},a=0;t>a;a++){if(0===n[a].state)throw Error("Can only use join with sticky channels.");n[a].subscribe(o)}t||e()},create:function(e){return c[e]=new i(e,!1)},createSticky:function(e){return c[e]=new i(e,!0)},deviceReadyChannelsArray:[],deviceReadyChannelsMap:{},waitForInitialization:function(e){if(e){var n=c[e]||this.createSticky(e);this.deviceReadyChannelsMap[e]=n,this.deviceReadyChannelsArray.push(n)}},initializationComplete:function(e){var n=this.deviceReadyChannelsMap[e];n&&n.fire()}};i.prototype.subscribe=function(e,n){if(r(e),2==this.state)return void e.apply(n||this,this.fireArgs);var t=e,i=e.observer_guid;"object"==typeof n&&(t=o.close(n,e)),i||(i=""+a++),t.observer_guid=i,e.observer_guid=i,this.handlers[i]||(this.handlers[i]=t,this.numHandlers++,1==this.numHandlers&&this.onHasSubscribersChange&&this.onHasSubscribersChange())},i.prototype.unsubscribe=function(e){r(e);var n=e.observer_guid,t=this.handlers[n];t&&(delete this.handlers[n],this.numHandlers--,0===this.numHandlers&&this.onHasSubscribersChange&&this.onHasSubscribersChange())},i.prototype.fire=function(e){var n=!1,t=Array.prototype.slice.call(arguments);if(1==this.state&&(this.state=2,this.fireArgs=t),this.numHandlers){var r=[];for(var o in this.handlers)r.push(this.handlers[o]);for(var a=0;a<r.length;++a)r[a].apply(this,t);2==this.state&&this.numHandlers&&(this.numHandlers=0,this.handlers={},this.onHasSubscribersChange&&this.onHasSubscribersChange())}},c.createSticky("onDOMContentLoaded"),c.createSticky("onNativeReady"),c.createSticky("onCordovaReady"),c.createSticky("onPluginsReady"),c.createSticky("onDeviceReady"),c.create("onResume"),c.create("onPause"),c.createSticky("onDestroy"),c.waitForInitialization("onCordovaReady"),c.waitForInitialization("onDOMContentLoaded"),t.exports=c}),t("cordova/exec",function(e,n,t){function r(){var e=document.createElement("iframe");return e.style.display="none",document.body.appendChild(e),e}function o(){var e=r();return e.contentWindow.history.replaceState(null,null,"file:///#"),e}function a(){if(g===h.XHR_WITH_PAYLOAD)return!0;if(g===h.XHR_OPTIONAL_PAYLOAD){for(var e=0,n=0;n<C.length;++n)e+=C[n].length;return 4500>e}return!1}function i(e){if(!e||"Array"!=p.typeName(e))return e;var n=[];return e.forEach(function(e,t){n.push("ArrayBuffer"==p.typeName(e)?{CDVType:"ArrayBuffer",data:y.fromArrayBuffer(e)}:e)}),n}function c(e){if("ArrayBuffer"==e.CDVType){var n=function(e){for(var n=new Uint8Array(e.length),t=0;t<e.length;t++)n[t]=e.charCodeAt(t);return n.buffer},t=function(e){return n(atob(e))};e=t(e.data)}return e}function u(e){var n=[];return e&&e.hasOwnProperty("CDVType")?"MultiPart"==e.CDVType?e.messages.forEach(function(e){n.push(c(e))}):n.push(c(e)):n.push(e),n}function d(){void 0===g&&(g=-1==navigator.userAgent.indexOf(" 5_")?h.IFRAME_NAV:h.XHR_NO_PAYLOAD);var e,n,t,r,o,a,c=null;if("string"!=typeof arguments[0])e=arguments[0],n=arguments[1],t=arguments[2],r=arguments[3],o=arguments[4],c="INVALID";else try{return a=arguments[0].split("."),r=a.pop(),t=a.join("."),o=Array.prototype.splice.call(arguments,1),void console.log('The old format of this exec call has been removed (deprecated since 2.1). Change to: cordova.exec(null, null, "'+t+'", "'+r+'",'+JSON.stringify(o)+");")}catch(u){}o=o||[],(e||n)&&(c=t+f.callbackId++,f.callbacks[c]={success:e,fail:n}),o=i(o);var d=[c,t,r,o];if(C.push(JSON.stringify(d)),!_&&1==C.length)switch(g){case h.XHR_NO_PAYLOAD:case h.XHR_WITH_PAYLOAD:case h.XHR_OPTIONAL_PAYLOAD:s();break;default:l()}}function s(){A&&4!=A.readyState&&(A=null),A=A||new XMLHttpRequest,A.open("HEAD","/!gap_exec?"+ +new Date,!0),O||(O=/.*\((.*)\)/.exec(navigator.userAgent)[1]),A.setRequestHeader("vc",O),A.setRequestHeader("rc",++E),a()&&A.setRequestHeader("cmds",d.nativeFetchMessages()),A.send(null)}function l(){if(!document.body)return void setTimeout(l);if(g===h.IFRAME_HASH_NO_PAYLOAD||g===h.IFRAME_HASH_WITH_PAYLOAD){b=b||o(),b.contentWindow||(b=o()),w=3^w;var e="%0"+w;g===h.IFRAME_HASH_WITH_PAYLOAD&&(e+=d.nativeFetchMessages()),b.contentWindow.location.hash=e}else m=m||r(),m.contentWindow||(m=r()),m.src="gap://ready"}var f=e("cordova"),v=e("cordova/channel"),p=e("cordova/utils"),y=e("cordova/base64"),h={IFRAME_NAV:0,XHR_NO_PAYLOAD:1,XHR_WITH_PAYLOAD:2,XHR_OPTIONAL_PAYLOAD:3,IFRAME_HASH_NO_PAYLOAD:4,IFRAME_HASH_WITH_PAYLOAD:5},g,m,b,w=1,A,E=0,O=null,C=[],_=0;d.jsToNativeModes=h,d.setJsToNativeBridgeMode=function(e){m&&(m.parentNode.removeChild(m),m=null),g=e},d.nativeFetchMessages=function(){if(!C.length)return"";var e="["+C.join(",")+"]";return C.length=0,e},d.nativeCallback=function(e,n,t,r){return d.nativeEvalAndFetch(function(){var o=0===n||1===n,a=u(t);f.callbackFromNative(e,o,n,a,r)})},d.nativeEvalAndFetch=function(e){_++;try{return e(),d.nativeFetchMessages()}finally{_--}},t.exports=d}),t("cordova/exec/proxy",function(e,n,t){var r={};t.exports={add:function(e,n){return console.log("adding proxy for "+e),r[e]=n,n},remove:function(e){var n=r[e];return delete r[e],r[e]=null,n},get:function(e,n){return r[e]?r[e][n]:null}}}),t("cordova/init",function(e,n,t){function r(e){for(var n=0;n<e.length;++n)2!=e[n].state&&console.log("Channel not fired: "+e[n].type)}function o(e){var n=function(){};n.prototype=e;var t=new n;if(n.bind)for(var r in e)"function"==typeof e[r]&&(t[r]=e[r].bind(e));return t}var a=e("cordova/channel"),i=e("cordova"),c=e("cordova/modulemapper"),u=e("cordova/platform"),d=e("cordova/pluginloader"),s=[a.onNativeReady,a.onPluginsReady];window.setTimeout(function(){2!=a.onDeviceReady.state&&(console.log("deviceready has not fired after 5 seconds."),r(s),r(a.deviceReadyChannelsArray))},5e3),window.navigator&&(window.navigator=o(window.navigator)),window.console||(window.console={log:function(){}}),window.console.warn||(window.console.warn=function(e){this.log("warn: "+e)}),a.onPause=i.addDocumentEventHandler("pause"),a.onResume=i.addDocumentEventHandler("resume"),a.onDeviceReady=i.addStickyDocumentEventHandler("deviceready"),"complete"==document.readyState||"interactive"==document.readyState?a.onDOMContentLoaded.fire():document.addEventListener("DOMContentLoaded",function(){a.onDOMContentLoaded.fire()},!1),window._nativeReady&&a.onNativeReady.fire(),c.clobbers("cordova","cordova"),c.clobbers("cordova/exec","cordova.exec"),c.clobbers("cordova/exec","Cordova.exec"),u.bootstrap&&u.bootstrap(),setTimeout(function(){d.load(function(){a.onPluginsReady.fire()})},0),a.join(function(){c.mapModules(window),u.initialize&&u.initialize(),a.onCordovaReady.fire(),a.join(function(){e("cordova").fireDocumentEvent("deviceready")},a.deviceReadyChannelsArray)},s)}),t("cordova/init_b",function(e,n,t){function r(e){for(var n=0;n<e.length;++n)2!=e[n].state&&console.log("Channel not fired: "+e[n].type)}function o(e){var n=function(){};n.prototype=e;var t=new n;if(n.bind)for(var r in e)"function"==typeof e[r]&&(t[r]=e[r].bind(e));return t}var a=e("cordova/channel"),i=e("cordova"),c=e("cordova/platform"),u=[a.onDOMContentLoaded,a.onNativeReady];i.exec=e("cordova/exec"),window.setTimeout(function(){2!=a.onDeviceReady.state&&(console.log("deviceready has not fired after 5 seconds."),r(u),r(a.deviceReadyChannelsArray))},5e3),window.navigator&&(window.navigator=o(window.navigator)),window.console||(window.console={log:function(){}}),window.console.warn||(window.console.warn=function(e){this.log("warn: "+e)}),a.onPause=i.addDocumentEventHandler("pause"),a.onResume=i.addDocumentEventHandler("resume"),a.onDeviceReady=i.addStickyDocumentEventHandler("deviceready"),"complete"==document.readyState||"interactive"==document.readyState?a.onDOMContentLoaded.fire():document.addEventListener("DOMContentLoaded",function(){a.onDOMContentLoaded.fire()},!1),window._nativeReady&&a.onNativeReady.fire(),c.bootstrap&&c.bootstrap(),a.join(function(){c.initialize&&c.initialize(),a.onCordovaReady.fire(),a.join(function(){e("cordova").fireDocumentEvent("deviceready")},a.deviceReadyChannelsArray)},u)}),t("cordova/modulemapper",function(e,n,r){function o(e,n,t,r){if(!(n in c))throw new Error("Module "+n+" does not exist.");u.push(e,n,t),r&&(d[t]=r)}function a(e,n){if(!e)return n;for(var t=e.split("."),r=n,o=0,a;a=t[o];++o)r=r[a]=r[a]||{};return r}var i=e("cordova/builder"),c=t.moduleMap,u,d;n.reset=function(){u=[],d={}},n.clobbers=function(e,n,t){o("c",e,n,t)},n.merges=function(e,n,t){o("m",e,n,t)},n.defaults=function(e,n,t){o("d",e,n,t)},n.runs=function(e){o("r",e,null)},n.mapModules=function(n){var t={};n.CDV_origSymbols=t;for(var r=0,o=u.length;o>r;r+=3){var c=u[r],s=u[r+1],l=e(s);if("r"!=c){var f=u[r+2],v=f.lastIndexOf("."),p=f.substr(0,v),y=f.substr(v+1),h=f in d?"Access made to deprecated symbol: "+f+". "+h:null,g=a(p,n),m=g[y];"m"==c&&m?i.recursiveMerge(m,l):("d"==c&&!m||"d"!=c)&&(f in t||(t[f]=m),i.assignOrWrapInDeprecateGetter(g,y,l,h))}}},n.getOriginalSymbol=function(e,n){var t=e.CDV_origSymbols;if(t&&n in t)return t[n];for(var r=n.split("."),o=e,a=0;a<r.length;++a)o=o&&o[r[a]];return o},n.reset()}),t("cordova/platform",function(e,n,t){t.exports={id:"ios",bootstrap:function(){e("cordova/channel").onNativeReady.fire()}}}),t("cordova/pluginloader",function(e,n,r){function o(e,r,o,a){a=a||o,e in t.moduleMap?o():n.injectScript(r,function(){e in t.moduleMap?o():a()},a)}function a(e,n){for(var t=0,r;r=e[t];t++){if(r.clobbers&&r.clobbers.length)for(var o=0;o<r.clobbers.length;o++)u.clobbers(r.id,r.clobbers[o]);if(r.merges&&r.merges.length)for(var a=0;a<r.merges.length;a++)u.merges(r.id,r.merges[a]);r.runs&&u.runs(r.id)}n()}function i(e,n,t){function r(){--i||a(n,t)}var i=n.length;if(!i)return void t();for(var c=0;c<n.length;c++)o(n[c].id,e+n[c].file,r)}function c(){for(var e=null,n=document.getElementsByTagName("script"),t="cordova.js",r=n.length-1;r>-1;r--){var o=n[r].src.replace(/\?.*$/,"");if(o.indexOf(t)==o.length-t.length){e=o.substring(0,o.length-t.length);break}}return e}var u=e("cordova/modulemapper"),d=e("cordova/urlutil");n.injectScript=function(e,n,t){var r=document.createElement("script");r.onload=n,r.onerror=t,r.src=e,document.head.appendChild(r)},n.load=function(n){var t=c();null===t&&(console.log("Could not find cordova.js script tag. Plugin loading may fail."),t=""),o("cordova/plugin_list",t+"cordova_plugins.js",function(){var r=e("cordova/plugin_list");i(t,r,n)},n)}}),t("cordova/urlutil",function(e,n,t){n.makeAbsolute=function r(e){var n=document.createElement("a");return n.href=e,n.href}}),t("cordova/utils",function(e,n,t){function r(e){for(var n="",t=0;e>t;t++){var r=parseInt(256*Math.random(),10).toString(16);1==r.length&&(r="0"+r),n+=r}return n}var o=n;o.defineGetterSetter=function(e,n,t,r){if(Object.defineProperty){var o={get:t,configurable:!0};r&&(o.set=r),Object.defineProperty(e,n,o)}else e.__defineGetter__(n,t),r&&e.__defineSetter__(n,r)},o.defineGetter=o.defineGetterSetter,o.arrayIndexOf=function(e,n){if(e.indexOf)return e.indexOf(n);for(var t=e.length,r=0;t>r;++r)if(e[r]==n)return r;return-1},o.arrayRemove=function(e,n){var t=o.arrayIndexOf(e,n);return-1!=t&&e.splice(t,1),-1!=t},o.typeName=function(e){return Object.prototype.toString.call(e).slice(8,-1)},o.isArray=function(e){return"Array"==o.typeName(e)},o.isDate=function(e){return"Date"==o.typeName(e)},o.clone=function(e){if(!e||"function"==typeof e||o.isDate(e)||"object"!=typeof e)return e;var n,t;if(o.isArray(e)){for(n=[],t=0;t<e.length;++t)n.push(o.clone(e[t]));return n}n={};for(t in e)t in n&&n[t]==e[t]||(n[t]=o.clone(e[t]));return n},o.close=function(e,n,t){return"undefined"==typeof t?function(){return n.apply(e,arguments)}:function(){return n.apply(e,t)}},o.createUUID=function(){return r(4)+"-"+r(2)+"-"+r(2)+"-"+r(2)+"-"+r(6)},o.extend=function(){var e=function(){};return function(n,t){e.prototype=t.prototype,n.prototype=new e,n.__super__=t.prototype,n.prototype.constructor=n}}(),o.alert=function(e){window.alert?window.alert(e):console&&console.log&&console.log(e)}}),window.cordova=n("cordova"),n("cordova/init")}();