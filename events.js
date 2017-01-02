// target the output element
let output = $('#output-target')

// display message when a section is clicked
$('.article-section').click( function(e) {
   output.html( `
      You clicked on the ${e.target.innerHTML} section
   `)
})

// display message when mouse is over header
$('#page-title').mouseover( function (e) {
   output.html( `
      You moused over the header
   `)
})

// display message when mouse leaves header
$('#page-title').mouseout( function (e) {
   output.html( `
      You left the header!!
   `)
})

// mirror the text type into the input field
$('#keypress-input').keyup( function(e) {
   output.html($('#keypress-input').val())
})

// add color button changes output to blue
$('#add-color').click( function (e) {
   output.addClass("blue")
})

// increase text size on hulkify button
$('#make-large').click( function (e) {
   output.addClass("hulk")
})

// add border on capture button
$('#add-border').click( function (e) {
   output.addClass("border")
})
