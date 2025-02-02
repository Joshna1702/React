
import React, { useState,useEffect } from 'react';
const URL="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const Final = ()=>{
     const [drinksData, setDrinksData]=useState([]);
     const [searchTerm,setSearchTerm] = useState('');
     const [loading,setLoading]=useState(false);
     const [isError,setIsError]=useState({status:false,msg:''});

     const fetchDrink =async (apiURL)=>{
        setLoading(true);
        setIsError({status:false,msg:''});
        try {
            const response= await fetch(apiURL);
            const { drinks }=await response.json();
            setDrinksData(drinks); 
            setLoading(false);
            setIsError({status:false,msg:''});
            if(!drinks){
                throw new Error("Data not found");
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
            setIsError({
                status:true,
                msg: error.message || 'Something went wrong!!'
            });
        }
        
     }

     useEffect(()=>{
        const correctURL = `${URL}${searchTerm}`;
        fetchDrink(correctURL);
     },[searchTerm])

     return(
        <div className='drinks'>
            <form>
                <input 
                type='text'
                name='search'
                id='search'
                placeholder='Search here'
                value={searchTerm}
                onChange={(e)=> setSearchTerm(e.target.value)}
                />
            </form>
            <hr/>
            {loading && !isError?.status && <h3>Loading......</h3>}
            {isError?.status && <h3 style={{color:'red'}}>{isError.msg}</h3>}
            {
                !loading && !isError?.status && <ul className='drink-data'>
                {
                    drinksData.map((eachDrink)=>{
                        const {idDrink,strDrink,strDrinkThumb}=eachDrink;
                        return <li key={idDrink}>
                            <div>
                                <img src={strDrinkThumb} alt={strDrink}></img>
                                <h3>{strDrink}</h3>
                            </div>
                        </li>
                    })
                }
            </ul>  
            } 
        </div>
     )
}

export default Final;