const API_URL = "http://node-hnapi.herokuapp.com/news";
const Api = {
    fetchApi : async () => {
        try{
            const apiData = await fetch(API_URL);
            return apiData.json();
        }
        //오류
        catch(err){
            console.log(err + '에러 출력!')
        }
        
    }
}

export default Api;