import React from "react";
import "./UserInput.css";
import axios from "axios";
function UserData(){

    var userNameInput = document.getElementById("userName")  as HTMLInputElement || null;
    var userLastNameInput = document.getElementById("userLastName")  as HTMLInputElement || null;
    var userPhoneNumberInput = document.getElementById("userPhoneNumber")  as HTMLInputElement || null;
    var userAddressInput = document.getElementById("userAddress") as HTMLInputElement || null;
    var userEmailInput = document.getElementById("userEmail")  as HTMLInputElement || null;
    var userCpfInput = document.getElementById("userCpf")  as HTMLInputElement || null;
    var newDiv = document.getElementById("newDiv") as HTMLDivElement;
    var salesPersonUrl = "http://localhost:3001/api/vendedor";
    
    var userDataJson = {

        "name": userNameInput.value.toString(),
        "lastName": userLastNameInput.value.toString(),
        "phoneNumber": userPhoneNumberInput.value.toString(),
        "cpf": userCpfInput.value.toString(),
        "email": userEmailInput.value.toString(),
        "address": userAddressInput.value.toString()
    }

    newDiv.innerHTML = `
    <div>
        Nome: ${userNameInput.value}
    </div>
    <div>
        Sobrenome: ${userLastNameInput.value}
    </div>
    <div>
        Telefone: ${userPhoneNumberInput.value}
    </div>
    <div>
        Endereço: ${userAddressInput.value}
    </div>
    <div>
        Email: ${userEmailInput.value}
    </div>
    <div>
        Cpf: ${userCpfInput.value}
    </div>
    `

    axios.post(salesPersonUrl, userDataJson)
    .then((response) =>{
        newDiv.innerHTML = `${response.data}`
    }
    )

    axios.get(salesPersonUrl,
        {
             headers:{
                "Acess-Control-Allow-Origin":"*",
                "Content-type":"application/json"
            }
    }

        ).then((response) => {
        newDiv.innerHTML = `${response.data}`
    })
}



function UserInput(){
    return(
        <div className="UserInputMain">
            <div className="UserInputBody">
                <label>Nome: </label>
                <input type = "text" id = "userName"/>
            </div>
            <div className="UserInputBody">
                <label>Sobrenome: </label>
                <input type = "text" id = "userLastName"/>
            </div>
            <div className="UserInputBody">
                <label>Número de telefone: </label>
                <input type = "text" id = "userPhoneNumber"/>
            </div>
            <div className="UserInputBody">
                <label>Endereço: </label>
                <input type = "text" id = "userAddress"/>
            </div>
            <div className="UserInputBody">
                <label>Email: </label>
                <input type = "text" id = "userEmail"/>
            </div>
            <div className="UserInputBody">
                <label>CPF: </label>
                <input type = "text" id = "userCpf"/>
            </div>
            <button type = "submit" id="sendBtn" onClick={UserData}>Enviar</button>
            <div id = "newDiv"></div>
        </div>
    );
};

export default UserInput;