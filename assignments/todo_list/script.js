let count = 0;
document.querySelector('.addbutton').onclick = function(){
    let input = document.querySelector('.input').value
    if (input.length === ""){
        alert("please enter valid input");
    }
    else{
        document.querySelector('.todos').innerHTML += `<p key=${count}><span class="tasks">${input}</span></p>`;
        count ++;
    }
    let clear = document.querySelectorAll('.tasks')
    for(let i=0; i<clear.length; i++){
        clear[i].onclick = function(){
            this.remove();
        }
    }
}
function removeAll(){
    document.querySelector('.todos').innerHTML = "";
}