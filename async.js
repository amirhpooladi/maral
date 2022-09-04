recipe=document.querySelector(".bb");
const example=() =>{
   
    const mark=`<h4  style="text-align:center">مارال</h4>`;
    recipe.insertAdjacentHTML("beforeend", mark);
}

const example1=() =>{
   
    const mark=`<h1  style="text-align:center" "color:red"  >کوالای وحشی</h1>`;
    recipe.insertAdjacentHTML("beforeend", mark);
}

const example2=() =>{
   
    const mark=`<h4  style="text-align:center"> .است</h4>`;
    recipe.insertAdjacentHTML("beforeend", mark);
}



document.querySelector(".mar").addEventListener("click",()=>{
   setTimeout(() => {
        example();
    },1000);

    setTimeout(() => {
        example1();
    },2000);

    setTimeout(() => {
        example2();
    },3000);
});
