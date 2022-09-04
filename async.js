recipe=document.querySelector(".bb");
const example=() =>{
   
    const mark=`<h4  style="text-align:center">مارال</h4>`;
    recipe.insertAdjacentHTML("beforeend", mark);
}

const example1=() =>{
   
    const mark=`<h1 style="text-align:center">کوالای وحشی</h1>`;
    recipe.insertAdjacentHTML("beforeend", mark);
}

const example2=() =>{
   
    const mark=`<h4  style="text-align:center"> .است</h4>`;
    recipe.insertAdjacentHTML("beforeend", mark);
}

const example3=() =>{
   
    const mark=`<img style="width:200px;height:200px;display: block;
    margin-left: auto;
    margin-right: auto;
    " src="https://cdnblog.safarme.ir/Files/Post/752/530/w900/1-1.jpg" alt="koala">`;
    recipe.insertAdjacentHTML("beforeend", mark);
}



document.querySelector(".mar").addEventListener("click",()=>{
   setTimeout(() => {
        example();
    },1000);

    setTimeout(() => {
        example1();
        example3();
    },2000);

    setTimeout(() => {
        example2();
        
    },3000);

});
