document.addEventListener('DOMContentLoaded', (event) => {
    let first_value;
    let second_value;
    let sign_used;
    let screen =document.querySelector('#calc-screen');

    //When you click on a number
    let numbers=document.querySelectorAll('.number')
    numbers.forEach(number => {
        number.addEventListener('click',function(){
            if(screen.innerHTML=="0"){
                screen.innerHTML=number.value
            }else{
                screen.innerHTML+=number.value
            }
            
        })
    });

    //When you click on the signs (+,-,X,/)
    let signs=document.querySelectorAll('.signs')
    signs.forEach(sign=>{
        sign.addEventListener('click',function (){
            first_value= parseFloat(screen.innerHTML)
            sign_used = sign.value;
            screen.innerHTML="";
        })
    })


    //When you click equals
    let equals_sign= document.querySelector('#equal-sign')
    equals_sign.addEventListener('click',function () {
        second_value= parseFloat(screen.innerHTML)
        switch (sign_used) {
            case '*':
                screen.innerHTML=first_value*second_value;
                break;
            case '+':
                screen.innerHTML=first_value+second_value;
                break;
            case '/':
                screen.innerHTML=first_value/second_value;
                break;
            case '-':
                screen.innerHTML=first_value-second_value;
                break;
            default:
                
                break;
        }
        
    })

    //Click CE-buton
    let ce_btn= document.querySelector('#CE-buton')
    ce_btn.addEventListener('click',function (){
        screen.innerHTML="0";
    })

    //Click C-buton
    let c_btn= document.querySelector('#C-buton')
    c_btn.addEventListener('click',function (){
        screen.innerHTML="0";
        irst_value=undefined;
        second_value=undefined;
        sign_used=undefined;
    })

    //When I click backspace
    let bck= document.querySelector('#cal-back-space')
    bck.addEventListener('click',function (){
        //Get what is in screen
        let str=screen.innerHTML;
        str=str.substr(0,str.length-1);
        screen.innerHTML=str;
    })
    
});