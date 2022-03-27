const signup = document.querySelector(".signup");
        const termCond = document.querySelector("#accept");
        const password = document.querySelector("#password");
        const confirmPassword = document.querySelector("#confirmPassword");
        const pwd_format = document.querySelector(".pwd-format");
        // lets define a password format
        // The password should contain around 8-15 alhpanumeric character

        const passwordPattern = /^[a-zA-Z0-9]{8,15}$/

        password.addEventListener('focusin', () => {
            pwd_format.style.display = 'block';

            // now lets check the password entered by the user
            password.addEventListener('keyup', () => {
                if (passwordPattern.test(password.value)) {
                    password.style.borderColor = 'green' // if password pattern matches the border of password input will ne green
                    pwd_format.style.color = 'green'
                } else {
                    password.style.borderColor = 'red'
                    pwd_format.style.color = 'red'
                }
            })
        })

        password.addEventListener('focusout', () => {
            pwd_format.style.display = 'none';
        })

        confirmPassword.addEventListener('focusin', () => {
            pwd_format.style.display = 'block';
            confirmPassword.addEventListener('keyup', () => {
                if (passwordPattern.test(confirmPassword.value) && password.value === confirmPassword.value) {
                    confirmPassword.style.borderColor = 'green' // if password pattern matches the border of password input will ne green
                    pwd_format.style.color = 'green'
                } else {
                    confirmPassword.style.borderColor = 'red'
                    pwd_format.style.color = 'red'
                }
            })
        })

        confirmPassword.addEventListener('focusout', () => {
            pwd_format.style.display = 'none';
        })

        termCond.addEventListener('change', () => {
            if (termCond.checked === true) {
                signup.disabled = false;
            } else if (termCond.checked === false) {
                signup.disabled = true;
            }
        })