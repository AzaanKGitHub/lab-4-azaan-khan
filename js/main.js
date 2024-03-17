(function () {
    let newUsersList = document.querySelector('.new-users-list');

    // READ THE PDF BEFORE STARTING
    // Step 1-5 is read the pdf.


    // Add your code here
    // Task 1 - The Form and it's values
    let form = document.querySelector('.new-user-form');

    form.addEventListener("submit", onFormSubmit);

    function onFormSubmit(e){
        e.preventDefault(); // pevents refresh to form defaults

        let usernameElement = e.target.elements.username;
        let cityElement = e.target.elements.city;
        let provinceElement = e.target.elements.province;
        let username = usernameElement.value;
        let city = cityElement.value;
        let province = provinceElement.value;

        console.log(usernameElement);
        console.log(cityElement);
        console.log(provinceElement);

        // Task 2
        let isFormValid = true;

        // validating name 
        if (!hasWhiteSpace(username) && isValueNotEmpty(username)) {
            usernameElement.classList.remove('is-invalid');
        } 
        else 
        {
            isFormValid = false;
            usernameElement.classList.add('is-invalid');
        }
    
        // validating city
        if (isValueNotEmpty(city)) {
            cityElement.classList.remove('is-invalid');
        } 
        else 
        {
            isFormValid = false;
            cityElement.classList.add('is-invalid');
        }
    
        // validating province
        if (isValueNotEmpty(province)) {
            provinceElement.classList.remove('is-invalid');
        } 
        else 
        {
            isFormValid = false;
            provinceElement.classList.add('is-invalid');
        }
    
        // adds user if form is valid 
        if (isFormValid) {
            addUser(username, city, province);
            // Reset form fields 
            usernameElement.value = '';
            cityElement.value = '';
            provinceElement.value = ''; 
        }

    }


    // the isValueNotEmpty function: 
    // returns true if value not empty
    // returns false if the value is empty
    function isValueNotEmpty(value) {
        if (value !== '') {
            return true;
        }
        return false;
    }

    // the hasWhiteSpace function
    // returns true if s has whitespace
    // returns false if s does not have whitespace
    function hasWhiteSpace(s) {
        return (/\s/).test(s);
    }

    // adds user to the page.
    function addUser(username, city, province) {
        let newUser = `<li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">${username}</div>
                ${city}, ${province}
            </div>
            </li>`;
        newUsersList.innerHTML = newUsersList.innerHTML + newUser;
    }
})();
