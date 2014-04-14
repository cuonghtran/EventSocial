var args = arguments[0] || {};

//Button 'Tiếp' event
function nextStep(){
	alert('Next!');
}

//config datePicker
$.datePicker.addEventListener('click', function(e) {
	var picker = Ti.UI.createPicker();
	
	picker.showDatePickerDialog({
    	value: new Date(),
    	callback: function(e) {
	    	if (e.cancel) {
	        	Ti.API.info('User canceled dialog');
	    	} else {
	        	$.datePicker.setValue('' + picker.value);
	    	}
    	}
    });
	
	$.eventCreate.add(picker);
});

//config timePicker
$.timePicker.addEventListener('click', function(e) {
	var picker = Ti.UI.createPicker();
	
	var data = [];
	data.push(Ti.UI.createPickerRow({title:'6:00 - 12:00'}));
	data.push(Ti.UI.createPickerRow({title:'13:00 - 17:00'}));
	data.push(Ti.UI.createPickerRow({title:'18:00 - 22:00'}));
	picker.add(data);
	
	picker.hide();
	
	picker.addEventListener('change', function(e) {
		$.timePicker.setValue('' + picker.value.toString());
	});
	
	$.timePicker.addEventListener('focus', function() {
		picker.show();
	});
	
	$.eventCreate.add(picker);
});

//config placePicker
$.placePicker.addEventListener('click', function(e) {
	var picker = Ti.UI.createPicker();
	
	var data = [];
	data.push(Ti.UI.createPickerRow({title:'Nhà văn hóa thiếu nhi'}));
	data.push(Ti.UI.createPickerRow({title:'Chùa Vĩnh Nghiêm'}));
	data.push(Ti.UI.createPickerRow({title:'Trạm y tế phường'}));
	data.push(Ti.UI.createPickerRow({title:'Cầu chữ Y'}));
	data.push(Ti.UI.createPickerRow({title:'Công viên nước'}));
	picker.add(data);
	
	picker.hide();
	
	picker.addEventListener('change', function(e) {
		$.placePicker.setValue('' + picker.value);
	});
	
	$.placePicker.addEventListener('focus', function() {
		picker.show();
	});
	
	$.eventCreate.add(picker);
});

//config formPicker
$.formPicker.addEventListener('click', function(e) {
	var picker = Ti.UI.createPicker();
	
	var data = [];
	data.push(Ti.UI.createPickerRow({title:'Đi lên đi xuống'}));
	data.push(Ti.UI.createPickerRow({title:'Đi ra đi vô'}));
	data.push(Ti.UI.createPickerRow({title:'Đi qua đi lại'}));
	data.push(Ti.UI.createPickerRow({title:'Đi tới đi lui'}));
	data.push(Ti.UI.createPickerRow({title:'Đi xuôi đi ngược'}));
	picker.add(data);
	
	picker.hide();
	
	picker.addEventListener('change', function(e) {
		$.formPicker.setValue('' + picker.value);
	});
	
	$.formPicker.addEventListener('focus', function() {
		picker.show();
	});
	
	$.eventCreate.add(picker);
});

//config friendPicker
$.friendPicker.addEventListener('click', function(e) {
	var picker = Ti.UI.createPicker();
	
	var data = [];
	data.push(Ti.UI.createPickerRow({title:'Toàn'}));
	data.push(Ti.UI.createPickerRow({title:'Tèo'}));
	data.push(Ti.UI.createPickerRow({title:'Tí'}));
	data.push(Ti.UI.createPickerRow({title:'Tủn'}));
	picker.add(data);
	
	picker.hide();
	
	picker.addEventListener('change', function(e) {
		$.formPicker.setValue('' + picker.value);
	});
	
	$.formPicker.addEventListener('focus', function() {
		picker.show();
	});
	
	$.eventCreate.add(picker);
});



