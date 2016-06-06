$.fn.myDatePicker = function(){
    this.datepicker();
    input = this;
    init_validation(input);
    return {
        validate_handler: validate_handler
    }
    
};

var validate_handler = function () {
    console.log(input.val());
    if (validate(input.val())) {
        warn.hiddenWarn();
    }
    else {
        warn.showWarn();
    }
};

var data_picker_handler = function (input) {
    warn.hiddenWarn();
};

function init_validation (input) {
    input.bind("focus", data_picker_handler())
}
