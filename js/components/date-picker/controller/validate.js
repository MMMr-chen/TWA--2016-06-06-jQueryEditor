function validate(value){
    var reg = /^[01]?[0-9]{1}\/[0-3]?[0-9]{1}\/([0-9]{4}|[0-9]{2})$/;

    return reg.test(value) || value.length == 0;
}