!function($,e,t){var a="images/",i={},o={gAudioPreloadPreference:"auto",gVideoPreloadPreference:"auto"},s=[],l={stage:{version:"4.0.1",minimumCompatibleVersion:"4.0.1",build:"4.0.1.365",baseState:"Base State",scaleToFit:"none",centerStage:"none",initialState:"Base State",gpuAccelerate:!0,resizeInstances:!1,content:{dom:[{id:"That_Positive_Feeling",display:"none",type:"audio",tag:"audio",rect:["0","0","320px","45px","auto","auto"],autoplay:"autoplay",loop:"loop",source:["audio/That_Positive_Feeling.mp3","audio/That_Positive_Feeling.ogg"],preload:"auto"},{id:"flash2",type:"rect",rect:["527","28","auto","auto","auto","auto"]}],symbolInstances:[{id:"flash2",symbolName:"flash",autoPlay:{}}]},states:{"Base State":{"${_That_Positive_Feeling}":[["style","display","none"],["property","volume","0.7"]],"${_flash2}":[["style","left","521px"],["style","top","32px"]]}},timelines:{"Default Timeline":{fromState:"Base State",toState:"",duration:132773,autoPlay:!0,timeline:[{id:"eid6",tween:["style","${_flash2}","top","32px",{fromValue:"32px"}],position:0,duration:0},{id:"eid5",tween:["style","${_flash2}","left","521px",{fromValue:"521px"}],position:0,duration:0},{id:"eid4",tween:["property","${_That_Positive_Feeling}","volume","0.7",{fromValue:"0.7"}],position:0,duration:0},{id:"eid1",tween:["style","${_That_Positive_Feeling}","display","none",{fromValue:"none"}],position:0,duration:0}]}}},flash:{version:"4.0.1",minimumCompatibleVersion:"4.0.1",build:"4.0.1.365",baseState:"Base State",scaleToFit:"none",centerStage:"none",initialState:"Base State",gpuAccelerate:!1,resizeInstances:!1,content:{dom:[{id:"flash",type:"image",rect:["-1px","0px","169px","165px","auto","auto"],fill:["rgba(0,0,0,0)","img/flash.png","0px","0px"]}],symbolInstances:[]},states:{"Base State":{"${_flash}":[["style","top","0px"],["style","height","165px"],["style","left","-1px"],["style","width","169px"]],"${symbolSelector}":[["style","height","165px"],["style","width","168px"]]}},timelines:{"Default Timeline":{fromState:"Base State",toState:"",duration:0,autoPlay:!0,timeline:[]}}}};e.registerCompositionDefn(t,l,i,s,o),$(window).ready(function(){e.launchComposition(t)})}(jQuery,AdobeEdge,"EDGE-114927073");