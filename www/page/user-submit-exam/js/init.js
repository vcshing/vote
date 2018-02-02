function userSubmitExamPageInit(){
  ajaxGetExamType(function(response){

      var html = "<option value=\""+""+"\">"+appLangArr[defaultLang].other.option+"<\/option>";
      $(response.result).each(function(index,result){
          html += "<option value=\""+result.type_id+"\">"+result.type+"<\/option>";
      })

      $(".submit-picker-type").find("select").html(html)
    //  $("item-after")
      $(".submit-picker-type").find(".item-after").html(appLangArr[defaultLang].other.option)


  })


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

  $(".trumbowyg-editor").on("click", function() {
    this.focus();
  })

  userSubmitExamPageAddBindEvent()
}
