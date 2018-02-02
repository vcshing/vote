function selfList_renderTopicList(array){
  var html="";
  html += "    <li>";
  html += "      <a href=\"#\" class=\"item-link item-content\" onclick=\"selfList_redirectQuestionPage("+ array.master_id +")\">";
  html += "        <div class=\"item-inner\">";
  html += "          <div class=\"item-title\">";
  html += "             "+array.title+"";
  html += "            <div class=\"item-footer\">"+array.createtime+"<\/div>";
  html += "          <\/div>";
  html += "        <\/div>";
  html += "      <\/a>";
  html += "    <\/li>";



  return html;
}

function selfList_redirectQuestionPage(index){
  if(index == 0){
    app.view.current.router.navigate("/user-submit-exam/?id="+ index)
  }else{
      app.view.current.router.navigate("/user-submit-edit/?id="+ index)
  }
}
