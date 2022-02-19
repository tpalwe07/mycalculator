let inputBar = document.getElementById('inputBar');
buttons = document.querySelectorAll('button');
let operationString = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'x') {
            buttonText = '*';
            operationString += buttonText;
            inputBar.value = operationString;
        }
        else if (buttonText == 'C') {
            operationString = "";
            inputBar.value = operationString;
        }
        else if (buttonText == '÷') {
            buttonText = '/';
            operationString += buttonText;
            inputBar.value = operationString;
        }
        else if (buttonText == '=') {
            if(operationString === '' || operationString === undefined){
                operationString=inputBar.value;
            }
            inputBar.value = eval(operationString);
             operationString= eval(operationString);
        }
        else if(buttonText == '⌫'){
            operationString = operationString.slice(0, - 1);
            inputBar.value= operationString;
        }
        else {
            operationString += buttonText;
            inputBar.value = operationString;
        }

    })
}

document.addEventListener('keydown',(event)=>{
    const keyname=event.key;
    console.log(keyname);
    if(keyname==='=' || keyname==='Enter'){
        event.preventDefault();
        if(operationString === '' || operationString === undefined){
            operationString=inputBar.value;
        }
        inputBar.value = eval(operationString);
        operationString= eval(operationString);

    }else{
        operationString=inputBar.value;
    }
})
// function backSpace(){
//     screenView.value = screenView.value.slice(0, - 1);
// }
