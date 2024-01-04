const button = document.getElementById("button");
const message = document.getElementById("message");
const submessage = document.getElementById("submessage");

button.addEventListener("click", () => {
  message.textContent = "Feliz Aniversário!";
  message.style.color = "#4CAF50";

  submessage.textContent = "Aaaaa, mais um aninho se passou e cá estamos! Só que agora temos uma grande mudança, ou nem tanto, mas sim, uma grande etapa concluída, já que é fisioterapeuta. 'carinha implorando' (faz massagem em mim, faz). Sei que muitas etapas ainda estão por vir, e torço para que todas você consiga realizar com sucesso. Ainda mais, porque sei que não existe tempestade, nem furacão que possa te parar, acho que só te impulsionariam kkkkk. Ao olhar para trás, lembro-me de tantos momentos incríveis que compartilhamos, desde risadas até desafios superados juntos. Cresça, cresça e cresça sempre, floresça, e tenha certeza de que tudo vai dar certo, pois força de vontade e coragem é o que não te faltam. Sua jornada é inspiradora, assim como a amizade que construímos. Que venham muitos e muitos dias como esse. 1 4 3 s2";
  submessage.style.color = "#333";

  button.style.display = "none";

  setInterval(() => {
    const colors = [
      "#4CAF50",
      "#007BFF",
      "#17A2B8",
      "#6610F2",
      "#FFC107",
      "#DC3545"
    ];

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    message.style.color = randomColor;
  }, 1000);
});