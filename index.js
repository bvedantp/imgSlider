 let bodi = document.querySelector('body');

 function imageSlider(arrayofimages) {
     let container = document.createElement('div');
     container.classList.add('main-container');
     let imageWheel = document.createElement('div');
     imageWheel.classList.add('image-wheel');
     imageWheel.classList.add('focused');
     let forward = document.createElement('button');
     forward.id = 'forwards';
     let backward = document.createElement('button');
     backward.id = 'backwards';
     forward.innerText = `next`;
     backward.innerText = `back`;
     //button innertext b do arrow keys
     
     bodi.appendChild(container);
     container.appendChild(imageWheel);
     container.appendChild(backward);
     container.appendChild(forward);

     for(let i=0; i< arrayofimages.length; i++){
         let outLine = document.createElement('div');
         outLine.classList.add('img-outline');
         let img = new Image();
         img.src = `${arrayofimages[i]}`;
         imageWheel.appendChild(outLine);
         outLine.appendChild(img);
     }
     let initial = 0;
     forward.addEventListener('click',()=>{
         //imageWheel.style.setProperty('--length', 'translateX(-90%)');
         initial++;
         if(initial>=arrayofimages.length){
            initial = 0;
        }
         forwardSlide(imageWheel,initial);
       // console.log(initial);
     })
     backward.addEventListener('click', ()=> { 
        if(initial<1){
            initial = arrayofimages.length;
        }
        reverseSlide(imageWheel,initial);
        initial--;
        // console.log(initial);
     })
 }


 function forwardSlide(input,index) {
    input.style.setProperty(`--length`, `translateX(-${index*9}0%)`);
    if(index>2) {
        input.style.setProperty(`--length`, `translateX(-${index*9}5%)`);
    }
}

function reverseSlide(input,index) {
    input.style.setProperty(`--length`, `translateX(-${(index*9)-9}0%)`);
    if(index>2) {
        input.style.setProperty(`--length`, `translateX(-${(index*9)-9}5%)`);
    }
}


imageSlider(['./images/1.jpg', './images/2.jpg', './images/3.jpg', './images/4.jpg', './images/5.jpg', './images/6.jpg']);