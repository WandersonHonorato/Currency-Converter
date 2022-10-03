var moedaDeConversao = ""; 
var valorMoeda = {
  euro: 5.16,  // cotação atual.
  dolar: 5.09,
  libra: 5.95
};

function Converter() {
  var valor = parseInt(document.getElementById("valor").value);
  var taxa = valorMoeda[moedaDeConversao];
  var res = valor / taxa;
  var imagem = document.getElementById("imagem");
  if (moedaDeConversao == "dolar") {
    imagem.style.backgroundImage =
      "url(https://static.mundoeducacao.uol.com.br/mundoeducacao/2022/05/bandeira-estados-unidos.jpg)";
    resultado.innerHTML = ` US$ ${res.toFixed(2)}`;
  }
  if (moedaDeConversao == "euro") {
    imagem.style.backgroundImage =
      "url(https://s5.static.brasilescola.uol.com.br/be/2022/03/bandeira-uniao-europeia.jpg)";
    resultado.innerHTML = ` € ${res.toFixed(2)}`;
  }
  if (moedaDeConversao == "libra") {
    imagem.style.backgroundImage =
      "url(https://miro.medium.com/max/1400/1*Cq55pULfLn558iZiZea9Og.png)";
    resultado.innerHTML = ` £ ${res.toFixed(2)}`;
  }
}

function Zerar() {
  var inputValor = document.getElementById("valor");
  var resultado = document.getElementById("resultado");
  var checkedMoeda = document.getElementById(moedaDeConversao);
  checkedMoeda.checked = false;
  inputValor.value = "";
  resultado.innerHTML = "";
  imagem.style.backgroundImage = "";
}

function definirDolar() {
  moedaDeConversao = "dolar";
}

function definirEuro() {
  moedaDeConversao = "euro";
}

function definirLibra() {
  moedaDeConversao = "libra";
}
