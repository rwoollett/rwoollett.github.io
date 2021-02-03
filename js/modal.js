/**
   Modal form 
   Author:  Rodney Woollett
   Date:    10/01/2020
   Filename: modal.js
*/

"use strict";

$(document).ready(function(){

	let modal = $("#new-user");

	$(".close").click(function() {
	  modal.hide();
	});

	// When the user clicks anywhere outside of the modal, close it
	$(window).click( function(event)
	{
	  if (event.target.id == modal.attr("id")) {
		modal.hide();
	  }
	});

	// var changed with thymeleaf model
	if (modal_open == true) {
		if (modal.is(":hidden")) {
			modal.show();
		}
	}

	// Used only for static home.html to open modal (app used a post request to open modal)
	$("#new-user-btn").click(function() {
	  if (modal_open == false) {
	    modal.show();
	  }
	});

    // Select all toggle to mark all items in detaillist list
    $('#select-all').change(function() {
        if($(this).is(":checked")) {
			selectionCheck(true);
        } else {
			selectionCheck(false);
		}
    });

    $('div.detaillist > table > tbody > tr > td:first-child input[type=\"checkbox\"]').change(function() {
        // if($(this).is(":checked")) {
			// selectionCheck(true);
        // } else {
			// selectionCheck(false);
		// }
		let $checks = $("#select-all");
		$checks.prop('checked', false);
    });

    // $('#select-all').change(function() {
        // if($(this).is(":checked")) {
            // var returnVal = confirm("Are you sure?");
            // $(this).attr("checked", returnVal);
        // }
        // $('#textbox1').val($(this).is(':checked'));        
    // });
	// class Product {

	  // constructor (name, cost, tax) {
		// this.name = name;
		// this.cost = cost;
		// this.tax = tax;
	  // }

	  // price() {
		// return this.cost * (1 + this.tax);
	  // }
	// }

	// let item = new Product("Banana", 2, .3);

	//alert(item.price());

}); 


function selectionCheck(checked) {
	// All checkboxes in detail list - first cell in table
	let $checks = $("div.detaillist > table > tbody > tr > td:first-child input[type=\"checkbox\"]");
	$checks.prop('checked', checked);
}
