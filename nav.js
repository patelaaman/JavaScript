let li =document.getElementById('List')
let b = document.getElementById('bars')
let c = document.getElementById('close')

function show(){
    li.style.display="block";
    b.style.display="none";
    c.style.display="block";
}

function cl(){
    li.style.display="none";
    b.style.display="block";
    c.style.display="none";
}