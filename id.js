link = document.location.href;
var urlql = (link.split('?=').pop());

document.write('<script async defer data-website-id="' + urlql + '" src="https://devanalytics.vercel.app/umami.js"></script>');
