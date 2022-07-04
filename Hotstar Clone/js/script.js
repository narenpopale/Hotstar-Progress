var serach = document.getElementsByClassName('srh');
var count = 0;
function searchBig(){
    // console.log("asd");
    serach[0].classList.toggle('srh1');
    count = 1;
}

document.addEventListener("click",()=>{
    if (count == 1) {
        serach[0].classList.toggle('srh');
        count = 0;        
    }
    // console.log("asd");
})