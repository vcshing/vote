function selfList_renderTopicList(array){
  var html="";
//  html += "      <ul>";
  html += "                <li>";
  html += "                   <a class=\"item-link item-content\" onclick=\"selfList_redirectQuestionPage("+ array.master_id +")\">";
  html += "                    <div class=\"item-inner\">";
  html += "                      <div class=\"item-title-row\">";
  html += "                        <div class=\"item\">"+array.title+"<\/div>";
  //html += "                        <!--  <div class=\"item-after\">$15<\/div>-->";
  html += "                      <\/div>";
  html += "";
  //html += "                      <div class=\"item-text\">Yellow Submarine Yellow Submarine Yellow Submarine Yellow Submarine Yellow Submarine<\/div>";
  html += "                    <\/div>";
  html += "                  <\/a>";
  html += "                <\/li>";
  html += "";
//  html += "              <\/ul>";


  return html;
}

function selfList_redirectQuestionPage(index){
    app.view.current.router.navigate("/user-submit-edit/?id="+ index)
}
