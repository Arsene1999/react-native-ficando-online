import api from '../api';

async function buscaUsuario(nomeUsuario){
    try{
        const resultado = await api.get(`/users?login=${nomeUsuario}`);
        return resultado.data[0]
    }catch(e){
        console.log(e)
        return {}
    }
}


export   {
    buscaUsuario
}
