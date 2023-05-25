openTab(event,'Bab',1)

function openTab(evt, cityName,NumberButton) {
 console.log("det gick")
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("iWindovs");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("WindoLinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";

    if (NumberButton==1){
        document.getElementById("babButton").style.backgroundColor = "#white";

    }
    else if(NumberButton==2){
        document.getElementById("erbilButton").style.backgroundColor = "#991111";
    }
    else if(NumberButton==3){
        document.getElementById("alButtton").style.backgroundColor = "#991111";
    }
    else{
        document.getElementById("hatraButton").style.backgroundColor = "#991111";
    }
  }

