/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
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
    gpuAccelerate: true,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'That_Positive_Feeling',
                display: 'none',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                autoplay: 'autoplay',
                loop: 'loop',
                source: ['audio/That_Positive_Feeling.mp3','audio/That_Positive_Feeling.ogg'],
                preload: 'auto'
            },
            {
                id: 'flash',
                type: 'image',
                rect: ['56.5%', '6.6%','128px','125px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'img/flash.png','0px','0px','100%','100%']
            },
            {
                id: 'flash2',
                type: 'image',
                rect: ['56.5%', '6.6%','128px','125px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'img/flash.png','0px','0px','100%','100%']
            },
            {
                id: 'flash3',
                type: 'image',
                rect: ['56.5%', '6.6%','128px','125px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'img/flash.png','0px','0px','100%','100%']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_flash3}": [
                ["style", "top", '26.36%'],
                ["style", "height", '68px'],
                ["transform", "scaleY", '1.43'],
                ["style", "opacity", '0'],
                ["transform", "scaleX", '1.43'],
                ["style", "background-size", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "left", '79.96%'],
                ["style", "width", '69px']
            ],
            "${_flash2}": [
                ["style", "top", '27.85%'],
                ["transform", "scaleX", '1.43'],
                ["transform", "scaleY", '1.43'],
                ["style", "background-size", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "height", '125px'],
                ["style", "opacity", '0'],
                ["style", "left", '23.57%'],
                ["style", "width", '128px']
            ],
            "${_That_Positive_Feeling}": [
                ["style", "display", 'none'],
                ["property", "volume", '0.7']
            ],
            "${_flash}": [
                ["style", "top", '6.32%'],
                ["style", "height", '125px'],
                ["style", "opacity", '0'],
                ["style", "left", '57.43%'],
                ["style", "width", '128px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 132773,
            autoPlay: true,
            labels: {
                "loop": 0
            },
            timeline: [
                { id: "eid20", tween: [ "style", "${_flash}", "opacity", '0', { fromValue: '0'}], position: 788, duration: 0 },
                { id: "eid19", tween: [ "style", "${_flash}", "opacity", '1', { fromValue: '0'}], position: 879, duration: 0 },
                { id: "eid21", tween: [ "style", "${_flash}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 0 },
                { id: "eid24", tween: [ "style", "${_flash}", "opacity", '0', { fromValue: '0'}], position: 2155, duration: 0 },
                { id: "eid25", tween: [ "style", "${_flash}", "opacity", '1', { fromValue: '0'}], position: 2246, duration: 0 },
                { id: "eid26", tween: [ "style", "${_flash}", "opacity", '0', { fromValue: '1'}], position: 2367, duration: 0 },
                { id: "eid27", tween: [ "style", "${_flash}", "opacity", '0', { fromValue: '0'}], position: 3898, duration: 0 },
                { id: "eid28", tween: [ "style", "${_flash}", "opacity", '1', { fromValue: '0'}], position: 4017, duration: 0 },
                { id: "eid29", tween: [ "style", "${_flash}", "opacity", '0', { fromValue: '1'}], position: 4138, duration: 0 },
                { id: "eid1", tween: [ "style", "${_That_Positive_Feeling}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid61", tween: [ "style", "${_flash3}", "opacity", '0', { fromValue: '0'}], position: 646, duration: 0 },
                { id: "eid62", tween: [ "style", "${_flash3}", "opacity", '1', { fromValue: '0'}], position: 738, duration: 0 },
                { id: "eid63", tween: [ "style", "${_flash3}", "opacity", '0', { fromValue: '1'}], position: 858, duration: 0 },
                { id: "eid64", tween: [ "style", "${_flash3}", "opacity", '0', { fromValue: '0'}], position: 1081, duration: 0 },
                { id: "eid65", tween: [ "style", "${_flash3}", "opacity", '1', { fromValue: '0'}], position: 1173, duration: 0 },
                { id: "eid66", tween: [ "style", "${_flash3}", "opacity", '0', { fromValue: '1'}], position: 1293, duration: 0 },
                { id: "eid67", tween: [ "style", "${_flash3}", "opacity", '0', { fromValue: '0'}], position: 2468, duration: 0 },
                { id: "eid68", tween: [ "style", "${_flash3}", "opacity", '1', { fromValue: '0'}], position: 2587, duration: 0 },
                { id: "eid69", tween: [ "style", "${_flash3}", "opacity", '0', { fromValue: '1'}], position: 2708, duration: 0 },
                { id: "eid70", tween: [ "style", "${_flash3}", "opacity", '0', { fromValue: '0'}], position: 3458, duration: 0 },
                { id: "eid71", tween: [ "style", "${_flash3}", "opacity", '1', { fromValue: '0'}], position: 3577, duration: 0 },
                { id: "eid72", tween: [ "style", "${_flash3}", "opacity", '0', { fromValue: '1'}], position: 3698, duration: 0 },
                { id: "eid44", tween: [ "style", "${_flash2}", "opacity", '0', { fromValue: '0'}], position: 250, duration: 0 },
                { id: "eid45", tween: [ "style", "${_flash2}", "opacity", '1', { fromValue: '0'}], position: 341, duration: 0 },
                { id: "eid46", tween: [ "style", "${_flash2}", "opacity", '0', { fromValue: '1'}], position: 462, duration: 0 },
                { id: "eid47", tween: [ "style", "${_flash2}", "opacity", '0', { fromValue: '0'}], position: 1799, duration: 0 },
                { id: "eid48", tween: [ "style", "${_flash2}", "opacity", '1', { fromValue: '0'}], position: 1890, duration: 0 },
                { id: "eid49", tween: [ "style", "${_flash2}", "opacity", '0', { fromValue: '1'}], position: 2011, duration: 0 },
                { id: "eid50", tween: [ "style", "${_flash2}", "opacity", '0', { fromValue: '0'}], position: 2557, duration: 0 },
                { id: "eid51", tween: [ "style", "${_flash2}", "opacity", '1', { fromValue: '0'}], position: 2676, duration: 0 },
                { id: "eid52", tween: [ "style", "${_flash2}", "opacity", '0', { fromValue: '1'}], position: 2796, duration: 0 },
                { id: "eid4", tween: [ "property", "${_That_Positive_Feeling}", "volume", '0.7', { fromValue: '0.7'}], position: 0, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-114927073");
