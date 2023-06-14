function validator(){
    var form = document.forms["form-contato"];
    
    var nome = form["nome"].value;
    var fone = form["telefone"].value;
    var email = form["email"].value;
    var opiniao = form["opiniao"].value;

    if(nome == "" || nome.length <10){
        
        alert("Campo Nome vazio ou com caracteres inferiores a 10");
        return false;
    }
    if(fone == "" || fone.length != 10){
        
        alert("Campo Fone vazio ou com caracteres diferentes de 10");
        return false;
    }

    if(validateEmail(email) == false){
        
        alert("Campo email vazio ou inválido");
        return false;
    }
    if(opiniao == "" || opiniao.length >51 || opiniao.length <10){
        
        alert("Campo Opiniao vazio ou com caracteres menores que 10 ou maiores que 51");
        return false;
    }

}




function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }