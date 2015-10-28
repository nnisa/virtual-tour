 // For Contact us validation 
    $('#mc-embedded-subscribe-form').submit(function () {
        var error = 0;
        var status=true;
        var emid = $('input[name=EMAIL]').val();
        var emailValidate =  /(.+)@(.+){2,}\.(.+){2,}/
        $('input.required').each(function(){
            $this=$(this);
            if(!emailValidate.test(emid) ){
             $('#validId').show();
             $this.addClass('error1');
              status=false;
            }
            if(emailValidate.test(emid) ){
                 $('#validId').hide();
                 $this.removeClass('error1');
            }
            if(!$.trim($this.val()))
            {
                $this.addClass('error');
                $this.next('.error-box').html($this.attr('title')).show();
                $('#validId').hide();
                status=false;
            }
            else
            {
                $this.removeClass('error');   
                $this.next('.error-box').html('').hide();
                 
            }

        });
        return status;
    });
    $(document).on('keyup', '.error,.error1', function () {
        $(this).next('.error-box').hide('slow');
        $('#validId').hide('slow');

    });