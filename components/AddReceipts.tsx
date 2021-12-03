import * as React from 'react'
import { useState, useEffect } from 'react'

const AddReceipts = () => {
    const [addedValue, setAddedValue] = useState<string>('');
    const [receiptsArray, setReceiptsArray] = useState<string[]>([]);


    function addHandler(e: any){
        console.info(receiptsArray.includes(addedValue));
        if(addedValue && !receiptsArray.includes(addedValue)) {
            setReceiptsArray([...receiptsArray, addedValue]);
        }
    }

    function onChangeInput (e: any) {
        const currentValue = e.target.value;
        setAddedValue(currentValue);
    }
    
 return (
     <div>
        <input type="text" onChange={onChangeInput}/>
        <button onClick={e => addHandler(e)}>Добавить рецепт</button>
        {receiptsArray && receiptsArray.length > 0 && <ul>
                {receiptsArray.map((item, i)=>{
                    return <li key={item}>{item}</li>})}
                </ul>}
     </div>
 )
}
export default AddReceipts;