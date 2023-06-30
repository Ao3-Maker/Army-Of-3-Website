/*document.getElementById("demo1").addEventListener("click", FDemo1);
    function FDemo1() {
        document.getElementById("demo1").innerHTML = "&nbsp;<br>Run<br>&nbsp;";
        document.getElementById("demo2").innerHTML = "&nbsp;<br>B2<br>&nbsp;";
        document.getElementById("demo3").innerHTML = "&nbsp;<br>B3<br>&nbsp;";
        const SmokeBlur = document.querySelector(".smokeeff");
        const formBLur0 = document.querySelector(".form1_1");
        const formBLur1 = document.querySelector(".form2_1");
        const formBLur2 = document.querySelector(".form2_2");
        const formBLur3 = document.querySelector(".form2_3");
        const formBLur4 = document.querySelector(".form2_4");
        const formBLur5 = document.querySelector(".form2_5");
        const formBLur6 = document.querySelector(".form2_6");
        const formBLur7 = document.querySelector(".form2_7");
        const formBLur8 = document.querySelector(".form2_8");
        const formBLur9 = document.querySelector(".form2_9");
        const formBLur10 = document.querySelector(".form2_10");
        formBLur0.classList.add("form--blur1");
        formBLur1.classList.add("form--blur2");
        formBLur2.classList.add("form--blur3");
        formBLur3.classList.add("form--blur4");
        formBLur4.classList.add("form--blur5");
        formBLur5.classList.add("form--blur6");
        formBLur6.classList.add("form--blur7");
        formBLur7.classList.add("form--blur8");
        formBLur8.classList.add("form--blur9");
        formBLur9.classList.add("form--blur10");
        formBLur10.classList.add("form--blur11");
        SmokeBlur.classList.add("smoke--blur");
    }*/
    /*document.getElementById("demo2").addEventListener("click", FDemo2);
    function FDemo2() {
        document.getElementById("demo1").innerHTML = "&nbsp;<br>B1<br>&nbsp;";
        document.getElementById("demo2").innerHTML = "&nbsp;<br>Run<br>&nbsp;";
        document.getElementById("demo3").innerHTML = "&nbsp;<br>B3<br>&nbsp;";
        const SmokeBlur = document.querySelector(".smokeeff");
        const formBLur0 = document.querySelector(".form1_1");
        const formBLur1 = document.querySelector(".form2_1");
        const formBLur2 = document.querySelector(".form2_2");
        const formBLur3 = document.querySelector(".form2_3");
        const formBLur4 = document.querySelector(".form2_4");
        const formBLur5 = document.querySelector(".form2_5");
        const formBLur6 = document.querySelector(".form2_6");
        const formBLur7 = document.querySelector(".form2_7");
        const formBLur8 = document.querySelector(".form2_8");
        const formBLur9 = document.querySelector(".form2_9");
        const formBLur10 = document.querySelector(".form2_10");
        formBLur0.classList.remove("form--blur1");
        formBLur1.classList.remove("form--blur2");
        formBLur2.classList.remove("form--blur3");
        formBLur3.classList.remove("form--blur4");
        formBLur4.classList.remove("form--blur5");
        formBLur5.classList.remove("form--blur6");
        formBLur6.classList.remove("form--blur7");
        formBLur7.classList.remove("form--blur8");
        formBLur8.classList.remove("form--blur9");
        formBLur9.classList.remove("form--blur10");
        formBLur10.classList.remove("form--blur11");
        SmokeBlur.classList.add("smoke--blur");
    }*/
    /*document.getElementById("demo3").addEventListener("click", FDemo3);
    function FDemo3() {
        document.getElementById("demo1").innerHTML = "&nbsp;<br>B1<br>&nbsp;";
        document.getElementById("demo2").innerHTML = "&nbsp;<br>B2<br>&nbsp;";
        document.getElementById("demo3").innerHTML = "&nbsp;<br>Run<br>&nbsp;";
        const SmokeBlur = document.querySelector(".smokeeff");
        SmokeBlur.classList.remove("smoke--blur");
        const formList = document.querySelector("#login");
        const formBLur0 = document.querySelector(".form1_1");
        const formBLur1 = document.querySelector(".form2_1");
        const formBLur2 = document.querySelector(".form2_2");
        const formBLur3 = document.querySelector(".form2_3");
        const formBLur4 = document.querySelector(".form2_4");
        const formBLur5 = document.querySelector(".form2_5");
        const formBLur6 = document.querySelector(".form2_6");
        const formBLur7 = document.querySelector(".form2_7");
        const formBLur8 = document.querySelector(".form2_8");
        const formBLur9 = document.querySelector(".form2_9");
        const formBLur10 = document.querySelector(".form2_10");
        formList.classList.remove("form--hidden");
        formBLur0.classList.add("form--blur1");
        formBLur1.classList.add("form--blur2");
        formBLur2.classList.add("form--blur3");
        formBLur3.classList.add("form--blur4");
        formBLur4.classList.add("form--blur5");
        formBLur5.classList.add("form--blur6");
        formBLur6.classList.add("form--blur7");
        formBLur7.classList.add("form--blur8");
        formBLur8.classList.add("form--blur9");
        formBLur9.classList.add("form--blur10");
        formBLur10.classList.add("form--blur11");
    }*/
    
