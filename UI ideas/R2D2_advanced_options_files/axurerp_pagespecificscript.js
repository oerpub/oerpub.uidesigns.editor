for(var i = 0; i < 16; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u13'] = 'center';document.getElementById('u12_img').tabIndex = 0;

u12.style.cursor = 'pointer';
$axure.eventManager.click('u12', function(e) {

if (true) {

	SetPanelState('u4', 'pd2u4','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u12', function(e) {
if (!IsTrueMouseOut('u12',e)) return;
if (true) {

	SetPanelState('u4', 'pd0u4','none','',500,'none','',500);

}
});
gv_vAlignTable['u15'] = 'center';
$axure.eventManager.mouseover('u14', function(e) {
if (!IsTrueMouseOver('u14',e)) return;
if (true) {

	SetPanelState('u4', 'pd1u4','none','',500,'none','',500);

}
});
gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u3'] = 'center';document.getElementById('u5_img').tabIndex = 0;

u5.style.cursor = 'pointer';
$axure.eventManager.click('u5', function(e) {

if (true) {

	SetPanelState('u4', 'pd0u4','none','',500,'none','',500);

}
});
gv_vAlignTable['u6'] = 'center';gv_vAlignTable['u8'] = 'center';