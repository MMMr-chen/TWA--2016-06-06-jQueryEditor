function printHtml(json) {
    var data = json.data;
    if (json.status === 'editor') {
        $("#list").empty();
        data.forEach((element) => {
            $("#list").append('<li><b>' + element.title + '</b>' +
                '<input type="text" id="dateInput" data-role="date-editor" />' +
                '<input type="button" id="deleteBtn" value="-" /></li>');
        });
        $("#selectBtn").empty().append('<input type="button" id="previousBtn" value="previous"/>');
        $("#previousBtn").bind('click', previousBtnAciton);
    } else {
        $("#list").empty();
        data.forEach((element) => {
            $("#list").append('<li><b>' + element.title + '</b>' +
                '<input type="text" id="dateInput" data-role="date-editor" />' +
                '</li>');
        });
        $("#selectBtn").empty().append('<input type="button" id="editBtn" value="edit"/>');
        $("#editBtn").bind('click', editBtnAction);
    }
    /*  $.getJSON(json, function(data) {
          $("#printTest").html("");//清空info内容
          $.each(data.comments, function(i, item) {
              $("#printTest").append(
                      "<div>" + item.id + "</div>" + 
                      "<div>" + item.nickname    + "</div>" +
                      "<div>" + item.content + "</div><hr/>");
          });
          });*/
}