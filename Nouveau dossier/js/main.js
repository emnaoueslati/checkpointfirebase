$("#bold").click(function(){
    if( $("#click").css("font-weight")==400)
    {
        $("#click").css("font-weight","bold");
    }else{
        $("#click").css("font-weight","normal");
    }
 })
$("#italic").click(function(){
   if( $("#click").css("font-style")=="normal")
   {
       $("#click").css("font-style","italic");
   }else{
       $("#click").css("font-style","normal");
   }
})

$("#underlined").click(function(){
    if($("#click").css("text-decoration")=="underline solid rgb(0, 0, 0)")
    {
        $("#click").css("text-decoration","none");
    }else{
    $("#click").css("text-decoration","underline solid rgb(0, 0, 0)");
    }
})
$("#firstdiv").mouseover(function(){
    $("#firstbutton").show();
    $("#firstdiv").css("opacity","0.7")
})
$("#firstdiv").mouseleave(function(){
    $("#firstbutton").hide();
    $("#firstdiv").css("opacity","1")

})
$("#seconddiv").mouseover(function(){
    $("#secondbutton").show();
    $("#seconddiv").css("opacity","0.7")
})
$("#seconddiv").mouseleave(function(){
    $("#secondbutton").hide();
    $("#seconddiv").css("opacity","1")
})
$("#thirddiv").mouseover(function(){
    $("#thirdbutton").show();
    $("#thirddiv").css("opacity","0.7")
})
$("#thirddiv").mouseleave(function(){
    $("#thirdbutton").hide();
    $("#thirddiv").css("opacity","1")
})
$("#fourthdiv").mouseover(function(){
    $("#fourthbutton").show();
    $("#fourthdiv").css("opacity","0.7")
})
$("#fourthdiv").mouseleave(function(){
    $("#fourthbutton").hide();
    $("#fourthdiv").css("opacity","1")
})
$("#fifthdiv").mouseover(function(){
    $("#fifthbutton").show();
    $("#fifthdiv").css("opacity","0.7")

})
$("#fifthdiv").mouseleave(function(){
    $("#fifthbutton").hide();
    $("#fifthdiv").css("opacity","1")

})
$("#sixthdiv").mouseover(function(){
    $("#sixthbutton").show();
    $("#sixthdiv").css("opacity","0.7")
})
$("#sixthdiv").mouseleave(function(){
    $("#sixthbutton").hide();
    $("#sixthdiv").css("opacity","1")
})
$("#seventhdiv").mouseover(function(){
    $("#seventhbutton").show();
    $("#seventhdiv").css("opacity","0.7")
})
$("#seventhdiv").mouseleave(function(){
    $("#seventhbutton").hide();
    $(".divet").css("opacity","1")
})
$("#eighthdiv").mouseover(function(){
    $("#eighthbutton").show();
    $("#eighthdiv").css("opacity","0.7")
})
$("#eighthdiv").mouseleave(function(){
    $("#eighthbutton").hide();
    $("#eighthdiv").css("opacity","1")

})
$("#ninethdiv").mouseover(function(){
    $("#ninethbutton").show();
    $("#ninethdiv").css("opacity","0.7")
})
$("#ninethdiv").mouseleave(function(){
    $("#ninethbutton").hide();
    $("#ninethdiv").css("opacity","1");
})
$("#select").click(function(){
    $("#click").css("font-size",$("#select").val());
})
$("#hp").click(function(){
    $("#click").css("font-family",$("#hp").val());
})
var firebaseConfig = {
    apiKey: "AIzaSyDgVdy31t7fhmJFTrOzD5UdOAghe2g9JHE",
    authDomain: "emna-gmc.firebaseapp.com",
    databaseURL: "https://emna-gmc.firebaseio.com",
    projectId: "emna-gmc",
    storageBucket: "",
    messagingSenderId: "872355273273",
    appId: "1:872355273273:web:b510049d212d06a4"
}
firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref("emna-gmc");
function submitForm(e){
    e.preventDefault()
    var email =document.getElementById("email").value;
    var password =document.getElementById("password").value;
    var tel =document.getElementById("tel").value;
    var track =document.getElementById("track").value;
    saveMessage(email,password,tel,track);
}

document.getElementById("contactform").addEventListener('submit', submitForm);
function saveMessage(email,password,tel,track){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        email: email,
        password: password,
        tel: tel,
        track: track,
    });
}