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
        //debugger
        //console.log(todoEl)
        //var hourID = $(this).children(".hour").children().attr("id")
        var hourTxt = $(todoEl).children(".hour").children().text()
        //console.log(hourTxt)
        // ensure it worked
        //console.log(hourTxt); 
        
        var elHour = moment(hourTxt, "hA");
        console.log(elHour.format("hA"))
      
        var nxtHour = elHour.add(1, "hours");
        console.log(nxtHour.format("hA"))
        //console.log(nxtHour);

        // remove any old classes from element
        $(todoEl).children(".description").removeClass("bg-danger bg-success");
        //debugger
        console.log($(todoEl).children(".description").text())
        
        //debugger
        console.log(moment().isBefore(nxtHour))
        console.log(moment().isAfter(elHour))
        if(moment().isBefore(nxtHour) && moment().isAfter(elHour)){
            $(todoEl).children(".description").addClass("bg-danger");
        } else if(moment().isBefore(elHour)) {
            $(todoEl).children(".description").addClass("bg-success");
        };

    
};

var saveTask = function(rowEl) {
    //debugger
    var descTxt = $(rowEl).children(".description").children().text()
    var descId = $(rowEl).children(".description").attr("id")
    toDoObj = {
        ToDoDesc: descTxt,
        ToDoID: descId
    }
    localStorage.setItem("toDoObject", JSON.stringify(toDoObj));
 }

 var loadTasks = function() {
    //debugger
    toDos = JSON.parse(localStorage.getItem("toDoObject"));
  
    // if nothing in localStorage, create a new object to track all task status arrays
    if (!toDos) {
        toDoObj = {
            ToDoDesc: [],
            ToDoID: []
      };
    }
  
    // loop over object properties
    $.each(toDos, function(list, arr) {
      console.log(list, arr);
      // then loop over sub-array
      $('#' + toDos.ToDoID).find("p").text(toDos.ToDoDesc)
    });
  };
  

 $(".row").on("click", "i", function() {
    //debugger 
    var rEl = $(this).parent(".saveBtn").parent(".row")
    saveTask(rEl);
 });


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







  setInterval(function() {
    checkauditTime();
  }, (1000 * 60));



assignTime();
checkauditTime();
loadTasks();