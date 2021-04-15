import React,{useState} from 'react';

function SectionC(props, {addFiles}) {
    
// const[value, setValue]= useState(0)

// const onChange = e =>{
// const intValue = value + 1 
// }
// setValue()

   

    return (
      <div className="topInput">   
            {/* Delimiters and Lines*/}

<div className="delimitter">
    <label for="delimitter"><strong>Delimiter: </strong></label>
    <input type=" text" name='delimitter' className='inputBox' value=','
        onChange={value => props.input.onChange(value)}/>
</div>

<div className="lines">
    <label for="lines"><strong>No. of Lines: </strong></label>
    <input type="text" name='lines' className='inputBox'  />
</div>

</div>
      
    )
}

export default SectionC;
