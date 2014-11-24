/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['brandon-grotesque, sans-serif']='<script src=\"//use.typekit.net/sgj0umz.js\"></script><script>try{Typekit.load();}catch(e){}</script>';

var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'happy_1',
                type: 'video',
                tag: 'video',
                rect: ['7%', '0%','1024','650','auto', 'auto'],
                autoplay: 'autoplay',
                source: ['media/happy_1.mp4','media/happy_1.webm'],
                preload: 'auto'
            },
            {
                id: 'home',
                type: 'image',
                rect: ['3%', '3%','64px','56px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'img/home.png','0px','0px']
            },
            {
                id: 'happy-text3',
                type: 'image',
                rect: ['250px', '446px','512px','62px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'img/happy/happy-text3.png','0px','0px']
            },
            {
                id: 'happy-text2',
                type: 'image',
                rect: ['250px', '384px','487px','49px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'img/happy/happy-text2.png','0px','0px']
            },
            {
                id: 'happy-text1',
                type: 'image',
                rect: ['240px', '207px','553px','172px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'img/happy/happy-text1.png','0px','0px']
            },
            {
                id: 'tommy',
                type: 'image',
                rect: ['179px', '152px','699px','547px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'img/happy/tommy.png','0px','0px']
            },
            {
                id: 'table',
                type: 'image',
                rect: ['148px', '552px','761px','216px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'img/happy/table.png','0px','0px']
            },
            {
                id: 'face',
                type: 'image',
                rect: ['472px', '260px','123px','92px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'img/happy/face.png','0px','0px']
            },
            {
                id: 'strawberry1',
                type: 'image',
                rect: ['506', '399','103px','102px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'img/happy/strawberry.png','0px','0px']
            },
            {
                id: 'strawberry2',
                type: 'image',
                rect: ['506', '399','103px','102px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'img/happy/strawberry.png','0px','0px']
            },
            {
                id: 'strawberry3',
                type: 'image',
                rect: ['506', '399','103px','102px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'img/happy/strawberry.png','0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_happy-text2}": [
                ["style", "top", '392px'],
                ["style", "right", 'auto'],
                ["style", "bottom", 'auto'],
                ["style", "height", '49px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '198px'],
                ["style", "width", '486px']
            ],
            "${_happy-text1}": [
                ["style", "top", '204px'],
                ["style", "right", 'auto'],
                ["style", "bottom", 'auto'],
                ["style", "height", '177px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '237px'],
                ["style", "width", '568px']
            ],
            "${_table}": [
                ["style", "top", '552px'],
                ["style", "opacity", '0'],
                ["style", "left", '148px']
            ],
            "${_strawberry2}": [
                ["style", "top", '-103px'],
                ["transform", "rotateZ", '92deg'],
                ["style", "height", '85px'],
                ["style", "opacity", '0'],
                ["style", "left", '563px'],
                ["style", "width", '86px']
            ],
            "${_strawberry3}": [
                ["style", "top", '-84px'],
                ["transform", "rotateZ", '70deg'],
                ["style", "height", '65px'],
                ["style", "opacity", '0'],
                ["style", "left", '455px'],
                ["style", "width", '66px']
            ],
            "${_strawberry1}": [
                ["style", "top", '-80px'],
                ["transform", "rotateZ", '295deg'],
                ["style", "height", '65px'],
                ["style", "opacity", '0'],
                ["style", "left", '506px'],
                ["style", "width", '66px']
            ],
            "${_tommy}": [
                ["style", "top", '152px'],
                ["style", "opacity", '0'],
                ["style", "left", '179px']
            ],
            "${_home}": [
                ["style", "top", '3%'],
                ["style", "left", '3%']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "overflow", 'visible'],
                ["style", "height", '100%'],
                ["style", "width", '103.02%']
            ],
            "${_happy_1}": [
                ["style", "top", '0%'],
                ["style", "opacity", '1'],
                ["style", "left", '0%']
            ],
            "${_happy-text3}": [
                ["style", "top", '468px'],
                ["style", "right", 'auto'],
                ["style", "bottom", 'auto'],
                ["style", "height", '65px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '198px'],
                ["style", "width", '537px']
            ],
            "${_face}": [
                ["style", "top", '260px'],
                ["style", "opacity", '0'],
                ["style", "left", '472px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 13020,
            autoPlay: true,
            timeline: [
                { id: "eid203", tween: [ "style", "${_strawberry1}", "left", '445px', { fromValue: '506px'}], position: 12492, duration: 293 },
                { id: "eid200", tween: [ "style", "${_strawberry3}", "top", '549px', { fromValue: '-84px'}], position: 12128, duration: 323 },
                { id: "eid168", tween: [ "style", "${_strawberry3}", "opacity", '1', { fromValue: '0'}], position: 11824, duration: 141 },
                { id: "eid223", tween: [ "transform", "${_strawberry2}", "rotateZ", '-117deg', { fromValue: '92deg'}], position: 12740, duration: 281 },
                { id: "eid136", tween: [ "style", "${_happy-text2}", "top", '392px', { fromValue: '392px'}], position: 5457, duration: 0 },
                { id: "eid132", tween: [ "style", "${_happy-text1}", "top", '204px', { fromValue: '204px'}], position: 5457, duration: 0 },
                { id: "eid142", tween: [ "style", "${_happy-text1}", "top", '8px', { fromValue: '204px'}], position: 11568, duration: 256 },
                { id: "eid167", tween: [ "style", "${_strawberry2}", "opacity", '1', { fromValue: '0'}], position: 11824, duration: 141 },
                { id: "eid66", tween: [ "style", "${_happy-text3}", "opacity", '1', { fromValue: '0.000000'}], position: 5457, duration: 83 },
                { id: "eid72", tween: [ "style", "${_happy-text3}", "opacity", '0', { fromValue: '1'}], position: 11500, duration: 121 },
                { id: "eid135", tween: [ "style", "${_happy-text2}", "left", '198px', { fromValue: '198px'}], position: 5457, duration: 0 },
                { id: "eid133", tween: [ "style", "${_happy-text3}", "left", '198px', { fromValue: '198px'}], position: 5457, duration: 0 },
                { id: "eid111", tween: [ "style", "${_happy-text2}", "width", '610px', { fromValue: '486px'}], position: 7408, duration: 92 },
                { id: "eid114", tween: [ "style", "${_happy-text2}", "width", '486px', { fromValue: '610px'}], position: 8924, duration: 76 },
                { id: "eid164", tween: [ "style", "${_tommy}", "opacity", '1', { fromValue: '0'}], position: 11824, duration: 141 },
                { id: "eid131", tween: [ "style", "${_happy-text1}", "left", '185px', { fromValue: '237px'}], position: 5457, duration: 0 },
                { id: "eid141", tween: [ "style", "${_happy-text1}", "left", '392px', { fromValue: '185px'}], position: 11568, duration: 256 },
                { id: "eid225", tween: [ "transform", "${_strawberry1}", "rotateZ", '-40deg', { fromValue: '295deg'}], position: 12491, duration: 293 },
                { id: "eid197", tween: [ "style", "${_strawberry2}", "left", '572px', { fromValue: '563px'}], position: 12740, duration: 281 },
                { id: "eid218", tween: [ "transform", "${_strawberry3}", "rotateZ", '-250deg', { fromValue: '70deg'}], position: 12128, duration: 323 },
                { id: "eid64", tween: [ "style", "${_happy-text1}", "opacity", '1', { fromValue: '0.000000'}], position: 5457, duration: 83 },
                { id: "eid70", tween: [ "style", "${_happy-text1}", "opacity", '1', { fromValue: '1'}], position: 11568, duration: 0 },
                { id: "eid86", tween: [ "style", "${_happy-text1}", "width", '655px', { fromValue: '568px'}], position: 6000, duration: 82 },
                { id: "eid128", tween: [ "style", "${_happy-text1}", "width", '571px', { fromValue: '655px'}], position: 7168, duration: 82 },
                { id: "eid146", tween: [ "style", "${_happy-text1}", "width", '274px', { fromValue: '571px'}], position: 11568, duration: 256 },
                { id: "eid204", tween: [ "style", "${_strawberry1}", "top", '609px', { fromValue: '-80px'}], position: 12492, duration: 293 },
                { id: "eid198", tween: [ "style", "${_strawberry2}", "top", '607px', { fromValue: '-103px'}], position: 12740, duration: 281 },
                { id: "eid165", tween: [ "style", "${_strawberry1}", "opacity", '1', { fromValue: '0'}], position: 11824, duration: 141 },
                { id: "eid118", tween: [ "style", "${_happy-text3}", "height", '89px', { fromValue: '65px'}], position: 9409, duration: 87 },
                { id: "eid123", tween: [ "style", "${_happy-text3}", "height", '65px', { fromValue: '89px'}], position: 11159, duration: 91 },
                { id: "eid199", tween: [ "style", "${_strawberry3}", "left", '503px', { fromValue: '455px'}], position: 12128, duration: 323 },
                { id: "eid11", tween: [ "style", "${_happy_1}", "opacity", '0', { fromValue: '1'}], position: 5356, duration: 109 },
                { id: "eid110", tween: [ "style", "${_happy-text2}", "height", '62px', { fromValue: '49px'}], position: 7408, duration: 92 },
                { id: "eid115", tween: [ "style", "${_happy-text2}", "height", '46px', { fromValue: '62px'}], position: 8924, duration: 76 },
                { id: "eid85", tween: [ "style", "${_happy-text1}", "height", '207px', { fromValue: '177px'}], position: 6000, duration: 82 },
                { id: "eid126", tween: [ "style", "${_happy-text1}", "height", '177px', { fromValue: '207px'}], position: 7168, duration: 82 },
                { id: "eid145", tween: [ "style", "${_happy-text1}", "height", '85px', { fromValue: '177px'}], position: 11568, duration: 256 },
                { id: "eid65", tween: [ "style", "${_happy-text2}", "opacity", '1', { fromValue: '0.000000'}], position: 5457, duration: 83 },
                { id: "eid71", tween: [ "style", "${_happy-text2}", "opacity", '0', { fromValue: '1'}], position: 11500, duration: 121 },
                { id: "eid119", tween: [ "style", "${_happy-text3}", "width", '735px', { fromValue: '537px'}], position: 9409, duration: 87 },
                { id: "eid122", tween: [ "style", "${_happy-text3}", "width", '537px', { fromValue: '735px'}], position: 11159, duration: 91 },
                { id: "eid163", tween: [ "style", "${_table}", "opacity", '1', { fromValue: '0'}], position: 11824, duration: 141 },
                { id: "eid134", tween: [ "style", "${_happy-text3}", "top", '468px', { fromValue: '468px'}], position: 5457, duration: 0 },
                { id: "eid166", tween: [ "style", "${_face}", "opacity", '1', { fromValue: '0'}], position: 11824, duration: 141 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-33386576");
