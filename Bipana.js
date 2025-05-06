     const hamburger=document.getElementById('hamburger');
     const navlinks=document.getElementById('navlinks');
     hamburger.addEventListener('click',()=>{
        navlinks.classlist.toggle('active');
     });
     
    const text =  "Hii, I'm Bipana";
     const texthii = document.getElementById('texthii');
     let index = 0;
     function type(){
      if(index < text.length){
         texthii.textContent += text.charAt(index);
         index++;
         setTimeout(type, 150);

      }
     }
     type();
      