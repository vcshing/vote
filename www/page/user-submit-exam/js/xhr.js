function ajaxSubmitQuestion(array,callback) {
    if (typeof(callback) != "function") {
        callback = function(response) {};
    }

    $.ajax({
        type: "post",
        url: "http://gogogo.synology.me/api/vote/addrecord.php",
        data: {
            "deviceid": getDeviceID(),
            "type": array.type,
            "subject": array.subject,
            "question": array.question,
            "choiceNum": array.choiceNum,
            "answer": array.answer,
            "lang": lang
        },
        dataType: "json",
        success: function(response) {
          callback(response);
          //callback(response);
        },
        error: function(response) {
          callback(response);
        }
    });
}
