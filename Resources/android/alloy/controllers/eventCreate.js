function Controller() {
    function nextStep() {
        alert("Next!");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "eventCreate";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.eventCreate = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "eventCreate"
    });
    $.__views.eventCreate && $.addTopLevelView($.__views.eventCreate);
    $.__views.__alloyId0 = Ti.UI.createView({
        width: "auto",
        height: "auto",
        id: "__alloyId0"
    });
    $.__views.eventCreate.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createView({
        backgroundColor: "blue",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: 4,
        left: 0,
        layout: "horizontal",
        id: "__alloyId1"
    });
    $.__views.__alloyId0.add($.__views.__alloyId1);
    $.__views.lbName = Ti.UI.createLabel({
        text: "Tạo sự kiện",
        id: "lbName"
    });
    $.__views.__alloyId1.add($.__views.lbName);
    $.__views.__alloyId2 = Ti.UI.createView({
        backgroundColor: "green",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: 4,
        right: 0,
        layout: "horizontal",
        id: "__alloyId2"
    });
    $.__views.__alloyId0.add($.__views.__alloyId2);
    $.__views.lbNext = Ti.UI.createLabel({
        text: "Tiếp",
        id: "lbNext"
    });
    $.__views.__alloyId2.add($.__views.lbNext);
    nextStep ? $.__views.lbNext.addEventListener("click", nextStep) : __defers["$.__views.lbNext!click!nextStep"] = true;
    $.__views.__alloyId3 = Ti.UI.createView({
        backgroundColor: "#3B72D1",
        top: 30,
        layout: "vertical",
        id: "__alloyId3"
    });
    $.__views.eventCreate.add($.__views.__alloyId3);
    $.__views.txtEventName = Ti.UI.createTextField({
        width: 250,
        top: 15,
        hintText: "Tên sự kiện",
        id: "txtEventName"
    });
    $.__views.__alloyId3.add($.__views.txtEventName);
    $.__views.__alloyId4 = Ti.UI.createView({
        width: 250,
        top: 15,
        layout: "horizontal",
        id: "__alloyId4"
    });
    $.__views.__alloyId3.add($.__views.__alloyId4);
    $.__views.datePicker = Ti.UI.createTextField({
        width: 110,
        hintText: "Ngày",
        editable: false,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "datePicker"
    });
    $.__views.__alloyId4.add($.__views.datePicker);
    $.__views.timePicker = Ti.UI.createTextField({
        width: 110,
        left: 15,
        hintText: "Thời gian",
        editable: false,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "timePicker"
    });
    $.__views.__alloyId4.add($.__views.timePicker);
    $.__views.placePicker = Ti.UI.createTextField({
        width: 250,
        top: 15,
        hintText: "Địa điểm",
        id: "placePicker"
    });
    $.__views.__alloyId3.add($.__views.placePicker);
    $.__views.formPicker = Ti.UI.createTextField({
        width: 250,
        top: 15,
        hintText: "Hình thức sự kiện",
        id: "formPicker"
    });
    $.__views.__alloyId3.add($.__views.formPicker);
    $.__views.lbSecure = Ti.UI.createLabel({
        width: 250,
        top: 15,
        setBorderColor: "gray",
        text: "Bảo mật",
        id: "lbSecure"
    });
    $.__views.__alloyId3.add($.__views.lbSecure);
    $.__views.friendPicker = Ti.UI.createTextField({
        width: 250,
        top: 15,
        hintText: "Bạn bè",
        id: "friendPicker"
    });
    $.__views.__alloyId3.add($.__views.friendPicker);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    $.datePicker.addEventListener("click", function() {
        var picker = Ti.UI.createPicker();
        picker.showDatePickerDialog({
            value: new Date(),
            callback: function(e) {
                e.cancel ? Ti.API.info("User canceled dialog") : $.datePicker.setValue("" + picker.value.toLocaleDateString());
            }
        });
        $.eventCreate.add(picker);
    });
    $.timePicker.addEventListener("click", function() {
        var picker = Ti.UI.createPicker();
        var data = [];
        data.push(Ti.UI.createPickerRow({
            title: "6:00 - 12:00"
        }));
        data.push(Ti.UI.createPickerRow({
            title: "13:00 - 17:00"
        }));
        data.push(Ti.UI.createPickerRow({
            title: "18:00 - 22:00"
        }));
        picker.add(data);
        picker.hide();
        picker.addEventListener("change", function() {
            $.timePicker.setValue("" + picker.value.toString());
        });
        $.timePicker.addEventListener("focus", function() {
            picker.show();
        });
        $.eventCreate.add(picker);
    });
    $.placePicker.addEventListener("click", function() {
        var picker = Ti.UI.createPicker();
        var data = [];
        data.push(Ti.UI.createPickerRow({
            title: "Nhà văn hóa thiếu nhi"
        }));
        data.push(Ti.UI.createPickerRow({
            title: "Chùa Vĩnh Nghiêm"
        }));
        data.push(Ti.UI.createPickerRow({
            title: "Trạm y tế phường"
        }));
        data.push(Ti.UI.createPickerRow({
            title: "Cầu chữ Y"
        }));
        data.push(Ti.UI.createPickerRow({
            title: "Công viên nước"
        }));
        picker.add(data);
        picker.hide();
        picker.addEventListener("change", function() {
            $.placePicker.setValue("" + picker.value.toString());
        });
        $.placePicker.addEventListener("focus", function() {
            picker.show();
        });
        $.eventCreate.add(picker);
    });
    $.formPicker.addEventListener("click", function() {
        var picker = Ti.UI.createPicker();
        var data = [];
        data.push(Ti.UI.createPickerRow({
            title: "Đi lên đi xuống"
        }));
        data.push(Ti.UI.createPickerRow({
            title: "Đi ra đi vô"
        }));
        data.push(Ti.UI.createPickerRow({
            title: "Đi qua đi lại"
        }));
        data.push(Ti.UI.createPickerRow({
            title: "Đi tới đi lui"
        }));
        data.push(Ti.UI.createPickerRow({
            title: "Đi xuôi đi ngược"
        }));
        picker.add(data);
        picker.hide();
        picker.addEventListener("change", function() {
            $.formPicker.setValue("" + picker.value.toString());
        });
        $.formPicker.addEventListener("focus", function() {
            picker.show();
        });
        $.eventCreate.add(picker);
    });
    $.friendPicker.addEventListener("click", function() {
        var picker = Ti.UI.createPicker();
        var data = [];
        data.push(Ti.UI.createPickerRow({
            title: "Toàn"
        }));
        data.push(Ti.UI.createPickerRow({
            title: "Tèo"
        }));
        data.push(Ti.UI.createPickerRow({
            title: "Tí"
        }));
        data.push(Ti.UI.createPickerRow({
            title: "Tủn"
        }));
        picker.add(data);
        picker.hide();
        picker.addEventListener("change", function() {
            $.formPicker.setValue("" + picker.value.toString());
        });
        $.formPicker.addEventListener("focus", function() {
            picker.show();
        });
        $.eventCreate.add(picker);
    });
    __defers["$.__views.lbNext!click!nextStep"] && $.__views.lbNext.addEventListener("click", nextStep);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;