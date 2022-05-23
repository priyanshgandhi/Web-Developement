(function ($) 
{
    'use strict';
    /*==================================================================
        [ Daterangepicker ]*/
    try {
        $('.js-datepicker').daterangepicker({
            "singleDatePicker": true,
            "showDropdowns": true,
            "autoUpdateInput": false,
            locale: {
                format: 'DD/MM/YYYY'
            },
        });
    
        var myCalendar = $('.js-datepicker');
        var isClick = 0;
    
        $(window).on('click',function(){
            isClick = 0;
        });
    
        $(myCalendar).on('apply.daterangepicker',function(ev, picker){
            isClick = 0;
            $(this).val(picker.startDate.format('DD/MM/YYYY'));
    
        });
    
        $('.js-btn-calendar').on('click',function(e){
            e.stopPropagation();
    
            if(isClick === 1) isClick = 0;
            else if(isClick === 0) isClick = 1;
    
            if (isClick === 1) {
                myCalendar.focus();
            }
        });
    
        $(myCalendar).on('click',function(e){
            e.stopPropagation();
            isClick = 1;
        });
    
        $('.daterangepicker').on('click',function(e){
            e.stopPropagation();
        });
    
    
    } catch(er) {console.log(er);}
    /*[ Select 2 Config ]
        ===========================================================*/
    
    try {
        var selectSimple = $('.js-select-simple');
    
        selectSimple.each(function () {
            var that = $(this);
            var selectBox = that.find('select');
            var selectDropdown = that.find('.select-dropdown');
            selectBox.select2({
                dropdownParent: selectDropdown
            });
        });
    
    } catch (err) {
        console.log(err);
    }
    
    // --------------------------------------------------------------------------------

        $(document).ready(function()
        {
            $("#submit-btn").click(function(event)
            {
                var formdata = {
                    fname : $("#firstName").val(),
                    lname : $("#lastName").val(),
                    birthday : $("#birthday").val(),
                    gender : $("#gender").val(),
                    email : $("#email").val(),
                    phone : $("#phone").val(), 
                };

                storeDataToLocalStorage(formdata);
                
                // console.log(formdata);
                event.preventDefault();
            sendData(formdata);
            
                window.location.href='./displayData.html'
            })    
        })

        function storeDataToLocalStorage(formdata)
        {
            //The getItem() method of the Storage interface, when passed a key name, will return that key's value, 
            //or null if the key does not exist, in the given Storage object.
            console.log(formdata);
                if (!localStorage.getItem("formdata")) {
                    localStorage.setItem("formdata", JSON.stringify(formdata));
                } else {
                    localStorage.removeItem("formdata");
                    localStorage.setItem("formdata", JSON.stringify(formdata));

                }
        }

        function sendData(formdata) 
        {

            console.log(formdata);
            var studentData = JSON.stringify(formdata);
            let xhr = new XMLHttpRequest();
            xhr.open("POST", "http://localhost:5501",true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(studentData);
            
        }


})(jQuery);