function displaydata(data){
    result.value=result.value+data
}
function allclear(){
    result.value=" "
}
function find(){
    result.value=eval(result.value)
}
function backspace(){
   result.value=result.value.slice(0,-1)
}