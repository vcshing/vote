function bindMain(){
$(".title").html(appLangArr[defaultLang].mainpage.appname);
$(".navMain").html(appLangArr[defaultLang].mainpage.navMain);
$(".navSubmit").html(appLangArr[defaultLang].mainpage.navSubmit);
$(".navMySubmit").html(appLangArr[defaultLang].mainpage.navMySubmit);
$(".navDisclaimer").html(appLangArr[defaultLang].mainpage.navDisclaimer);
$(".otherApp").html(appLangArr[defaultLang].mainpage.otherApp);
$(".shareApp").html(appLangArr[defaultLang].mainpage.shareApp);
$(".item-title").html(appLangArr[defaultLang].other.type);

$(".interversion").html(checkLang());
}
$(".hkversion").bind("click", function() {
   setCookie("lang", {selectedLang:"zh-TW"});
   lang="zh-TW";
   defaultLang="zh";
   init();
})
$(".enversion").bind("click", function() {
   setCookie("lang", {selectedLang:"en"});
   lang="en";
   defaultLang="default";
  init();
})
$(".interversion").bind("click", function() {
    setCookie("lang", {selectedLang:checkLang()});
   lang= checkLang();
   defaultLang="default";
  init();
})

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
            page = 1;

            if (response.hasNextPage == 0) {
                app.infiniteScroll.destroy('.infinite-scroll-content');
                $$('.infinite-scroll-preloader').hide();
            } else {
                app.infiniteScroll.create('.infinite-scroll-content');
                $$('.infinite-scroll-preloader').show();
            }
        })

    })
}
function bindInfinite() {
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
              $$('.infinite-scroll-preloader').hide();
          }
          allowInfinite = true;
      })

  })
}
