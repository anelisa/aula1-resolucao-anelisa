function login() {

    console.log("login!!!!");

    const email = document.querySelector("#email").value;
    const pswd = document.querySelector("#password").value;

    const hashedPswd = sha1(pswd);
    console.log("hashedPswd", hashedPswd)

    const body = {
        email,
        password: hashedPswd
    };

    console.log(body);

    fetch("http://localhost:8081/oauth/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    }).then(res => res.json())
      .then(res => {
        console.log(res);
        if (res && res.token) {
            // ruim - salvar token no localstorage / cookie
            // ideal - http only cookie
            // alternativa - ok - salvar no javascript... global - defeito - reload página - perde o token
            localStorage.setItem("token", res.token);
            console.log(res.token);
            console.log(localStorage.getItem("token"));
            window.location.href = "/dashboard.html";
        }
      });

}

window.onload = function() {

    console.log("terminou de carregar a página");

    document.querySelector("#email").focus();

}