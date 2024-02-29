// Definição da classe Funcionario
class Funcionario {
    constructor(nome, idade, cargo) {
      this.nome = nome;
      this.idade = idade;
      this.cargo = cargo;
    }
  
    seApresentar() {
      return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`;
    }
  
    trabalhar() {
      return `${this.nome} está trabalhando.`;
    }
  }
  
  // Definição da classe Gerente, que herda de Funcionario
  class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
      super(nome, idade, cargo);
      this.departamento = departamento;
    }
  
    gerenciar() {
      return `${this.nome} está gerenciando o departamento de ${this.departamento}.`;
    }
  }
  
  // Definição da classe Desenvolvedor, que herda de Funcionario
  class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
      super(nome, idade, cargo);
      this.linguagem = linguagem;
    }
  
    programar() {
      return `${this.nome} está programando em ${this.linguagem}.`;
    }
  }
  
  // Função para exibir erro na página
  function exibirErro(mensagem) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<p style="color: red;">Erro: ${mensagem}</p>`;
  }
  
  // Função para lidar com o envio do formulário
  document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const cargo = document.getElementById('cargo').value;
    const departamento = document.getElementById('departamento').value;
    const linguagem = document.getElementById('linguagem').value;
  
    try {
      if (!nome || !idade || !cargo) {
        throw new Error('Por favor, preencha todos os campos obrigatórios.');
      }
  
      let funcionario;
  
      if (cargo.toLowerCase() === 'gerente') {
        if (!departamento) {
          throw new Error('Por favor, informe o departamento para o gerente.');
        }
        funcionario = new Gerente(nome, idade, cargo, departamento);
      } else if (cargo.toLowerCase() === 'desenvolvedor') {
        if (!linguagem) {
          throw new Error('Por favor, informe a linguagem de programação para o desenvolvedor.');
        }
        funcionario = new Desenvolvedor(nome, idade, cargo, linguagem);
      } else {
        throw new Error('Cargo inválido.');
      }
  
      const resultadoDiv = document.getElementById('resultado');
      resultadoDiv.innerHTML = `
        <p>${funcionario.seApresentar()}</p>
        <p>${funcionario.trabalhar()}</p>
        <p>${funcionario instanceof Gerente ? funcionario.gerenciar() : funcionario.programar()}</p>
      `;
    } catch (error) {
      exibirErro(error.message);
    }
  });
  