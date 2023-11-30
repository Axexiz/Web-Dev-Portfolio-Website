const activePage = window.location;
console.log(activePage.pathname);
const navlinks = document.querySelectorAll('.navlink').forEach
(link => {
    const href = link.href.split('#')[0];
    if(href.includes(activePage.pathname))
    {
        link.classList.add('active');
    }
});

// --------------------------------------------------------------------


const hiddenElements = document.querySelectorAll('.hiddenLeft');

const observer = new IntersectionObserver ((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('showLeft');
        }       
    });
});

hiddenElements.forEach((el) => observer.observe(el));




const hiddenElements2 = document.querySelectorAll('.hiddenRight');

const observer2 = new IntersectionObserver ((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('showRight');
        }      
    });
});

hiddenElements2.forEach((el) => observer2.observe(el));




const hiddenElements3 = document.querySelectorAll('.hiddenMid');

const observer3 = new IntersectionObserver ((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('showMid');
        }      
    });
});

hiddenElements3.forEach((el) => observer3.observe(el));





const hiddenElements4 = document.querySelectorAll('.hiddenUp');

const observer4 = new IntersectionObserver ((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('showUp');
        }       
    });
});

hiddenElements4.forEach((el) => observer4.observe(el));
    




const hiddenElements5 = document.querySelectorAll('.hiddenDown');

const observer5 = new IntersectionObserver ((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('showDown');
        }       
    });
});

hiddenElements5.forEach((el) => observer5.observe(el));



// --------------------------------------------------------------------

var acc = document.getElementsByClassName("btn");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      this.querySelector('.plusminus').innerHTML = "+";
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      this.querySelector('.plusminus').innerHTML = "-";
    } 
  });
}

// So, the if statement inside the function checks the value of the max-height property of the associated panel element. If the value is truthy, it means that the panel element is currently restricted by a maximum height, and the text within the panel is hidden. In this case, the function sets the max-height property to null so that the element is not restricted by a maximum height anymore, making the text within the panel visible again, and changes the plusminus element's innerHTML to "+"
// If the value is falsy, it means that the panel element is not currently restricted by a maximum height, and the text within the panel is visible. In this case, the function sets the max-height property to scrollHeight + "px" so that the element is restricted by a maximum height that is equal to the height of the content of the element, making the text within the panel hidden, and changes the plusminus element's innerHTML to "-"


// =====================================================================================================

document.getElementById("discount_code").addEventListener("submit",function(event){
    event.preventDefault();
    document.getElementById("discount_text").value = "";
    document.getElementById("message_box").style.display = "block";
    
    setTimeout(function(){
        document.getElementById("message_box").style.display = "none";
    }
     ,1000);
});


// =====================================================================================================


window.addEventListener("scroll", function() {
    const scrollUp = document.querySelectorAll(".scrollup");
  
    if (window.pageYOffset >= 560) {
      for (let i = 0; i < scrollUp.length; i++) {
        scrollUp[i].classList.add("show-scroll");
      }
    } else {
      for (let i = 0; i < scrollUp.length; i++) {
        scrollUp[i].classList.remove("show-scroll");
      }
    }
  });
  
