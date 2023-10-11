/* Adicionar alguns estilos do fluig */

const addColorPreta = () => {
  const labels = document.querySelectorAll("label");

  labels.forEach((i) => {
    i.classList.add("fs-color-black");
  });
};

addColorPreta();





const addFluigToast = (title, type, timeout) =>{
  FLUIGC.toast({
    title: `${title}`,
   message: '',
    type: `${type}`,
    timeout: `${timeout}`,
    });
  

}









/* Botão de adicionar produto */
$("#addProduto").click(function () {
  addFluigToast('Produto adicionado', 'success' , 'fast')
  $("#produtoCard").clone(true).appendTo("#produtoContainer");
});




/* Deletar produto */
$(".deletarProduto").on("click", function () {
  const produtos = $(".produtoClass");

  if (produtos.length > 1) {
     $(this).closest("#produtoCard").remove();

 

  } else  addFluigToast('Precisa haver no minimo 1 produto', 'warning' , 'fast')
  
});

