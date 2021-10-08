$(document).ready(function(){
    $("#notesAboutTheDriverTitleEditButton, #notesAboutTheDriverTitleSaveButton, #notesAboutTheDriverTitleCancelButton").on("click", function(){
        $("#notesAboutTheDriverTitleEditButton, #notesAboutTheDriverTitleSaveButton, #notesAboutTheDriverTitleCancelButton, #notesAboutTheDriverTextArea, #notesAboutTheDriverparagraph").toggle("fast", function(){
            $("#notesAboutTheDriverTextArea").toggle("slow").focus()
        });
    });
});
$(document).ready(function(){
    $("#driverDetailsNotesOnLicenceEditButton, #notesOnLicenceSaveButton, #notesOnLicenceCancelButton").on("click", function(){
        $("#driverDetailsNotesOnLicenceEditButton, #notesOnLicenceSaveButton, #notesOnLicenceCancelButton, #notesOnLicenceText, #notesOnLicenceTextarea").toggle("fast", function(){
            $("#notesOnLicenceText").toggle("slow").focus()
        });
    });
});

$(document).ready(function(){
    $("#driverDetailsNotesOnDriverEditButton, #notesOnDriverSaveButton, #notesOnDriverCancelButton").on("click", function(){
        $("#driverDetailsNotesOnDriverEditButton, #notesOnDriverSaveButton, #notesOnDriverCancelButton, #notesOnDriverText, #notesOnDriverTextarea").toggle("fast", function(){
            $("#notesOnDriverText").toggle("slow").focus()
        });
    });
});

