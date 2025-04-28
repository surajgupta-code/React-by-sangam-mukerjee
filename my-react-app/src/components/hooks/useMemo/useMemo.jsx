import { useEffect, useMemo, useState } from "react";
function UseMemoHook(){
    const [data, setData]= useState([]);
    const [theme, setTheme]= useState(false);
    async function fetchAllProduct() {
        try{
            const response = await fetch("https://dummyjson.com/products");
            const result = await response.json();
            if(result && result.products) setData(result.products);
        }
        catch(err){
            console.log(err);

        }
    } 
    useEffect(()=>{
        fetchAllProduct();
    },[]);
    function filterProductsByPrice(getProducts){
        console.log("This is getting called");
        return getProducts && getProducts.length >0 ?getProducts.filter((item)=>item.price>50):[];
    }    
    const memorizeFilterProduct = useMemo(()=>filterProductsByPrice(data), [data]);

        return(
            <div>
                <h1>Use Memo Hook Example</h1>
                <ul>
                    {
                        memorizeFilterProduct.map(item=><li>{item.title}</li>)
                    }
                </ul>
                <button onClick={()=>setTheme(!theme)}>Click</button>
                <h2>{theme?'Light':'Dark'}</h2>
            </div>
        )
    }
    export default UseMemoHook;