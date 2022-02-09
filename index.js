//import 'style.scss';
//delete bottom initialisation when using
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
     forward.innerText = `>>`;
     backward.innerText = `<<`;
    let navBorder = document.createElement('div');
    navBorder.classList.add('nav-border');


     bodi.appendChild(container);
     container.appendChild(imageWheel);
     container.appendChild(backward);
     container.appendChild(forward);
     container.appendChild(navBorder);

     for(let i=0; i< arrayofimages.length; i++){
         let outLine = document.createElement('div');
         outLine.classList.add('img-outline');
         let img = new Image();
         img.id = `img${i}`;
         img.classList.add('img-select');
         img.src = `${arrayofimages[i]}`;
         imageWheel.appendChild(outLine);
         outLine.appendChild(img);

         let navButton = document.createElement('button');
         navButton.id = `nav${i}`;
         navButton.classList.add('navStyle');
         navBorder.appendChild(navButton);

         navButton.addEventListener('click',(e)=>{
                let index = e.target.id;
                let splited = index.split('v');
                console.log(splited[1]);
                updateInitial(splited[1]);
                forwardSlide(imageWheel,splited[1]);
                clearClass();
                navButton.classList.add('bold')
                img.classList.add('active')
         })

     }
     let initial = 0;

     function updateInitial(num){
        initial = num;
    }

     let imago = document.getElementById(`img${initial}`);
     imago.classList.add('active');
     let navDot = document.getElementById(`nav${initial}`);
     navDot.classList.add('bold');
//literally repeat this imago bs to make navbar active
     forward.addEventListener('click',()=>{
         clearClass();
        imago = document.getElementById(`img${initial}`);
        imago.classList.remove('active');
        let navDot = document.getElementById(`nav${initial}`);
        navDot.classList.remove('bold');
        //imageWheel.style.setProperty('--length', 'translateX(-90%)');
         initial++;
         if(initial>=arrayofimages.length){
            initial = 0;
            let imago = document.getElementById(`img${initial}`);
            imago.classList.add('active');
            let navDot = document.getElementById(`nav${initial}`);
            navDot.classList.add('bold');
        } else {
            let imago2 = document.getElementById(`img${initial}`);
            imago2.classList.add('active');
            let navDot2 = document.getElementById(`nav${initial}`);
            navDot2.classList.add('bold');
        }
         forwardSlide(imageWheel,initial);
        //console.log(initial);
     })



     backward.addEventListener('click', ()=> { 
        if(initial<1){
            initial = arrayofimages.length;
            //clearClass()
            //console.log(initial-1);
            let imago = document.getElementById(`img${initial-1}`);
            imago.classList.toggle('active');

            let navFirst = document.getElementById(`nav${0}`);
            navFirst.classList.toggle('bold');

            let navDot = document.getElementById(`nav${initial-1}`);
            navDot.classList.toggle('bold');
        } else {
            let imago3 = document.getElementById(`img${initial}`);
            //console.log(initial);
            imago3.classList.toggle('active');
            let navDot3 = document.getElementById(`nav${initial}`);
            navDot3.classList.toggle('bold');

        }
        reverseSlide(imageWheel,initial);
        initial--;
        let imago4 = document.getElementById(`img${initial}`);
        imago4.classList.add('active');
        let navDot4 = document.getElementById(`nav${initial}`);
        navDot4.classList.add('bold');

     })
 }

 function clearClass() {
    let allNav = document.getElementsByClassName('navStyle');
    let allImage = document.getElementsByClassName('img-select');
    for(let i=0;i<allNav.length;i++){
        allNav[i].classList.remove('bold');
        allImage[i].classList.remove('active');
    }
 }

 

 function forwardSlide(input,index) {
     //clearClass();
    input.style.setProperty(`--length`, `translateX(-${index*9}0%)`);
    if(index>2) {
        input.style.setProperty(`--length`, `translateX(-${index*9}5%)`);
    }
    if(index>5) {
        input.style.setProperty(`--length`, `translateX(-${(index*9)}8%)`);
    }
    if(index>7) {
        input.style.setProperty(`--length`, `translateX(-${(index*9)+1}8%)`);
    }
    if(index>11) {
        input.style.setProperty(`--length`, `translateX(-${(index*9)+2}8%)`);
    }
}

function reverseSlide(input,index) {
   // clearClass();
    input.style.setProperty(`--length`, `translateX(-${(index*9)-9}0%)`);
    if(index>2) {
        input.style.setProperty(`--length`, `translateX(-${(index*9)-9}5%)`);
    }
    if(index>5) {
        input.style.setProperty(`--length`, `translateX(-${(index*9)-9}8%)`);
    }
    if(index>7) {
        input.style.setProperty(`--length`, `translateX(-${(index*9)-9+1}8%)`);
    }
    if(index>11) {
        input.style.setProperty(`--length`, `translateX(-${(index*9)-9+2}8%)`);
    }
}


imageSlider(['./images/1.jpg', './images/2.jpg', './images/3.jpg', './images/4.jpg', './images/5.jpg', './images/6.jpg']);