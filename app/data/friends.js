var friends = [
    {
        name: "Thor",
        photo:
        scores:[
        "4",
        "3",
        "4",
        "1",
        "5",
        "2",
        "5",
        "3",
        "1",
        "2"
        ]
    },
    {
        name: "Captain America",
        photo:
        scores:[
        "3",
        "5",
        "3",
        "4",
        "3",
        "4",
        "5",
        "1",
        "1",
        "5"
        ]
    },
    {
        name: "Iron Man",
        photo:
        scores:[
        "5",
        "4",
        "5",
        "2",
        "4",
        "3",
        "4",
        "2",
        "3",
        "4"
        ]
    },
    {
        name: "Spider Man",
        photo:
        scores:[
        "3",
        "4",
        "3",
        "2",
        "4",
        "3",
        "4",
        "4",
        "2",
        "3"
        ]
    },
    {
        name: "Hulk",
        photo:
        scores:[
        "5",
        "4",
        "5",
        "4",
        "4",
        "5",
        "4",
        "5",
        "4",
        "4"
        ]
    },


];//ends var array

module.exports = friends;




























// // Chosen CSS
//     var config = {
//       '.chosen-select'           : {},
//       '.chosen-select-deselect'  : {allow_single_deselect:true},
//       '.chosen-select-no-single' : {disable_search_threshold:10},
//       '.chosen-select-no-results': {no_results_text:'Oops, nothing found!'},
//       '.chosen-select-width'     : {width:"95%"}
//     }


    
//     for (var selector in config) {
//       $(selector).chosen(config[selector]);
//     }

//     // Capture the form inputs 
//     $("#submit").on("click", function(){

//       // Form validation
//       function validateForm() {
//       var isValid = true;
//       $('.form-control').each(function() {
//         if ( $(this).val() === '' )
//             isValid = false;
//       });

//       $('.chosen-select').each(function() {

//         if( $(this).val() === "")
//           isValid = false
//       })
//       return isValid;
//     }

//     // If all required fields are filled
//     if (validateForm() == true)
//     {
//       // Create an object for the user's data
//         var userData = {
//           name: $("#name").val(),
//           photo: $("#photo").val(),
//           scores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val(), ],

//         }

//          var scoreArray = userData.scores;
//          console.log(scoreArray);
//          var totalScore = 0;
//          var userGrade ="";
//          for (var i = 0; i < scoreArray.length; i++) {
//            totalScore += parseInt(scoreArray[i]);
//          }
//          if(totalScore >= 10 && totalScore <=20) {
//             userGrade = "a"
//             userData["userGrade"] = userGrade;
//          } else if (totalScore >= 21 && totalScore <= 30) {
//             userGrade = "b";
//             userData["userGrade"] = userGrade;
//          } else if (totalScore >= 31 && totalScore <= 40) {
//             userGrade = "c";
//             userData["userGrade"] = userGrade;
//          }else  {
//             userGrade = "d";
//             userData["userGrade"] = userGrade;
//          };
         
//          console.log(userData);
         



//         // AJAX post the data to the friends API.

//           // Grab the URL of the website
//         var currentURL = window.location.origin;

//         // AJAX post the data to the friends API. 
//         $.post(currentURL + "/api/friends", userData, function(data){
//          for (var i = 0; i < data.length; i++) {
//            $("#modal-body").append("<h2>"+data[i].name+"</h2>");
//            $("#modal-body").append("<img src="+data[i].photo+"></img>");
//          };
//          // Show the modal with the best match
//          $("#resultsModal").modal('toggle');
//        });

        
//     }
//     else
//     {
//       alert("Please fill out all fields before submitting!");
//     }
      
//       return false;
//     });