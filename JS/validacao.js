$.validator.addMethod("password", function(value){
  return value == "M@ver1ck$";
});

$.validator.addMethod("equal", function(value, element, param){
  return value == param;
});

$().ready(function(){
  var validator = $("#form").bind("invalid-form.validate", function(){
    $("#msg").html("Este formulário possui " + validator.numberOfInvalids() + " erro(s)");
  }).validate({
    errorElement: "el",
    errorPlacement: function(error, element){
      element.parent("td").next("td").html(error);
    },
    success: function(label){
      label.text("Ok!").removeClass("error").addClass("ok");
    },
    submitHandler: function(form){
      form.submit();
    },
    rules:{
      numero:{
        required: true,
        number: true,
        maxlength: 15
      },
      pass: {
        required: true, 
        password: true
      },
      validado: {
        required: true,
        equal: "Validado"
      }
    },

    messages: {
      numero: {
        required:"Esse campo não pode ser vazio",
        number: "Este campo é numérico",
        maxlength: "Apenas 15 caracteres"
      },
      pass:{
        required: "Esse campo não pode ser vazio",
        password: "Digite M@ver1ck$"
      }, 
      validado:{
        required: "Esse campo não pode ser vazio",
        equal: "digite Validado"
      }
    }
  });
});