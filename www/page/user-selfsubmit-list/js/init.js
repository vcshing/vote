function userSubmitExamListInit(){
  $.trumbowyg.svgPath = 'commonjs/library/editor/icons.svg';

  //alert(1);
  //app.view.current.router.navigate("/comments/?id="+1)
   page = 1;

  selfList_ajaxGetTopicList({
    "page": 1,
    "type": "",
    "id": ""
  },function(response){
    var html= ""
  //  debugger;
    $(response.result).each(function(index,result){
      html += selfList_renderTopicList(result)
    })
    $(".self_topicList").html(html);
    if(response.hasNextPage == 0){
      app.infiniteScroll.destroy('.infinite-scroll-content');
      $$('.infinite-scroll-preloader').remove();
    }
    userSubmitVoteListAddBindEvent()
  })
  var $ptrContent = $$('.ptr-content');
  //debugger;
  $ptrContent.on('ptr:refresh', function (e) {
    setTimeout(function () {
      userSubmitExamListInit();
      e.detail();
    },200)
  })

}
