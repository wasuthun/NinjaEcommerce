$( () => {

  // Cofirm button clicked.
  $('#yesButton').click( () => {
    console.log('Go to appointment page.');
    window.location = "http://localhost:3000/myappointment/None";
  });

  // Cancel button clicked then go to whisky page.
  $('#cancelButton').click( () => {
    console.log('Cancel the confirm order, go back to whisky page.');
    window.location = "http://localhost:3000/whisky";
  });

  // Delete button clicked.
  $('.deletesButton').on('click', function(e){
    const val = this.value
    const data = val.split(',')
    const quantity = $(`.fixsize[name=${data[1]}]`).val()
    const username = $('#userNavBarUsername').text()
    console.log(val)
    console.log(username)
    console.log(quantity)
    console.log(data)
    $.ajax({
        url: '/mycart/'+username,
        data:{
            'username': username,
            'productID': data[2],
            'quantity': parseInt(quantity)

        },
        type: 'POST',
        success: function(data) {
            if(data.return_code === '400'){
               console.log('error')
            }else{
                console.log(data)
            }
        },
        error: function(error){
            console.log('delete error')
        }
    })
})

} );
