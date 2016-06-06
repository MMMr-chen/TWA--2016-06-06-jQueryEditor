(function () {
    var dateEditor = $("#addBtn").myDateEditor();
    dateEditor.print();
    $("#dialog").dialog({
        autoOpen: false,
        resizable: false,
        height: 140,
        modal: true,
        buttons: {
            "OK": function () {
                dateEditor.addItem();
                $(this).dialog("close");

            },
            Cancel: function () {
                $(this).dialog("close");
            }
        }
    });


    $("#validateBtn").bind('click', dateEditor.validate_handler);
    $("#addBtn").bind('click', dateEditor.addBtnAction);
    $("#previousBtn").bind('click', dateEditor.previousBtnAciton);
})();