
// Opbeat
// ––––––––––––––––––––––––––––––––––––––––––––––––––

;(() => {

	'use strict';

	if (window.location.hostname === 'localhost') return;

	((i, s, o, g, r, a, m, n) => {
		n = s.createElement(o);
		n.async = 1;
		n.src = g;
		n.setAttribute('data-org-id', r);
		n.setAttribute('data-app-id', a);
		m = s.getElementsByTagName(o)[document.querySelectorAll(o).length - 1];
		m.parentNode.insertBefore(n, m);
	})(window, document, 'script', 'https://d3tvtfb6518e3e.cloudfront.net/3/opbeat.min.js', 'ed5b6ca01e3e4e6a98b6e97142e06a63', 'caba356019');

})();
