import trash from "./assets/trash.svg";
export default function ContactList({ contact, setContact }) {
  console.log(contact);
  const deleteHandler = (id) => {
    const newList = contact.filter((contact) => contact.id !== id);
    setContact(newList);
  };

  const changeHandler = (e) => {};

  return (
    <>
      {contact.length > 0 && (
        <table className="w-2/3 border-2 border-pink-500 table-fixed text-wrap">
          <caption className="text-3xl text-neutral-600 border-b mb-4">
            Contact List
          </caption>
          <thead>
            <tr className="h-[40px]">
              <th className="w-[150px] text-left border-2 text-xl border-pink-600 pl-3">
                Name
              </th>
              <th className="w-[150px] text-left border-2 text-xl border-pink-600 pl-3">
                Phone
              </th>
              <th className="w-[150px] text-left border-2 text-xl border-pink-600 pl-3">
                Email
              </th>
              <th className="w-[200px] text-left border-2 text-xl border-pink-600 pl-3 border-r-0">
                Address
              </th>
              <th className="w-7 border-b-2 border-pink-600"></th>
            </tr>
          </thead>
          <tbody className="border border-red">
            <tr>
              <td>
                <input
                  type="text"
                  placeholder="Search By Name ..."
                  name="name"
                  onChange={changeHandler}
                  className="w-full outline-none px-2 placeholder:text-pink-600"
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Search By Phone ..."
                  className="w-full outline-none px-2 border-l-2 border-pink-600 placeholder:text-pink-600"
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Search By Email ..."
                  className="w-full outline-none px-2 border-l-2 border-pink-600 placeholder:text-pink-600"
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Search By Address ..."
                  className="w-full outline-none px-2 border-l-2 border-pink-600 placeholder:text-pink-600"
                />
              </td>
            </tr>
            {contact.map((contact) => (
              <tr key={contact.id} className="">
                <td className="border-2 border-pink-600 px-3 truncate">
                  {contact.name}
                </td>
                <td className="border-2 border-pink-600 px-3 truncate">
                  {contact.phone}
                </td>
                <td className="border-2 border-pink-600 px-3 truncate">
                  {contact.email}
                </td>
                <td className=" border-2 border-pink-600 px-3 border-r-0 truncate">
                  {contact.address}
                </td>
                <td className="border-y-2 border-pink-600 pt-2">
                  <button onClick={() => deleteHandler(contact.id)}>
                    <img src={trash} className="w-5 h-5 "></img>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
