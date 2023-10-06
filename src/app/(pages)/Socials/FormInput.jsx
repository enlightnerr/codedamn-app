function FormInput({ Label, Name, ID, Placeholder, HandleChange }) {
  return (
    <div className="">
      <label htmlFor={ID} className="text-base font-bold">
        {Label}
      </label>
      <input
        type="text"
        name={Name}
        id={ID}
        placeholder={Placeholder}
        onChange={HandleChange}
        className="w-[100%] p-2 outline-none border rounded-lg mt-2 mb-2"
      />
    </div>
  );
}

export default FormInput;
