let loginForm = document.querySelector(".my-form");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    console.log('tombol login di klik')
    console.log('Email:', email.value);
    console.log('Password:', password.value);

    if (email.value == "vickyandryanputra@gmail.com" && password.value == "021y7periuk") {
        alert('anda berhasil login');
    } else {
        alert('password salah')
    }
    // process and send to API 
});