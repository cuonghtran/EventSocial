//var facebook = Alloy.Globals.Facebook;
var fb = require('facebook');
fb.appid = '723879694301863';
fb.permissions = ['publish_stream'];

//normal login
/*function Login(username, password){
	var db = Titanium.database.open('eventsocial');
	var row = db.execute('SELECT * FROM User WHERE UserID = ? AND Password = ?', $.txtUsername.value, $.txtPassword.value);
	if(row.getRowCount == 0){
		alert("Sai mật khẩu");
	}
	if(row.getRowCount > 0){
		alert("Đăng nhập thành công");
	}
}*/

//facebook login
fb.addEventListener('login', function(e) {
    if (e.success) {
        alert('Logged in');
    }
});
fb.addEventListener('logout', function(e) {
    alert('Logged out');
});

// Add the button.  Note that it doesn't need a click event listener.
$.index.add(fb.createLoginButton({
    top : 300,
    style : fb.BUTTON_STYLE_WIDE
}));

$.index.open();
