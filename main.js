var planetNames = ["Jupiter", "Venus", "Saturn", "Mars", "LucyLu"];
var distancesFromEarth = [5.2, 0.72, 9.5, 1.5, 3.1];
var sunnyInAugust = [false, true, false, true, true];

var main = document.getElementById("main");
var sunnyPlanets = "";


// styling
main.style.backgroundColor = "grey";
// looping through the array's
for(var i = 0; i < planetNames.length; i++)
{
    
    main.innerHTML=main.innerHTML + "<p style=color:darkred;font-size:45px><strong>" + planetNames[i] + "</strong> </p>" + "<p style=color:purple;font-size:25px>" + distancesFromEarth[i] + "<br/>" + sunnyInAugust[i] + "</p> -------------------------";
    
    //setting a var equal to sunny planets
    if (sunnyInAugust[i] == true){
        sunnyPlanets = sunnyPlanets + planetNames[i] + ", ";
    }
    
}
//output to the document
 main.innerHTML = main.innerHTML + "<br/>" + "<p style=font-size:25px><strong>Sunny Planets in August: </strong>"+ sunnyPlanets + "</p>";