$(document).ready(function(){

    $("#go_question").validate({
        
       rules:{ 
        
            name:{
                required: true,
                minlength: 4,
                maxlength: 20,
            },
            
            contact:{
                required: true,
                minlength: 6,
                maxlength: 128,
            },
			
            msg:{
                required: true,
                minlength: 16,
                maxlength: 256,
            },
       },
       
       messages:{
        
            name:{
                required: "Это поле обязательно для заполнения",
                minlength: "Имя должно быть минимум 4 символа",
                maxlength: "Максимальное число символо - 20",
            },
            
            contact:{
                required: "Это поле обязательно для заполнения",
                minlength: "Поле должно быть минимум 6 символа",
                maxlength: "Максимальное кол-во 128 символов",
            },
			
            msg:{
                required: "Это поле обязательно для заполнения",
                minlength: "Сообщение минимум 16 символов",
                maxlength: "Максимальное число символов - 256",
            },
        
       }
        
    });


}); //end of ready