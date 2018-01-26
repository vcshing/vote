function renderChoice(array) {
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
    html += "      <div class=\"item-content item-input\">";
    html += "        <div class=\"item-inner\">";
    html += "            <div class=\"item-input-wrap\">";
    html += "              <textarea class=\"choiceResult choiceResult"+array.alphabet+"\" name=\"choiceResult"+array.alphabet+"\" placeholder=\"答案"+array.alphabet+"分析結果\">"+array.choiceResult+"<\/textarea>";
    html += "            <\/div>";
    html += "        <\/div>";
    html += "      <\/div>";
    html += "    <\/li>";

    return html
}
