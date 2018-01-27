function edit_renderChoice(array) {
    var html="";
    html += "    <li >";
    html += "      <div class=\"item-content item-input\">";
    html += "        <div class=\"item-inner\">";
  //  html += "          <div class=\"item-title\">答案B<\/div>";
    html += "          <div class=\"item-input-wrap\">";
    html += "            <input type=\"text\" class=\"choiceAns"+array.alphabet+"\" name=\"choiceAns"+array.alphabet+"\" placeholder=\"答案"+array.alphabet+"\" value=\""+ array.choiceAns +"\">";
    html += "          <\/div>";
    html += "        <\/div>";
    html += "      <\/div>";
    html += "    <\/li>";

    return html
}
