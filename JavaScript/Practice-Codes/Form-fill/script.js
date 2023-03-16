const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const alluser = document.getElementById('allData');
const btn = document.getElementById('btn');

const userData = [];

function showUser(userData) {
    alluser.innerHTML = `<h1>User Data</h1>`
    for (user of userData) {
        let div = document.createElement("div");
        let p1 = document.createElement("p1");
        let p2 = document.createElement("p2");
        let p3 = document.createElement("p3");
        let hr = document.createElement('hr');
        let br = document.createElement('br');

        p1.innerHTML = user.name;
        p2.innerHTML = user.email;
        p3.innerHTML = user.phone;

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        div.appendChild(hr);

        alluser.appendChild(div);
        }
}

function validateData(currentUser) {
    for (user of userData) {
        if (user.phone == currentUser.phone) {
            alert("This user is already exist");
            return;
        }
    }

    userData.push(currentUser);
    
    showUser(userData);
    alert('data saved successfully');
}

btn.addEventListener('click', (e) => {
    e.preventDefault();

    let obj = {
        name: name.value,
        email: email.value,
        phone: phone.value,
    }

    validateData(obj);
})