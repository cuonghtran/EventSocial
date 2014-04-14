function Controller() {
    function Login() {
        var eventCreateView = Alloy.createController("eventCreate").getView();
        eventCreateView.open();
    }
    function animateOpen() {
        $.index.animate(a);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    animateOpen ? $.__views.index.addEventListener("postlayout", animateOpen) : __defers["$.__views.index!postlayout!animateOpen"] = true;
    $.__views.__alloyId5 = Ti.UI.createView({
        top: 30,
        backgroundColor: "#3B72D1",
        layout: "vertical",
        id: "__alloyId5"
    });
    $.__views.index.add($.__views.__alloyId5);
    $.__views.title = Ti.UI.createLabel({
        text: "Event Social Network",
        id: "title"
    });
    $.__views.__alloyId5.add($.__views.title);
    $.__views.txtUsername = Ti.UI.createTextField({
        width: 250,
        height: 50,
        id: "txtUsername",
        hintText: "Tài khoản..."
    });
    $.__views.__alloyId5.add($.__views.txtUsername);
    $.__views.txtPassword = Ti.UI.createTextField({
        width: 250,
        height: 50,
        id: "txtPassword",
        hintText: "Mật khẩu..."
    });
    $.__views.__alloyId5.add($.__views.txtPassword);
    $.__views.btnLogin = Ti.UI.createButton({
        width: 250,
        height: 40,
        backgroundColor: "orange",
        color: "white",
        title: "Đăng nhập",
        id: "btnLogin"
    });
    $.__views.__alloyId5.add($.__views.btnLogin);
    Login ? $.__views.btnLogin.addEventListener("click", Login) : __defers["$.__views.btnLogin!click!Login"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var fb = require("facebook");
    fb.appid = "723879694301863";
    fb.permissions = [ "publish_stream" ];
    $.index.add(fb.createLoginButton({
        top: 280,
        backgroundImage: "images/fbbutton.PNG"
    }));
    fb.addEventListener("login", function(e) {
        if (e.success) {
            var eventCreateView = Alloy.createController("eventCreate").getView();
            eventCreateView.open();
        } else alert("Sai tài khoản");
    });
    fb.addEventListener("logout", function() {
        alert("Logged out");
    });
    $.index.transform = Titanium.UI.create2DMatrix().scale(0);
    $.index.open();
    var a = Ti.UI.createAnimation({
        transform: Ti.UI.create2DMatrix().scale(1.1),
        duration: 2e3
    });
    a.addEventListener("complete", function() {
        $.index.animate({
            transform: Ti.UI.create2DMatrix(),
            duration: 200
        });
    });
    __defers["$.__views.index!postlayout!animateOpen"] && $.__views.index.addEventListener("postlayout", animateOpen);
    __defers["$.__views.btnLogin!click!Login"] && $.__views.btnLogin.addEventListener("click", Login);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;