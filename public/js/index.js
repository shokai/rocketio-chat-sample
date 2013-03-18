$(function(){
  $("#chat #btn_send").click(post);
  $("#chat #message").keydown(function(e){
    if(e.keyCode == 13) post();
  });
});

var io = new RocketIO().connect();

io.on("chat", function(data){
  var m = $("<li>").text(data.name + " : " +data.message);
  $("#chat #timeline").prepend(m);
});

io.on("connect", function(session){
  console.log("connect!! "+session);
  $("#type").text("type : "+io.type);
});

io.on("disconnect", function(){
  console.log("disconnect");
});

io.on("error", function(err){
  console.error(err);
});

// catch all events
io.on("*", function(event, data){
  console.log(event + " - " + JSON.stringify(data));
});

var post = function(){
  var name = $("#chat #name").val();
  var message = $("#chat #message").val();
  if(message.length < 1) return;
  io.push("chat", {name: name, message: message});
  $("#chat #message").val("");
};
