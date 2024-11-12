
{
    let contador = 1;

    function salvarProduto() {
        const nomeProduto = document.getElementById("nomeProduto").value;
        const descricao = document.getElementById("descricao").value;
        const codigo = document.getElementById("codigo").value;
        const precoCompra = document.getElementById("precoCompra").value;
        const precoVenda = document.getElementById("precoVenda").value;
        const quantidade = document.getElementById("quantidade").value;
        const fornecedor = document.getElementById("fornecedor").value;
    
        const tabela = document.getElementById("produtosTabela").getElementsByTagName("tbody")[0];
        const novaLinha = tabela.insertRow();
    
        novaLinha.innerHTML = `
            <td>${contador++}</td>
            <td>${nomeProduto}</td>
            <td>${descricao}</td>
            <td>${codigo}</td>
            <td>${precoCompra}</td>
            <td>${precoVenda}</td>
            <td>${quantidade}</td>
            <td>${fornecedor}</td>
            <td>
                <button class="btn btn-primary" onclick="editarProduto(this)">Editar</button>
                <button class="btn btn-danger" onclick="excluirProduto(this)">Excluir</button>
            </td>
        `;
        document.getElementById("produtoForm").reset();
    }
    
    function editarProduto(button) {
        const linha = button.parentElement.parentElement;
        document.getElementById("nomeProduto").value = linha.cells[1].textContent;
        document.getElementById("descricao").value = linha.cells[2].textContent;
        document.getElementById("codigo").value = linha.cells[3].textContent;
        document.getElementById("precoCompra").value = linha.cells[4].textContent;
        document.getElementById("precoVenda").value = linha.cells[5].textContent;
        document.getElementById("quantidade").value = linha.cells[6].textContent;
        document.getElementById("fornecedor").value = linha.cells[7].textContent;
        linha.remove();
    }
    
    function excluirProduto(button) {
        const linha = button.parentElement.parentElement;
        linha.remove();
    }
    
}

        
    
{
    let contador = 1;


    function salvarEquipamento() {
        const nomeEquipamento = document.getElementById("nomeEquipamento").value;
        const descricao = document.getElementById("descricao").value;
        const codigo = document.getElementById("codigo").value;
        const quantidade = document.getElementById("quantidade").value;
        const valor = document.getElementById("valor").value;
        const fornecedor = document.getElementById("fornecedor").value;

        const tabela = document.getElementById("equipamentosTabela").getElementsByTagName("tbody")[0];
        const novaLinha = tabela.insertRow();

        novaLinha.innerHTML = `
            <td>${contador++}</td>
            <td>${nomeEquipamento}</td>
            <td>${descricao}</td>
            <td>${codigo}</td>
            <td>${quantidade}</td>
            <td>${valor}</td>
            <td>${fornecedor}</td> 
            <td>
                <button class="btn btn-primary" onclick="editarProduto(this)">Editar</button>
                <button class="btn btn-danger" onclick="excluirProduto(this)">Excluir</button>
            </td>
        `;
        
        document.getElementById("equipamentoForm").reset();
    }

    function editarEquipamento(button) {
        const linha = button.parentElement.parentElement;
        document.getElementById("nomeEquipamento").value = linha.cells[1].textContent;
        document.getElementById("descricao").value = linha.cells[2].textContent;
        document.getElementById("codigo").value = linha.cells[3].textContent;
        document.getElementById("quantidade").value = parseInt(linha.cells[4].textContent);
        document.getElementById("valor").value = parseFloat(linha.cells[5].textContent);
        document.getElementById("fornecedor").value = linha.cells[6].textContent;  
        linha.remove();
    }

    function excluirEquipamento(button) {
        const linha = button.parentElement.parentElement;
        linha.remove();
    }
}

