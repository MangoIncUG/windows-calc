/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'suf-icons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'suf-point': '&#xe909;',
		'suf-divide': '&#xe908;',
		'suf-math-root': '&#xe907;',
		'suf-backspace': '&#xe906;',
		'suf-close-2': '&#xe900;',
		'suf-fraction-1': '&#xe901;',
		'suf-minimise': '&#xe902;',
		'suf-restore-window': '&#xe903;',
		'suf-square': '&#xe904;',
		'suf-squared': '&#xe905;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/suf-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
