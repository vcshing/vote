function edit_ajaxGetQuestionDetail(array,callback) {
  if (typeof(callback) != "function") {
      callback = function(response) {};
  }

  $.ajax({
      type: "post",
      url: "http://gogogo.synology.me/api/psychologicaltest/getdata.php",
      data: {
          "page": array.page,
          "type": array.type,
          "id": array.id
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

function edit_ajaxSubmitQuestion(array,callback) {
    if (typeof(callback) != "function") {
        callback = function(response) {};
    }

    $.ajax({
        type: "post",
        url: "http://gogogo.synology.me/api/psychologicaltest/addrecord.php",
        data: {
            "id": array.id,
            "deviceid": getDeviceID(),
            "type": array.type,
            "subject": array.subject,
            "question": array.question,
            "choiceNum": array.choiceNum,
            "answer": array.answer,
            "result": array.result,
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

function edit_ajaxGetExamType(callback) {
    if (typeof(callback) != "function") {
        callback = function(response) {
        //  debugger;
        };
    }

    $.ajax({
        type: "post",
        url: "http://gogogo.synology.me/api/psychologicaltest/gettype.php",
        data: {
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
