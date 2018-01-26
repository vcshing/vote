function userSubmitExamEditPageInit(page){
  edit_ajaxGetExamType(function(response){

      var html = "<option value=\""+""+"\">"+"請選擇"+"<\/option>";
      $(response.result).each(function(index,result){
          html += "<option value=\""+result.type_id+"\">"+result.type+"<\/option>";
      })

      $(".submit-picker-type").find("select").html(html)
    //  $("item-after")
      $(".submit-picker-type").find(".item-after").html("請選擇")


  })

  edit_ajaxGetQuestionDetail({
      "page": "",
      "type": "",
      "id": page.detail.route.query.id
  },function(response){

    var formData = {
      choiceNum: response.result[0].ansnumber,
      question: response.result[0].question,
      subject: response.result[0].title,
      type: response.result[0].type
    }
    app.form.fillFromData('#my-form', formData);

      $("[name='question']").trumbowyg({
        btns: [
            ['viewHTML'],
            ['undo', 'redo'], // Only supported in Blink browsers
            ['formatting'],
            ['strong', 'em', 'del'],
            ['foreColor', 'backColor'],
            ['link'],
            ['insertImage'],
            ['removeformat']
        ]
      });
      var answer = JSON.parse(response.result[0].answer)
      var result = JSON.parse(response.result[0].result)

      var html ="";
      for(var i = 0; i < response.result[0].ansnumber; i++) {
        html += edit_renderChoice({
          "choiceAns": answer[i],
          "choiceResult": result[i],
          "alphabet" : digital2Alphabet(i)
        });
      }
      //alert(html);
      $(".choiceList").html(html);
      $(".choiceResult").trumbowyg({
        btns: [
            ['viewHTML'],
            ['undo', 'redo'], // Only supported in Blink browsers
            ['formatting'],
            ['strong', 'em', 'del'],
            ['foreColor', 'backColor'],
            ['link'],
            ['insertImage'],
            ['removeformat']
        ]
      });
      edit_userSubmitExamPageAddBindEvent(page)

  })

}
