"use client";
import { useState } from "react";
import FormInput from "./FormInput";

const UIData = [
  { label: "Github", id: 1 },
  { label: "LinkedIn", id: 2 },
  { label: "Facebook", id: 3 },
  { label: "Instagram", id: 4 },
  { label: "Dribble", id: 5 },
  { label: "Behance", id: 6 },
];

function Socials() {
  const [inputData, setInputData] = useState({
    Gihtub: "",
    LinkedIn: "",
    Facebook: "",
    Instagram: "",
    Dribble: "",
    Behance: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "Github") {
      setInputData({ ...inputData, [name]: value });
    } else if (name === "LinkedIn") {
      setInputData({ ...inputData, [name]: value });
    } else if (name === "Facebook") {
      setInputData({ ...inputData, [name]: value });
    } else if (name === "Instagram") {
      setInputData({ ...inputData, [name]: value });
    } else if (name === "Dribble") {
      setInputData({ ...inputData, [name]: value });
    } else if (name === "Behance") {
      setInputData({ ...inputData, [name]: value });
    } else alert("Please enter the correct value");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Github:${inputData.Github}\n
      Linkedin:${inputData.LinkedIn}\n
      Instagram:${inputData.Instagram}\n 
      Dribble:${inputData.Dribble}\n
      Behance:${inputData.Behance}\n
      `
    );
  };

  return (
    <div className="socials__container w-[90%] py-10 flex-col justify-center items-center">
      <form action="" method="POST" onSubmit={handleSubmit}>
        <FormInput
          Label={UIData[0].label}
          Name={UIData[0].label}
          ID={UIData[0].id}
          Placeholder={`${UIData[0].label} Link`}
          HandleChange={handleChange}
        />
        <FormInput
          Label={UIData[1].label}
          Name={UIData[1].label}
          ID={UIData[1].id}
          Placeholder={`${UIData[1].label} Link`}
          HandleChange={handleChange}
        />
        <FormInput
          Label={UIData[2].label}
          Name={UIData[2].label}
          ID={UIData[2].id}
          Placeholder={`${UIData[2].label} Link`}
          HandleChange={handleChange}
        />
        <FormInput
          Label={UIData[3].label}
          Name={UIData[3].label}
          ID={UIData[3].id}
          Placeholder={`${UIData[3].label} Link`}
          HandleChange={handleChange}
        />
        <FormInput
          Label={UIData[4].label}
          Name={UIData[4].label}
          ID={UIData[4].id}
          Placeholder={`${UIData[4].label} Link`}
          HandleChange={handleChange}
        />
        <FormInput
          Label={UIData[5].label}
          Name={UIData[5].label}
          ID={UIData[5].id}
          Placeholder={`${UIData[5].label} Link`}
          HandleChange={handleChange}
        />
        <div className="flex justify-end mt-5">
          <button
            type="reset"
            className=" py-3 px-5 font-bold bg-zinc-100 rounded-lg justify-center items-center gap-2 inline-flex text-black"
          >
            Cancel
          </button>
          <button
            type="submit"
            className=" py-3 px-5 font-bold ml-5 bg-indigo-600 rounded-lg justify-center items-center gap-2 inline-flex text-white"
          >
            Save changes
          </button>
        </div>
      </form>
    </div>
  );
}

export default Socials;
