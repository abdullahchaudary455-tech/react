// import React from 'react';
// import {useEffect} from 'react'
// const Counter=({Count,data})=> {
//     // ......mounting phase.......
//     useEffect(()=> {
//         console.log("mounting phase")
//     },[])
// }
//     useEffect(()=> {
//         console.log("updating phase")
//     },[])
// }


import React from 'react'
import { useEffect } from 'react'
const Counter=({count, data})=>
useEffect(()=>{
// ......mounting phase.
console.log("mounting phase")
}, [])
// .......updating phase.
useEffect(()=> {
console.log("updating phase")
}, [count])
//.......unmounting phase.
return (
<>
<div>counter</div>
<h1>Counter value{count}</h1>
<h1>Data value {data}</h1>
</>
)