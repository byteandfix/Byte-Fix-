window.addEventListener("load", function() {
    // Mostra o conteúdo principal após 3 segundos
    setTimeout(function() {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("main-content").classList.remove("hidden");
    }, 3000);
});
