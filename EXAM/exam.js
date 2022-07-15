var picd=document.getElementById("displaypic");
var right=document.getElementById("subdiv2");
var first=document.getElementById("div1");
var pob=document.getElementById("power")

function image() {
    console.log("clicked")

    document.getElementById("but0").style.visibility="hidden";
    document.getElementById("but1").style.visibility="visible";
    document.getElementById("but2").style.visibility="visible";
    document.getElementById("but3").style.visibility="visible";
    document.getElementById("but4").style.visibility="visible";
    document.getElementById("but5").style.visibility="visible";
    document.getElementById("but6").style.visibility="visible";
    document.getElementById("but7").style.visibility="visible";
    picd.setAttribute("src","congress.png");
    picd.style.display="inline";
    congressv=1;
}
function image1() {
    console.log("clicked")

    document.getElementById("but0").style.visibility="visible";
    document.getElementById("but1").style.visibility="hidden";
    document.getElementById("but2").style.visibility="visible";
    document.getElementById("but3").style.visibility="visible";
    document.getElementById("but4").style.visibility="visible";
    document.getElementById("but5").style.visibility="visible";
    document.getElementById("but6").style.visibility="visible";
    document.getElementById("but7").style.visibility="visible";
    picd.setAttribute("src","BJP.jpg");
    picd.style.display="inline";
    bjpv=1;}
function image2() {
    console.log("clicked")
        document.getElementById("but0").style.visibility="visible";
            document.getElementById("but1").style.visibility="visible";
            document.getElementById("but2").style.visibility="hidden";
            document.getElementById("but3").style.visibility="visible";
            document.getElementById("but4").style.visibility="visible";
            document.getElementById("but5").style.visibility="visible";
            document.getElementById("but6").style.visibility="visible";
            document.getElementById("but7").style.visibility="visible";
            picd.setAttribute("src","tdp.jpeg");
            picd.style.display="inline";
            tdpv=1;
        }
        function image3() {
            console.log("clicked")
        
            document.getElementById("but0").style.visibility="visible";
            document.getElementById("but1").style.visibility="visible";
            document.getElementById("but2").style.visibility="visible";
            document.getElementById("but3").style.visibility="hidden";
            document.getElementById("but4").style.visibility="visible";
            document.getElementById("but5").style.visibility="visible";
            document.getElementById("but6").style.visibility="visible";
            document.getElementById("but7").style.visibility="visible";
            picd.setAttribute("src","ysrcon.jpeg");
            picd.style.display="inline";
          ysrv=1;}
function image4() {
                console.log("clicked")
            
                document.getElementById("but0").style.visibility="visible";
                document.getElementById("but1").style.visibility="visible";
                document.getElementById("but2").style.visibility="visible";
                document.getElementById("but3").style.visibility="visible";
                document.getElementById("but4").style.visibility="hidden";
                document.getElementById("but5").style.visibility="visible";
                document.getElementById("but6").style.visibility="visible";
                document.getElementById("but7").style.visibility="visible";
                picd.setAttribute("src","loks.png");
                picd.style.display="inline";
                loksathav=1;

            }
function image5() {
        console.log("clicked")
                
        document.getElementById("but0").style.visibility="visible";
        document.getElementById("but1").style.visibility="visible";
         document.getElementById("but2").style.visibility="visible";
        document.getElementById("but3").style.visibility="visible";
            document.getElementById("but4").style.visibility="visible";
             document.getElementById("but5").style.visibility="hidden";
            document.getElementById("but6").style.visibility="visible";
            document.getElementById("but7").style.visibility="visible";
     picd.setAttribute("src","cpm.png");
            picd.style.display="inline";
        cpmv=1;}
function image6() {
    console.log("clicked")
    document.getElementById("but0").style.visibility="visible";
    document.getElementById("but1").style.visibility="visible";
    document.getElementById("but2").style.visibility="visible";
    document.getElementById("but3").style.visibility="visible";
    document.getElementById("but4").style.visibility="visible";
    document.getElementById("but5").style.visibility="visible";
    document.getElementById("but6").style.visibility="hidden";
    document.getElementById("but7").style.visibility="visible";
    picd.setAttribute("src","trs.jpeg");
    picd.style.display="inline";
    trsv=1;}
