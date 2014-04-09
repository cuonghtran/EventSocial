//var facebook = Alloy.Globals.Facebook;
var fb = require('facebook');
fb.appid = FACEBOOK_APP_ID;
fb.permissions = ['publish_stream'];
fb.addEventListener('login', function(e) {
    if (e.success) {
        alert('Logged in');
    }
});
fb.addEventListener('logout', function(e) {
    alert('Logged out');
});
var win = Ti.UI.currentWindow;
// Add the button.  Note that it doesn't need a click event listener.
win.add(fb.createLoginButton({
    top : 50,
    style : fb.BUTTON_STYLE_WIDE
}));

$.index.open();
