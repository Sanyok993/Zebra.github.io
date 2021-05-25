
window.onload = function() {


// let price = document.getElementsByClassName("price")[0],
//     burger = document.getElementsByClassName("header_burger")[0],
//     wrap = document.getElementsByClassName("header_body")[0];


// window.addEventListener("resize", function() {
//         console.log(innerWidth);
//         // console.log(innerHeight);
// 		if(innerWidth < 768) {
// 			wrap.insertBefore(price, burger);
// 		} else {
// 			wrap.insertBefore(burger, price);
// }
//     }, false);


$(document).ready(function() {
	$(".header_burger").click(function(event) {
		$(".header_burger,.header_menu,.price").toggleClass("active");
		$("body").toggleClass("lock");
	})
})

$(document).ready(function() {
	// $(".block_title").click(function(event) {
	// 	$(this).toggleClass("displayNone displayBlock").find(".show_menu_body").slideToggle(300);
	// });

	$(".block_title").click(function(event) {
		$(".show_menu_body").toggleClass("show_block");	
	}).children().click(function(event){        // вешаем на потомков
        event.stopPropagation();   // предотвращаем всплытие
    });;
	$(".block_title").click(function(event) {
		$(".block_title").toggleClass("show_arrow_bottom");
	}).children().click(function(event){        // вешаем на потомков
        event.stopPropagation();   // предотвращаем всплытие
    });;
});

// $(window).resize(function(event) {
// 	var w = $(window).outerWidth();
// 	// var w = $(window).outerHeight();
// 	if (w < 1300) {
// 		$(".link_c").css({
// 			"width": w /8+(30),
// 			"height": w /8+(30)
// 		});
// 	} else {
// 		$(".link_c").css({
// 			"width": "200",
// 			"height": "200"
// 		});
// 	}
// })

};

