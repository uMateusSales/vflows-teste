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

/* Botão de adicionar produto */
$("#addProduto").click(function () {
  const produtos = $(".produtoClass");

  addFluigToast("Produto adicionado", "success", "fast");
  $("#produtoCard").clone(true).appendTo("#produtoContainer");
});

/* Deletar produto */
$(".deletarProduto").on("click", function () {
  const produtos = $(".produtoClass");

  if (produtos.length > 1) {
    $(this).closest("#produtoCard").remove();
  } else addFluigToast("Precisa haver no minimo 1 produto", "warning", "fast");
});

$("#addAnexo").click(function () {
  addFluigToast("Documento adicionado", "success", "fast");
  $("#documentoCard").clone(true).appendTo("#anexoContainer");
});

$(".btnDelDocumento").on("click", function () {
  const documentos = $(".documentoClass");

  if (documentos.length > 1) {
    $(this).closest(".documentoClass").remove();
  } else addFluigToast("Precisa haver no minimo 1 documento", "warning", "fast");
});
const form = document.forms[0];
console.log(form);
