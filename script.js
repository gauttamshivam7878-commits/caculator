let input = document.querySelector(".input");
let boxes = document.querySelectorAll(".box");

let str ="" ;


boxes.forEach((box) => {
    box.addEventListener("click",() => {

        let value = box.innerText;

        if( value === "C"){
            str = "";
            input.value ="";
        }

        else if( value === "=") {
            input.value = eval(str);
            str = input.value;
        }

        else if ( value ==="⌫" ){
            str = str.slice(0, -1);
            input.value = str ;
        }

        else {
            str += value;
            input.value = str;
        }
    });
});

