function handleEnter(e,n){var t=n.keyCode?n.keyCode:n.which?n.which:n.charCode;if(13==t){var o;for(o=0;o<e.form.elements.length&&e!=e.form.elements[o];o++);return o=(o+1)%e.form.elements.length,e.form.elements[o].focus(),!1}return!0}$(".superfeatured_control").on("click",function(){$(this).parents(".super_featured").toggleClass("expanded")}),$(".icon_alert").on("click",function(){$(this).parents(".flash_message").addClass("opacity_hidden")}),$("body").on("click",".time_link",function(){$(".time_controls").toggleClass("hidden")}),$("body").on("click",".flip_control",function(){$(this).parents(".article_infeed").toggleClass("flip")}),$("body").on("click",".share",function(){$(this).parents(".controls_container").toggleClass("share_active")}),$("body").on("click",".close_share",function(){$(this).parents(".controls_container").toggleClass("share_active")});