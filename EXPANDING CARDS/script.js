const panels = document.querySelectorAll(".panel");
// querySelectorAll pega todos os elementos com classe panel e deixa em um array

// panels.forEach((panel) => {
//   // forEach é usado para percorrer o array executando uma função sobre cada item.
//   panel.addEventListener("click", () => {
//     // addEventListener é usado para executar uma função dependendo de um evento.
//     console.log("cliquei", panel);
//   });
// });
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})
// a linha 13 é referente a função da linha 21 a linha 25, que foi criada para remover a expanção de cada card
// quando acionado o carde seguinte.
// na linha 14 foi adicionado a classe active no card clicado para expandir.

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
