//var Af2Microphone = new Object();
//Af2Microphone.mymy = 54;
//Af2Microphone.test = function () {
//    console.log('test');
//}

var nc;
var cam0, cam1, cam2, cam3, cam4, cam5;
var mic0, mic1, mic2, mic3, mic4, mic5;
var ns0, ns1;
var so0, so1;
var vid0, vid1;

function onTxtKeyup() {
    console.log('onKeyup');
}
function onTxtKeypress() {
    console.log('onKeypress');
    //document.getElementById('output').innerHTML = 'a';
}
function onTxtFormChange() {
    console.log('onFormChange');
}
function onTxtFormInput() {
    console.log('onFormInput');
}
function onTxtChange() {
    console.log('onChange');
}
function onTxtInput() {
    console.log('onInput');
}
function onTxtKeydown() {
    console.log('onKeydown');
}

function init() {
    //var names = Af2Camera.names;
    //console.log(names);
    //var names = Af2Microphone.names;
    //console.log(names);
    //var mic = Af2Microphone.getMicrophone();
    //console.log('main');
}
$(function () {
    var ver = 58;
    console.log('--- ' + ver + ' ---');
    // alert(ver);
    nc = new Af2NetConnection();
    nc.onResult = function (event) {
        console.log('onResult: ' + event.message);
    };
    nc.onStatus = function (event) {
        console.log('onStatus: ' + event.code);
    };
    Af2System.showSettings(0);
    vid0 = new Af2Video('vid0');
    //vid1 = new Af2Video('vid1');
    //vid0.attachVideo(cam0);
    //console.log(cams);
    //Af2Security.showSettings('Camera');
    //Af2Security.showSettings('Microphone');
    //$('#inp').on('cut copy paste keyup', function (e) {
    //    e.preventDefault();
    //});
    //$('#inp').keyup(function () {
    //    this.value = this.value.replace(/[^0-9\.]/g, '');
    //});
    //$('#inp').keydown(function (e) {
    //    var node = $(this);
    //    node.val(node.val().replace(/[^9]/g, ''));
    //});
    //$('#inp').keyup(function (e) {
    //    var node = $(this);
    //    node.val(node.val().replace(/[^9]/g, ''));
    //});
    //$('#inp').on('input', function () {
    //    var inputText = $(this).val();
    //    var resultText = inputText.replace(/[^0-9a-zA-Z]/g, '');
    //    $(this).val(resultText);
    //});
    //$('#inp').bind('keydown', function () {
    //    var node = $(this);
    //    node.val(node.val().replace(/[^9]/g, ''));
    //});
    //$('#inp').keypress(function (e) {
    //    var charCode = (e.which) ? e.which : event.keyCode
    //    if (String.fromCharCode(charCode).match(/[^0-9]/g))
    //        return false;
    //});

    // working win, mac, ios

    $('#inp').on("cut copy paste", function (e) {
        e.preventDefault();
    });
    //$('#inp').bind('keyup blur', function () {
    //    var node = $(this);
    //    node.val(node.val().replace(/[^]/g, ''));
    //});
    $('#inp').keydown(function (e) {
        e.preventDefault();
    });
    $('#inp').keyup(function (e) {
        e.preventDefault();
    });
});
function onBtn0() {
    //nc.connect('wss://geleplant.com.ua:8443');
    var obj = new Object();
    obj['token'] = 'a';
    obj.user = Af2Base.getGuidNoDash();
    nc.connect('geleplant.com.ua/test/mymy     /o', 'af2', obj);
}
function onBtn1() {
    nc.close();
}
function onBtn2() {
    //var cams = Af2Camera.names;
    //console.log('cams: ' + cams);
    //for (var i in cams) {
    //    console.log(i + ':' + cams[i]);
    //}
    ns0 = new Af2NetStream(nc);
    ns0.onStatus = function (event) {
        console.log(event.code);
    };
}
function onBtn3() {
    ns0.attachVideo(cam0);
}
function onBtn4() {
    ns0.publish('abc5', 'record');
}
function onBtn5() {
    vid0.attachVideo(cam0);
}
function onBtn6() {
    vid0.attachVideo(undefined);
}
function onBtn7() {
    cam0 = Af2Camera.get();
}
function onBtn8() {
    cam1 = Af2Camera.get(1);
    //cam1.setMode(160, 120, 30);
}
function onBtn9() {
    cam2 = Af2Camera.get(2);
    //cam1.setMode(800, 600, 30);
}
function onBtn10() {
    vid0.attachVideo(cam2);
}
function onBtn11() {
    vid0.attachVideo(cam1);
}
function onBtn12() {
    vid1.attachVideo(cam0);
}
function onBtn13() {
    vid1.attachVideo(cam1);
}
function onBtn14() {
    vid1.attachVideo(undefined);
}
function onBtn15() {
    ns0.attachVideo(undefined);
}
function onBtn16() {

}
function onBtn17() {

}
function onBtn18() {
    ns0.publish(false);
}
function onBtn19() {
    ns0.attachVideo(cam1);
}
function onBtn20() {
    ns0.attachVideo(cam2);
}
function onBtn21() {
    ns0.attachVideo(cam3);
}
function onBtn22() {
    ns0.attachVideo(cam4);
}
function onBtn23() {
    ns0.attachVideo(cam5);
}
function onBtn24() {
    cam3 = Af2Camera.get(3);
}
function onBtn25() {
    cam4 = Af2Camera.get(4);
}
function onBtn26() {
    cam0.setQuality(81920);
    cam0.setMode(640, 480, 30);
}
function onBtn27() {
    ns1 = new Af2NetStream(nc);
}
function onBtn28() {
    ns1.publish('bca', undefined);
}
function onBtn29() {
    ns1.publish(false);
}
function onBtn30() {
    ns1.attachVideo(cam0);
}
function onBtn31() {
    ns1.attachVideo(cam1);
}
function onBtn32() {
    ns1.attachVideo(cam2);
}
function onBtn33() {
    vid1.attachVideo(cam2);
}
function onBtn34() {
    ns1.attachVideo(undefined);
}
function onBtn35() {
    mic0 = Af2Microphone.get();
}
function onBtn36() {
    mic1 = Af2Microphone.get(1);
}
function onBtn37() {
    mic2 = Af2Microphone.get(2);
}
function onBtn38() {
    mic3 = Af2Microphone.get(3);
}
function onBtn39() {
    mic4 = Af2Microphone.get(4);
}
function onBtn40() {
    mic5 = Af2Microphone.get(5);
}
function onBtn41() {
    ns0.attachAudio(mic0);
}
function onBtn42() {
    ns0.attachAudio(mic1);
}
function onBtn43() {
    ns0.attachAudio(mic2);
}
function onBtn44() {
    ns0.attachAudio(mic3);
}
function onBtn45() {
    ns0.attachAudio(mic4);
}
function onBtn46() {
    ns0.attachAudio(mic5);
}
function onBtn47() {
    ns0.attachAudio(undefined);
}
function onBtn48() {
    ns0.play('abc');
}
function onBtn49() {
    ns0.play(false);
}
function onBtn50() {
    vid0.attachVideo(ns0);
}
function onBtn51() {
    so0 = Af2SharedObject.getRemote('abc', nc.uri);
    so0.onSend = function (event) {
        console.log('onSend event: ' + event.code);
        var data = so0.data;
        console.log(data);
    };
    so0.onSync = function (event) {
        console.log('onSync event: ' + event.code);
        var data = so0.data;
        console.log(data);
    };
    so0.connect(nc);
}
function onBtn52() {
    so0.send('hello', { mmmm: 4456 });
}
function onBtn53() {
    so0.close();
}
function onBtn54() {
    nc.call('webmethod', false, { 'message': 'web' });
}
function onBtn55() {
    so0.setProperty('bbb__908', { 'message': 'web' });
}
//setTimeout(init, 3000);
function testAu() {
    //var names = Af2Microphone.names;
    //console.log(names);
    //var mic = Af2Microphone.getMicrophone();
    //var mic0 = Af2Microphone.getMicrophone(0);
    //var mic1 = Af2Microphone.getMicrophone(1);
    //var mic2 = Af2Microphone.getMicrophone(2);
    //var mic3 = Af2Microphone.getMicrophone(3);
    //var mic4 = Af2Microphone.getMicrophone(4);
    //var mic5 = Af2Microphone.getMicrophone(5);
    //var mic6 = Af2Microphone.getMicrophone(6);
    //var mic6 = Af2Microphone.getMicrophone('aaaaaa');
    //var mic7 = Af2Microphone.getMicrophone(-345);
    //var mic8 = Af2Microphone.getMicrophone(12345);
    //var mic9 = Af2Microphone.getMicrophone(12.89);
    //var mic10 = Af2Microphone.getMicrophone(.12);
    //var mic11 = Af2Microphone.getMicrophone(-.12);
    //var mic12 = Af2Microphone.getMicrophone(+.12);
    //console.log(mic.name);
    //console.log(mic0.name);
    //console.log(mic1.name);
    //console.log(mic2.name);
    //console.log(mic3.name);
    //console.log(mic4.name);
    //console.log(mic5.name);
    //console.log(mic6.name);
    //console.log('mic7: ' + mic7.name);
    //console.log('mic8: ' + mic8.name);
    //console.log('mic9: ' + mic9.name);
    //console.log('mic10: ' + mic10.name);
    //console.log('mic11: ' + mic11.name);
    //console.log('mic12: ' + mic12.name);
    //console.log('-----------');
    //var names = Af2Camera.names;
    //var cam = Af2Camera.getCamera();
    //console.log('002');
    //var mic0 = Af2Camera.getCamera('0');
    //var mic1 = Af2Camera.getCamera('1');
    //var mic2 = Af2Camera.getCamera('2');
    //var mic3 = Af2Camera.getCamera('3');
    //var mic4 = Af2Camera.getCamera('4');
    //var mic5 = Af2Camera.getCamera('5');
    //var mic6 = Af2Camera.getCamera('6');
    //var mic7 = Af2Camera.getCamera('aaaaaa');
    //var mic8 = Af2Camera.getCamera('-345');
    //var mic9 = Af2Camera.getCamera('12345');
    //var mic10 = Af2Camera.getCamera('12.89');
    //var mic11 = Af2Camera.getCamera('.12');
    //var mic12 = Af2Camera.getCamera('-.12');
    //var mic13 = Af2Camera.getCamera('+.12');
    //var mic14 = Af2Camera.getCamera({});
    //var mic15 = Af2Camera.getCamera(1);
    //console.log(mic.name);
    //console.log(mic0.name);
    //console.log(mic1.name);
    //console.log(mic2.name);
    //console.log(mic3.name);
    //console.log(mic4.name);
    //console.log(mic5.name);
    //console.log(mic6.name);
    //console.log('mic7: ' + mic7.name);
    //console.log('mic8: ' + mic8.name);
    //console.log('mic9: ' + mic9.name);
    //console.log('mic10: ' + mic10.name);
    //console.log('mic11: ' + mic11.name);
    //console.log('mic12: ' + mic12.name);
    //console.log('mic13: ' + mic13.name);
    //console.log('mic14: ' + mic14.name);
    //console.log('mic15: ' + mic15.name);
}
