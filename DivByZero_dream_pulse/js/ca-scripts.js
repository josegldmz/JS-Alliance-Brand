var customerName = "Alliance  ";

// <h1 id="tm-header" class="tm-brand text-uppercase"></h1> <!--todo: Add Customer Name-->
function addCustomerName() {
   
    // <h1 id="tm-header" class="tm-brand text-uppercase"></h1> <!--todo: Add Customer Name-->
    let title = document.getElementById('tm-header')
        title.textContent = 'Alliance, LLC';

    // <h2 id="introheader" class="tm-section-title mb-5 text-uppercase tm-color-primary"></h2> <!--todo: Add Customer Name-->
    let introHead = document.getElementById('introheader')
        introHead.textContent = 'Alliance'
}

function toggleColors() {
    let tmBlue = document.getElementsByClassName('d-inline block tm-white-rect')
        tmBlue.style.color = 'blue'


    // <!-- todo: Change all classes named 'tm-white-rect' to 'tm-blue-rect' -->
    let el = document.querySelectorAll('.tm-white-rect');
    
    for (i=0; i < el.length; i++){
        el[i].classList.add('tm-blue-rect');
        el[i].classList.remove('tm-white-rect');
    }
};

function hideElement() {
    document.getElementsByClassName('nav dlex-row tm-social-links').hidden=true;
};

    //<ul class="nav flex-row tm-social-links">  <!--todo: Hide social links-->
 
 function addText() {

    //<p id="intropara1" class="tm-color-gray">  <!--todo: Add customer company introduction text about their founding year-->

    let introText1 = document.getElementById('intropara1')
    introText1.textContent = "'Alliance was founded in 1931 by Albert Daniels.";


    //<p id="intropara2" class="mb-0 tm-color-gray"> <!--todo: Add customer company introduction text about what they lead in-->

    let introText2 = document.getElementById('intropara2')
    introText2.textContent = "The company is a leader in P.C. Manufacturing";

     //<p id="aboutpara1" id="a" class="mb-5"> <!--todo: Add customer company about text-->

     let aboutText1 = document.getElementById('aboutpara1')
     aboutText1.textContent = "We deliver the best service this side of creation";

    //<p id="aboutpara2"> <!--todo: Add customer company motto text-->

    let mottoText = document.getElementById('aboutpara2')
    mottoText.textContent = "'Our motto is satisfaction guaranteed"

    // <p id="addresspara" class="mb-3"> <!--todo: Add customer company phone number text-->

    let phoneNum = document.getElementById('addresspara')
    phoneNum.textContent = "1-800-565-5656"
}; 



