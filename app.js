//Question num 1:


const heading = document.getElementById("my paragraph");
heading.textContent = "hello, javascript"


const head1 = document.getElementById("head");
head1.textContent = "About Us:"


//Question num 2:


function content() {
      const para = document.getElementById("paragraph")
      if (para.style.backgroundColor == "gray") {
            para.style.backgroundColor = "black";
            para.style.Color = "pink";
      }
      else {
            para.style.backgroundColor = "gray";
            para.style.color = "white";

      }
}


//Question num 3:

// const hide = document.getElementById("head");
// const showTextButton = document.getElementById("show");
// const mydiv = document.getElementById("mydiv");

// showTextButton.addEventListener("click", function() {
//     mydiv.style.display = "block";
// });
// const hide = document.getElementById("head");

function show() {
      
      const showTextButton = document.getElementById("show");
      const mydiv = document.getElementById("mydiv");
      // document.write(showTextButton)
      mydiv.style.display = "block";
      mydiv.style.backgroundColor = "parpple"
      // hide.style.display = "block";

}





