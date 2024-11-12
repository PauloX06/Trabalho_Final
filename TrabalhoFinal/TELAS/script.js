
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

        function salvarFicha() {
            // Obter os valores dos campos do formulário
            const ficha = {
                objetivo: document.getElementById("objetivo").value,
                treinos: document.getElementById("treinos").value,
                sessoes: document.getElementById("sessoes").value,
                inicio: document.getElementById("inicio").value,
                validade: document.getElementById("validade").value,
                treinoA: document.getElementById("treinoA").value,
                treinoB: document.getElementById("treinoB").value,
                professores: document.getElementById("professores").value,
                observacoes: document.getElementById("observacoes").value,
            };

            // Salvar a ficha no localStorage
            localStorage.setItem("ficha", JSON.stringify(ficha));

            // Atualizar a exibição dos dados salvos
            exibirFicha();
            
            // Limpar o formulário
            document.getElementById("fichaForm").reset();
        }

        function exibirFicha() {
            const ficha = JSON.parse(localStorage.getItem("ficha"));
            if (ficha) {
                document.getElementById("fichaDisplay").innerHTML = `
                    <p><strong>Objetivo:</strong> ${ficha.objetivo}</p>
                    <p><strong>Treinos:</strong> ${ficha.treinos}</p>
                    <p><strong>Sessões:</strong> ${ficha.sessoes}</p>
                    <p><strong>Início:</strong> ${ficha.inicio}</p>
                    <p><strong>Validade:</strong> ${ficha.validade}</p>
                    <p><strong>Treino A:</strong> ${ficha.treinoA}</p>
                    <p><strong>Treino B:</strong> ${ficha.treinoB}</p>
                    <p><strong>Professor:</strong> ${ficha.professores}</p>
                    <p><strong>Observações:</strong> ${ficha.observacoes}</p>
                `;
                document.getElementById("dadosSalvos").classList.remove("d-none");
            }
        }

        function editarFicha() {
            const ficha = JSON.parse(localStorage.getItem("ficha"));
            if (ficha) {
                document.getElementById("objetivo").value = ficha.objetivo;
                document.getElementById("treinos").value = ficha.treinos;
                document.getElementById("sessoes").value = ficha.sessoes;
                document.getElementById("inicio").value = ficha.inicio;
                document.getElementById("validade").value = ficha.validade;
                document.getElementById("treinoA").value = ficha.treinoA;
                document.getElementById("treinoB").value = ficha.treinoB;
                document.getElementById("professores").value = ficha.professores;
                document.getElementById("observacoes").value = ficha.observacoes;
                
                // Ocultar a área de exibição
                document.getElementById("dadosSalvos").classList.add("d-none");
            }
        }

        function excluirFicha() {
            // Remover a ficha do localStorage
            localStorage.removeItem("ficha");

            // Limpar a área de exibição
            document.getElementById("fichaDisplay").innerHTML = "";
            document.getElementById("dadosSalvos").classList.add("d-none");
            alert("Ficha excluída com sucesso!");
        }

        function cancelarEdicao() {
            document.getElementById("fichaForm").reset();
        }

        // Exibir a ficha salva ao carregar a página
        window.onload = exibirFicha;
   