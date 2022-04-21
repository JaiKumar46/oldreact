import Serl from "./Serl.json"
import React,{useState} from 'react'


const Select = props => {

  return (
   <section>
       <article>
           <h2>select country</h2>

<form action="">
    <select name="" id="">{Country.map(value=>{
        return({
            <>
            <option value={value.name}>{value.name}</option>
            </>
        })});}</select>
    </form>       </article>
   </section>
  )
}


export default Select