{
    let contador = 1; 

    function salvarCliente() {
        const nomeCliente = document.getElementById("nomeCliente").value;
        const cpf = document.getElementById("cpf").value;
        const rg = document.getElementById("rg").value;
        const matricula = document.getElementById("matricula").value;
        const email = document.getElementById("email").value;
        const telefone = document.getElementById("telefone").value;
        
        
        const tabela = document.getElementById("clientesTabela").getElementsByTagName("tbody")[0];
        const novaLinha = tabela.insertRow();

        novaLinha.innerHTML = `
            <td>${contador++}</td>
            <td>${nomeCliente}</td>
            <td>${cpf}</td>
            <td>${rg}</td>
            <td>${matricula}</td>
            <td>${email}</td>
            <td>${telefone}</td>
            <td>
                <button class="btn btn-primary" onclick="editarCliente(this)">Editar</button>
                <button class="btn btn-danger" onclick="excluirCliente(this)">Excluir</button>
            </td>
        `;

        
        document.getElementById("clienteForm").reset();
    }

    
    function editarCliente(button) {
        const linha = button.parentElement.parentElement;
        document.getElementById("nomeCliente").value = linha.cells[1].textContent;
        document.getElementById("cpf").value = linha.cells[2].textContent;
        document.getElementById("rg").value = linha.cells[3].textContent;
        document.getElementById("matricula").value = linha.cells[4].textContent;
        document.getElementById("email").value = linha.cells[5].textContent;
        document.getElementById("telefone").value = linha.cells[6].textContent;
        

        
        linha.remove();
    }

   
    function excluirCliente(button) {
        const linha = button.parentElement.parentElement;
        linha.remove();
    }

}

{
    let contador = 1; 


    function salvarFuncionario() {
        const nomeFuncionario = document.getElementById("nomeFuncionario").value;
        const cpf = document.getElementById("cpf").value;
        const funcao = document.getElementById("funcao").value;
        const email = document.getElementById("email").value;
        const telefone = document.getElementById("telefone").value;
        
        const tabela = document.getElementById("funcionariosTabela").getElementsByTagName("tbody")[0];
        const novaLinha = tabela.insertRow();

        novaLinha.innerHTML = `
            <td>${contador++}</td>
            <td>${nomeFuncionario}</td>
            <td>${cpf}</td>
            <td>${funcao}</td>
            <td>${email}</td>
            <td>${telefone}</td>
            <td>
                <button class="btn btn-primary" onclick="editarFuncionario(this)">Editar</button>
                <button class="btn btn-danger" onclick="excluirFuncionario(this)">Excluir</button>
            </td>
        `;

        
        document.querySelector(".formFuncionario").reset();
    }

    
    function editarFuncionario(button) {
        const linha = button.parentElement.parentElement;
        document.getElementById("nomeFuncionario").value = linha.cells[1].textContent;
        document.getElementById("cpf").value = linha.cells[2].textContent;
        document.getElementById("funcao").value = linha.cells[3].textContent;
        document.getElementById("email").value = linha.cells[4].textContent;
        document.getElementById("telefone").value = linha.cells[5].textContent;

        
        linha.remove();
    }

    
    function excluirFuncionario(button) {
        const linha = button.parentElement.parentElement;
        linha.remove();
    }

}

{
    let contadorFornecedor = 1;

    function salvarFornecedor() {
        const cnpj = document.getElementById("cnpj").value;
        const razaoSocial = document.getElementById("razaoSocial").value;
        const nomeFantasia = document.getElementById("nomeFantasia").value;
        const atividadeEconomica = document.getElementById("atividadeEconomica").value;
        const situacao = document.getElementById("situacao").value;

        const tabela = document.getElementById("fornecedoresTabela").getElementsByTagName("tbody")[0];

        const novaLinha = tabela.insertRow();

        novaLinha.innerHTML = `
            <td>${contadorFornecedor++}</td>
            <td>${cnpj}</td>
            <td>${razaoSocial}</td>
            <td>${nomeFantasia}</td>
            <td>${atividadeEconomica}</td>
            <td>${situacao === "1" ? "Ativa" : "Inativa"}</td>
            <td>
                <button class="btn btn-primary" onclick="editarFornecedor(this)">Editar</button>
                <button class="btn btn-danger" onclick="excluirFornecedor(this)">Excluir</button>
            </td>
        `;

        document.getElementById("fornecedorForm").reset();
    }

    function editarFornecedor(button) {
        const linha = button.parentElement.parentElement;

        document.getElementById("cnpj").value = linha.cells[1].textContent;
        document.getElementById("razaoSocial").value = linha.cells[2].textContent;
        document.getElementById("nomeFantasia").value = linha.cells[3].textContent;
        document.getElementById("atividadeEconomica").value = linha.cells[4].textContent;
        document.getElementById("situacao").value = linha.cells[5].textContent === "Ativa" ? "1" : "2";

        linha.remove(); // Remover a linha após editar
    }

    function excluirFornecedor(button) {
        const linha = button.parentElement.parentElement;
        linha.remove();
    }

}
