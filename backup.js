const list = document.getElementById("color-list");
// const addInput = document.getElementById("color-list");
const BtnAdd = document.querySelector('.submit');


BtnAdd.addEventListener("click", changeColor);


const rgbArray = []
let counter = 0
    function changeColor() {

        const rColor = Math.floor(Math.random() * (255 - 0 + 1) + 0)
        const gColor = Math.floor(Math.random() * (255 - 0 + 1) + 0)
        const bColor = Math.floor(Math.random() * (255 - 0 + 1) + 0)
        let newColor = `rgb(${rColor},${gColor},${bColor})`


        document.body.style.backgroundColor = newColor
        document.body.querySelector("#rgbColorInfo").innerHTML = `new color is ${newColor}`

        const newLi = document.createElement("li")
        const newApply = document.createElement("button")
        const newDelete = document.createElement("button")
        newLi.setAttribute("class",counter);
        newApply.setAttribute("class",`${counter} apply`);
        newDelete.setAttribute("class",`${counter} delete`);
        
        
        document.getElementById("color-list").appendChild(newLi)
        const list = document.getElementById("color-list").getElementsByTagName('li')[counter]
        list.innerHTML = newColor
        list.style.backgroundColor = newColor
        
        list.appendChild(newApply)
        list.appendChild(newDelete)
        list.getElementsByTagName("button")[0].innerHTML = "Apply"
        list.getElementsByTagName("button")[1].innerHTML = "Delete"


        
        counter += 1       

        rgbArray.push(newColor)   
        const numberOfButtons = document.getElementsByClassName("apply").length;
        console.log(numberOfButtons)

  

    
        

    }

    const numberOfButtons = document.getElementsByClassName("apply").length;
        
