

export const TextError=({name})=>{
    if(name!="sahil"){
        throw new Error ("Error")
    }
        
    return(
        <div>
            <h1>{name}</h1>
        </div>
    )
}