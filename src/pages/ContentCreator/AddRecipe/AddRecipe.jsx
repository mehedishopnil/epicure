import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { FaMinusCircle } from "react-icons/fa";

const AddRecipe = () => {
  const [recipeName, setRecipeName] = useState('');
  const [finalProductPicture, setFinalProductPicture] = useState(null);
  const [description, setDescription] = useState('');
  const [ingredientFields, setIngredientFields] = useState([
    { id: 1, name: '', quantity: '', measurement: '' },
  ]);
  const [stepFields, setStepFields] = useState([{ id: 1, value: '', image: null }]);
  const [tags, setTags] = useState('');
  const [sections, setSections] = useState([]);
  const [yieldAmount, setYieldAmount] = useState('');

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

  const handleStepChange = (index, field, event) => {
    const values = [...stepFields];
    if (field === 'value') {
      values[index].value = event.target.value;
    } else if (field === 'image') {
      values[index].image = event.target.files[0];
    }
    setStepFields(values);
  };

  const handleAddStep = () => {
    setStepFields([
      ...stepFields,
      { id: stepFields.length + 1, value: '', image: null }
    ]);
  };

  const handleRemoveStep = (index) => {
    const values = [...stepFields];
    values.splice(index, 1);
    setStepFields(values);
  };

  const handleTagsChange = (event) => {
    setTags(event.target.value);
  };

  const handleSectionChange = (index, event) => {
    const values = [...sections];
    values[index] = event.target.value;
    setSections(values);
  };

  const handleSubmit = () => {
    // Implement submission logic here
    console.log("Recipe submitted!");
  };

  return (
    <div className="max-w-screen-2xl lg:max-w-screen-lg mb-14 mx-auto">
      {/* About Section */}
      <h1 className="text-[#D9D9D9] text-3xl mb-5">Add Recipe</h1>

      <div className="grid grid-cols-2 gap-2">
        {/* Recipe Name */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Recipe Name"
          value={recipeName}
          onChange={(e) => setRecipeName(e.target.value)}
          className="w-full border border-gray-300 rounded-md py-2 px-4 bg-transparent text-gray-400 placeholder-gray-300"
        />
      </div>

      {/* Final Product Picture */}
      <div className="mb-4">
        <input
          type="file"
          onChange={(e) => setFinalProductPicture(e.target.files[0])}
          className="w-full border border-gray-300 rounded-md py-2 px-4 bg-transparent text-gray-400 placeholder-gray-300"
        />
      </div>
      </div>

      {/* Description */}
      <div className="mb-4">
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-gray-300 rounded-md py-2 px-4 bg-transparent text-gray-400 placeholder-gray-300"
        />
      </div>

      {/* Ingredient List */}
      <div className="mb-4">
        {ingredientFields.map((field, index) => (
          <div key={field.id} className="flex gap-2 mb-2">
            <input
              type="text"
              placeholder={`Ingredient Name`}
              value={field.name}
              onChange={(e) => handleIngredientChange(index, 'name', e)}
              className="w-full border border-gray-300 rounded-md py-2 px-4 bg-transparent text-gray-400 placeholder-gray-300"
            />
            <input
              type="number"
              placeholder={`Quantity`}
              value={field.quantity}
              onChange={(e) => handleIngredientChange(index, 'quantity', e)}
              className="w-full border border-gray-300 rounded-md py-2 px-4 bg-transparent text-gray-400 placeholder-gray-300"
            />
            <input
              type="text"
              placeholder={`Measurement`}
              value={field.measurement}
              onChange={(e) => handleIngredientChange(index, 'measurement', e)}
              className="w-full border border-gray-300 rounded-md py-2 px-4 bg-transparent text-gray-400 placeholder-gray-300"
            />
            {index !== 0 && (
              <button onClick={() => handleRemoveIngredient(index)}>
                <FaMinusCircle className="text-gray-500 ml-2" />
              </button>
            )}
          </div>
        ))}
        <button onClick={handleAddIngredient}>
          <IoMdAddCircle className="text-gray-400" />
        </button>
      </div>

      {/* Steps */}
      <div className="mb-4">
        {stepFields.map((field, index) => (
          <div key={field.id} className="flex gap-2 mb-2">
            <input
              type="text"
              placeholder={`Step ${index + 1}`}
              value={field.value}
              onChange={(e) => handleStepChange(index, 'value', e)}
              className="w-full border border-gray-300 rounded-md py-2 px-4 mb-2 bg-transparent text-gray-400 placeholder-gray-300"
            />
            <input
              type="file"
              onChange={(e) => handleStepChange(index, 'image', e)}
              className="w-full border border-gray-300 rounded-md py-2 px-4 mb-2 bg-transparent text-gray-400 placeholder-gray-300"
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

      {/* Tags */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Tags"
          value={tags}
          onChange={handleTagsChange}
          className="w-full border border-gray-300 rounded-md py-2 px-4 bg-transparent text-gray-400 placeholder-gray-300"
        />
      </div>

      {/* Sections */}
      <div className="mb-4">
        {sections.map((section, index) => (
          <div key={index} className="mb-2">
            <input
              type="text"
              placeholder={`Section ${index + 1}`}
              value={section}
              onChange={(e) => handleSectionChange(index, e)}
              className="w-full border border-gray-300 rounded-md py-2 px-4 bg-transparent text-gray-400 placeholder-gray-300"
            />
          </div>
        ))}
      </div>

      {/* Yield Amount */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Yield Amount"
          value={yieldAmount}
          onChange={(e) => setYieldAmount(e.target.value)}
          className="w-full border border-gray-300 rounded-md py-2 px-4 bg-transparent text-gray-400 placeholder-gray-300"
        />
      </div>

      {/* Submit Button */}
      <button onClick={handleSubmit} className="w-full bg-[#272727] border border-gray-600 hover:bg-[#BE6F50] hover:text-white text-gray-400 font-bold py-2 px-4 rounded-full">
        Submit
      </button>
    </div>
  );
};

export default AddRecipe;
