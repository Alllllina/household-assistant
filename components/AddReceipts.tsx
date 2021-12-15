import * as React from 'react'
import { useState, useEffect } from 'react'
//import {getReceipts, saveReceipt} from '../data/prismaReceipts';
import { func } from 'prop-types';

const AddReceipts = ({}) => {
    const [addedValue, setAddedValue] = useState<string>('');
    const [receiptsArray, setReceiptsArray] = useState<string[]>([]);
    const [selectedReceipt, setSelectedReceipt] = useState<string>('');


    function addHandler(e: any){
        if(addedValue && !receiptsArray.includes(addedValue)) {
            setReceiptsArray([...receiptsArray, addedValue]);
            //saveReceipt({name: addedValue});
            //fs.writeFileSync('../data/receipts.json', JSON.stringify(receiptsArray, null, 4));
        }
    }

    function onChangeInput (e: any) {
        const currentValue = e.target.value;
        setAddedValue(currentValue);
        console.info(e.target);
    }

    function randomHandler(){
        setSelectedReceipt(receiptsArray[Math.floor(Math.random()*receiptsArray.length)]);
    }

    // useEffect(()=>{
    //     getReceipts().then(({receipts})=>{
    //         setReceiptsArray(receipts);
    //     })

    // },[])
    
 return (
     <div>
        <input type="text" onChange={onChangeInput}/>
        <button onClick={e => addHandler(e)}>Добавить рецепт</button>
        {receiptsArray && receiptsArray.length > 0 && 
                <>
                    <ul>
                        {receiptsArray.map((item, i)=>{
                            return <li key={item}>{item}</li>})}
                    </ul>
                    {receiptsArray.length > 1 && <button onClick={randomHandler}>Что приготовить?</button> }
                </>
            }
        <div>{selectedReceipt}</div>      
     </div>
 )
}

/* AddReceipts.getInitialProps = async function(){ 
    const receipts = await prisma.receipts.findMany();
    console.info(receipts);
    return {
      props: {
        receipts: receipts
      }
    };
  }*/
export default AddReceipts;