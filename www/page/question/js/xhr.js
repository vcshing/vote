function ajaxGetQuestionDetail(array,callback) {
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

function ajaxSubmitResult(array,callback) {
  if (typeof(callback) != "function") {
      callback = function(response) {};
  }

  $.ajax({
      type: "post",
      url: "http://gogogo.synology.me/api/psychologicaltest/submitresult.php",
      data: {
          "deviceid": getDeviceID(),
          "questionid": array.questionid,
          "answerIndex": array.answerIndex
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

function ajaxGetStatisticsDetail(array,callback) {
  if (typeof(callback) != "function") {
      callback = function(response) {};
  }

  $.ajax({
      type: "post",
      url: "http://gogogo.synology.me/api/psychologicaltest/getstatisticsdata.php",
      data: {
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
