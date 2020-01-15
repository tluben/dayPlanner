var timeblocks = "#9am,#10am,#11am,#12pm,#1pm,#2pm,#3pm,#4pm,#5pm".split(",")


for (var i = 0; i < timeblocks.length; i++){
   var item = localStorage.getItem(timeblocks[i]); 
   $(timeblocks[i]).val(item)

}


$(".btn").on("click",function(e){
   var userClick= $(this).val()
   var userInput=$(userClick).val()
localStorage.setItem(userClick, userInput)
})

for(var i = 9; i < 18; i++){
   var hour = parseInt(moment().format("H"))
   if (i < hour ){ 
$("#"+i).removeClass()
$("#"+i).addClass("row bg-secondary")
   } else if (i > hour) {
      $("#"+i).removeClass()
      $("#"+i).addClass("row bg-success")
   } else {
      $("#"+i).removeClass()
      $("#"+i).addClass("row bg-danger")
   } 

}