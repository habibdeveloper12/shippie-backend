import React , {useEffect} from 'react';
const store = require('store');
 const Track = ()=>{
    const [apiData , setApiData] = React.useState("")
    const data = store.get('foo')
useEffect(()=>{
    const procData = ()=>{ 
        return Object.keys(data).map((key,index)=>{
            return(
                <div key={index}>
                    <strong>{key}: </strong>
                    <span className='text-lime-300'>{data[key]}</span>
                </div>
            )
        })
    }
   setApiData(procData)

},[])
    return(
        <div className='hidden sm:block mt-6 space-y-6 sm:leading-snug font-normal sm:text-base md:text-xl text-xl text-center bg-purple-800'>
        <h1 className='sm:block md:text-4xl text-yellow-300'>Package Details</h1>
        {apiData}
        </div>
    )
}

export default Track;