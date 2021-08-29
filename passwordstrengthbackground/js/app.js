//UI
const background =document.getElementById('background');
const password=document.getElementById('password');
const eyeicon=document.getElementById('eye');

//Event listener
password.addEventListener('input',(e)=>{
   // console.log(e.target);
   //console.log(e.target.value);
    const input=e.target.value;
    const inlength=input.length;
   // console.log(inlength);
  // console.log(20-inlength*2);
  //blur mhr 20 pay loe 20 htl ka - lote pee twt pw ko 10 lone lout yite yone nae no blur phit say chin loe 2 nae * */
  const blurvalue=20 - inlength *2; 
  background.style.filter=`blur(${blurvalue}px)`;//di varaible ka css ka blur() hrr
});

eyeicon.addEventListener('click', ()=>{
    //console.log('hay');
    if(eyeicon.classList.contains('fa-eye')){
        console.log('Show Password');

        //Method1
        //eyeicon.classList.remove('fa-eye');
        //eyeicon.classList.add("fa-eye-slash");

        //Method2
        eyeicon.classList.replace("fa-eye","fa-eye-slash");
        password.setAttribute("type","text");//overwrite lote pay lit tr
    }else{
        //console.log('Hide password');
        eyeicon.classList.replace("fa-eye-slash","fa-eye");
        password.setAttribute("type","password");//overwrite lote pay lit tr

    }
})
