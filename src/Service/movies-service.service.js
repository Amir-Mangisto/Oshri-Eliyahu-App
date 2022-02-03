export async const  GetInfo= ()=>{
    try{

        return await fetch("movie-database-imdb-alternative.p.rapidapi.com")
        .then(res=> {return res.json()})
    }catch(err){
        console.log(err);
    }
}
