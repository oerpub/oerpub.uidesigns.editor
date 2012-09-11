for(var i = 0; i < 237; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

widgetIdToMoveFunction['u197'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetWithThis('u192','u197');

}

}

if (bIE) document.getElementById('u197').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u197'); });
else {
    document.getElementById('u197').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u197'); }, true);
    document.getElementById('u197').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u197'); }, true);
}

widgetIdToDragFunction['u197'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u197',widgetDragInfo.xDelta,widgetDragInfo.yDelta,'none',500);

}

}

widgetIdToDragDropFunction['u197'] = function() {
var e = windowEvent;

if (IsOver(GetWidgetRectangles('u197'), GetWidgetRectangles('u67'))) {

	SetPanelState('u67', 'pd1u67','none','',500,'none','',500);

	SetPanelVisibility('u104','hidden','none',500);

}

}
gv_vAlignTable['u232'] = 'center';document.getElementById('u71_img').tabIndex = 0;

u71.style.cursor = 'pointer';
$axure.eventManager.click('u71', function(e) {

if (true) {

	SetPanelState('u70', 'pd1u70','none','',500,'none','',500);

}
});
u101.tabIndex = 0;

u101.style.cursor = 'pointer';
$axure.eventManager.click('u101', function(e) {

if (true) {

	SetPanelState('u67', 'pd2u67','none','',500,'none','',500);

}
});
gv_vAlignTable['u101'] = 'top';gv_vAlignTable['u103'] = 'top';u76.tabIndex = 0;

u76.style.cursor = 'pointer';
$axure.eventManager.click('u76', function(e) {

if (true) {

	SetPanelState('u70', 'pd2u70','none','',500,'none','',500);

}
});
gv_vAlignTable['u78'] = 'center';gv_vAlignTable['u108'] = 'center';gv_vAlignTable['u80'] = 'center';document.getElementById('u81_img').tabIndex = 0;

u81.style.cursor = 'pointer';
$axure.eventManager.click('u81', function(e) {

if (true) {

	SetPanelState('u70', 'pd1u70','none','',500,'none','',500);

}
});
gv_vAlignTable['u82'] = 'center';gv_vAlignTable['u84'] = 'center';gv_vAlignTable['u86'] = 'center';gv_vAlignTable['u87'] = 'top';gv_vAlignTable['u89'] = 'top';gv_vAlignTable['u118'] = 'center';
$axure.eventManager.mouseover('u90', function(e) {
if (!IsTrueMouseOver('u90',e)) return;
if (true) {

	SetPanelVisibility('u70','','none',500);

}
});
gv_vAlignTable['u91'] = 'center';gv_vAlignTable['u93'] = 'top';
$axure.eventManager.mouseover('u94', function(e) {
if (!IsTrueMouseOver('u94',e)) return;
if (true) {

	SetPanelVisibility('u96','','none',500);

}
});
gv_vAlignTable['u95'] = 'center';gv_vAlignTable['u98'] = 'center';gv_vAlignTable['u99'] = 'top';gv_vAlignTable['u128'] = 'center';gv_vAlignTable['u130'] = 'center';gv_vAlignTable['u132'] = 'center';gv_vAlignTable['u135'] = 'center';gv_vAlignTable['u137'] = 'center';gv_vAlignTable['u138'] = 'top';gv_vAlignTable['u139'] = 'top';gv_vAlignTable['u140'] = 'top';gv_vAlignTable['u141'] = 'top';gv_vAlignTable['u142'] = 'top';gv_vAlignTable['u143'] = 'top';gv_vAlignTable['u144'] = 'top';gv_vAlignTable['u145'] = 'top';gv_vAlignTable['u147'] = 'center';gv_vAlignTable['u149'] = 'center';gv_vAlignTable['u151'] = 'center';gv_vAlignTable['u153'] = 'center';gv_vAlignTable['u155'] = 'center';gv_vAlignTable['u157'] = 'center';gv_vAlignTable['u159'] = 'center';gv_vAlignTable['u161'] = 'center';gv_vAlignTable['u163'] = 'center';gv_vAlignTable['u165'] = 'center';gv_vAlignTable['u167'] = 'center';gv_vAlignTable['u169'] = 'center';gv_vAlignTable['u170'] = 'top';gv_vAlignTable['u172'] = 'center';gv_vAlignTable['u173'] = 'top';gv_vAlignTable['u175'] = 'center';gv_vAlignTable['u176'] = 'top';gv_vAlignTable['u178'] = 'center';gv_vAlignTable['u179'] = 'top';gv_vAlignTable['u72'] = 'center';gv_vAlignTable['u74'] = 'center';gv_vAlignTable['u204'] = 'center';gv_vAlignTable['u205'] = 'top';gv_vAlignTable['u181'] = 'center';gv_vAlignTable['u182'] = 'top';gv_vAlignTable['u184'] = 'center';gv_vAlignTable['u185'] = 'top';gv_vAlignTable['u187'] = 'center';gv_vAlignTable['u188'] = 'top';gv_vAlignTable['u210'] = 'center';gv_vAlignTable['u211'] = 'top';gv_vAlignTable['u213'] = 'center';
u215.style.cursor = 'pointer';
$axure.eventManager.click('u215', function(e) {

if (true) {

	SetPanelVisibility('u104','hidden','none',500);

}
});
gv_vAlignTable['u190'] = 'center';gv_vAlignTable['u191'] = 'top';document.getElementById('u193_img').tabIndex = 0;

