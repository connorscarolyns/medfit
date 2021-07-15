$(document).ready(function(){
    $("#notesAboutTheDriverTitleEditButton, #notesAboutTheDriverTitleSaveButton, #notesAboutTheDriverTitleCancelButton").on("click", function(){
        $("#notesAboutTheDriverTitleEditButton, #notesAboutTheDriverTitleSaveButton, #notesAboutTheDriverTitleCancelButton, #notesAboutTheDriverTextArea, #notesAboutTheDriverparagraph").toggle("fast", function(){
            $("#notesAboutTheDriverTextArea").toggle("slow").focus()
        });
    });
});

$(document).ready(function(){
    $("#contactAddressTitleEditButton, #contactAddressSaveButton, #contactAddressCancelButton").on("click", function(){
        $("#contactAddressTitleEditButton, #contactAddressSaveButton, #contactAddressCancelButton, #contactAddressDLSaved, #contactAddressDLEdit").toggle("fast", function(){
            $("#contactAddressStreetAddressEdit").toggle("slow").focus()
        });
    });
});

$(document).ready(function(){
    $("#documentDetailsTitleEditButton, #documentDetailsSaveButton, #documentDetailsCancelButton").on("click", function(){
        $("#documentDetailsTitleEditButton, #documentDetailsSaveButton, #documentDetailsCancelButton, #documentDetailsPriorityEdit, #documentDetailsPrioritySaved, #documentDetailsPrioritySaved, #documentDetailsPriorityEdit, #documentDetailsSourceEdit, #documentDetailsSourceSaved, #documentDetailsEmailSaved, #documentDetailsEmailEdit, #documentDetailsNotesSaved, #documentDetailsNotesEdit").toggle("fast");
    });
});


$(document).ready(function(){
    $("#driverInfoTitleEditButton, #driverInfoTitleSaveButton, #driverInfoTitleCancelButton").on("click", function(){
        $("#driverInfoTitleEditButton, #driverInfoTitleSaveButton, #driverInfoTitleCancelButton, #masterNumberEdit, #masterNumberSaved, #priorityEdit, #prioritySaved, #licenceInformationEdit, #licenceInformationSaved, #assigneeEdit, #assigneeSaved").toggle("fast");
    });
});


$(document).ready(function(){
    $("#commentsEditButton, #commentsPost").on("click", function(){
        $("#commentsEditButton, #commentsWrite, #commentsPost").toggle("fast");
    });
});

$('.medfit-btn-inline-icon').click(function(e) {
    e.preventDefault();
    $('.medfit-btn-inline-icon').closest('.ns-summary-list__row').removeClass('selected');
    $(this).closest('.ns-summary-list__row').addClass('selected');
});

function auto_grow(element) {
    element.style.height = (element.scrollHeight)+"px";
    element.style.height = (element.scrollHeight)+"px";
}

// start conditional selections
$("#typeahead1").change(function() {
  if ($(this).val() == "Email") {
    $('#conditional-email').show();
  } else {
    $('#conditional-email').hide();
  }
});
$("#typeahead1").trigger("change");

$("#typeahead1").change(function() {
    if ($(this).val() == "Fax") {
      $('#conditional-fax').show();
    } else {
      $('#conditional-fax').hide();
    }
});
$("#typeahead1").trigger("change");

$("#typeahead1").change(function() {
    if ($(this).val() == "Letter") {
      $('#conditional-letter').show();
    } else {
      $('#conditional-letter').hide();
    }
});
$("#typeahead1").trigger("change");

$("#typeahead1").change(function() {
    if ($(this).val() == "Phone call") {
      $('#conditional-phone').show();
    } else {
      $('#conditional-phone').hide();
    }
});
$("#typeahead1").trigger("change");

$("#typeahead1").change(function() {
    if ($(this).val() == "Interdepartmental") {
      $('#conditional-interdepartmental').show();
    } else {
      $('#conditional-interdepartmental').hide();
    }
});
$("#typeahead1").trigger("change");

// end conditional selections
