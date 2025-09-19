// home.js
function buscarProdutosDestaque() {
  xhrPromise("GET", "https://jsonplaceholder.typicode.com/posts?_limit=5")
    .then((produtos) => {
      const lista = document.getElementById("lista-produtos");
      lista.innerHTML = "";
      produtos.forEach(p => {
        const li = document.createElement("li");
        li.textContent = p.title;
        lista.appendChild(li);
      });
    })
    .catch(err => {
      console.error("Erro ao buscar produtos:", err);
      alert("Erro ao carregar produtos.");
    });
}
