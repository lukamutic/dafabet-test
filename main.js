$(document).ready(function () {


    var modal = $("#modal");
    var modalCloseButton = $("#modal .modal-content .close-btn");

    // function for modal closing
    modalCloseButton.on("click", function () {
        modal.addClass("d-none");
    });

});