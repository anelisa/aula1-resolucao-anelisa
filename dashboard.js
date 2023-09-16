function logout() {

    localStorage.removeItem("token");

    window.location.href = "/index.html";

}

window.onload = function() {

    const token = localStorage.getItem("token");

    if (token) {
        console.log("logado com sucesso");
    } else {
        window.location.href = "/index.html";
    }

}

function getRestaurante() {
    const token = localStorage.getItem("token");
    return fetch("http://127.0.0.1:3000/restaurantes", {
        method: "GET",
        headers: {
            "Authorization": "Bearer " + token
        },
    }).then(res => {
        return res.json()
    })
}

function renderRestaurantes() {
    const taxaRestaurante = document.querySelector("#my-table tbody")

    getRestaurante().then(res => {
        taxaRestaurante.innerHTML = res.reduce((acc, restaurante) => {
            return acc +(
                `
                    <tr>
                        <td>${restaurante.taxaEntrega}</td>
                        <td>${restaurante.nome}</td>
                    </tr>
                `
            )
        }, '')
    })
}

renderRestaurantes()