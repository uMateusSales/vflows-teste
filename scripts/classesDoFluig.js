
console.clear(); /* alguns erros de cors do fluig */



/* Adicionar alguns estilos do fluig */
const addColorPreta = () => {
  const labels = document.querySelectorAll("label");

  labels.forEach((i) => {
    i.classList.add("fs-color-black");
  });
};

addColorPreta();

const addFluigToast = (title, type, timeout) => {
  FLUIGC.toast({
    title: `${title}`,
    message: "",
    type: `${type}`,
    timeout: `${timeout}`,
  });
};

/* arrays globais */

const formValues = {
  anexos: [],
};



$("#addProduto").click(() => {
  const produtos = $(".produtoClass");

  addFluigToast("Produto adicionado", "success", "fast");
  $("#produtoCard").clone(true).appendTo("#produtoContainer");
});


$(".deletarProduto").on("click", function () {
  const produtos = $(".produtoClass");

  if (produtos.length > 1) {
    $(this).closest("#produtoCard").remove();
  } else addFluigToast("Precisa haver no minimo 1 produto", "warning", "fast");
});




$("#addAnexo").click(() => {
  $("#documentoCard").clone(true).appendTo("#anexoContainer");
});

$(".btnDelDocumento").on("click", function () {
  const documentos = Array.from(document.querySelectorAll(".documentoClass"));

  const documentosAnexados = documentos.filter((i) =>
    i.classList.contains("fs-display-flex")
  );
  


  if (documentosAnexados.length > 1) {

    $(this).closest(".documentoClass").remove();
  } else addFluigToast("Minimo de 1 documento , adcione outro e tente novamente", "warning", "slow");
});






$(".produtoInputs").each(function () {
  const valorUnitario = $(this).find("input[name='valorUnitario']");
  const qtdeEstoque = $(this).find("input[name='qtdeEstoque']");

  

  const valorTotal = $(this).find("input[name='valorTotal']");

  valorUnitario.change(function (e) {
    e.preventDefault();
    valorTotal.val(valorUnitario.val() * qtdeEstoque.val());
  });

  qtdeEstoque.change(function (e) {
    e.preventDefault();
    valorTotal.val(qtdeEstoque.val() * valorUnitario.val());
  });








});

const downloadBtn = document.getElementById("downloadBtn");

const checkLinks = () => {
  const links = document.querySelectorAll("a");

  links.forEach((i) => {
    const cardProximo = i.closest(".documentoClass");
    if (i.href === "") {
      cardProximo.classList.remove("fs-display-flex");
      cardProximo.classList.add("displayNone");
    } else cardProximo.classList.add("fs-display-flex");
  });
};
checkLinks();

const inputAnexo = document.getElementById("addAnexo");

inputAnexo.addEventListener("change", (event) => {
  const handleSessionStorage = (arquivo) => {
    const success = (blob) => {
      const addAnexosToArray = () => {
        filesArray.map((i) => formValues.anexos.push([i.name, blob]));
      };

      addAnexosToArray();

      FLUIGC.sessionStorage.setItem(`${arquivo.name}`, blob);
      addFluigToast("Documento salvo com sucesso", "success", "fast");
    };

    const fileReader = new FileReader();
    fileReader.onload = (event) => {
      success(event.target.result);
    };
    fileReader.readAsDataURL(arquivo);
  };

  const filesArray = Array.from(inputAnexo.files);

  const pdf = inputAnexo.files[0];

  const url = URL.createObjectURL(pdf);
  downloadBtn.download = pdf.name;
  downloadBtn.href = url;
  checkLinks();

  handleSessionStorage(pdf);
});

const form = $("#fornecedorForm");

form.on("submit", function (event) {
  event.preventDefault();

  const formValuesDoSubmit = {
    razaoSocial: $("#razaoSocial").val(),
    nomeFantasia: $("#nomeFantasia").val(),
    cnpj: $("#cnpj").val(),
    isnscricaoEstadual: $("#isnscricaoEstadual").val(),
    inscricaoMunicipal: $("#inscricaoMunicipal").val(),
    nomeContato: $("#nomeContato").val(),
    telefoneContato: $("#telefoneContato").val(),
    emailContato: $("#emailContato").val(),
    produtos: [
      {
        descricaoProduto: $("#descricaoProduto").val(),
        unidadeMedida: $("#unidadeMedida").val(),
        qtdeEstoque: $("#qtdeEstoque").val(),
        valorUnitario: $("#valorUnitario").val(),
        valorTotal: $("#valorTotal").val(),
      },
    ],
  };

  const objetoFinal = { ...formValuesDoSubmit, ...formValues };


  const myModal = FLUIGC.modal({
    title: 'Cadastro enviado com sucesso!',
    content: '<h1>O JSON pode ser encontrado no console</h1>',
    id: 'fluig-modal',
    actions: [{
        'label': 'Fechar',
        'autoClose': true
    }]
}, function(err, data) {
    if(err) {
        // do error handling
    } else {
        // do something with data
    }
});











  const json = JSON.stringify(objetoFinal);

  console.log(json);
  FLUIGC.sessionStorage.clear();
});