document.addEventListener("DOMContentLoaded", () =>{

            // Function to check Whether both passwords
            // is same or not.
            function checkPassword(form) {
                password1 = form.password1.value;
                password2 = form.password2.value;
  
                // If password not entered
                if (password1 == 'Test1')
                    alert ("Please enter Password");
                      
                // If confirm password not entered
                else if (password2 == 'Test2')
                    alert ("Please enter confirm password");
                      
                // If Not same return False.    
                else if (password1 != password2) {
                    alert ("\nPassword did not match: Please try again...")
                    return false;
                }
                // If same return True.
                else{
                    alert("Password Match: Welcome to GeeksforGeeks!")
                    return true;
                }
            }

    document.querySelector("#form").addEventListener("click", (e) =>{
        e.preventDefault();
        const formList1 = document.querySelector("#login");
        formList1.classList.remove("form--hidden");
    });
    document.querySelector("#form2").addEventListener("click", (e) =>{
        e.preventDefault();
        const formList2 = document.querySelector("#createAccount");
        formList2.classList.remove("form--hidden");
    });
    const form1 = document.querySelector(".form1"),
    emailField = form1.querySelector(".email-field"),
    emailInput = emailField.querySelector(".email");
    //passwordField = form1.querySelector(".password-field"),
    //passwordInput = passwordField.querySelector(".password");
    //Email validation
    function checkEmail(){
        const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if(!emailInput.value.match(pattern)) {
        return emailField.classList.add("invalid");
        }
        emailField.classList.remove("invalid");
    }
    //Call function on submit
    form1.addEventListener("submit", (e) =>{
        e.preventDefault();
        checkEmail();
    });
    document.querySelector("#form").addEventListener("click", (e) =>{
        e.preventDefault();
        const SmokeBlur = document.querySelector(".smokeeff");
        const formList = document.querySelector("#login");
        const formBLur0 = document.querySelector(".form1_1");
        const formBLur1 = document.querySelector(".form2_1");
        const formBLur2 = document.querySelector(".form2_2");
        const formBLur3 = document.querySelector(".form2_3");
        const formBLur4 = document.querySelector(".form2_4");
        const formBLur5 = document.querySelector(".form2_5");
        const formBLur6 = document.querySelector(".form2_6");
        const formBLur7 = document.querySelector(".form2_7");
        const formBLur8 = document.querySelector(".form2_8");
        const formBLur9 = document.querySelector(".form2_9");
        const formBLur10 = document.querySelector(".form2_10");
        formList.classList.remove("form--hidden");
        formBLur0.classList.add("form--blur1");
        formBLur1.classList.add("form--blur2");
        formBLur2.classList.add("form--blur3");
        formBLur3.classList.add("form--blur4");
        formBLur4.classList.add("form--blur5");
        formBLur5.classList.add("form--blur6");
        formBLur6.classList.add("form--blur7");
        formBLur7.classList.add("form--blur8");
        formBLur8.classList.add("form--blur9");
        formBLur9.classList.add("form--blur10");
        formBLur10.classList.add("form--blur11");
        SmokeBlur.classList.add("smoke--blur");
    });
    document.querySelector("#form2").addEventListener("click", (e) =>{
        e.preventDefault();
        const SmokeBlur = document.querySelector(".smokeeff");
        const formList = document.querySelector("#createAccount");
        const formBLur0 = document.querySelector(".form1_1");
        const formBLur1 = document.querySelector(".form2_1");
        const formBLur2 = document.querySelector(".form2_2");
        const formBLur3 = document.querySelector(".form2_3");
        const formBLur4 = document.querySelector(".form2_4");
        const formBLur5 = document.querySelector(".form2_5");
        const formBLur6 = document.querySelector(".form2_6");
        const formBLur7 = document.querySelector(".form2_7");
        const formBLur8 = document.querySelector(".form2_8");
        const formBLur9 = document.querySelector(".form2_9");
        const formBLur10 = document.querySelector(".form2_10");
        formList.classList.remove("form--hidden");
        formBLur0.classList.add("form--blur1");
        formBLur1.classList.add("form--blur2");
        formBLur2.classList.add("form--blur3");
        formBLur3.classList.add("form--blur4");
        formBLur4.classList.add("form--blur5");
        formBLur5.classList.add("form--blur6");
        formBLur6.classList.add("form--blur7");
        formBLur7.classList.add("form--blur8");
        formBLur8.classList.add("form--blur9");
        formBLur9.classList.add("form--blur10");
        formBLur10.classList.add("form--blur11");
        SmokeBlur.classList.add("smoke--blur");
    });
    document.querySelector("#form").addEventListener("click", (e) =>{
        e.preventDefault();
        const formList = document.querySelector("#login");
        const SmokeBlur = document.querySelector(".smokeeff");
        formList.classList.remove("form--hidden");
        SmokeBlur.classList.add("smoke--blur");
    });
    document.querySelector("#form2").addEventListener("click", (e) =>{
        e.preventDefault();
        const formList = document.querySelector("#createAccount");
        const SmokeBlur = document.querySelector(".smokeeff");
        formList.classList.remove("form--hidden");
        SmokeBlur.classList.add("smoke--blur"); 
    });
    document.addEventListener("click", function(event){
        function test(){
        if (event.target.closest("#login")) return
        const formLogin = document.querySelector("#login");
        const formBLur0 = document.querySelector(".form1_1");
        const formBLur1 = document.querySelector(".form2_1");
        const formBLur2 = document.querySelector(".form2_2");
        const formBLur3 = document.querySelector(".form2_3");
        const formBLur4 = document.querySelector(".form2_4");
        const formBLur5 = document.querySelector(".form2_5");
        const formBLur6 = document.querySelector(".form2_6");
        const formBLur7 = document.querySelector(".form2_7");
        const formBLur8 = document.querySelector(".form2_8");
        const formBLur9 = document.querySelector(".form2_9");
        const formBLur10 = document.querySelector(".form2_10");
        formLogin.classList.remove("form--hidden");
        formBLur0.classList.remove("form--blur1");
        formBLur1.classList.remove("form--blur2");
        formBLur2.classList.remove("form--blur3");
        formBLur3.classList.remove("form--blur4");
        formBLur4.classList.remove("form--blur5");
        formBLur5.classList.remove("form--blur6");
        formBLur6.classList.remove("form--blur7");
        formBLur7.classList.remove("form--blur8");
        formBLur8.classList.remove("form--blur9");
        formBLur9.classList.remove("form--blur10");
        formBLur10.classList.remove("form--blur11");
    }
    });
    document.querySelector("#linkCreateAccount").addEventListener("click", (e) =>{
        e.preventDefault();
        const loginForm = document.querySelector("#login");
        const createAccountForm = document.querySelector("#createAccount");
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
        document.querySelector("#linkLogin").addEventListener("click", (e) =>{
            e.preventDefault();
            createAccountForm.classList.add("form--hidden");
            loginForm.classList.remove("form--hidden");
        });
        document.querySelectorAll("form__input").forEach(inputElement =>{
            function setInputError(inputElement, message){
                inputElement.classList.add("form__input--error");
                inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
            }
            inputElement.addEventListener("", (e) =>{
            e.preventDefault();
                if (e.target.id === "#signUpUsername" && e.target.value.length > 0 && e.target.value.length < 10){
                    setInputError(inputElement, "Username must be at least 10 characters in length.")
                }isFinite
            });
        });
    });
});