var assignTime = function(){

    for (i = 9; i < 18; i++){
        var Thishour = i
        var CurrentDate = moment();
        var time = moment(CurrentDate, "L").set("hour", Thishour).format("hA");
        console.log(time)
        var GetID = "Time-" + i
        $('#' + GetID).text(time);
    };
    
};


$(".description").on("click", "div", function() {
  
    var text = $(this)
        .text()
        .trim();
    console.log("P was clicked")
    var textInput = $("<textarea>")
      .addClass("form-control")
      .val(text);
  
      $(this).replaceWith(textInput);
      textInput.trigger("focus");
  });

 




assignTime();
