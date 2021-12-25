import React, { useState, useEffect } from "react";
import ProductsList from "./ProductsList.js";
import AddProductForm from "./AddProductForm.js";

export default function StoreFront() {
const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("products");
    if (savedProducts) {
   return JSON.parse(savedProducts);
    } else {
      return [];
    }
  });

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [validation, setValidation] = useState("");

  /* save items to local storage */
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
    console.log("local", products);
  }, [products]);

  async function handleFormSubmit(event) {
    event.preventDefault();

    if (!name) {
      setValidation("Please enter a name");
      return;
    }
    if (!description) {
      setValidation("Please enter a description");
      return;
    }

 try{
      const response = await fetch('https://api.learnjavascript.online/demo/react/admin/products', {
            method: 'post',
           headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
            name: name,
            description, 
            })
        })
        const data = await response.json();
            console.log(data) 
        if(data){
            setProducts([...products, {
            id: products.length + 1,
            name: name,
            description,
        }]);
        setName("");
        setDescription("");
        setValidation("");
        }   
        }catch{console.log('error')}

    }

  

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  function handleDeleteClick(id) {
    setProducts(products.filter((product) => product.id !== id));
  }

  return (
    <>
      <AddProductForm
        name={name}
        description={description}
        validation={validation}
        onNameChange={handleNameChange}
        onDescriptionChange={handleDescriptionChange}
        onFormSubmit={handleFormSubmit}
      />
      
      <div>{products.length === 0 && <p>Add your first product</p>}</div>

      <ProductsList products={products} onDeleteClick={handleDeleteClick} />
    </>
  );
}
