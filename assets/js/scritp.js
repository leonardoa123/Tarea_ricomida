var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

$(document).ready(function(){
  $(".cambiar").dblclick(function(){
  $(this).css({
      "color": "red"
  });
  });
  });
$(document).ready(function(){
  $("#accion").click(function(){
  $("#desaparece").toggle("slow");
  });
  });
$(document).ready(function(){
  $("#accion2").click(function(){
  $("#desaparece2").toggle("slow");
  });
  });  
$(document).ready(function(){
  $("#accion3").click(function(){
  $("#desaparece3").toggle("slow");
  });
  }); 
$(document).ready(function(){
  $("#enviarCorreo").click(function(){
    alert("El correo fue enviado correctamente...")
  });
  }); 
$(document).ready(function(){
  $("#ocultar").click(function(){
    $(this).fadeOut();
  });
  }); 