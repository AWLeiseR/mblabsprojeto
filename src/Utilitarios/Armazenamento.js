import AsyncStorage from '@react-native-async-storage/async-storage'



const salvarMemoria = async (...params) => {
  
    try{
        const jsonValue = JSON.stringify(params[0])
        console.log(await AsyncStorage.setItem('*usuarioLogado*',jsonValue))
    }catch(e){

    }
}

const resgatarMemoria = async ()=>{
    try{
        const valor = await AsyncStorage.getItem('*usuarioLogado*')
        if(valor === null ){
            return false
        }

        else{
            let auxValor = JSON.parse(valor)
            return auxValor
        }  
    }catch(e){
        return false
    }
    
    
}

const removerMemoria = async ()=>{
    
    try{
        const valor = await AsyncStorage.removeItem('*usuarioLogado*')
        
    }catch(e){
        return false
    } 
    
}


export {
    salvarMemoria,
    resgatarMemoria,
    removerMemoria,
}