$(document).ready(function(){
    $("#whatInfoIsNeededTitleEditButton, #whatInfoIsNeededTitleSaveButton, #whatInfoIsNeededTitleCancelButton").on("click", function(){
        $("#whatInfoIsNeededTitleEditButton, #whatInfoIsNeededTitleSaveButton, #whatInfoIsNeededTitleCancelButton, #whatInfoIsNeededTextArea, #whatInfoIsNeededparagraph").toggle("fast", function(){
            $("#whatInfoIsNeededTextArea").toggle("slow").focus()
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
        $("#documentDetailsTitleEditButton, #documentDetailsSaveButton, #documentDetailsCancelButton, #documentDetailsMessageEdit, #documentDetailsMessageSaved, #documentDetailsPrioritySaved, #documentDetailsPriorityEdit, #documentDetailsSourceEdit, #documentDetailsSourceSaved, #documentDetailsEmailSaved, #documentDetailsEmailEdit, #documentDetailsNotesSaved, #documentDetailsNotesEdit").toggle("fast");
    });
});


$(document).ready(function(){
    $("#driverInfoTitleEditButton, #driverInfoTitleSaveButton, #driverInfoTitleCancelButton").on("click", function(){
        $("#driverInfoTitleEditButton, #driverInfoTitleSaveButton, #driverInfoTitleCancelButton, #masterNumberEdit, #masterNumberSaved, #priorityEdit, #prioritySaved, #licenceInformationEdit, #licenceInformationSaved, #assigneeEdit, #assigneeSaved").toggle("fast");
    });
});

$(document).ready(function(){
    $("#workflowTitleEditButton, #workflowTitleSaveButton, #workflowTitleCancelButton").on("click", function(){
        $("#workflowTitleEditButton, #workflowTitleSaveButton, #workflowTitleCancelButton, #stageEdit, #stageSaved, #priorityEdit, #prioritySaved, #stateEdit, #stateSaved, #assigneeEdit, #assigneeSaved").toggle("fast");
    });
});

$(document).ready(function(){
    $("#commentsEditButton, #commentsPost").on("click", function(){
        $("#commentsEditButton, #commentsWrite, #commentsPost").toggle("fast");
    });
});

$(document).ready(function(){
    $("#logEditButton, #logPost").on("click", function(){
        $("#logEditButton, #logLabel, #logWrite, #logPost").toggle("fast");
    });
});

$(document).ready(function(){
    $("#demandAddButton, #demandPost").on("click", function(){
        $("#demandAddButton, #demandPost, #addDemandWrapper").toggle("fast");
    });
});


$(document).ready(function(){
    $("#followUpAddButton, #followUpPost").on("click", function(){
        $("#followUpAddButton, #followUpPost, #addfollowUpWrapper").toggle("fast");
    });
});

$(document).ready(function(){
    $("#conditionAddButton, #conditionPost").on("click", function(){
        $("#conditionAddButton, #conditionPost, #addconditionWrapper").toggle("fast");
    });
});

$(document).ready(function(){
    $("#downUpgradeAddButton, #downUpgradePost").on("click", function(){
        $("#downUpgradeAddButton, #downUpgradePost, #downUpgradeWrapper").toggle("fast");
    });
});

$(document).ready(function(){
    $("#downUpgrade-inline-radios, #downUpgrade-inline-radios-2").on("click", function(){
        $("#conditional-downUpgrade").toggle("fast");
    });
});

$(document).ready(function(){
    $("#contactLogTitleEditButton, #contactLogTitleSaveButton, #contactLogTitleCancelButton").on("click", function(){
        $("#contactLogTitleEditButton, #contactLogTitleSaveButton, #contactLogTitleCancelButton, #contactLogTextArea, #contactLogparagraph").toggle("fast", function(){
            $("#contactLogTextArea").toggle("slow").focus()
        });
    });
});

$(document).ready(function(){
    $("#contactLog2TitleEditButton, #contactLog2TitleSaveButton, #contactLog2TitleCancelButton").on("click", function(){
        $("#contactLog2TitleEditButton, #contactLog2TitleSaveButton, #contactLog2TitleCancelButton, #contactLog2TextArea, #contactLog2paragraph").toggle("fast", function(){
            $("#contactLog2TextArea").toggle("slow").focus()
        });
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

$("#suspentionTypeInput").change(function() {
  if ($(this).val() == "") {
    $('#conditional-suspention').hide();
  } else {
    $('#conditional-suspention').show();
  }
});
$("#suspentionTypeInput").trigger("change");


function show1(){
  document.getElementById('conditional-not-found').style.display ='none';
}
function show2(){
  document.getElementById('conditional-not-found').style.display = 'block';
}


// end conditional selections

// start new coditional section with multiple ids

function documentFilter(trigger, target) {
    $(trigger).on('change', function () {
        $(target).toggle();
    });
}
documentFilter("#decision", "#demandType");
documentFilter("#additionalMedical", "#otherMedicalType");
documentFilter("#suspention", "#suspentionType");
documentFilter("#condition", "#addConditionType");
documentFilter("#downUpgrade", "#downUpgradeType");
documentFilter("#followUp", "#followUpType");
documentFilter("#otherDecision", "#otherDecisionType");
documentFilter("#sendLetter", "#createLetter");

// end new coditional section with multiple ids


// start radio button redirect


  // No need for declaring global variables here
  function submit(source,options){
  // First, this segment finds the checked element in the array:
    for (var i = 0; i < options.length; i++){
      if (options[i].checked){
        break;
      }
    }
  // Next, the source switch determines which button element called the function:
  switch(source.id){
 case 'submitButton':
  // The options switch then determines what happens when the checked option is submitted:
    switch(options[i].id){
      case 'newMedFitProfile':
        // alert('New MedFit profile');
        window.location = "medfit-intake-create-new-medfit-driver-profile.html";
        break;
      case 'moreInfoNeeded':
        // alert('More information is needed');
        window.location = "medfit-missing-information.html";
        break;
      case 'enoughInfo':
        // alert('enoughInfo');
        window.location = "medfit-intake-detailed-information.html";
        break;
      case 'johnBlake':
        // alert('More information is needed');
        window.location = "medfit-intake-link-to-a-demand.html";
        break;
      case 'janeBlake':
        // alert('More information is needed');
        window.location = "medfit-intake-link-to-a-demand.html";
        break;
        //  The default option for the options switch
      // default:
      //   window.location = "medfit-intake-link-to-a-driver-search-results.html";
        }
      break;
      // The default option for the source switch
      default:
     }
  }


// end radio button redirect
