// Checking if device is a mobile phone and alerting the user if that is the case
// If not, checks that screen is wide enough
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		console.log("Please access this page using a computer for the best experience.");
		// Hides Notepad and winver windows so it doesn't crowd the viewport
		$("#notepad").hide()
		$("#winver").hide()
	} else {
		// Checking if screen is big enough and alerting the user if not
		if ($(window).width() < 800) {
			alert("Please make the window larger for the best experience.");
		}
	}

// Defining some common functions
	function menuItem() {
		$('#dropdown').toggle();
	}
	// Prevent right click
	document.addEventListener('contextmenu', function(event) {
	    event.preventDefault();  // Prevents the context menu from appearing
	});

// Dropdown functionality in LibreOfficeImpress
function toggleMenuItem(dropdownId, button) {
    let $dropdown = $('#' + dropdownId);
    let $button = $(button);

    if ($dropdown.is(':visible')) {
        $dropdown.hide(); // Hide if already open
    } else {
        // Hide all other dropdowns
        $('.dropdownImpressFile, .dropdownImpressModifica, .dropdownImpressVisualizza, .dropdownImpressInserisci, .dropdownImpressFormato, .dropdownImpressDiapositiva, .dropdownImpressPresentazione, .dropdownImpressStrumenti, .dropdownImpressFinestra, .dropdownImpressAiuto').hide();
		$dropdown.show(); 
        // Get button position
        let buttonOffset = $button.offset();

        // Set dropdown position directly below the button
        $dropdown.css({
            position: 'absolute',
            left: buttonOffset.left + 'px',
            display: 'block'
        });
    }
}

// Close dropdown when clicking outside
$(document).on('click', function(event) {
    if (!$(event.target).closest('.menubarItemImpress, .dropdownImpressFile, .dropdownImpressModifica, .dropdownImpressVisualizza, .dropdownImpressInserisci, .dropdownImpressFormato, .dropdownImpressDiapositiva, .dropdownImpressPresentazione, .dropdownImpressStrumenti, .dropdownImpressFinestra, .dropdownImpressAiuto').length) {
        $('.dropdownImpressFile, .dropdownImpressModifica, .dropdownImpressVisualizza, .dropdownImpressInserisci, .dropdownImpressFormato, .dropdownImpressDiapositiva, .dropdownImpressPresentazione, .dropdownImpressStrumenti, .dropdownImpressFinestra, .dropdownImpressAiuto').hide();
    }
});
	function menuItemImpressFile() {toggleMenuItem('dropdownImpressFile');}
	function menuItemImpressModifica() {toggleMenuItem('dropdownImpressModifica');}
	function menuItemImpressVisualizza() {toggleMenuItem('dropdownImpressVisualizza');}
	function menuItemImpressInserisci() {toggleMenuItem('dropdownImpressInserisci');}
	function menuItemImpressFormato() {toggleMenuItem('dropdownImpressFormato');}
	function menuItemImpressDiapositiva() {toggleMenuItem('dropdownImpressDiapositiva');}
	function menuItemImpressPresentazione() {toggleMenuItem('dropdownImpressPresentazione');}
	function menuItemImpressStrumenti() {toggleMenuItem('dropdownImpressStrumenti');}
	function menuItemImpressFinestra() {toggleMenuItem('dropdownImpressFinestra');}
	function menuItemImpressAiuto() {toggleMenuItem('dropdownImpressAiuto');}

	let toggleDiapositive = 1;
	function toggleDiapositiveMenu() {
		if (toggleDiapositive === 0) {
			document.querySelector(".diapositiveWrapper").style.removeProperty("display");
			document.querySelector("#visualizzaPannelloDiapositive").classList.add("activated");
			toggleMenuItem('dropdownImpressVisualizza');
			toggleDiapositive = 1;
		} else {
			document.querySelector(".diapositiveWrapper").style.setProperty("display", "none");
			document.querySelector("#visualizzaPannelloDiapositive").classList.remove("activated"); // Explicitly setting normal
			toggleMenuItem('dropdownImpressVisualizza');
			toggleDiapositive = 0;
		}
	}

	let toggleMenuDX = 1;
	function togglerMenuDX() {
		if (toggleMenuDX === 0) {
			document.querySelector(".LateralBarWrapper").style.removeProperty("display");
			document.querySelector("#visualizzaBarraLaterale").classList.add("activated");
			toggleMenuItem('dropdownImpressVisualizza');
			toggleMenuDX = 1;
		} else {
			document.querySelector(".LateralBarWrapper").style.setProperty("display", "none");
			document.querySelector("#visualizzaBarraLaterale").classList.remove("activated"); // Explicitly setting normal
			toggleMenuItem('dropdownImpressVisualizza');
			toggleMenuDX = 0;
		}
	}

	let toggleRow2 = 1;
	function togglerRow2(button) {
		let row2 = document.querySelector(".iconImpressRow2");
		if (toggleRow2 === 0) {
			row2.style.display = ""; // Reset the display style to the default (usually 'block' or 'inline')
			button.classList.add("selected");
			toggleRow2 = 1;
			console.log(toggleRow2);
		} else {
			row2.style.display = "none"; // Hide the element
			button.classList.remove("selected"); // Explicitly removing the "activated" class
			toggleRow2 = 0;
			console.log(toggleRow2);
		}
	}
	
	
	let counterLateralBar = 0;
	function toggleLateralBarImage(index) {
		let $image = $('.LateralBar' + index);
		if ($image.is(':visible')) {
			$image.hide();
			counterLateralBar = 1;
		} else {
			$('.LateralBar1, .LateralBar2, .LateralBar3, .LateralBar4, .LateralBar5, .LateralBar6, .LateralBar7, LateralBar8').hide();
			$image.show();
			counterLateralBar = 0;
		}
	}
	function unsetAllBackgroundColors() {
		for (let i = 1; i <= 8; i++) {
			document.querySelector(`.iconLateralBar${i}`).classList.remove("selected");;
		}
	}
	function menuItemLateralBar(index) {
		toggleLateralBarImage(index);
		unsetAllBackgroundColors();
		if (counterLateralBar === 0){
			document.querySelector(`.iconLateralBar${index}`).classList.add("selected");;}
	}
	function menuItemLateralBar1(){menuItemLateralBar(1);}
	function menuItemLateralBar2(){menuItemLateralBar(2);}
	function menuItemLateralBar3(){menuItemLateralBar(3);}
	function menuItemLateralBar4(){menuItemLateralBar(4);}
	function menuItemLateralBar5(){menuItemLateralBar(5);}
	function menuItemLateralBar6(){menuItemLateralBar(6);}
	function menuItemLateralBar7(){menuItemLateralBar(7);}
	function menuItemLateralBar8(){menuItemLateralBar(8);}

