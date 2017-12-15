var train;
var passenger;
var total;
var trainSrNo;
var checker1 = false;
var currentSrNo = 10;
var tsrno = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var trainNumbers = ["4563", "8205", "5455", "2853", "2956", "2653", "5959", "2468", "5012", "1752"];
var tnm = ["Indian Airlines", "Aero Float", "Emirates", "Lufthansa", "Singapore Air", "Etihad Airways", "Turkish Airlines", "American Airlines", "Thai Airways", "Qatar Airways"];
var tsrc = ["Delhi", "Kolkata", "Mumbai", "Chennai", "Goa", "Cochin", "Pune", "Assam", "Jaipur", "Mumbai"];
var tdst = ["London", "Moscow", "Dubai", "Berlin", "Singapore", "Abu Dhabi", "Istanbul", "New York", "Bangkok", "Al Khor"];
var prices = [40000, 30000, 20000, 35000, 20000, 20000, 25000, 45000, 20000, 25000];
$(document).ready(function() {
  ///////////Adding html and making the train list visible///////

  for (var i = 0; i <= tsrno.length; i++) {
    $(".trainNo" + (i + 1) + ".srno").text(tsrno[i]);
    $(".trainNo" + (i + 1) + ".tno").text(trainNumbers[i]);
    $(".trainNo" + (i + 1) + ".tnm").text(tnm[i]);
    $(".trainNo" + (i + 1) + ".tsrc").text(tsrc[i]);
    $(".trainNo" + (i + 1) + ".tdst").text(tdst[i]);
    $(".trainNo" + (i + 1) + ".tprc").text("₹" + prices[i]);
  }

  ////////////////////Main Program//////////////////////////////
  $("body").hide();
  $("body").fadeIn(1000);
  $("h2").fadeOut(10000);
  $("#moretrains").hide();
  $("#enterPassengers").hide();
  $("#retrainNo").hide();
  $("#rePassNo").hide();
  $("#extraStuff").hide();
  $("#confirm").hide();
  $("#trainNoBtn").on("click", function() {
    train = $("#fNo").val();
    mainsystem(train);
  });
  $(".train").on("click", function() {
    train = $(this).attr('id');
    mainsystem(train);
  });

  function mainsystem(trainnum) {
    if (train == "list") {
      $('.train').fadeIn(1000);
      $(".choosehead").fadeIn(500);
    } else if (train > 0) {
      var test = false;
      for (var i = 0; i < trainNumbers.length; i++) {
        if (trainNumbers[i] == train) {
          trainSrNo = i;
          console.log(trainSrNo);
          test = true;
          break;
        }
      }
      if (test === false) {
        $("#returnError").html('<p class="text-danger text-center">train not found!</p>');
        $('.train').fadeIn(1000);
        $(".choosehead").fadeIn(500);
      } else {
        $("#returnError").html("");
        var no = "#" + train;
        $('.train').not(no).slideUp(1000);
        $(no).fadeIn(1200);
        $(".choosehead").fadeOut(500);
        $("#entertrainNo").fadeOut(500);
        $("#enterPassengers").fadeIn(500);
        $("#retrainNo").show().on("click", function() {
          $("#entertrainNo").fadeIn(500);
          $("#retrainNo").hide();
          $("#enterPassengers").hide();
          $("#rePassNo").hide();
          $("#extraStuff").hide();
          $("#confirm").hide();
          $("#returnError2").html('');
        });

        $("#passengerBtn").on("click", function() {
          passenger = $("#passNo").val();
          if (passenger <= 0) {
            $("#returnError2").html('');
            $("#returnError2").html('<p class="text-danger text-center">Invalid number of passengers!</p>');
          } else if (passenger > 200) {
            $("#returnError2").html('');
            $("#returnError2").html('<p class="text-danger text-center">Number of passengers you input exceeds train capacity of 200 !</p>');
          } else if (passenger > 0 && passenger <= 200) {
            total = prices[trainSrNo] * passenger;
            $("#passengerNames").show();
            // $("#returnError2").html('<p class="confirmation text-center">That will cost you a total of &#8377;' + total + '</p>');
            $("#enterPassengers").fadeOut(300);
            // $("#rePassNo").fadeIn(400).on("click", function() {
            //   $("#rePassNo").hide();
            //   $("#extraStuff").hide();
            //   $("#confirm").hide();
            //   $("#enterPassengers").fadeIn(300);
            //   $("#extraStuff").reset();
            //   $('#Bclass').attr('checked', false);
            // });;
            $("#retrainNo").hide();
            // $("#extraStuff").show();
            
            $("#confirm").show();
            $(".yourTotal").html("");
            total = prices[trainSrNo] * passenger;
            $(".yourTotal").html("Your total amount: ₹" + total);
            $("#Bclass").click(function() {
              
    if ($("#Bclass").is(':checked')) {
                
                var additionalPrice = 5000 * passenger;
                total = (prices[trainSrNo] * passenger) + additionalPrice;
                $(".yourTotal").html("");
                $(".yourTotal").html("Your total amount: ₹" + total);
              } else {
                var additionalPrice = 5000 * passenger;
                total = total- additionalPrice;
                $(".yourTotal").html("");
                $(".yourTotal").html("Your total amount: ₹" + total);
              }
  
              
              
            });
            $("#getFood").click(function() {
              if ($("#getFood").is(':checked')) {
                var additionalPrice = 850 * passenger;
                total = total + additionalPrice;
                $(".yourTotal").html("");
                $(".yourTotal").html("Your total amount: ₹" + total);
              } else {
                var additionalPrice = 850 * passenger;
                total = total - additionalPrice;
                $(".yourTotal").html("");
                $(".yourTotal").html("Your total amount: ₹" + total);
              }

            });

          } else {
            $("#returnError2").html('');
            $("#returnError2").html('<p class="text-danger text-center">Invalid number of passengers!</p>');
          }
        });

      }
    }
  }
  ///Starting of more train system:

  $(".moret").on("click", function() {
    $(".train").fadeOut(800);
    $(".inputs").fadeOut(800);
    $("#moretrains").show(1000);
  });

  var fromCity = $("#fromCity").val();
  var toCity = $("#toCity").val();
  $("#searchtrain").on("click", function() {
    if ($('#fromCity').val() == '') {
      $("#returnError3").html("");
      $("#returnError3").html('<p class="text-danger text-center">City name cannot be blank</p>');
    } else if ($('#toCity').val() == '') {
      $("#returnError3").html("");
      $("#returnError3").html('<p class="text-danger text-center">City name cannot be blank</p>');
    } else if ($('#enteredName').val() == '') {
      $("#returnError3").html("");
      $("#returnError3").html('<p class="text-danger text-center">train Name cannot be blank!</p>');
    } else {
      $("#returnError3").html("");
      fromCity = $("#fromCity").val();
      toCity = $("#toCity").val();
      var newtrainNumber = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
      var newSrno = currentSrNo + 1;
      currentSrNo = newSrno;
      var newtrain = $("#enteredName").val();
      var randomPrice = $("input[name='myRadio']:checked").val();
      console.log(randomPrice);
      if (randomPrice == "int") {
        randomPrice = (Math.floor(Math.random() * (50 - 15 + 1)) + 15) * 1000;
      } else if (randomPrice == "dom") {

        randomPrice = (Math.floor(Math.random() * (12 - 2 + 1)) + 2) * 1000;
      }

      ////PUSHING EVERYTHING!!!

      tsrno.push(newSrno);
      trainNumbers.push(newtrainNumber);
      tnm.push(newtrain);
      tsrc.push(fromCity);
      tdst.push(toCity);
      prices.push(randomPrice);

      //Done pushing :P

      $(".alltrains").append('<div class="row train"' + newtrainNumber + '" id="' + newtrainNumber + '"><div class="col-sm-2"><h5 class="text-center srno trainNo' + newSrno + '">' + newSrno + '</h5></div><div class="col-sm-2"><h5 class="text-center tno trainNo' + newSrno + '">' + newtrainNumber + '</h5></div><div class="col-sm-2"><h5 class="text-center tnm trainNo' + newSrno + '">' + newtrain + '</h5></div><div class="col-sm-2"><h5 class="text-center tsrc trainNo' + newSrno + '">' + fromCity + '</h5></div><div class="col-sm-2"><h5 class="text-center tdst trainNo' + newSrno + '">' + toCity + '</h5></div><div class="col-sm-2"><h5 class="text-center tprc trainNo' + newSrno + '">₹' + randomPrice + '</h5></div></div>');
      $(".train").show();
      $(".inputs").show();
      $("#moretrains").hide();
      $("#returnError4").html("");
      $(".train").click(function() {
        train = $(this).attr('id');
        mainsystem(train);
        console.log(train);
      });
      $("#returnError4").html('<p class="text-info text-center"> 1 train was found!');
      $("#returnError4").fadeOut(3000);
      $("#returnError4  ").html("");
    }

  });
  //End of more train system
  
  //Passenger Names:
  for(var i=0;i<passenger;i++){
    $("#passengerNames").append('<div class="row"><div class="col-sm-6"><p class="text-right">Enter Passenger '+(i+1)+'\'s full name : </p></div><div class="col-sm-6"><input id="pNm" class="text-center" type="text" name="pName" placeholder="Full Name eg:Bill Gates"><br></div></div>');
  }
  
  
  
  
  
  
});