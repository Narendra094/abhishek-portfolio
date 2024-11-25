let btn_grad2 = document.querySelector(".btn_grad2");
let contect_form = document.querySelector("#contect_form");
let Enter_name = document.querySelector("#Enter_name");
let Enter_email = document.querySelector("#Enter_email");

contect_form.addEventListener("submit",() => {
    event.preventDefault();
    btn_grad2.innerText = "send successfully";
    btn_grad2.style.color = "green"
    btn_grad2.style.backgroundColor = "green"
    Enter_email.value = "";
    Enter_name.value = "";
    alert("Send Successfully.")
});