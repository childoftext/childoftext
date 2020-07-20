
      let animationText = document.querySelector("#intro-text")
      let animationTextValue = animationText.innerHTML
      animationText.innerHTML = ""
      i = 0

      let menuDisplay = "flex"

      textAnim()

      function textAnim(){
      if (i < animationTextValue.length){
        animationText.innerHTML += animationTextValue[i];
        i += 1
        if (i == animationTextValue.length){
          setTimeout(() => {                       
          i = 0
          animationText.innerHTML = ""
          textAnim()
          }, 2000);
        }
        setTimeout(textAnim, 200)
      }
      }

      function toggleMenu(){
        document.getElementById("burgermenu").style = `display: ${menuDisplay}`

        if (menuDisplay == "flex") {
          menuDisplay = "none"
        }
        else menuDisplay = "flex"
      }