const apiUrl = process.env.REACT_APP_API_EXTERNAL_URL;
const apiLocalUrl = process.env.REACT_APP_API_LOCAL_URL;


function api(){
    availableApiUrl();
}

async function checkLinkAvailable(url){

    try{
        const response = await fetch(url, {method: 'POST'});

        if(!response.ok){
            console.log("Erro ao acessar a API: " + response.status);
            return false;
        }else{
            console.info("API disponível" );
            return true;
        }

    }catch(error){
        console.log("Erro ao acessar a API: " + error.status);
    }

}

async function availableApiUrl(){
    if(await checkLinkAvailable(apiLocalUrl)){
        return apiLocalUrl;
    }else if(await checkLinkAvailable(apiUrl)){
        return apiUrl;
    }else{
        console.log("API não disponível");
    }
}

export default api;