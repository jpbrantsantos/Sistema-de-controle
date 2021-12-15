function salvarDados(tipoDados, dados) {
    dados = JSON.stringify(dados)
    localStorage.setItem(tipoDados, dados);
}

function lerDados(tipoDados) {
    dados = null
    if (localStorage.getItem(tipoDados)) {
        dados = localStorage.getItem(tipoDados)
        dados = JSON.parse(dados)
    }
    return dados
}
function exibirprodutos(){
    var area = document.getElementById("produtos")

    let produtos = lerDados("produtos")
    if(produtos == null){
        produtos=[ ]
       }
       
    html = ""
    produtos.forEach(produto=>{
       html+=`
       <p>Código: ${produto.codigo} || Descrição: ${produto.descricao} || Quantidade: ${produto.quantidade} || 
       Preço de custo: ${produto.precoCusto} || Preço de venda: ${produto.precoVenda}</p> <hr>
       ` 
    
    })
    area.innerHTML = html      
}   
   
function cadastrar(){
    var produtos = lerDados("produtos");
    if(produtos == null){
        produtos=[ ]
       }
    
    var id = lerDados("id")
    
     
    
    var descricao= document.getElementById("Descrição").value
    var quantidade = document.getElementById("Quantidade").value
    var preco1 = document.getElementById("preçocusto").value
    var preco2 = document.getElementById("preçovenda").value
    
    if(descricao==""|| quantidade==""||preco1==""||preco2==""){alert("Por favor preencha todos os campos.")}
   
    if(id == null){
        id = 1
    }else{
        id += 1
    }

    var novoProduto ={ }
   novoProduto.descricao = descricao

   novoProduto.quantidade=quantidade

   novoProduto.precoCusto=preco1

   novoProduto.precoVenda=preco2

   novoProduto.codigo=id

    salvarDados("id", id)

    
    produtos.push(novoProduto)
    salvarDados("produtos", produtos)
    window.location.href = "estoque.html"
    
    

}
 
    

