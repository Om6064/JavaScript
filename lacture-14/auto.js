let box_row = document.getElementById("box-row");

Quotes = [
   {Quotes : "All that glitters is not gold." , author: "Aryan Patel"},
     {Quotes : "Chup Nubdii" , author: "Shreya Anjan"}
]
Quotes.forEach((data) => {

    box_row.innerHTML += `
   
             <div class="col-lg-4 col-md-6 py-3 px-3">
                 <div class="bg-primary my-4 p-3 h-100">
                    <figure>
                     <blockquote class="blockquote">
                       <p class="text-white">${data.Quotes}</p>
                     </blockquote>
                     <figcaption class="blockquote-footer text-white">
                       Someone famous in <cite title="Source Title">${data.author}</cite>
                     </figcaption>
                   </figure>
                 </div>
             </div>
      
     `

});