function image7() {
    console.log("clicked")
    document.getElementById("but0").style.visibility="visible";
    document.getElementById("but1").style.visibility="visible";
    document.getElementById("but2").style.visibility="visible";
    document.getElementById("but3").style.visibility="visible";
    document.getElementById("but4").style.visibility="visible";
    document.getElementById("but5").style.visibility="visible";
    document.getElementById("but6").style.visibility="visible";
    document.getElementById("but7").style.visibility="hidden";
    picd.setAttribute("src","prp.png");
    picd.style.display="inline";
    prpv=1;}

                            
var congressv=0;
var bjpv=0;
var tdpv=0;
var ysrv=0;
var loksathav=0;
var cpmv=0;
var trsv=0;
var prpv=0;
var tcongressv=0;
var tbjpv=0;
var ttdpv=0;
var tysrv=0;
var tloksathav=0;
var tcpmv=0;
var ttrsv=0;
var tprpv=0;
function select(){
    if(congressv==1){
        tcongressv=tcongressv+1;
        congressv=0;
        document.getElementById("but0").style.visibility="visible";
                                }
        else if(bjpv==1){
            tbjpv=tbjpv+1;
            bjpv=0;
            document.getElementById("but1").style.visibility="visible";
                                }
        else if(tdpv==1){
            ttdpv=ttdpv+1;
            tdpv=0;
            document.getElementById("but2").style.visibility="visible";
                                }
        else if(ysrv==1){
            tysrv=tysrv+1;
            ysrv=0;
            document.getElementById("but3").style.visibility="visible";
                                }
        else if(loksathav==1){
            tloksathav=tloksathav+1;
            loksathav=0;
            document.getElementById("but4").style.visibility="visible";
                                }
        else if(cpmv==1){
            tcpmv=tcpmv+1;
            cpmv=0;
            document.getElementById("but5").style.visibility="visible";
                                }
        else if(trsv==1){
            ttrsv=ttrsv+1;
            trsv=0;
            document.getElementById("but6").style.visibility="visible";
                                }
        else if(prpv==1){
            tprpv=tprpv+1;
            prpv=0;
            document.getElementById("but7").style.visibility="visible";
                                }
            console.log("submit")
                            }
function countDisplay(){
    document.getElementById("c1").textContent=" : "+tcongressv+" Votes";
    document.getElementById("c2").textContent=" : "+tbjpv+" Votes";
    document.getElementById("c3").textContent=" : "+ttdpv+" Votes";
    document.getElementById("c4").textContent=" : "+tysrv+" Votes";
    document.getElementById("c5").textContent=" : "+tloksathav+" Votes";
    document.getElementById("c6").textContent=" : "+tcpmv+" Votes";
    document.getElementById("c7").textContent=" : "+ttrsv+" Votes";
    document.getElementById("c8").textContent=" : "+tprpv+" Votes";
    console.log("count");
    document.getElementById("div1").style.display="none";
    document.getElementById("countpage").style.display="block";
                            }
function reset(){
    tcongressv=0;
    tbjpv=0;
    ttdpv=0;
    tysrv=0; 
    tloksathav=0;
    tcpmv=0;
    ttrsv=0;
    tprpv=0;
    console.log("Resetted")
                            }
function unsubmit(){
    congressv=0;
    bjpv=0;
    tdpv=0;
    ysrv=0;
    loksathav=0;
    cpmv=0;
    trsv=0;
    prpv=0;
    document.getElementById("but0").style.visibility="visible";
    document.getElementById("but1").style.visibility="visible";
    document.getElementById("but2").style.visibility="visible";
    document.getElementById("but3").style.visibility="visible";
    document.getElementById("but4").style.visibility="visible";
    document.getElementById("but5").style.visibility="visible";
    document.getElementById("but6").style.visibility="visible";
    document.getElementById("but7").style.visibility="visible";
    console.log("Unsubmit")
                           
                           }
function turnOff(){
    first.style.display="none";
    pob.style.backgroundColor="red";

    console.log("Turned Off");}
                        
function ballotdisplay(){
    document.getElementById("div1").style.display="block";
    document.getElementById("div2").style.display="block";
    document.getElementById("countpage").style.display="none";
}