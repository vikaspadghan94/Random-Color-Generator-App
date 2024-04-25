const getColor = ()=>{
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    // console.log(randomNumber,randomCode);
    document.body.style.background = randomCode; // getting css bg access
    document.getElementById("color-code").innerText = randomCode // to code print on page 

    navigator.clipboard.writeText(randomCode) // to copy to clipboard
}

// event call on click
document.getElementById("btn").addEventListener( // getting access by btn & evntlistnr
    "click",
    getColor
)

// intial call means refreshing page it loaded
getColor()