u193.style.cursor = 'pointer';
$axure.eventManager.click('u193', function(e) {

if (true) {

	var obj1 = document.getElementById("u215");
    obj1.disabled = false;

}
});
gv_vAlignTable['u194'] = 'center';gv_vAlignTable['u196'] = 'center';u198.tabIndex = 0;

u198.style.cursor = 'pointer';
$axure.eventManager.click('u198', function(e) {

if (true) {

	var obj1 = document.getElementById("u215");
    obj1.disabled = false;

}
});
gv_vAlignTable['u198'] = 'top';gv_vAlignTable['u199'] = 'top';gv_vAlignTable['u221'] = 'center';gv_vAlignTable['u223'] = 'center';gv_vAlignTable['u225'] = 'center';gv_vAlignTable['u1'] = 'center';HookHover('u2', false);
gv_vAlignTable['u3'] = 'center';HookHover('u4', false);
gv_vAlignTable['u5'] = 'center';HookHover('u7', false);
gv_vAlignTable['u8'] = 'center';HookHover('u9', false);
gv_vAlignTable['u106'] = 'center';gv_vAlignTable['u10'] = 'center';HookHover('u11', false);
gv_vAlignTable['u12'] = 'center';gv_vAlignTable['u14'] = 'center';HookHover('u15', false);
gv_vAlignTable['u16'] = 'center';HookHover('u17', false);
gv_vAlignTable['u18'] = 'center';gv_vAlignTable['u19'] = 'top';gv_vAlignTable['u110'] = 'center';gv_vAlignTable['u112'] = 'center';gv_vAlignTable['u114'] = 'center';gv_vAlignTable['u116'] = 'center';HookHover('u20', false);
gv_vAlignTable['u21'] = 'center';HookHover('u22', false);
gv_vAlignTable['u23'] = 'center';HookHover('u24', false);
gv_vAlignTable['u25'] = 'center';gv_vAlignTable['u27'] = 'center';HookHover('u28', false);
gv_vAlignTable['u29'] = 'center';gv_vAlignTable['u207'] = 'center';gv_vAlignTable['u208'] = 'top';gv_vAlignTable['u120'] = 'center';gv_vAlignTable['u122'] = 'center';gv_vAlignTable['u124'] = 'center';gv_vAlignTable['u126'] = 'center';gv_vAlignTable['u31'] = 'center';HookHover('u32', false);
gv_vAlignTable['u33'] = 'center';HookHover('u34', false);
gv_vAlignTable['u35'] = 'center';HookHover('u36', false);
gv_vAlignTable['u37'] = 'center';document.getElementById('u38_img').tabIndex = 0;
HookHover('u38', false);

u38.style.cursor = 'pointer';
$axure.eventManager.click('u38', function(e) {

if (true) {

	SetPanelVisibility('u104','','none',500);

}
});
gv_vAlignTable['u39'] = 'center';gv_vAlignTable['u217'] = 'top';gv_vAlignTable['u219'] = 'center';gv_vAlignTable['u201'] = 'center';gv_vAlignTable['u202'] = 'top';gv_vAlignTable['u41'] = 'center';gv_vAlignTable['u43'] = 'center';HookHover('u44', false);
gv_vAlignTable['u45'] = 'center';gv_vAlignTable['u47'] = 'center';gv_vAlignTable['u227'] = 'center';document.getElementById('u50_img').tabIndex = 0;
HookHover('u50', false);

u50.style.cursor = 'pointer';
$axure.eventManager.click('u50', function(e) {

if (true) {

}
});
gv_vAlignTable['u51'] = 'top';HookHover('u52', false);
gv_vAlignTable['u53'] = 'top';HookHover('u54', false);
gv_vAlignTable['u55'] = 'top';HookHover('u56', false);
gv_vAlignTable['u57'] = 'top';HookHover('u58', false);
gv_vAlignTable['u59'] = 'top';gv_vAlignTable['u236'] = 'top';HookHover('u60', false);
gv_vAlignTable['u61'] = 'top';HookHover('u62', false);
gv_vAlignTable['u63'] = 'top';gv_vAlignTable['u65'] = 'top';gv_vAlignTable['u69'] = 'top';