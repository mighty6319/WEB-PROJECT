
const jsonData = {};
const ack = document.querySelector("#ack");
const inputs = document.querySelectorAll("#name, #age, #email, #address");

inputs.forEach(function (input) {
    input.addEventListener("input", function () {
        if (ack) ack.innerHTML = "";
    });
});
/*const submitted=document.querySelector("button[type=\"submit\"] p");
submitted.textContent="SUBMIT";*/

const form = document.getElementById("myForm");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name");
    jsonData.name = name.value;
    const age = document.getElementById("age");
    jsonData.age = age.value;
    const email = document.getElementById("email");
    jsonData.email = email.value;
    /*const gender=document.getElementsByName("gender");
    for(let i=0; i<gender.length; i++){
        if(gender[i].checked){
            console.log(gender[i].value);
        }
    }*/
    const gender = document.querySelectorAll(".gender input");
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            jsonData.gender = gender[i].value;
        }
    }
    const hobby = document.getElementsByName("hobby");

    let hobbyValue = [];
    for (let i = 0; i < hobby.length; i++) {
        if (hobby[i].checked) {
            hobbyValue.push(hobby[i].value);
        }
    }
    jsonData.hobby = hobbyValue;

    const branch = document.getElementById("branch");
    jsonData.branch = branch.value;
    const address = document.getElementById("address");
    jsonData.address = address.value;
    const feedback = document.getElementById("feedback");
    jsonData.feedback = feedback.value;

    console.log(JSON.stringify(jsonData));

    if (
        age.value === "" || email.value === "" || name.value === "" || address.value === "" || branch.value === "" || hobbyValue.length === 0 || !jsonData.gender
    ) {
        alert("Please fill up the required data");
        if (ack) {
            ack.innerHTML = "<h2 id=\"error\">fill up the required data</h2>";
            ack.classList.add("error");
        }
    } else {
        localStorage.setItem(
            "formData",
            JSON.stringify(jsonData));
        window.location.href = "sumitted.html";
    }


})
const para = document.querySelector("#para");
para.textContent = "This is a simple college admission form created using HTML, CSS and JavaScript. It collects basic information from the user such as name, age, email, gender, hobbies, branch and address.The form also includes validation to ensure that the user enters valid data. The form is styled using CSS to make it visually appealing and user-friendly. Overall, this form serves as a basic example of how to create a functional and interactive web form using HTML, CSS and JavaScript.";
console.log(para.textContent);


const dark = document.querySelector("#darkModeToggle");
dark.addEventListener("click", function () {
    document.body.classList.toggle("dark");
})
const rainbow = document.querySelector("#toggleRainbow");
const fun = document.querySelector("#fun");
rainbow.addEventListener("click", function () {
    document.body.classList.toggle("rainbow");
    fun.textContent = "This is a rainbow mode. Enjoy the colors!";
    document.body.classList.toggle("fun");
});
const wordCountElements = document.getElementById("name");
const wordCountDisplay = document.querySelector(".wordCount");
if (wordCountElements && wordCountDisplay) {
    wordCountElements.addEventListener("input", function () {
        wordCountDisplay.textContent = `${wordCountElements.value.length}/30`;
    });
} else {
    console.warn("Word count elements not found:", wordCountElements, wordCountDisplay);
}



