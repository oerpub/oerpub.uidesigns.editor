for(var i = 0; i < 178; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

if (bIE) document.getElementById('u152').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u152'); });
else {
    document.getElementById('u152').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u152'); }, true);
    document.getElementById('u152').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u152'); }, true);
}

widgetIdToDragFunction['u152'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u146',widgetDragInfo.xDelta,widgetDragInfo.yDelta,'none',500);

}

}

widgetIdToDragDropFunction['u152'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetToLocationBeforeDrag('u146','none',500);

}

}

widgetIdToMoveFunction['u146'] = function() {
var e = windowEvent;

if (true) {

}

}

widgetIdToHideFunction['u146'] = function() {
var e = windowEvent;

if (true) {

}

}
gv_vAlignTable['u154'] = 'center';u155.tabIndex = 0;

u155.style.cursor = 'pointer';
$axure.eventManager.click('u155', function(e) {

if (true) {

	SetPanelVisibility('u146','hidden','none',500);

}
});

$axure.eventManager.mouseover('u155', function(e) {
if (!IsTrueMouseOver('u155',e)) return;
if (true) {

	SetPanelVisibility('u151','','none',500);

}
});
gv_vAlignTable['u156'] = 'top';gv_vAlignTable['u157'] = 'top';gv_vAlignTable['u158'] = 'top';gv_vAlignTable['u171'] = 'top';gv_vAlignTable['u80'] = 'center';HookHover('u81', false);
gv_vAlignTable['u82'] = 'center';
$axure.eventManager.mouseout('u84', function(e) {
if (!IsTrueMouseOut('u84',e)) return;
if (true) {

	SetPanelState('u83', 'pd0u83','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u85', function(e) {
if (!IsTrueMouseOut('u85',e)) return;
if (true) {

	SetPanelState('u83', 'pd0u83','none','',500,'none','',500);

}
});
gv_vAlignTable['u86'] = 'center';document.getElementById('u87_img').tabIndex = 0;
HookHover('u87', false);

u87.style.cursor = 'pointer';
$axure.eventManager.click('u87', function(e) {

if (true) {

	SetPanelState('u83', 'pd0u83','none','',500,'none','',500);

	SendToBack("u77");

	BringToFront("u0");

	SetPanelVisibility('u83','hidden','none',500);

}
});

$axure.eventManager.mouseover('u87', function(e) {
if (!IsTrueMouseOver('u87',e)) return;
if (true) {

	SetPanelState('u83', 'pd1u83','none','',500,'none','',500);

}
});
gv_vAlignTable['u88'] = 'center';HookHover('u89', false);

$axure.eventManager.mouseover('u89', function(e) {
if (!IsTrueMouseOver('u89',e)) return;
if (true) {

	SetPanelState('u83', 'pd1u83','none','',500,'none','',500);

}
});
gv_vAlignTable['u160'] = 'center';
u161.style.cursor = 'pointer';
$axure.eventManager.click('u161', function(e) {

if (true) {

	SetPanelVisibility('u146','hidden','none',500);

}
});
gv_vAlignTable['u162'] = 'top';gv_vAlignTable['u166'] = 'top';gv_vAlignTable['u167'] = 'top';
u169.style.cursor = 'pointer';
$axure.eventManager.click('u169', function(e) {

if (true) {

	SetPanelState('u146', 'pd1u146','none','',500,'none','',500);

	MoveWidgetBy('u143', GetNum('0'), GetNum('190'),'none',500);

}
});
gv_vAlignTable['u90'] = 'center';HookHover('u91', false);

$axure.eventManager.mouseover('u91', function(e) {
if (!IsTrueMouseOver('u91',e)) return;
if (true) {

	SetPanelState('u83', 'pd1u83','none','',500,'none','',500);

}
});
gv_vAlignTable['u92'] = 'center';HookHover('u10', false);
gv_vAlignTable['u11'] = 'center';HookHover('u12', false);
gv_vAlignTable['u13'] = 'center';HookHover('u14', false);
gv_vAlignTable['u15'] = 'center';gv_vAlignTable['u17'] = 'center';HookHover('u18', false);
gv_vAlignTable['u19'] = 'center';gv_vAlignTable['u173'] = 'top';gv_vAlignTable['u175'] = 'top';gv_vAlignTable['u177'] = 'top';document.getElementById('u112_img').tabIndex = 0;

u112.style.cursor = 'pointer';
$axure.eventManager.click('u112', function(e) {

if (true) {

	SetPanelVisibility('u108','hidden','none',500);

	SetPanelVisibility('u146','','none',500);

}
});
gv_vAlignTable['u113'] = 'top';HookHover('u20', false);
gv_vAlignTable['u21'] = 'center';gv_vAlignTable['u22'] = 'top';HookHover('u23', false);
gv_vAlignTable['u24'] = 'center';HookHover('u25', false);
gv_vAlignTable['u26'] = 'center';HookHover('u27', false);
gv_vAlignTable['u28'] = 'center';document.getElementById('u101_img').tabIndex = 0;

u101.style.cursor = 'pointer';
$axure.eventManager.click('u101', function(e) {

if (true) {

	SetPanelState('u83', 'pd0u83','none','',500,'none','',500);

	SendToBack("u77");

	BringToFront("u0");

	SetPanelVisibility('u83','hidden','none',500);

}
});
gv_vAlignTable['u102'] = 'top';gv_vAlignTable['u104'] = 'top';gv_vAlignTable['u106'] = 'top';
u107.style.cursor = 'pointer';
$axure.eventManager.click('u107', function(e) {

if (true) {

	SetPanelState('u83', 'pd1u83','none','',500,'none','',500);

}
});

$axure.eventManager.mouseover('u109', function(e) {
if (!IsTrueMouseOver('u109',e)) return;
if (true) {

	SetPanelVisibility('u108','hidden','none',500);

}
});
HookHover('u128', false);
gv_vAlignTable['u129'] = 'top';gv_vAlignTable['u30'] = 'center';HookHover('u31', false);
gv_vAlignTable['u32'] = 'center';gv_vAlignTable['u34'] = 'center';HookHover('u35', false);
gv_vAlignTable['u36'] = 'center';HookHover('u37', false);
gv_vAlignTable['u38'] = 'center';HookHover('u39', false);
HookHover('u94', false);

$axure.eventManager.mouseover('u94', function(e) {
if (!IsTrueMouseOver('u94',e)) return;
if (true) {

	SetPanelState('u83', 'pd1u83','none','',500,'none','',500);

}
});
gv_vAlignTable['u95'] = 'center';HookHover('u96', false);

$axure.eventManager.mouseover('u96', function(e) {
if (!IsTrueMouseOver('u96',e)) return;
if (true) {

	SetPanelState('u83', 'pd1u83','none','',500,'none','',500);

}
});
gv_vAlignTable['u97'] = 'center';
$axure.eventManager.mouseover('u98', function(e) {
if (!IsTrueMouseOver('u98',e)) return;
if (true) {

	SetPanelState('u83', 'pd1u83','none','',500,'none','',500);

}
});
document.getElementById('u116_img').tabIndex = 0;

u116.style.cursor = 'pointer';
$axure.eventManager.click('u116', function(e) {

if (true) {

	SetPanelState('u108', 'pd2u108','none','',500,'none','',500);

}
});
gv_vAlignTable['u117'] = 'top';gv_vAlignTable['u119'] = 'top';gv_vAlignTable['u40'] = 'center';gv_vAlignTable['u42'] = 'center';gv_vAlignTable['u44'] = 'center';document.getElementById('u45_img').tabIndex = 0;
HookHover('u45', false);

u45.style.cursor = 'pointer';
$axure.eventManager.click('u45', function(e) {

if (true) {

	SetPanelVisibility('u83','','none',500);

	SetPanelVisibility('u108','','none',500);

	SetPanelState('u68', 'pd2u68','none','',500,'none','',500);

}
});
gv_vAlignTable['u46'] = 'center';gv_vAlignTable['u48'] = 'center';gv_vAlignTable['u121'] = 'center';
u122.style.cursor = 'pointer';
$axure.eventManager.click('u122', function(e) {

if (true) {

	SetPanelState('u108', 'pd1u108','none','',500,'none','',500);

}
});

$axure.eventManager.mouseover('u124', function(e) {
if (!IsTrueMouseOver('u124',e)) return;
if (true) {

	SetPanelVisibility('u123','hidden','none',500);

}
});
gv_vAlignTable['u1'] = 'top';gv_vAlignTable['u4'] = 'center';HookHover('u5', false);
gv_vAlignTable['u6'] = 'center';HookHover('u7', false);
gv_vAlignTable['u8'] = 'center';HookHover('u51', false);
gv_vAlignTable['u52'] = 'top';HookHover('u53', false);
gv_vAlignTable['u54'] = 'top';HookHover('u55', false);
gv_vAlignTable['u56'] = 'top';HookHover('u57', false);
gv_vAlignTable['u58'] = 'top';HookHover('u59', false);
document.getElementById('u130_img').tabIndex = 0;
HookHover('u130', false);

u130.style.cursor = 'pointer';
$axure.eventManager.click('u130', function(e) {

if (true) {

	SetPanelVisibility('u134','','none',500);

}
});
gv_vAlignTable['u131'] = 'top';gv_vAlignTable['u133'] = 'center';HookHover('u137', false);
gv_vAlignTable['u138'] = 'top';document.getElementById('u139_img').tabIndex = 0;
HookHover('u139', false);

u139.style.cursor = 'pointer';
$axure.eventManager.click('u139', function(e) {

if (true) {

	SetPanelState('u68', 'pd1u68','none','',500,'none','',500);

}
});
gv_vAlignTable['u60'] = 'top';HookHover('u61', false);
gv_vAlignTable['u62'] = 'top';HookHover('u63', false);
gv_vAlignTable['u64'] = 'top';gv_vAlignTable['u66'] = 'top';gv_vAlignTable['u140'] = 'top';
u142.style.cursor = 'pointer';
$axure.eventManager.click('u142', function(e) {

if (true) {

	SetPanelVisibility('u125','','none',500);

}
});
gv_vAlignTable['u145'] = 'top';
$axure.eventManager.mouseover('u147', function(e) {
if (!IsTrueMouseOver('u147',e)) return;
if (true) {

	SetPanelVisibility('u151','','none',500);

}
});

$axure.eventManager.mouseout('u147', function(e) {
if (!IsTrueMouseOut('u147',e)) return;
if (true) {

	SetPanelVisibility('u151','hidden','none',500);

}
});
gv_vAlignTable['u148'] = 'center';gv_vAlignTable['u149'] = 'top';gv_vAlignTable['u70'] = 'top';gv_vAlignTable['u73'] = 'top';gv_vAlignTable['u75'] = 'top';
$axure.eventManager.mouseover('u76', function(e) {
if (!IsTrueMouseOver('u76',e)) return;
if (true) {

	SetPanelVisibility('u123','','none',500);

}
});
gv_vAlignTable['u78'] = 'top';HookHover('u79', false);
gv_vAlignTable['u150'] = 'top';
$axure.eventManager.mouseover('u153', function(e) {
if (!IsTrueMouseOver('u153',e)) return;
if (true) {

	SetPanelState('u151', 'pd0u151','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u153', function(e) {
if (!IsTrueMouseOut('u153',e)) return;
if (true) {

	SetPanelVisibility('u151','hidden','none',500);

}
});
