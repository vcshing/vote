function bindQuestionInit(page){

  $(".resultPopClose").bind("click",function(e){

  })

  $(".chartClose").bind("click",function(e){
    e.preventDefault();
      app.popup.close()
    //app.popup.close()
    //app.popup.close()
    //app.popup.open(statisticsPop)
    //$(".demo-popup").hide();
  })
}

function bindansConfirm(page){
  $(".ansConfirm").bind("click",function(e){
    if($(this).hasClass("isAnsSelected")){
      ajaxSubmitResult({
        "questionid": page.detail.route.query.id,
        "answerIndex": $(".questionAns input:radio:checked").val()
      },
      function(){
        showToast( appLangArr[defaultLang].alertMsg.votesuccess);
      })
    }else{
      showToast(appLangArr[defaultLang].alertMsg.missingans);
    }
  })

  $('input[type=radio][name="ansOptionBox"]').change(function() {
      $(".ansConfirm").addClass("isAnsSelected")
  })
}

function bindStatistics(page){
  $(".statistics").bind("click",function(e){
    statisticsPop =app.popup.get().$el;
    genStatistics(page)
  })
}
