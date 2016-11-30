 $(document).ready(function(){
  llenarBarras();
});

function llenarBarras () {
	$('.skillbar').each(function(){
  	$(this).find('.skillbar-bar').animate({
      width:$(this).attr('data-percent')
    },6000);
  });
}

