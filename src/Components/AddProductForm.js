import Reac, { useRef, useEffect } from "react";

export default function AddProductForm(props) {
  const inputNameRef = useRef();
  const inputDescriptRef = useRef();

  useEffect(() => {
    inputNameRef.current.focus();
  });

  return (
    <form onSubmit={props.onFormSubmit}>
      <div>
        <label htmlFor="product-name">Name:</label>
        <input
          type="text"
          value={props.name}
          onChange={props.onNameChange}
          id="product-name"
          className="textfield"
          placeholder="Enter the name"
          ref={inputNameRef}
        />
      </div>
      <div>
        <label htmlFor="product-description">Description:</label>
        <input
          type="text"
          value={props.description}
          onChange={props.onDescriptionChange}
          id="product-description"
          placeholder="Enter the description"
          className="textfield"
        />
      </div>
      <div className="form-footer">
        <div className="validation-message">{props.validation}</div>
        <input type="submit" className="btn btn-primary" value="Add product" />
      </div>
    </form>
  );
}
