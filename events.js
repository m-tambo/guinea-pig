// target the output element
let output;
output = $('#output-target')

// display message when a section is clicked
$('.article-section').click(function(e) {
   output.html( `
      You clicked on the ${e.target.innerHTML} section
   `)
})

// display message when mouse is over header
$('#page-title').mouseover(function (e) {
   output.html( `
      You moused over the header
   `)

})

// display message when mouse leaves header
$('#page-title').mouseout(function (e) {
   output.html( `
      You left the header!!
   `)

})
