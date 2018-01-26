
var allowInfinite = true;

$$('.infinite-scroll-content').on('infinite', function() {
  if (!allowInfinite) return;
  allowInfinite = false;
  page++
  selfList_ajaxGetTopicList(topicListArr = {
    "page": page,
    "type": $(".type").val(),
    "id": ""
  }, function(response) {
    var html = ""
    //  debugger;
    $(response.result).each(function(index, result) {
      html += selfList_renderTopicList(result)
    })
    $(".self_topicList").append(html);

    if (response.hasNextPage == 0) {
      app.infiniteScroll.destroy('.infinite-scroll-content');
      $$('.infinite-scroll-preloader').remove();
    }
    allowInfinite = true;
  })

})
