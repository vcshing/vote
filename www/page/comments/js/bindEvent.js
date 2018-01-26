function bindSendLink(messages,messagebar){
$$('.send-link').on('click', function () {

  var text = messagebar.getValue().replace(/\n/g, '<br>').trim();
  // return if empty message
  if (!text.length) return;

  // Clear area
  messagebar.clear();

  // Return focus to area
  messagebar.focus();

  // Add message to messages
  //messages.addMessage({
  //  text: text,
  //});

   return;
  // Receive dummy message
  //receiveMessage();
});
}
