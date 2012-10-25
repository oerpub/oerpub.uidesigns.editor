for(var i = 0; i < 110; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

if (bIE) document.getElementById('u2').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u2'); });
else {
    document.getElementById('u2').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u2'); }, true);
    document.getElementById('u2').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u2'); }, true);
}

widgetIdToDragFunction['u2'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u2',widgetDragInfo.xDelta,widgetDragInfo.yDelta,'none',500);

}

}

widgetIdToDragDropFunction['u2'] = function() {
var e = windowEvent;

if (IsOver(GetWidgetRectangles('u7'), GetWidgetRectangles('u107'))) {

	SetPanelVisibility('u90','','none',500);

	SetPanelVisibility('u2','hidden','none',500);

}
else
if (true) {

	MoveWidgetToLocationBeforeDrag('u2','none',500);

}

}

widgetIdToShowFunction['u51'] = function() {
var e = windowEvent;

if (true) {

}

}

widgetIdToHideFunction['u51'] = function() {
var e = windowEvent;

if (true) {

}

}

if (bIE) document.getElementById('u69').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u69'); });
else {
    document.getElementById('u69').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u69'); }, true);
    document.getElementById('u69').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u69'); }, true);
}

widgetIdToDragFunction['u69'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u69',widgetDragInfo.xDelta,widgetDragInfo.yDelta,'none',500);

}

}

widgetIdToDragDropFunction['u69'] = function() {
var e = windowEvent;

if (true) {

	SetPanelVisibility('u69','hidden','none',500);

}
else
if (true) {

	MoveWidgetToLocationBeforeDrag('u69','none',500);

}

}
gv_vAlignTable['u80'] = 'center';gv_vAlignTable['u82'] = 'center';gv_vAlignTable['u84'] = 'center';gv_vAlignTable['u87'] = 'top';gv_vAlignTable['u89'] = 'top';gv_vAlignTable['u91'] = 'top';gv_vAlignTable['u92'] = 'top';gv_vAlignTable['u12'] = 'center';HookHover('u13', false);
gv_vAlignTable['u14'] = 'center';HookHover('u15', false);
gv_vAlignTable['u16'] = 'center';HookHover('u18', false);
gv_vAlignTable['u19'] = 'center';HookHover('u20', false);
gv_vAlignTable['u21'] = 'center';HookHover('u22', false);
gv_vAlignTable['u23'] = 'center';HookHover('u24', false);
gv_vAlignTable['u25'] = 'center';HookHover('u26', false);
gv_vAlignTable['u27'] = 'center';HookHover('u28', false);
gv_vAlignTable['u29'] = 'center';u100.tabIndex = 0;

u100.style.cursor = 'pointer';
$axure.eventManager.click('u100', function(e) {

if (true) {

	SetPanelState('u98', 'pd1u98','none','',500,'none','',500);

}
});
gv_vAlignTable['u100'] = 'top';u102.tabIndex = 0;

u102.style.cursor = 'pointer';
$axure.eventManager.click('u102', function(e) {

if (true) {

	SetPanelState('u101', 'pd1u101','none','',500,'none','',500);

}
});
gv_vAlignTable['u102'] = 'top';gv_vAlignTable['u103'] = 'top';u104.tabIndex = 0;

u104.style.cursor = 'pointer';
$axure.eventManager.click('u104', function(e) {

if (true) {

	SetPanelState('u101', 'pd2u101','none','',500,'none','',500);

}
});
gv_vAlignTable['u104'] = 'top';u105.tabIndex = 0;

u105.style.cursor = 'pointer';
$axure.eventManager.click('u105', function(e) {

if (true) {

	SetPanelState('u101', 'pd1u101','none','',500,'none','',500);

}
});
gv_vAlignTable['u105'] = 'top';
$axure.eventManager.mouseover('u108', function(e) {
if (!IsTrueMouseOver('u108',e)) return;
if (true) {

	SetPanelState('u90', 'pd1u90','none','',500,'none','',500);

}
});

$axure.eventManager.mouseover('u109', function(e) {
if (!IsTrueMouseOver('u109',e)) return;
if (true) {

	SetPanelState('u90', 'pd0u90','none','',500,'none','',500);

}
});
gv_vAlignTable['u31'] = 'center';gv_vAlignTable['u33'] = 'center';HookHover('u34', false);
gv_vAlignTable['u35'] = 'center';HookHover('u36', false);
gv_vAlignTable['u37'] = 'center';HookHover('u38', false);
gv_vAlignTable['u39'] = 'center';gv_vAlignTable['u94'] = 'center';gv_vAlignTable['u96'] = 'center';gv_vAlignTable['u97'] = 'top';gv_vAlignTable['u99'] = 'top';HookHover('u40', false);
gv_vAlignTable['u41'] = 'center';gv_vAlignTable['u43'] = 'center';gv_vAlignTable['u45'] = 'center';gv_vAlignTable['u47'] = 'top';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u4'] = 'center';u5.tabIndex = 0;

u5.style.cursor = 'pointer';
$axure.eventManager.click('u5', function(e) {

if (true) {

	SetPanelState('u2', 'pd0u2','none','',500,'none','',500);

}
});
gv_vAlignTable['u8'] = 'center';u9.tabIndex = 0;

u9.style.cursor = 'pointer';
$axure.eventManager.click('u9', function(e) {

if (true) {

	SetPanelState('u2', 'pd1u2','none','',500,'none','',500);

}
});
gv_vAlignTable['u50'] = 'center';gv_vAlignTable['u53'] = 'center';gv_vAlignTable['u54'] = 'top';gv_vAlignTable['u57'] = 'center';gv_vAlignTable['u59'] = 'top';gv_vAlignTable['u63'] = 'center';gv_vAlignTable['u67'] = 'center';gv_vAlignTable['u71'] = 'center';u72.tabIndex = 0;

u72.style.cursor = 'pointer';
$axure.eventManager.click('u72', function(e) {

if (true) {

	SetPanelState('u69', 'pd0u69','none','',500,'none','',500);

	SetPanelVisibility('u51','hidden','none',500);

}
});
gv_vAlignTable['u75'] = 'center';u76.tabIndex = 0;

u76.style.cursor = 'pointer';
$axure.eventManager.click('u76', function(e) {

if (true) {

	SetPanelState('u69', 'pd1u69','none','',500,'none','',500);

	SetPanelVisibility('u51','','none',500);

}
});
u78.tabIndex = 0;

u78.style.cursor = 'pointer';
$axure.eventManager.click('u78', function(e) {

if (true) {

}
});
