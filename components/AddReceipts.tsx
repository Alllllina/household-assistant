import * as React from 'react'
import { useState  } from 'react'

const AddReceipts: React.FC<any> = () => {
    const [addedValue,setAddedValue] = useState('');

    function addHandler(){
        if(addedValue) {
            console.log(addedValue);
        }
    }

    function onChangeInput (e: any) {
        setAddedValue(e.target.value)
    }
    
 return (
     <div>
        <input type="text" onChange={e => onChangeInput(e)}/>
        <button onClick={addHandler}>Добавить рецепт</button>
     </div>
 )
}
export default AddReceipts;