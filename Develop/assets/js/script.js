var assignTime = function(){

    for (i = 9; i < 18; i++){
        var Thishour = i
        var CurrentDate = moment();
        var time = moment(CurrentDate, "L").set("hour", Thishour).format("hA");
        console.log(time)
        var GetID = "Time-" + i
        $('#' + GetID).text(time);
    };
    var longDate = moment(CurrentDate, "MM-DD-YYYY").format("dddd, MMMM Do");
    $("#currentDay").text(longDate);

};


var checkauditTime = function(){
    $(".row").each(function (i, el) {
        auditTime(el);
      });
};

var auditTime = function(todoEl){
    
        // get date from task element
        debugger
        //console.log(todoEl)
        var hourTxt = $(this).children(".hour p").text()//.trim();
        // ensure it worked
        //console.log(hourTxt); 
        
        var elHour = moment(hourTxt, "hA");
      
        var nxtHour = elHour.add(1, "h");
        //console.log(nxtHour);

        // remove any old classes from element
        $("#toDo-Grid").removeClass("list-group-item-warning list-group-item-danger");
        
        //debugger
        if(moment().isBefore(nxtHour) && moment().isAfter(elHour)){
            $("#toDo-Grid").addClass("list-group-item-danger");
        }

        
        
        /// apply new class if task is near/over due date
       // if (moment().isAfter(time)) {
        //  $(taskEl).addClass("list-group-item-danger");
       // } 
       // else if (Math.abs(moment().diff(time, "days")) <= 2) {
       //   $(taskEl).addClass("list-group-item-warning");
      //  }
    
};






$(".description").on("click", "p", function() {
  
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

  $(".description").on("blur", "textarea", function() {
    // get the textarea's current value/text
    var text = $(this)
      .val()
      .trim();
  
  //recreate p element
  var taskP = $("<p>")
    .text(text);
  
  // replace textarea with p element
  $(this).replaceWith(taskP);
  
  
  });

 




assignTime();
