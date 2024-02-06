let maskBtn = document.getElementById("mask-btn");
maskBtn.addEventListener("click", (e) => {
    let text = document.getElementById("mask-input").value;

    //hello -> #ello
    //ironman -> ###nman
    //123456789 -> #####6789

    //hello world -> ##### #orld


const maskText = (input) => {
const censored = [];
const lastFour = input.split("").slice(input.length - 4);

for (let i = 0; i < input.length - 4; i++) {
censored.push("#");
}
censored.push(...lastFour);

return censored.join(""); };

       const maskedText = maskText(text);
    console.log(maskedText);

    

onst maskText = (input) => {
const censored = [];
const lastFour = input.split("").slice(input.length - 4);

for (let i = 0; i < input.length - 4; i++) {
censored.push("#");
}
censored.push(...lastFour);

return censored.join(""); };

       const maskedText = maskText(text);
    console.log(maskedText);

    });