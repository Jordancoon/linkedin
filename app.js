// User clicks photo upload button
("#photoUploadButton").on("click", function uploadePicturePopUp () {

    // This on click event will create a pop up of the user's computer files so that they can find their picture file and upload it into the application.

});


$("#formSubmitButton").on("click", function grabUserSubmission(event) {

    event.preventDefault();

    var userName = $("#name-section").val.trim;
    var lookingSelect1
    var userCommentsText = $("#comment-section").val.trim;


// function storeinFirebase () {
// }

});


// An AJAX request is sent to Face ++ and the results are shown in the results div
function showResults() {

    var userPicture = $("img");
    var queryURL;

    // Empty the results div before putting new results each time the function gets called
    $("#results-appear-here").empty();

    // Send out an AJAX call to Face ++ using the user input's upload
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        // Find out which parameters are needed from the Face ++ response (i.e. confidence, beauty, happiness etc)

        var results = response.data;

        var confidence = results.confidence.rating;
        var beauty = results.beauty.rating;
        var happiness = results.happiness.rating;

        $("#results-appear-here").append(confidence, beauty, happiness);

        }
    )};

    /// LinkedIn Photo upload
      api_key = "78kyu7q93daep2";
      onLoad =  OnLinkedInFrameworkLoad;
      authorize = true;
     
     
     function onLinkedInLoad() 
     // submit photo to linkedin profile
     function OnLinkedInFrameworkLoad() {
      IN.Event.on(IN, "auth", OnLinkedInAuth);
    }
    // if authorized bring to linkedIn profile
    function OnLinkedInAuth() {
      IN.API.Profile("me").result(ShowProfileData);
  };
  //show user linkedin profile
  function ShowProfileData(profiles) {
    var member = profiles.values[0];
    var id=member.id;
    var firstName=member.firstName; 
    var lastName=member.lastName; 
    var photo=member.pictureUrl; 
    var headline=member.headline; 

    //use information captured above
    console.log(member)
};


