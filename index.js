let total = 0;
function clickMe(target) {
    const container = document.querySelector("#selected-item");
    //console.log(target.parentNode.childNodes[3].innerText);
    const itemName = target.parentNode.childNodes[3].innerText;

    const li = document.createElement("li");
    li.innerText = itemName;

    container.appendChild(li);

    //display price and sum of the total price

    console.log(target.parentNode.childNodes[5].innerText.split(" ")[1]);
    // const price = target.parentNode.childNodes[5].innerText.split(" ")[1];
    // total = parseInt(total) + parseInt(price);
    // document.getElementById("total").innerText = total;
};



// let initialPrice = 0;
// function handleCLikBtn(target) {
//     const container = document.querySelector("#selected-items");

//     //console.log(target.parentNode.childNodes[1].innerText);
//     const itemName = target.parentNode.childNodes[1].innerText;

//     const li = document.createElement("li");
//     li.innerText = itemName;

//     container.appendChild(li);
//     console.log(target.parentNode.childNodes[5]);
//     const price = target.parentNode.childNodes[5].innerText.split(" ")[1];
//     initialPrice = parseInt(initialPrice) + parseInt(price);
//     document.getElementById("total").innerText = initialPrice;
// }


// document.getElementsByClassName('defaultText').addEventListener('click', function () {
//     const updateText = document.getElementsByClassName('updateText');
//     updateText.innerText = 'K.Accessories'
// })
// // alternative
// document.getElementById('cookerClick').addEventListener('click', function () {
//     const previousTitle = document.getElementById('previous-title');
//     const updateTitle = document.getElementById('updateText2');
//     updateTitle.innerText = 'Home Cooker'
// })

// /*
//    document.getElementById('cookerClick').addEventListener('click', function () {
//     const previousTitle = document.getElementById('previous-title');
//     const setTitle = previousTitle.innerText;

//     const updateTitle = document.getElementById('updateText2');
//     updateTitle.innerText = setTitle;

// })
//     */



