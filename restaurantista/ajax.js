$(document).ready(function() {
    $('#newsletter-form').submit(function(event) {
        event.preventDefault();

        var email = $('#email').val().trim();
        var checkbox = $('#checkbox').is(':checked');

        if(!isValidEmail(email)){
            showMessage('Please enter valid email.','erorr');
            return
        }

        $.ajax({
            url:'/submit-form.js',
            type:'POST',
            data:{
                email: email,
                newsletter: newsletter,
            },
            success:function(response){
                showMessage('Thank you for subcribing to our newsletter.','succesful');
                $('#newsletter-form').reset();

            },
                    error:function(){
                showMessage('It was an error trying to subcribe to our newsletter','error');
                        }
        })
    })
    function isValidEmail(email){
    var emailRegex = /\S+@\.\S+/;

    return emailRegex.test(email)
    }

    function showMessage(message,type){
        var message = $('#message-container');
        messageContainer.text(message);


        messageContainer.remobeClass().addClass(type);

    }
} )