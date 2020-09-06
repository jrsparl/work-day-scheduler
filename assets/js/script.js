var assignTime = function(){
    for (i = 9; i < 18; i++){
        var hour = i
    };
    
    var time = moment("L").set("hour", hour).format("hA");
    console.log(time)
};

