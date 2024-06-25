import api from '../api';

async function buscaRepos(userId){
    try{
        const resultado = await api.get(`/repos?id=${userId}`);
        return resultado.data
    }catch(e){
        console.log(e)
        return {}
    }
}

export  {
    buscaRepos
}
