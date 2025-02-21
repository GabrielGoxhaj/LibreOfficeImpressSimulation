// Defining some common functions
function menuItem() {
    $('#dropdown').toggle();
}
// Prevent right click
document.addEventListener('contextmenu', function (event) {
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
$(document).on('click', function (event) {
    if (!$(event.target).closest('.menubarItemImpress, .dropdownImpressFile, .dropdownImpressModifica, .dropdownImpressVisualizza, .dropdownImpressInserisci, .dropdownImpressFormato, .dropdownImpressDiapositiva, .dropdownImpressPresentazione, .dropdownImpressStrumenti, .dropdownImpressFinestra, .dropdownImpressAiuto').length) {
        $('.dropdownImpressFile, .dropdownImpressModifica, .dropdownImpressVisualizza, .dropdownImpressInserisci, .dropdownImpressFormato, .dropdownImpressDiapositiva, .dropdownImpressPresentazione, .dropdownImpressStrumenti, .dropdownImpressFinestra, .dropdownImpressAiuto').hide();
    }
});

function menuItemImpressFile() { toggleMenuItem('dropdownImpressFile'); }
function menuItemImpressModifica() { toggleMenuItem('dropdownImpressModifica'); }
function menuItemImpressVisualizza() { toggleMenuItem('dropdownImpressVisualizza'); }
function menuItemImpressInserisci() { toggleMenuItem('dropdownImpressInserisci'); }
function menuItemImpressFormato() { toggleMenuItem('dropdownImpressFormato'); }
function menuItemImpressDiapositiva() { toggleMenuItem('dropdownImpressDiapositiva'); }
function menuItemImpressPresentazione() { toggleMenuItem('dropdownImpressPresentazione'); }
function menuItemImpressStrumenti() { toggleMenuItem('dropdownImpressStrumenti'); }
function menuItemImpressFinestra() { toggleMenuItem('dropdownImpressFinestra'); }
function menuItemImpressAiuto() { toggleMenuItem('dropdownImpressAiuto'); }

let counterDiapositive = 1;
function toggleDiapositiveMenu() {
    if (counterDiapositive === 0) {
        document.querySelector(".diapositiveWrapper").style.removeProperty("display");
        document.querySelector("#visualizzaPannelloDiapositive").classList.add("activated");
        counterDiapositive = 1;
        toggleMenuItem('dropdownImpressVisualizza');
    } else {
        document.querySelector(".diapositiveWrapper").style.setProperty("display", "none");
        document.querySelector("#visualizzaPannelloDiapositive").classList.remove("activated"); // Explicitly setting normal
        counterDiapositive = 0;
        toggleMenuItem('dropdownImpressVisualizza');
    }
}

let toggleLateralBar = 1;
function togglerLateralBar() {
    if (toggleLateralBar === 0) {
        document.querySelector(".LateralBarWrapper").style.removeProperty("display");
        document.querySelector("#visualizzaBarraLaterale").classList.add("activated");
        toggleMenuItem('dropdownImpressVisualizza');
        toggleLateralBar = 1;
    } else {
        document.querySelector(".LateralBarWrapper").style.setProperty("display", "none");
        document.querySelector("#visualizzaBarraLaterale").classList.remove("activated"); // Explicitly setting normal
        toggleMenuItem('dropdownImpressVisualizza');
        toggleLateralBar = 0;
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
    if (counterLateralBar === 0) {
        document.querySelector(`.iconLateralBar${index}`).classList.add("selected");;
    }
}
function menuItemLateralBar1() { menuItemLateralBar(1); }
function menuItemLateralBar2() { menuItemLateralBar(2); }
function menuItemLateralBar3() { menuItemLateralBar(3); }
function menuItemLateralBar4() { menuItemLateralBar(4); }
function menuItemLateralBar5() { menuItemLateralBar(5); }
function menuItemLateralBar6() { menuItemLateralBar(6); }
function menuItemLateralBar7() { menuItemLateralBar(7); }
function menuItemLateralBar8() { menuItemLateralBar(8); }

let counterR2 = 1;
function togglerRow2(button) {
    let row2 = document.querySelector(".iconImpressRow2");
    if (counterR2 === 0) {
        row2.style.display = ""; // Reset the display style to the default (usually 'block' or 'inline')
        button.classList.add("selected");
        counterR2 = 1;
    } else {
        row2.style.display = "none"; // Hide the element
        button.classList.remove("selected"); // Explicitly removing the "activated" class
        counterR2 = 0;
    }
}