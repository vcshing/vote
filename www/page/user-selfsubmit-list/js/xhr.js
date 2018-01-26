function selfList_ajaxGetTopicList(array,callback) {
    if (typeof(callback) != "function") {
        callback = function() {};
    }

    $.ajax({
        type: "post",
        url: "http://gogogo.synology.me/api/psychologicaltest/getdata.php",
        data: {
            "page": array.page,
            "type": array.type,
            "id": array.id,
            "deviceid" : getDeviceID()
        },
        dataType: "json",
        success: function(response) {
          callback(response);
        },
        error: function(response) {
          callback(response);
        }
    });
}
