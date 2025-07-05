const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');
const halfCircles = document.querySelectorAll('.half-circle')
const halfCircleTop = document.querySelector('.half-circle-top')
const progressBarCircle = document.querySelector('.progressbar-circle')

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});



function result() {

    var score = 0;
    var q1 = document.getElementsByName("1");
    var q2 = document.getElementsByName("2");
    var q3 = document.getElementsByName("3");
    var q4 = document.getElementsByName("4");
    var q5 = document.getElementsByName("5");
    var q6 = document.getElementsByName("6");
    var q7 = document.getElementsByName("7");
    var q8 = document.getElementsByName("8");
    var q9 = document.getElementsByName("9");
    var q10 = document.getElementsByName("10");
    var q11 = document.getElementsByName("11");
    var q12 = document.getElementsByName("12");
    for (var i = 0; i < q1.length; i++) {
        if (q1[i].checked) {
            score += parseInt(q1[i].value);
        }
    }
    for (var i = 0; i < q2.length; i++) {
        if (q2[i].checked) {
            score += parseInt(q2[i].value);
        }
    }
    for (var i = 0; i < q3.length; i++) {
        if (q3[i].checked) {
            score += parseInt(q3[i].value);
        }
    }
    for (var i = 0; i < q4.length; i++) {
        if (q4[i].checked) {
            score += parseInt(q4[i].value);
        }
    }
    for (var i = 0; i < q5.length; i++) {
        if (q5[i].checked) {
            score += parseInt(q5[i].value);
        }
    }
    for (var i = 0; i < q6.length; i++) {
        if (q6[i].checked) {
            score += parseInt(q6[i].value);
        }
    }
    for (var i = 0; i < q7.length; i++) {
        if (q7[i].checked) {
            score += parseInt(q7[i].value);
        }
    }
    for (var i = 0; i < q8.length; i++) {
        if (q8[i].checked) {
            score += parseInt(q8[i].value);
        }
    }
    for (var i = 0; i < q9.length; i++) {
        if (q9[i].checked) {
            score += parseInt(q9[i].value);
        }
    }
    for (var i = 0; i < q10.length; i++) {
        if (q10[i].checked) {
            score += parseInt(q10[i].value);
        }
    }
    for (var i = 0; i < q11.length; i++) {
        if (q11[i].checked) {
            score += parseInt(q11[i].value);
        }
    }
    for (var i = 0; i < q12.length; i++) {
        if (q12[i].checked) {
            score += parseInt(q12[i].value);
        }
    }


    var percentage = (score / 36) * 100;
    var rounded = Math.round(percentage);

    modal_container.classList.add('show');
    document.getElementById('score').innerHTML = rounded + "%";
    console.log(rounded + " %");



    

    if (percentage >= 50) {
        document.getElementById('result').innerHTML = "Teie Tulemuse järgi soovitame me teil teha hingamisharjutusi, et vähendada stressi ja parandada oma tervist. Harjutusele saate ligi vajutades seda linki - ";

        document.getElementById('result').innerHTML += '<a href="/game">Hingamisharjutused</a>';
    }
    else {
        document.getElementById('result').innerHTML = "Teie Tulemuse järgi soovitame me teil teha õpimängu - ";

        document.getElementById('result').innerHTML += '<a href="/learngame">Õpimäng</a>';
    }
    

    

    // // alert score percentage
    // alert("Sa said " + rounded + "%");

}

// var rounded = result / 36 * 100;
// var percentage = Math.round(rounded);

// var counter = 0;
//     window.addEventListener("DOMContentLoaded",move=() =>{

//         // if modal is open then move the progress bar
//         if (modal_container.classList.contains('show')) {
//             counter += 1;
//             var elem = document.querySelector(".progress-done");
    
//                 var width = 50 ;
    
//                 var  main  = setInterval(frame,50);
//                 var width = 50 ;
    
//         var  main  = setInterval(frame,50);
    
//         function frame() {
    
//           if (width >= percentage) {
    
//             clearInterval(main);
//           } else {
            
//             width++;
            
//             elem.style.width = width + "%";
//             elem.innerHTML = width  + "%";
//           }
//         }
        
//         } else {
    
//             counter = 0;
//         }
//         setTimeout(move, 1000);
    
//     })





//   if (counter == 0) {
//     J = 1;

//     var elem = document.querySelector(".progress-done");

//     var width = 50 ;
//     //for width 
//     var  main  = setInterval(frame,50);

//     function frame() {

//       if (width >= 70) {

//         clearInterval(main);
//       } else {
        
//         width++;
        
//         elem.style.width = width + "%";
//         elem.innerHTML = width  + "%";
//       }
//     }
//   }
// });




