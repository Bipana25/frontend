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
      const projects=[
         {
            image:"image/b.jpg",
            title:"Animated Navbar",
            description:"The blue flower symbolizes desire, love, and the metaphysical quest for the infinite or unreachable. It's often connected with a longing for the unknown or a spiritual journey—something just out of reach, but deeply yearned for.",
            src: "https://bipana25.github.io/BMI/",
         },
         {
            image:"image/cloud.jpg",
            title:"landing page",
            description:"Rabbits are playful and very loyal to their masters. They have a sharp sense of hearing and eyesight.They have long ears which can detect danger from a long distance.", 
            src: "https://bipana25.github.io/BMI/",
         },
         {
            image:"image/rabbit 2.jpg",
            title:"Animated Navbar",
            description:"A dog has sharp teeth so that it can eat flesh very easily, it has four legs, two ears, two eyes, a tail, a mouth, and a nose. It runs very fast, barks loudly and attacks the strangers.",
            src:"https://bipana25.github.io/BMI",

         },
      ];

      const container =document.getElementById("project-container");

      projects.forEach(project=>{
         const card =document.createElement("div");
         card.className ="card";
         card.innerHTML =`
         <img src="${project.image}" alt="${project.title}" \>
         <h3>${project.title}</h3>
         <p>${project.description}</p>
         <a href="${project.src}">view project</a>
         `;
         container.appendChild(card);
      });