// File uploader
	dropHide();
	function onFileSelected(event) {
		var selectedFile = event.target.files[0];
		var reader = new FileReader();
		var result = document.getElementById("npTextarea");
		reader.onload = function (event) {
			result.innerHTML = event.target.result;
		};
		reader.readAsText(selectedFile);
	};

// Hiding the dropdown menu after an item is clicked
	function dropHide() {
		$('#dropdown').hide();
	};

// Maintains the taskbar clock. 
	function checkMins(i) {
		if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
		return i;
	};
	function startTime() {
		var today = new Date();
		var dd = today.getDate();
		var jsmm = today.getMonth();
		var mm = jsmm + 1; // Fix JavaScript months, which are base 0 instead of base 1
		var cent = today.getYear();
		var yy = 1900 + cent;
		var hh = today.getHours();
		var h = ((hh + 11) % 12 + 1);
		var suffix = (hh >= 12) ? 'PM' : 'AM';
		var m = today.getMinutes();
		var m = checkMins(m);
		document.getElementById("taskClock").innerHTML =
			h + ":" + m + "&nbsp;" + suffix + "<br>" + mm + "/" + dd + "/" + yy;
		var t = setTimeout(startTime, 500);
	};

// JQuery functions that handle most of the magic
$(document).ready(function () {

	// Changes focus of clicked window to be on top
	$(".window").click(function () {
		$('div[class^="window"]').css('z-index', '0');
		$(this).css('z-index', '10');
	});

	// Draggable windows
	$('.window').draggable({
		containment: "parent"
	});
	var handle = $(".window").draggable("option", "handle");
	$('.window').draggable("option", "handle", ".titleFrame");

// winver
	// Closing the winver dialog
	$("#winverClose").click(function () {
		$("#winver").fadeOut(300);
	});
	$("#winverOK").click(function () {
		$("#winver").fadeOut(300);
	});

	// Taskbar icon
	$("#winverIconFrame").click(function () {
		$("#winver").toggle(300);
	});

// Notepad
	// X button
	$("#npClose").click(function () {
		$("#notepad").fadeOut(300);
	});
	// Taskbar icon
	$("#notepadIconFrame").click(function () {
		$("#notepad").toggle(300);
	});
	// Some Notepad dropdown items
	// Creates new file (clears contents of textarea based on confirm dialog)
	$("#npNew").click(function () {
		var r = confirm('Do you want to save changes to Untitled?');
		if (r == true) {
			dropHide();
			var text = $("#npTextarea").val();
			var blob = new Blob([text], {
				type: "text/plain;charset=utf-8"
			});
			saveAs(blob, "Untitled.txt");
			$('#npTextarea').val('');
		} else {
			// Do nothing
			dropHide();
		}
	});
	// Save file downloads contents of textarea to disk using FileSaver.js
	$("#npSave").click(function () {
		dropHide();
		var text = $("#npTextarea").val();
		var blob = new Blob([text], {
			type: "text/plain;charset=utf-8"
		});
		saveAs(blob, "Untitled.txt");
	});
	// Save As does the same thing as Save
	$("#npSaveAs").click(function () {
		dropHide();
		var text = $("#npTextarea").val();
		var blob = new Blob([text], {
			type: "text/plain;charset=utf-8"
		});
		saveAs(blob, "Untitled.txt");
	});
	// Page Setup does nothing (so far)
	$("#npPageSetup").click(function () {
		dropHide();
	});
	// Prints contents of textarea
	$("#npPrint").click(function () {
		dropHide();
		var DocumentContainer = document.getElementById("npTextarea");
		var html = '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Print Preview</title></head><body style="background:#ffffff;"><p style="font-family:monospace;text-align:center;">Untitled</p><pre>' +
			DocumentContainer.value +
			'</pre></body></html>';

		var WindowObject = window.open("", "PrintWindow",
			"width=750,height=650,top=50,left=50,toolbars=no,scrollbars=yes,status=no,resizable=yes");
		WindowObject.document.writeln(html);
		WindowObject.document.close();
		WindowObject.focus();
		WindowObject.print();
		WindowObject.close();

	});
	// Exit menu item
	$("#npExit").click(function () {
		dropHide();
		$("#notepad").fadeOut(300);
	});

// Edge (not implemented yet)
	// Taskbar icon
	$("#edgeIconFrame").click(function () {
		alert("Not supported yet");
	});

// Libre Office Impress (not totally implemented yet) -> Currently on test
	// x button
	$("#impressClose").click(function () {
		$("#libreOfficeImpress").fadeOut(0);
	});
	$(".impressClose").click(function () {
		$("#libreOfficeImpress").fadeOut(0);
	});
	// Fullscreen Libre Office Impress
	$("#impressRestore").click(function () {
		let $element = $("#libreOfficeImpress");
	
		if ($element.hasClass("fullscreen")) {
			// Remove fullscreen and restore original size
			$element.removeClass("fullscreen").css({ width: "", height: "" });
		} else {
			// Set fullscreen
			$element.addClass("fullscreen").css({ width: "100%", height: "100%" });
		}
	});
	
	// Taskbar icon
	$("#libreOfficeImpressFrame").click(function () {
		$("#libreOfficeImpress").toggle(0);
	});

// Start Menu
	// Taskbar icon
	$("#startIconFrame").click(function () {
		$("#startMenu").toggle(300);
	});
	// Windows Key Start Menu Toggle
	$(document).keydown(function (event) {
		// Verifica se il tasto Windows (KeyCode 91 o 'Meta') è premuto
		if (event.key === "Meta" || event.keyCode === 91) {
			$("#startMenu").toggle(150);
		}
	});
	// Hide start menu when a window is clicked
	$('div[class^="window"]').click(function () {
		$("#startMenu").hide();
	});
	// Taskbar search bar
	$("#taskSearch").focusin(function () {
		$('div[class^="window"]').css('z-index', '0');
		$(this).css('z-index', '10');
		$("#startMenu").hide();
		$("#SearchResults").show();
	});
	$("#taskSearch").focusout(function () {
		$("#SearchResults").hide();
		$('#taskSearch').val('');
	});
	// Show desktop button in taskbar (No Peek yet)
	$("#showDesktop").click(function () {
		$('div[class^="window"]').toggle();
	});
});

