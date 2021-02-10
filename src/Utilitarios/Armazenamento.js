import AsyncStorage from '@react-native-async-storage/async-storage'

//armazenamento de usuario 
//key : email  value:Object usuario{nome,endereço,email,cpf,senha}
const cadastrarUsuario = async ({email, usuario}) =>{
    try {
        await AsyncStorage.setItem(email, usuario)
      } catch (e) {
        // saving error
      }
}

const usuarioExistente = async (email)=>{
    try{
        const usuario = await AsyncStorage.getItem(email)
        return 1
    }catch(e){
        return 0
    }
}

const pegarUsuario = async (email) =>{
    try {
        const jsonValue = await AsyncStorage.getItem(email)
        
        return(jsonValue != null ? JSON.parse(jsonValue) : null)
        
        
    } catch(e) {
        // error reading value
    }
}

const atualizarUsuario = (chave,usuario) =>{
   
}

const deletarUsuario = () =>{

}

//armazenamento auxiliar
//key : CPF value:email

const salvarUsuarioCPF = (cpf,usuario) =>{
    
}

const pegarUsuarioCPF = () =>{

}

const atualizarUsuarioCPF = () =>{

}

const deletarUsuarioCPF = () =>{

}

//armazenamento eventos
//key: nome value: object evento{nome,local,data,valor ingresso,qtd ingresso}

const salvarEvento = async (evento) =>{
    try {
      
        const jsonValue = JSON.stringify(evento)
        await AsyncStorage.setItem('$'+evento.nome, jsonValue)
      } catch (e) {
        // saving error
      }
}

const pegarEvento = async (nome) =>{
    try {
        const jsonValue = await AsyncStorage.getItem(nome)
        
        return(jsonValue != null ? JSON.parse(jsonValue) : null)
        
        
      } catch(e) {
        // error reading value
      }
}

const pegarTodosEventos = async () =>{
  try{
      const chaves = await AsyncStorage.getAllKeys()
      let aux = chaves.filter(value => value.indexOf('$'))
      console.log(chaves)
      console.log(aux)
  }catch(e){

  }
}

const atualizarEvento = () =>{

}

const deletarEvento = async (chave) =>{
    try{
        let chaves = await AsyncStorage.getAllKeys()
        console.log(chaves)
        await AsyncStorage.removeItem(chave)
        chaves = await AsyncStorage.getAllKeys()
        console.log(chaves)
    }catch(e){

    }

}
//armazenamento aux
//key: data value: object evento{nomes}

const salvarEventoData = () =>{

}

const pegarEventoData = () =>{

}

const atualizarEventoData = () =>{

}

const deletarEventoData = () =>{

}
//key: local value: object evento{nomes}

const salvarEventoLocal = () =>{

}

const pegarEventoLocal = () =>{

}

const atualizarEventoLocal = () =>{

}

const deletarEventoLocal = () =>{

}

export {
    cadastrarUsuario,
    usuarioExistente,
    salvarEvento,
    pegarEvento,
    pegarTodosEventos,
    deletarEvento
}