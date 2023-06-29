const demo=document.createElement('div');
demo.id='demo';
document.body.appendChild(demo);
//model.classList.add('active');


const images=document.querySelectorAll('img');


images.forEach(image => {
    image.addEventListener('click',()=>{
        demo.classList.add('active');
        const img=document.createElement('img');
        img.src=image.src;
        img.id="pic";

        const text = document.createElement('p');
        text.innerText = image.getAttribute('text');
        text.style.color = "white";
        text.style.fontSize = "20px"; 

        while(demo.firstChild){
            demo.removeChild(demo.firstChild);
        }
        demo.append(img);
        demo.append(text);
    });
});

demo.addEventListener('click',()=>{
    demo.classList.remove('active');
})