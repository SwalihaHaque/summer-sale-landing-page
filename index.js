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
    const price = target.parentNode.childNodes[5].innerText.split(" ")[1];
    total = parseInt(total) + parseInt(price);
    document.getElementById("total").innerText = total;
};





