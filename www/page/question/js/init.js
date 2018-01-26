function userReadExamPageInit(page) {
    addFacebookFrame(page);
    openedResultPop=false;
    bindQuestionInit(page)
    ajaxGetQuestionDetail({
        "id": page.detail.route.query.id
    }, function(response) {

        var html=""
      //  debugger;
      //  console.log(response.result[0].answer);
        $(JSON.parse(response.result[0].answer)).each(function(index,result){
//debugger;
          html += renderQuestion({
            "answer" : result,
            "result" : JSON.parse(response.result[0].result)[index],
            "index" : index
          })
        })

        $(".questionAns").html(html);

        $(".question").html(response.result[0].question);
        $(".questionTitle").html(response.result[0].title);

        $(".question").find("img").attr("width","100%")
        bindansConfirm(page)
        bindStatistics(page)
    })

}
