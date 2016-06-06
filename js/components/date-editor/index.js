var json = {
    "status": "editor",
    "data": [
        { "title": "test", "content": "none" }
    ]
};

$.fn.myDateEditor = function () {
    button = this;
    return {
        addBtnAction: addBtnAction,
        addItem: addItem,
        deleteBtnAction: deleteBtnAction,
        previousBtnAciton: previousBtnAciton,
        editBtnAction: editBtnAction,
        print: print
    }

};
var addBtnAction = function () {
    $("#dialog").dialog('open');
}
var addItem = function () {

    addAction(json);
    print();
}
var deleteBtnAction = function () {

}
var print = function () {
    printHtml(json);
}
var previousBtnAciton = function () {
    json.status = "view";
    print();
}
var editBtnAction = function () {
    json.status = "editor";
    print();
}

