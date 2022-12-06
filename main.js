function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" 
      alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" 
      alt="Bandeira da ${player2}" />
    </li>
  `
}

// VOU COLOCAR EM UM FUNÇÃO A PARTE QUE CRIA O CARTÃO
// ESSA TRETA TODA PRA DEIXAR MAIS DINÂMICO - TOP DMS ESSE TREM
let delay = -0.4 //colocando '-0.4' para que o primeiro começe com '0'
function createCard(date, day, games) {
  delay = delay + 0.4
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <!--Esse 'span' serve p/ ter uma diferenciação
      entre e data e o dia da seman. Pra mexer com CSS-->
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "quinta",
    createGame("switzerland", "07:00", "cameroon") +
      createGame("portugal", "13:00", "ghana") +
      createGame("brazil", "16:00", "serbia")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("southkorea", "10:00", "ghana") +
      createGame("brazil", "13:00", "switzerland") +
      createGame("portugal", "16:00", "uruguay")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("southkorea", "07:00", "portugal") +
      createGame("serbia", "13:00", "switzerland") +
      createGame("brazil", "16:00", "cameroon")
  )
