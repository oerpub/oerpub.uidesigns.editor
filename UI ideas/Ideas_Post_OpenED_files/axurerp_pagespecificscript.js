for(var i = 0; i < 130; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

if (bIE) document.getElementById('u81').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u81'); });
else {
    document.getElementById('u81').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u81'); }, true);
    document.getElementById('u81').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u81'); }, true);
}

widgetIdToDragFunction['u81'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u81',widgetDragInfo.xDelta,widgetDragInfo.yDelta,'none',500);

}

}

widgetIdToDragDropFunction['u81'] = function() {
var e = windowEvent;

if (true) {

	SetPanelVisibility('u120','','none',500);

	SetPanelVisibility('u81','hidden','none',500);

}
else
if (true) {

	MoveWidgetToLocationBeforeDrag('u81','none',500);

}

}

if (bIE) document.getElementById('u62').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u62'); });
else {
    document.getElementById('u62').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u62'); }, true);
    document.getElementById('u62').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u62'); }, true);
}

widgetIdToDragFunction['u62'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u62',widgetDragInfo.xDelta,widgetDragInfo.yDelta,'none',500);

}

}

widgetIdToDragDropFunction['u62'] = function() {
var e = windowEvent;

if (IsOver(GetWidgetRectangles('u67'), GetWidgetRectangles('u129'))) {

	SetPanelVisibility('u106','','none',500);

	SetPanelVisibility('u62','hidden','none',500);

}
else
if (true) {

	MoveWidgetToLocationBeforeDrag('u62','none',500);

}

}

widgetIdToShowFunction['u4'] = function() {
var e = windowEvent;

if (true) {

}

}

widgetIdToHideFunction['u4'] = function() {
var e = windowEvent;

if (true) {

}

}
gv_vAlignTable['u83'] = 'center';u84.tabIndex = 0;

u84.style.cursor = 'pointer';
$axure.eventManager.click('u84', function(e) {

if (true) {

	SetPanelState('u81', 'pd0u81','none','',500,'none','',500);

	SetPanelVisibility('u4','hidden','none',500);

}
});
gv_vAlignTable['u87'] = 'center';u88.tabIndex = 0;

u88.style.cursor = 'pointer';
$axure.eventManager.click('u88', function(e) {

if (true) {

	SetPanelState('u81', 'pd1u81','none','',500,'none','',500);

	SetPanelVisibility('u4','','none',500);

}
});
gv_vAlignTable['u92'] = 'top';gv_vAlignTable['u11'] = 'center';gv_vAlignTable['u13'] = 'center';gv_vAlignTable['u14'] = 'top';gv_vAlignTable['u15'] = 'top';gv_vAlignTable['u16'] = 'top';gv_vAlignTable['u18'] = 'center';HookHover('u19', false);
gv_vAlignTable['u110'] = 'center';gv_vAlignTable['u111'] = 'top';gv_vAlignTable['u113'] = 'top';u114.tabIndex = 0;

u114.style.cursor = 'pointer';
$axure.eventManager.click('u114', function(e) {

if (true) {

	SetPanelState('u112', 'pd1u112','none','',500,'none','',500);

}
});
gv_vAlignTable['u114'] = 'top';gv_vAlignTable['u20'] = 'center';HookHover('u21', false);
gv_vAlignTable['u22'] = 'center';HookHover('u24', false);
gv_vAlignTable['u25'] = 'center';HookHover('u26', false);
gv_vAlignTable['u27'] = 'center';HookHover('u28', false);
gv_vAlignTable['u29'] = 'center';gv_vAlignTable['u101'] = 'center';gv_vAlignTable['u103'] = 'center';gv_vAlignTable['u105'] = 'center';gv_vAlignTable['u108'] = 'center';gv_vAlignTable['u127'] = 'top';HookHover('u30', false);
gv_vAlignTable['u31'] = 'center';HookHover('u32', false);
gv_vAlignTable['u33'] = 'center';HookHover('u34', false);
gv_vAlignTable['u35'] = 'center';gv_vAlignTable['u37'] = 'center';gv_vAlignTable['u39'] = 'center';gv_vAlignTable['u94'] = 'top';u95.tabIndex = 0;

u95.style.cursor = 'pointer';
$axure.eventManager.click('u95', function(e) {

if (true) {

	SetPanelState('u90', 'pd1u90','none','',500,'none','',500);

	SetPanelVisibility('u9','','none',500);

}
});
gv_vAlignTable['u97'] = 'center';gv_vAlignTable['u99'] = 'center';gv_vAlignTable['u116'] = 'top';gv_vAlignTable['u117'] = 'top';u118.tabIndex = 0;

u118.style.cursor = 'pointer';
$axure.eventManager.click('u118', function(e) {

if (true) {

	SetPanelState('u115', 'pd2u115','none','',500,'none','',500);

}
});
gv_vAlignTable['u118'] = 'top';u119.tabIndex = 0;

u119.style.cursor = 'pointer';
$axure.eventManager.click('u119', function(e) {

if (true) {

	SetPanelState('u115', 'pd1u115','none','',500,'none','',500);

}
});
gv_vAlignTable['u119'] = 'top';HookHover('u40', false);
gv_vAlignTable['u41'] = 'center';HookHover('u42', false);
gv_vAlignTable['u43'] = 'center';HookHover('u44', false);
gv_vAlignTable['u45'] = 'center';HookHover('u46', false);
gv_vAlignTable['u47'] = 'center';gv_vAlignTable['u49'] = 'center';gv_vAlignTable['u122'] = 'center';gv_vAlignTable['u124'] = 'center';gv_vAlignTable['u125'] = 'top';gv_vAlignTable['u126'] = 'top';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u6'] = 'center';gv_vAlignTable['u7'] = 'top';gv_vAlignTable['u51'] = 'center';gv_vAlignTable['u53'] = 'center';gv_vAlignTable['u55'] = 'center';gv_vAlignTable['u58'] = 'center';gv_vAlignTable['u60'] = 'top';gv_vAlignTable['u64'] = 'center';u65.tabIndex = 0;

u65.style.cursor = 'pointer';
$axure.eventManager.click('u65', function(e) {

if (true) {

	SetPanelState('u62', 'pd0u62','none','',500,'none','',500);

}
});
gv_vAlignTable['u68'] = 'center';u69.tabIndex = 0;

u69.style.cursor = 'pointer';
$axure.eventManager.click('u69', function(e) {

if (true) {

	SetPanelState('u62', 'pd1u62','none','',500,'none','',500);

}
});
gv_vAlignTable['u73'] = 'center';gv_vAlignTable['u77'] = 'center';gv_vAlignTable['u79'] = 'top';