function UP(){

    document.documentElement.scrollTop=0;

}



function Scroll(){
        document.getElementById('up').style.display="block";
        document.getElementById("btnIcon").style.animation="ToUp 1s"
        if(document.documentElement.scrollTop==0)
        {
          document.getElementById('up').style.display="none";
          
        }
}