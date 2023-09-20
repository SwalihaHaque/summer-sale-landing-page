let total = 0;
function clickMe(target) {
    const container = document.querySelector("#selected-item");
    const itemName = target.parentNode.childNodes[3].innerText;

    const li = document.createElement("li");
    li.innerText = itemName;

    container.appendChild(li);

    //display price and sum of the total price
    const price = target.parentNode.childNodes[5].innerText;
    total = parseInt(total) + parseInt(price);
    document.getElementById("total-price").innerText = total;

    //button enable
    if (total > 0) {
        const makePurchaseBtn = document.getElementById("make-purchase");
        makePurchaseBtn.removeAttribute('disabled');
    }
    if (total >= 200) {
        const applyBtn = document.getElementById("apply-btn");
        applyBtn.removeAttribute('disabled');
    }
};

// coupon apply
function couponApply() {
    let validPromoCode = "SELL200";

    let couponFieldValue = document.getElementById("coupon-field").value;
    let totalValue = parseFloat(document.getElementById("total-price").innerText);
    let discountField = document.getElementById("discount-price");
    let grandTotalField = document.getElementById("total");

    if (couponFieldValue === validPromoCode) {

        let discountValue = totalValue * 0.2;
        console.log(discountValue);

        discountField.innerText = discountValue.toFixed(2);
        grandTotalField.innerText = discountValue;
        let grandTotalValue = totalValue - discountValue;
        grandTotalField.innerText = grandTotalValue.toFixed(2);
    }
};








