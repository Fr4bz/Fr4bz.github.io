const snowContainer = document.getElementById('snow-container');
let snowHeight = 0;

function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  
  // Posizionamento casuale lungo l'asse X
  snowflake.style.left = Math.random() * 100 + 'vw';
  
  snowContainer.appendChild(snowflake);

  // Rimuovi fiocco di neve dopo che è caduto
  setTimeout(() => {
    snowflake.remove();
  }, 3000);
  
  // Incrementa l'altezza della neve
  snowHeight += 5;
  if (snowHeight <= 50) {  // max altezza 50vh
    snowContainer.style.height = snowHeight + 'vh';
  }
}

setInterval(createSnowflake, 500); // Genera un fiocco ogni 0.5 secondi
