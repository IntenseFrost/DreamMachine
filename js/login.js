function entrar(){

    let email = window.document.querySelector('input#id_user');
    let senha = window.document.querySelector('input#id_senha');
    let btn = window.document.querySelector('button#id_btn');
    let labelEmail = window.document.querySelector('label#id_etiquetaEmail');
    let labelSenha = window.document.querySelector('label#id_etiquetaSenha');
    let formulario =  window.document.querySelector('form#formLogin');


   if(email.value.length == 0){
       labelEmail.style.color="red";
       labelEmail.innerHTML="O campo \"Email\" é obrigatório";
       email.style.boxShadow=".1em .1em .5em red";
   }
   else{
        labelEmail.style.color="#fff";
        labelEmail.innerHTML="Email";
        email.style.boxShadow=".1em .1em .5em #fff";

   }

   if(senha.value.length == 0){
      labelSenha.style.color="red";
      labelSenha.innerHTML="O campo \"Senha\" é obrigatório";
      senha.style.boxShadow=".1em .1em .5em red";
    }

    else{

        labelSenha.style.color="#fff";
        labelSenha.innerHTML="Senha";
        senha.style.boxShadow=".1em .1em .5em #fff";
    }


    if(email.value.length != 0  && senha.value.length != 0){


        $.ajax({

            url:'cadastraLogin.php',
            method:'POST',
            data: {nome: email, senha: senha},
            success: function(result){
                $('#formLogin').trigger("reset");
                $('#alerta').addClass("alert-success");
                $('#alerta').fadeIn().html(result);
                setTimeout(function(){
                    $('#alerta').fadeOut('Slow');},3000);
                }
            });

            }

 


  }







