$(document).ready(() => {
    const baseSpeed = 500;
    const baseDelay = 2000;
    const inc = 200;
    const tran = 400; 


    $("#line-one").delay(baseSpeed).toggleClass("hidden", tran);
    $("#line-two").delay(baseSpeed + (inc * 1)).toggleClass("hidden", tran);
    $("#line-three").delay(baseSpeed + (inc * 2)).toggleClass("hidden", tran);
    $("#open-body").delay(baseDelay).toggleClass("hidden", tran);
    $("#open-button").delay(baseDelay + inc).toggleClass("hidden-button", tran);
});