let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'x') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '÷') {
            buttonText = '/';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            if(screenValue === '' || screenValue === undefined){
                screenValue=screen.value;
            }
            screen.value = eval(screenValue);
        }
        else if(buttonText == '⌫'){
            screenValue = screenValue.slice(0, - 1);
            screen.value= screenValue;
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}

document.addEventListener('keydown',(event)=>{
    const keyname=event.key;
    console.log(keyname);
    if(keyname==='=' || keyname==='Enter'){
        event.preventDefault();
        if(screenValue === '' || screenValue === undefined){
            screenValue=screen.value;
        }
        screen.value = eval(screenValue);
    }else{
        screenValue=screen.value;
    }
})
// function backSpace(){
//     screenView.value = screenView.value.slice(0, - 1);
// }
