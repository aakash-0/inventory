import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
    inkpens:35,
  });

  const handelBooks=(n)=>{
    
      if(n===1){
        setInv({
          ...inv,
          books:inv.books+1
          
        })
      }
    
    if(inv.books>=1){
      if(n===0){
        setInv({
          ...inv,
          books:inv.books-1
          
        })
      }
    }

    
   
  }
  const handelNotebookBooks=(n)=>{
    
    if(n===1){
      setInv({
        ...inv,
        notebooks:inv.notebooks+1
        
      })
    }
  
  if(inv.notebooks>=1){
    if(n===0){
      setInv({
        ...inv,
        notebooks:inv.notebooks-1
        
      })
    }
  }
}
const handelPen=(n)=>{
    
  if(n===1){
    setInv({
      ...inv,
      pens:inv.pens+1
      
    })
  }

if(inv.pens>=1){
  if(n===0){
    setInv({
      ...inv,
      pens:inv.pens-1
      
    })
  }
}
}
const handelIpen=(n)=>{
    
  if(n===1){
    setInv({
      ...inv,
      inkpens:inv.inkpens+1
      
    })
  }

if(inv.inkpens>=1){
  if(n===0){
    setInv({
      ...inv,
      inkpens:inv.inkpens-1
      
    })
  }
}
}

    
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button  onClick ={()=>{
            handelBooks(1)
        }} className="circlularButton">+</button>
        <button  onClick ={()=>{
            handelBooks(0)
        }} className="circlularButton">-</button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button onClick ={()=>{
            handelNotebookBooks(1)
        }} className="circlularButton">+</button>
        <button onClick ={()=>{
            handelNotebookBooks(0)
        }} className="circlularButton">-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button onClick ={()=>{
            handelPen(1)
        }} className="circlularButton">+</button>
        <button onClick ={()=>{
            handelPen(0)
        }} className="circlularButton">-</button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button onClick ={()=>{
            handelIpen(1)
        }} className="circlularButton">+</button>
        <button onClick ={()=>{
            handelIpen(0)
        }} className="circlularButton">-</button>
        <span>{inv.inkpens}</span>
      </div>
            {/*calculate total and show it*/}
      total: {inv.books+inv.notebooks+inv.inkpens+inv.pens}
    </div>
  );
};