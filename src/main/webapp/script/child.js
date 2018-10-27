function readURL(input) {
     if (input.files && input.files[0]) {
         var reader = new FileReader();

         reader.onload = function (e) {
             $('#userImage')
                 .attr('src', e.target.result)
                 .height(150);
             $('#userImage').css('display','block');
         };

         reader.readAsDataURL(input.files[0]);
     }
 }

function readURL1(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#userImage1')
                .attr('src', e.target.result)
                .height(150);
            $('#userImage1').css('display','block');
        };

        reader.readAsDataURL(input.files[0]);
    }
}

function readURL2(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#userImage2')
                .attr('src', e.target.result)
                .height(150);
            $('#userImage2').css('display','block');
        };

        reader.readAsDataURL(input.files[0]);
    }
}

function readURL3(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#userImage3')
                .attr('src', e.target.result)
                .height(150);
            $('#userImage3').css('display','block');
        };

        reader.readAsDataURL(input.files[0]);
    }
}

function readURL4(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#userImage4')
                .attr('src', e.target.result)
                .height(150);
            $('#userImage4').css('display','block');
        };

        reader.readAsDataURL(input.files[0]);
    }
}

