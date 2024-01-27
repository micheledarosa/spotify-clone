//BOM DIA | BOA TARDE | BOA NOITE

// Obtém a referência do elemento com o ID "greeting"
const greetingElement = document.getElementById("greeting");

// Obtém a hora atual do sistema
const currentHour = new Date().getHours();

// Define a saudação com base na hora atual
// if (currentHour >= 5 && currentHour < 12) {
//   greetingElement.textContent = "Bom dia";
// } else if (currentHour >= 12 && currentHour < 18) {
//   greetingElement.textContent = "Boa tarde";
// } else {
//   greetingElement.textContent = "Boa noite";
// }

// Forma mais simples
const greetingMessage =
    currentHour >= 5 && currentHour < 12 ?
    "Bom dia ☀️" :
    currentHour >= 12 && currentHour < 18 ?
    "Boa tarde ⛅" :
    "Boa noite 🌙";

greetingElement.textContent = greetingMessage;

// GRID INTELIGENTE
const container = document.querySelector(".offer__list-item");

const observer = new ResizeObserver(() => { //mudanças no tamanho do elemento 
    const containerWidth = container.offsetWidth; //largura total do elemento, incluindo largura do conteúdo, bordas e preenchimento.
    const numColumns = Math.floor(containerWidth / 200); //número de colunas com base na largura do container

    //largura mínima de 200px e máxima de 1fr (uma fração do espaço disponível).
    container.style.gridTemplateColumns = `repeat(${numColumns}, minmax(200px, 1fr))`;

    console.log({
        container
    });
    console.log({
        numColumns
    });
});
//observando a mudança do elemento
observer.observe(container);