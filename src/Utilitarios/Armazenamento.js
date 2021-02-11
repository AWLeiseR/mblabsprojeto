import AsyncStorage from '@react-native-async-storage/async-storage'

//armazenamento de usuario 
//key : email  value:Object usuario{nome,endereço,email,cpf,senha}
const cadastrarUsuario = async ({email, usuario}) =>{
    try {
        await AsyncStorage.setItem('&'+email, usuario)
      } catch (e) {
        // saving error
      }
}

const usuarioExistente = async (email)=>{
    try{
        const usuario = await AsyncStorage.getItem(email)
        if(usuario === null )
            return null
        else
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

const logarUsuario = async (usuario) =>{
   try{
    await AsyncStorage.setItem('*usuarioLogado*', usuario)
   } catch(e){

   }
}

const logoutUsuario = async () =>{
    try{
        
        await AsyncStorage.removeItem('*usuarioLogado*')
        
    }catch(e){

    }

}

const autenticarUsuario = async ({email,senha}) =>{
    pegarUsuario('&'+email)
    .then(response => {
        if(senha === response.senha){
            logarUsuario(email).then(response=> {return 1})
        }else{
            return null
        }
    }).catch()
}

//armazenamento auxiliar
//key : CPF value:email



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

const eventoExistente = async (nome)=>{
    try{
        const evento = await AsyncStorage.getItem('$' + nome)
        return 1
    }catch(e){
        return 0
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



//key: local value: object evento{nomes}



export {
    cadastrarUsuario,
    usuarioExistente,
    autenticarUsuario,
    logarUsuario,
    logoutUsuario,
    salvarEvento,
    eventoExistente,
    pegarEvento,
    pegarTodosEventos,
    deletarEvento
}