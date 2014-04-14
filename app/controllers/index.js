//var facebook = Alloy.Globals.Facebook;
var fb = require('facebook');
fb.appid = '723879694301863';
fb.permissions = ['publish_stream'];

//normal login
function Login(username, password){
	var eventCreateView = Alloy.createController("eventCreate").getView();
    eventCreateView.open();
	/*var db = Titanium.database.open('eventsocial');
	db.execute('CREATE TABLE IF NOT EXISTS User(UserID INTEGER PRIMARY KEY, UserName TEXT, Password TEXT);');
	var row = db.execute('SELECT * FROM User WHERE UserName = ? AND Password = ?', $.txtUsername.value, $.txtPassword.value);
	if(row.getRowCount == 0){
		alert("Sai mật khẩu");
	}
	if(row.getRowCount > 0){
		alert("Đăng nhập thành công");
	}
	db.close();*/
}

//facebook login
$.index.add(fb.createLoginButton({
    top : 280,
    backgroundImage : 'images/fbbutton.PNG'
}));

fb.addEventListener('login', function(e) {
    if (e.success) {
        //alert('Logged in');
        var eventCreateView = Alloy.createController("eventCreate").getView();
        eventCreateView.open();
    }
    else alert('Sai tài khoản');
});
fb.addEventListener('logout', function(e) {
    alert('Logged out');
});

//window animation
$.index.transform = Titanium.UI.create2DMatrix().scale(0);
$.index.open();

var a = Ti.UI.createAnimation({
	transform: Ti.UI.create2DMatrix().scale(1.1),
	duration: 2000
});

a.addEventListener('complete', function(){
	$.index.animate({
		transform: Ti.UI.create2DMatrix(),
		duration: 200
	});
});

function animateOpen() {
	$.index.animate(a);
}
