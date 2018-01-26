function init() {
    $.trumbowyg.svgPath = 'commonjs/library/editor/icons.svg';

    //alert(1);
    //app.view.current.router.navigate("/comments/?id="+1)
    var page = 2;
    ajaxGetTopicList({
        "page": 1,
        "type": $(".type").val(),
        "id": ""
    }, function(response) {
        var html = ""
        //  debugger;
        $(response.result).each(function(index, result) {
            html += renderTopicList(result)
        })
        page = 2;
        $(".topicList").html(html);
        if (response.hasNextPage == 0) {
            app.infiniteScroll.destroy('.infinite-scroll-content');
            $$('.infinite-scroll-preloader').remove();
        }
    })
    setTimeout(function(){
      ajaxGetExamType(function(response) {
          var html = "<option value=\"" + "" + "\">" + "全部" + "<\/option>";
          $(response.result).each(function(index, result) {
              html += "<option value=\"" + result.type_id + "\">" + result.type + "<\/option>";
          })

          $(".picker-type").find("select").html(html)

          $(".picker-type").find(".item-after").html("全部")

          bindType();
      })

    },3000)
    var $ptrContent = $$('.ptr-content');
    //debugger;
    $ptrContent.on('ptr:refresh', function (e) {
      init();
      e.detail();
    })
}
