"use client";

import { useState } from "react";
export default function Socials() {
  const socialsLinks = [
    { label: "Github", link_address: "", id: 1 },
    { label: "LinkedIn", link_address: "", id: 2 },
    { label: "Facebook", link_address: "", id: 3 },
    { label: "Instagram", link_address: "", id: 4 },
    { label: "Dribble", link_address: "", id: 5 },
    { label: "Behance", link_address: "", id: 6 },
  ];

  // NOTE: I was trying to build up the social links using map function but wasn't able to figure out the exact strategy.
  // I know the code is repetitive but if you can help me solve this, I would appreciate. Thanks in advance.

  // const [links, setLinks] = useState(socialsLinks);

  // const handleInputChange = (e, id) => {
  //   let updatesLinks = links.map((label) => {
  //     if (label.id === id) {
  //       return { ...label, link_address: e.target.value };
  //     } else {
  //       return label;
  //     }
  //   });
  //   setLinks(updatesLinks);
  // };

  const [github, setGithub] = useState(socialsLinks[0].link_address);
  const [linkedin, setLinkedin] = useState(socialsLinks[1].link_address);
  const [facebook, setFacebook] = useState(socialsLinks[2].link_address);
  const [instagram, setInstagram] = useState(socialsLinks[3].link_address);
  const [dribble, setDribble] = useState(socialsLinks[4].link_address);
  const [behance, setBehance] = useState(socialsLinks[5].link_address);

  const handleGithubChange = (e) => {
    setGithub(e.target.value);
  };
  const handleLinkedinChange = (e) => {
    setLinkedin(e.target.value);
  };
  const handleFacebookChange = (e) => {
    setFacebook(e.target.value);
  };
  const handleInstagramChange = (e) => {
    setInstagram(e.target.value);
  };
  const handleDribbleChange = (e) => {
    setDribble(e.target.value);
  };
  const handleBehanceChange = (e) => {
    setBehance(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Github: ${github}, Linkedin: ${linkedin}, Facebook:${facebook}, Instagram:${instagram}, Dribble:${dribble}, Behance:${behance}`
    );
  };

  return (
    <div className="socials__container w-[90%] py-10 flex-col justify-center items-center">
      <form action="" method="get" onSubmit={handleSubmit}>
        <label htmlFor={socialsLinks[0].label} className="text-base font-bold">
          {socialsLinks[0].label}
        </label>
        <input
          type="text"
          className="w-[100%] p-2 outline-none border rounded-lg mt-2 mb-2"
          placeholder={`${socialsLinks[0].label} profile link`}
          value={github}
          onChange={handleGithubChange}
        />
        <label htmlFor={socialsLinks[1].label} className="text-base font-bold">
          {socialsLinks[1].label}
        </label>
        <input
          type="text"
          className="w-[100%] p-2 outline-none border rounded-lg mt-2 mb-2"
          placeholder={`${socialsLinks[1].label} profile link`}
          value={linkedin}
          onChange={handleLinkedinChange}
        />
        <label htmlFor={socialsLinks[2].label} className="text-base font-bold">
          {socialsLinks[2].label}
        </label>
        <input
          type="text"
          className="w-[100%] p-2 outline-none border rounded-lg mt-2 mb-2"
          placeholder={`${socialsLinks[2].label} profile link`}
          value={facebook}
          onChange={handleFacebookChange}
        />
        <label htmlFor={socialsLinks[3].label} className="text-base font-bold">
          {socialsLinks[3].label}
        </label>
        <input
          type="text"
          className="w-[100%] p-2 outline-none border rounded-lg mt-2 mb-2"
          placeholder={`${socialsLinks[3].label} profile link`}
          value={instagram}
          onChange={handleInstagramChange}
        />
        <label htmlFor={socialsLinks[4].label} className="text-base font-bold">
          {socialsLinks[4].label}
        </label>
        <input
          type="text"
          className="w-[100%] p-2 outline-none border rounded-lg mt-2 mb-2"
          placeholder={`${socialsLinks[4].label} profile link`}
          value={dribble}
          onChange={handleDribbleChange}
        />
        <label htmlFor={socialsLinks[5].label} className="text-base font-bold">
          {socialsLinks[5].label}
        </label>
        <input
          type="text"
          className="w-[100%] p-2 outline-none border rounded-lg mt-2 mb-2"
          placeholder={`${socialsLinks[5].label} profile link`}
          value={behance}
          onChange={handleBehanceChange}
        />
        <div className="flex justify-end mt-5">
          <button
            type="submit"
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

    // <div className="socials__container w-[90%] py-10 flex-col justify-center items-center">
    //   <form action="" method="get" onSubmit={handleSubmit}>
    //     {socialsLinks.map((label) => (
    //       <Fragment key={label.id}>
    //         <label
    //           htmlFor={`${label.label}-${label.id}`}
    //           key={label.id}
    //           className="text-base font-bold"
    //         >
    //           {label.label}
    //         </label>
    //         <br></br>
    //         <input
    //           id={`${label.label}-${label.id}`}
    //           type="text"
    //           name={`label-${label.label}`}
    //           className="w-[100%] p-2 outline-none border rounded-lg mt-2 mb-2"
    //           placeholder={`${label.label} URL`}
    //           value={label.link_address}
    //           onChange={(e) => {
    //             console.log(e.target.value);
    //             handleInputChange(e, label.id);
    //           }}
    //         />
    //       </Fragment>
    //     ))}
    //     <section className="flex justify-end gap-10 mt-10">
    //       <button
    //         type="reset"
    //         className="bg-zinc-100 rounded-lg w-20 px-4 py-2 font-bold"
    //       >
    //         Cancel
    //       </button>
    //       <button
    //         type="submit"
    //         className=" py-3 px-5 font-bold bg-indigo-600 rounded-lg justify-center items-center gap-2 inline-flex text-white"
    //       >
    //         Save changes
    //       </button>
    //     </section>
    //   </form>
    // </div>
  );
}
