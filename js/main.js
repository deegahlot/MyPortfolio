!function(e){"use strict";
$(e). scroll(function(){
if ($(this). scrollTop() > 50) {
$('.navbar'). addClass('yllow-bg-on-scroll');
$('a.nav-link'). addClass('color-font-black');
}
else { 
  $('.navbar'). removeClass('yllow-bg-on-scroll');
  $('a.nav-link'). removeClass('color-font-black');
 }
});

var o=e(".sidebar-icon"),
n=e(".exapnd-sidebar");

o.on("click",function(e){
  n.toggleClass("slide_right"),
  e.stopPropagation()}),
  
  e(document).on("click",function(t){
    var a=e(".exapnd-sidebar,.sidebar-icon");
    a.is(t.target)||0!==a.has(t.target).length||(n.removeClass("slide_right"))
});
}(jQuery);
