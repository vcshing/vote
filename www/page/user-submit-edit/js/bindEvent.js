function edit_userSubmitExamPageAddBindEvent(page){
  $$('.submitForm').on('click', function(){
    var formData = app.form.convertToData('#my-form');

    var alertMsg ="";
    if(formData.type == ""){
      alertMsg += '- 請輸入種類 <br/>'
    }
    if(formData.subject == ""){
        alertMsg += '- 請輸入題目 <br/>'
    }
    if(formData.question == ""){
        alertMsg += '- 請輸入問題 <br/>'
    }
    if(formData.choiceNum == "0"){
        alertMsg += '- 請輸入選擇數量 <br/>'
    }
    formData.answer=[]
    formData.result=[]
      for(var i = 0; i < parseInt(formData.choiceNum) ; i++) {
      if(formData["choiceAns" + digital2Alphabet(i)] == ""){
          alertMsg += '- 請輸入答案'+digital2Alphabet(i)+' <br/>'
      }else{
        formData["answer"].push(formData["choiceAns" + digital2Alphabet(i)])
      }
    }

    if(alertMsg!=""){
      app.dialog.alert(alertMsg,"資料缺失");
    }else{
      formData.id = page.detail.route.query.id;
      edit_ajaxSubmitQuestion(formData,function(response){
          app.dialog.alert("投票已經刊登","謝謝");
          app.view.current.router.navigate("/?refresh=1")
      })
    }
  });

  $$('.deleteBtn').on('click', function(){
    app.dialog.confirm('永久刪除題目?', function () {
      edit_ajaxSubmitQuestion({
        "id" : page.detail.route.query.id,
        "markeddel" : 1
      },function(response){
          app.dialog.alert("投票已經刪除","謝謝");
            app.view.current.router.navigate("/?refresh=1")
      })
    });
  });

  $$('.fill-form-from-data').on('click', function(){
    var formData = {
    }
    app.form.fillFromData('#my-form', formData);
  });

  $(".choiceNum").on('change', function(){
    var choiceAnsArr =[]
    var choiceResultArr =[]
    for(var i = 0; i < 10; i++) {

      var choiceAnsEle= $(".choiceAns" + digital2Alphabet(i));
  //    var choiceResultEle= $(".choiceResult" + digital2Alphabet(i));
      //  debugger;
      if(choiceAnsEle.val() != undefined && choiceAnsEle.val() != ""){
        choiceAnsArr[i] = choiceAnsEle.val()
      }
    //  if(choiceResultEle != undefined && choiceResultEle != ""){
    //    choiceResultArr[i] = choiceResultEle.val()
//    }
    }
    var html ="";
    for(var i = 0; i < $(".choiceNum").val(); i++) {
      html += edit_renderChoice({
        "choiceAns":choiceAnsArr[i] == undefined ? "" : choiceAnsArr[i],
        "alphabet" : digital2Alphabet(i)
      });
    }
    //alert(html);
    $(".choiceList").html(html);


  });
}
