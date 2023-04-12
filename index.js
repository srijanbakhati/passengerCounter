
let count=0;
function increment(){
    count+=1;
    document.getElementById("count-el").textContent=count;
}
function save(){
    new_count=count+"- "
    document.getElementById("save-el").textContent+=new_count;
    count=0;
    document.getElementById("count-el").textContent=count;
    
}