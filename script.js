let text = document.getElementById('text');
let btn = document.getElementById('button');
let display = document.querySelector('.hidden');
btn.addEventListener('click',()=>{
    let count = 0;
    let spaces = 0;
    let para = text.value;
    // let special = ['@', '#', '$', '%', '^', '&', '*', ',', '¢', '£', '¥', ' ']
    for(let i=0;i<para.length;++i){
        if(para[i]==" "||para[i]=="."||para[i]=="@"||para[i]==","||para[i]=="!"){
            spaces++;
            count++;
        }
        else{
            count++;
        }
    }
    display.setAttribute('style','display: block');
    display.innerHTML = `Word Count: ${count-spaces}`;
})