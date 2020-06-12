$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="chat-main">
          <div class="message-box">
            <div class="messageInfo">
              <div class="messageInfo__user-name">
                ${message.user_name}
              </div>
              <div class="messageInfo__date">
                ${message.created_at}
              </div>
            </div>
            <div class="messages">
              <p class="Message__content">
                ${message.content}
              </p>
              <img class="Message__image" src="${message.image}">
            </div>
          </div>`
      return html;
    } else {
      let html =
        `<div class="chat-main">
          <div class="message-box">
            <div class="messageInfo">
              <div class="messageInfo__user-name">
                ${message.user_name}
              </div>
              <div class="messageInfo__date">
                ${message.created_at}
              </div>
            </div>
            <div class="messages">
              <p class="Message__content">
                ${message.content}
              </p>
            </div>
          </div>`
          return html;
          };
        }

  $('form').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.MessageField').append(html);      
      $('form')[0].reset();
      $('.submit-btn').attr('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
  });
  });
});