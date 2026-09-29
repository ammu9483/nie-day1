function Vote() {
    var name= document.getElementById("name").value;
    var age= document.getElementById("age").value;
    var Answer= document.getElementById("Answer");
    if(age>=18){
        Answer.innerHTML=name + " is eligible to vote";
    }
    else{
        Answer.innerHTML=name + " is not eligible to vote";      
    }

}