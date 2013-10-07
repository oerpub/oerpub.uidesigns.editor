/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-image' : '&#xe000;',
			'icon-unindent' : '&#xe001;',
			'icon-indent' : '&#xe002;',
			'icon-underline' : '&#xe003;',
			'icon-table' : '&#xe004;',
			'icon-video' : '&#xe005;',
			'icon-unordered-list' : '&#xe006;',
			'icon-undo' : '&#xe007;',
			'icon-superscript' : '&#xe008;',
			'icon-subscript' : '&#xe009;',
			'icon-redo' : '&#xe00a;',
			'icon-ordered-list' : '&#xe00b;',
			'icon-math' : '&#xe00c;',
			'icon-link' : '&#xe00d;',
			'icon-italics' : '&#xe00e;',
			'icon-footnote' : '&#xe00f;',
			'icon-bold' : '&#xe010;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};