function init() {
    $.trumbowyg.svgPath = 'commonjs/library/editor/icons.svg';

    if(lang==""){
      setTimeout(function(){
          selectLang();
      },1000)
    }
    bindMain();
    bindInfinite()

     page = 1;
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

        $(".topicList").html(html);
        if (response.hasNextPage == 0) {
            app.infiniteScroll.destroy('.infinite-scroll-content');
            $$('.infinite-scroll-preloader').hide();
        }
    })

      ajaxGetExamType(function(response) {
          var html = "<option value=\"" + "" + "\">" + appLangArr[defaultLang].other.all + "<\/option>";
          $(response.result).each(function(index, result) {
              html += "<option value=\"" + result.type_id + "\">" + result.type + "<\/option>";
          })

          $(".picker-type").find("select").html(html)

          $(".picker-type").find(".item-after").html(appLangArr[defaultLang].other.all)

          bindType();
      })

    var $ptrContent = $$('.ptr-content');
    //debugger;
    $ptrContent.on('ptr:refresh', function (e) {
      init();
      e.detail();
    })
}
