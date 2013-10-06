/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-Video' : '&#xe000;',
			'icon-Unordered-List' : '&#xe001;',
			'icon-undo' : '&#xe002;',
			'icon-Underline' : '&#xe003;',
			'icon-Tableunited' : '&#xe004;',
			'icon-Superscript' : '&#xe005;',
			'icon-Subscript' : '&#xe006;',
			'icon-redo' : '&#xe007;',
			'icon-OutDentList' : '&#xe008;',
			'icon-Ordered-List' : '&#xe009;',
			'icon-Math' : '&#xe00a;',
			'icon-Link' : '&#xe00b;',
			'icon-Italics' : '&#xe00c;',
			'icon-IndentList' : '&#xe00d;',
			'icon-Imageunited' : '&#xe00e;',
			'icon-Footnote' : '&#xe00f;',
			'icon-Bold' : '&#xe010;'
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