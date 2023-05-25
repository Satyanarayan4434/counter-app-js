let countvalue = document.querySelector('#countvalue');

function increamentValue(){
    let value = parseInt(countvalue.innerHTML);
    value = value+1;
    countvalue.innerHTML = value;
}
function decreamentValue(){
    let value = parseInt(countvalue.innerHTML);
    value = value-1;
    countvalue.innerHTML = value;
}