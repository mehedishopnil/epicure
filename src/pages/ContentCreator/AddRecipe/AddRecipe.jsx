import React, { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { FaMinusCircle } from "react-icons/fa";

const AddRecipe = () => {
  const [ingredientFields, setIngredientFields] = useState([
    { id: 1, name: '', quantity: '', measurement: '' },
  ]);
  const [stepFields, setStepFields] = useState([{ id: 1, value: '' }]);
  const [tags, setTags] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const handleIngredientChange = (index, field, event) => {
    const values = [...ingredientFields];
    values[index][field] = event.target.value;
    setIngredientFields(values);
  };

  const handleAddIngredient = () => {
    setIngredientFields([
      ...ingredientFields,
      { id: ingredientFields.length + 1, name: '', quantity: '', measurement: '' },
    ]);
  };

  const handleRemoveIngredient = (index) => {
    const values = [...ingredientFields];
    values.splice(index, 1);
    setIngredientFields(values);
  };

  const handleStepChange = (index, event) => {
    const values = [...stepFields];
    values[index].value = event.target.value;
    setStepFields(values);
  };

  const handleAddStep = () => {
    setStepFields([
      ...stepFields,
      { id: stepFields.length + 1, value: '' }
    ]);
  };

  const handleRemoveStep = (index) => {
    const values = [...stepFields];
    values.splice(index, 1);
    setStepFields(values);
  };

  const handleTagsChange = (event) => {
    const value = event.target.value;
    setTags(value);
    setCharacterCount(value.length);
  };

  return (
    <div className="max-w-screen-2xl lg:max-w-screen-lg mb-14 mx-auto">
      {/* About Section */}
      <h1 className="text-[#D9D9D9] text-3xl mb-5">Add Recipe</h1>

      <div className="grid grid-cols-2 justify-center gap-3 mb-4">
        {/* Recipe Name */}
      <div className="col-span-1 justify-center gap-3 mb-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Recipe Name"
            className="w-full border border-gray-300 rounded-md py-2 px-4 bg-transparent text-gray-4 placeholder-gray-300"
          />
        </div>
      </div>

      {/* Final Product Picture */}
      <div className="col-span-1 justify-center gap-3 mb-4">
        <div className="flex-1 bg-gray-500 rounded-lg">
          <input
            type="file"
            placeholder="Final Product Picture"
            className="w-full border border-gray-300 rounded-md py-2 px-4 bg-transparent text-gray-800 placeholder-gray-300"
          />
        </div>
      </div>

      </div>

      {/* Description */}
      <div className="w-full justify-center gap-3 mb-4">
        <div className="flex-1">
          <textarea
            placeholder="Description"
            className="w-full border border-gray-300 rounded-md py-2 px-4 bg-transparent text-gray-800 placeholder-gray-300"
          />
        </div>
      </div>

      {/* Ingredient List */}
      <div className="grid grid-cols-2 justify-center gap-3 mb-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Ingredient"
            className="w-full border border-gray-300 rounded-md py-2 px-4 bg-transparent text-gray-300 placeholder-gray-300"
          />
        </div>
        <div className="grid grid-cols-1 gap-2">
          {ingredientFields.map((field, index) => (
            <div key={field.id} className="flex gap-2 mb-2">
              <input
                type="text"
                placeholder={`Ingredient Name`}
                className="w-full border border-gray-300 rounded-md py-2 px-4 mb-2 bg-transparent text-gray-800 placeholder-gray-300"
                value={field.name}
                onChange={(e) => handleIngredientChange(index, 'name', e)}
              />
              <input
                type="number"
                placeholder={`Quantity`}
                className="w-full border border-gray-300 rounded-md py-2 px-4 mb-2 bg-transparent text-gray-800 placeholder-gray-300"
                value={field.quantity}
                onChange={(e) => handleIngredientChange(index, 'quantity', e)}
              />
              <input
                type="text"
                placeholder={`Measurement`}
                className="w-full border border-gray-300 rounded-md py-2 px-4 mb-2 bg-transparent text-gray-800 placeholder-gray-300"
                value={field.measurement}
                onChange={(e) => handleIngredientChange(index, 'measurement', e)}
              />
              {index !== 0 && (
                <button onClick={() => handleRemoveIngredient(index)}>
                  <FaMinusCircle className="text-gray-800 ml-2" />
                </button>
              )}
            </div>
          ))}
          <button onClick={handleAddIngredient}>
            <IoMdAddCircle className="text-gray-400" />
          </button>
        </div>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-2 justify-center gap-3 mb-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="About"
            className="w-full border border-gray-300 rounded-md py-2 px-4 bg-transparent text-gray-800 placeholder-gray-300"
          />
        </div>
        <div className="grid grid-cols-1 gap-2">
          {stepFields.map((field, index) => (
            <div key={field.id} className="flex mb-2">
              <input
                type="text"
                placeholder={`Step ${index + 1}`}
                className="w-full border border-gray-300 rounded-md py-2 px-4 mb-2 bg-transparent text-gray-800 placeholder-gray-300"
                value={field.value}
                onChange={(e) => handleStepChange(index, e)}
              />
              {index !== 0 && (
                <button onClick={() => handleRemoveStep(index)}>
                  <FaMinusCircle className="text-gray-400 ml-2" />
                </button>
              )}
            </div>
          ))}
          <button onClick={handleAddStep}>
            <IoMdAddCircle className="text-gray-400" />
          </button>
        </div>
      </div>

      {/* Tags */}
      <div className="grid grid-cols-2 justify-center gap-3 mb-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Tags"
            className="w-full border border-gray-300 rounded-md py-2 px-4 bg-transparent text-gray-800 placeholder-gray-300"
          />
        </div>
        <div className="grid grid-cols-1 gap-2">
          {stepFields.map((field, index) => (
            <div key={field.id} className="flex mb-2">
              <input
                type="text"
                placeholder={`Step ${index + 1}`}
                className="w-full border border-gray-300 rounded-md py-2 px-4 mb-2 bg-transparent text-gray-800 placeholder-gray-300"
                value={field.value}
                onChange={(e) => handleStepChange(index, e)}
              />
              {index !== 0 && (
                <button onClick={() => handleRemoveStep(index)}>
                  <FaMinusCircle className="text-gray-400 ml-2" />
                </button>
              )}
            </div>
          ))}
          <button onClick={handleAddStep}>
            <IoMdAddCircle className="text-gray-400" />
          </button>
        </div>
      </div>

      {/* Submit Button */}
      <button className="w-full bg-[#272727] border border-gray-600 hover:bg-[#BE6F50] hover:text-white text-gray-400 font-bold py-2 px-4 rounded-full">
        Submit
      </button>
    </div>
  );
};

export default AddRecipe;
