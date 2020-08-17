var input = document.getElementById("input").innerHTML
var check = document.getElementsByName("check").innerHTML
var message = ''

function work(check) {
    if(check = document.getElementById("lower").innerHTML) {
        lowercase(input)
    }
    else {
        uppercase(input)
    }
}

function lowercase (input) {
    for(var i = 0; i < input.length; i++) {
       var char = input.charAt(i)
       if(i % 2 == 0) {
           message += char.toLowerCase()
       }
       else {
           message += char.toUpperCase()
       }
    }
    return message;  
}
  
function uppercase (input) {
    for (var i = 0; i < input.length; i++) {
       var char = input.charAt(i)
       if(i % 2 == 0) {
           message += char.toUpperCase()
       }
       else {
           message += char.toLowerCase()
       }
    }
    return message;  
} 

document.getElementById("output").innerHTML = work(check);