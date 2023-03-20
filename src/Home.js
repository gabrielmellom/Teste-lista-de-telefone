
import foto from '../src/aberto.jpg';

import './sHome.css';

function Agenda (){
  
    const handleClick = () => {
        const name = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const nasc = document.getElementById("nascimento").value;
        const cpf = document.getElementById("cpf").value;
        const tele = document.getElementById("telefone").value;
        // Verifica se todos os campos estão vazios
  if (!name && !email && !nasc && !cpf && !tele) {
    alert("Por favor, preencha todos os campos!");
    return;
  }
        // Objetos com as informações do usuário
        const newUser = {
          nome: name,
          email,
          nascimento: nasc,
          cpf,
          telefone: tele,
        };
      
        // Array com todos os usuários cadastrados
        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
      
        // Mostra mensagem de alerta informando que o usuário foi cadastrado com sucesso
        alert("Usuário cadastrado com sucesso!");
      document.getElementById("nome").value = "";
document.getElementById("email").value = "";
document.getElementById("nascimento").value = "";
document.getElementById("cpf").value = "";
document.getElementById("telefone").value = "";
      };
    
      const mostrarCadastro = () => {
        const body = document.querySelector("body");
        const divHome = document.createElement("div")
        divHome.className="divHomeResult"
        // Array com todos os usuários cadastrados
        const users = JSON.parse(localStorage.getItem("users")) || [];
      
        // Remove todos os elementos com a classe "user"
        const userDivs = document.querySelectorAll(".user");
        userDivs.forEach((userDiv) => userDiv.remove());
      
        // Cria um novo elemento "div" para cada usuário cadastrado
       
        const updateUser = (index, newUser) => {
            // Array com todos os usuários cadastrados
            let users = JSON.parse(localStorage.getItem("users")) || [];
            users[index] = newUser;
            localStorage.setItem("users", JSON.stringify(users));
          };
          
          users.forEach((user, index) => {
            const div = document.createElement("div");
            div.className = "user";
            div.innerHTML = `
              <h3>Usuário ${index + 1}</h3>
              <p>Nome: ${user.nome}</p>
              <button class="edit-button" data-index="${index}">Editar</button>
            `;
            divHome.append(div)
            body.append(divHome);
          
            // Adiciona um event listener ao botão "Editar"
            const editButton = div.querySelector(".edit-button");
            editButton.addEventListener("click", () => {

                
              const form = document.createElement("form");
              form.className = "edit-form";
              form.innerHTML = `
                <label>
                  Nome<br>
                  <input id="edit-nome" type="Text" value="${user.nome}">
                </label>
                <label>
                  E-mail<br>
                  <input id="edit-email" type="email" value="${user.email}">
                </label>
                <label>
                  Nascimento<br>
                  <input id="edit-nascimento" class="inputDate" type="date" value="${user.nascimento}">
                </label>
                <label>
                  Cpf<br>
                  <input id="edit-cpf" type="Number" value="${user.cpf}">
                </label>
                <label>
                  Telefone<br>
                  <input id="edit-telefone" type="Number" value="${user.telefone}">
                </label>
                <button type="submit">Atualizar</button>
              `;
              div.appendChild(form);
          
              // Adiciona um event listener ao botão "Atualizar"
              const updateButton = form.querySelector("button[type='submit']");
              updateButton.addEventListener("click", (event) => {
                event.preventDefault();
                const newUser = {
                  nome: document.getElementById("edit-nome").value,
                  email: document.getElementById("edit-email").value,
                  nascimento: document.getElementById("edit-nascimento").value,
                  cpf: document.getElementById("edit-cpf").value,
                  telefone: document.getElementById("edit-telefone").value,
                };
                updateUser(index, newUser);
                mostrarCadastro();
              });
            });
          });
      };

    return(
        <>
         <img className='img' src={foto} />
         <div className='DivHome'>
            <h1 className='h1Home'>Cadaste um novo usuario na agenda</h1>
            <label className='laberHome'>
                Nome<br></br>
                <input id='nome' type='Text'></input> <br></br>
                E-mail<br></br>
                <input id='email' type={'email'}></input><br></br>
                Nascimento<br></br>
                <input id='nascimento' className='inputDate' type={'date'}></input><br></br>
                Cpf<br></br>
                <input id='cpf' type={'Number'}></input><br></br>
                Telefone<br></br>
                <input id='telefone' type={"Number"}></input>
            </label>
            <button id='btnclick' className='btn' onClick={handleClick}>Cadastrar</button>
            <button id='btnrender' className='btn' onClick={mostrarCadastro}>Mostrar cadastro</button>
        <div>
           
        </div>
        </div>
        </>
    )
}

export default Agenda;