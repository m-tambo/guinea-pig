// target the output element
let output;
output = $('#output-target')

// display message when a section is clicked
$('.article-section').click(function(e) {
   console.log(e.target)
   output.html( `
      You clicked on the ${e.target.innerHTML} section
   `)
})
