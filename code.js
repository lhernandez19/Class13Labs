var studentsArray = [];

$(document).ready(function(){

    //events
    $("#submit").click(results);
    $("#sortName").click(sortName)
    $("#sortPercentage").click(sortPercentage)

    //functions

    function results (event)
    {
        event.preventDefault();

        var myPoints =
        {
            firstName: "",
            lastName: "",
            pointsEarned: 0,
            pointsPossible: 0,
        };
    
        myPoints.firstName = $("#fname").val();
        myPoints.lastName = $("#lname").val();
        myPoints.pointsEarned = $("#pointsEarned").val();
        myPoints.pointsPossible = $("#pointsPossible").val();


        var calculation = Math.round(myPoints.pointsEarned / myPoints.pointsPossible * 100);

        $("#resultsOutput").text(` ${myPoints.firstName} ${myPoints.lastName} result is: ${calculation.toFixed()}%`);

        myPoints.calculation = calculation;

        if(calculation < 80)
        {
            $("#letterOutput").text("C");
        }
        else if(calculation < 90)
        {
            $("#letterOutput").text("B");
        }
        else
        {
            $("#letterOutput").text("A");
        }


        studentsArray.push(myPoints);

        var nameOutput = "";
        
        for(var studentInfo of studentsArray)
        {
            nameOutput += studentInfo.firstName;
        }

        $("#nameOutput").text(nameOutput);

        var percentageOutput = "";
        
        for(var studentInfo of studentsArray)
        {
            percentageOutput += studentInfo.calculation;
        }

        $("#percentageOutput").text(percentageOutput);
       
    }


    function sortName ()
    {
        studentsArray.sort(function(a, b)
        {
            if (a.firstName < b.firstName)
            {
                return -1;
            }
            else if (a.firstName > b.firstName)
            {
                return 1;
            }
            else 
            {
                return 0;
            }
        });
        var nameOutput = "";
        
        for(var studentInfo of studentsArray)
        {
            nameOutput += studentInfo.firstName + ", ";
        }

        $("#nameOutput").text(nameOutput);
    }

    function sortPercentage ()
    {
        studentsArray.sort(function(a, b)
        {
            if (a.calculation < b.calculation)
            {
                return -1;
            }
            else if (a.calculation > b.calculation)
            {
                return 1;
            }
            else 
            {
                return 0;
            }
        });
        var percentageOutput = "";
        
        for(var studentInfo of studentsArray)
        {
            percentageOutput += studentInfo.calculation + ", ";
        }

        $("#percentageOutput").text(percentageOutput);
    }

});