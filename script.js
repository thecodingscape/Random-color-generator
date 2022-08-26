    const colorBtn = document.getElementById("color-btn");
    const colorGenerator = document.querySelector("#color-generator");
    const bgColor = document.querySelector(".wrapper");
    const colorGeneratorText = document.querySelector(".card-body p");

    colorBtn.addEventListener("click", function(){
        let number = Math.floor(Math.random()*16777215);
        let colorCode = '#'+number.toString(16);
        console.log(colorCode);
        colorGenerator.style.backgroundColor = colorCode;
        bgColor.style.backgroundColor = colorCode;
        colorGeneratorText.innerHTML = colorCode;

    })