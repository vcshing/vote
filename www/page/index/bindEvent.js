//function bindTopicList() {
//  $(".topicList1").bind("click", function(e) {
//    mainView.router.loadPage("page/question/question.html")
//  })
//}
function bindType() {
    $(".type").bind("change", function() {
        ajaxGetTopicList({
            "page": 1,
            "type": $(".type").val(),
            "id": ""
        }, function(response) {
            var html = ""
            $(response.result).each(function(index, result) {
                html += renderTopicList(result)
            })
            $(".topicList").html(html);
            page = 2;
            if (response.hasNextPage == 0) {
                app.infiniteScroll.destroy('.infinite-scroll-content');
                $$('.infinite-scroll-preloader').remove();
            }
        })

    })
}
var allowInfinite = true;

$$('.infinite-scroll-content').on('infinite', function() {
    if (!allowInfinite) return;
    allowInfinite = false;
    page++
    ajaxGetTopicList(topicListArr = {
        "page": page,
        "type": $(".type").val(),
        "id": ""
    }, function(response) {
        var html = ""
        //  debugger;
        $(response.result).each(function(index, result) {
            html += renderTopicList(result)
        })
        $(".topicList").append(html);

        if (response.hasNextPage == 0) {
            app.infiniteScroll.destroy('.infinite-scroll-content');
            $$('.infinite-scroll-preloader').remove();
        }
        allowInfinite = true;
    })

})
