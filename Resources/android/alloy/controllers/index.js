function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.__alloyId0 = Ti.UI.createView({
        width: "auto",
        height: "auto",
        backgroundColor: "#1C2129",
        color: "white",
        layout: "horizontal",
        id: "__alloyId0"
    });
    $.__views.index.add($.__views.__alloyId0);
    $.__views.statusLabel = Ti.UI.createLabel({
        color: "white",
        textalign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        verticalalign: "center",
        text: "Status bar",
        id: "statusLabel"
    });
    $.__views.__alloyId0.add($.__views.statusLabel);
    $.__views.__alloyId1 = Ti.UI.createView({
        top: 30,
        backgroundColor: "#3B72D1",
        layout: "vertical",
        id: "__alloyId1"
    });
    $.__views.index.add($.__views.__alloyId1);
    $.__views.title = Ti.UI.createLabel({
        text: "Event Social Network",
        id: "title"
    });
    $.__views.__alloyId1.add($.__views.title);
    $.__views.txtUsername = Ti.UI.createTextField({
        width: 250,
        height: 50,
        id: "txtUsername",
        hintText: "Tài khoản..."
    });
    $.__views.__alloyId1.add($.__views.txtUsername);
    $.__views.txtPassword = Ti.UI.createTextField({
        width: 250,
        height: 50,
        id: "txtPassword",
        hintText: "Mật khẩu..."
    });
    $.__views.__alloyId1.add($.__views.txtPassword);
    $.__views.btnLogin = Ti.UI.createButton({
        width: 250,
        height: 40,
        backgroundColor: "orange",
        color: "white",
        title: "Đăng nhập",
        id: "btnLogin"
    });
    $.__views.__alloyId1.add($.__views.btnLogin);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var fb = require("facebook");
    fb.addEventListener("login", function(e) {
        e.success && alert("Logged in");
    });
    fb.addEventListener("logout", function() {
        alert("Logged out");
    });
    var win = Ti.UI.currentWindow;
    win.add(fb.createLoginButton({
        top: 50,
        style: wide
    }));
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;