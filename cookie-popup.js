// Get the cookie consent popup element
var cookiePopup = document.querySelector('.cookie-popup');

// Get the accept and decline buttons
var acceptBtn = document.querySelector('#accept-cookies');
var declineBtn = document.querySelector('#decline-cookies');

// Check if the user has already accepted cookies
var cookiesAccepted = (document.cookie.indexOf('cookiesAccepted=true') !== -1);

// If cookies are not accepted, show the cookie popup
if (!cookiesAccepted) {
	cookiePopup.style.display = 'block';
}

// When the user clicks the accept button, set a cookie and hide the popup
acceptBtn.addEventListener('click', function() {
	document.cookie = 'cookiesAccepted=true; expires=' + new Date(new Date().getTime() + (365 * 24 * 60 * 60 * 1000)).toGMTString() + '; path=/';
	cookiePopup.style.display = 'none';
});

// When the user clicks the decline button, hide the popup
declineBtn.addEventListener('click', function() {
	cookiePopup.style.display = 'none';
});
