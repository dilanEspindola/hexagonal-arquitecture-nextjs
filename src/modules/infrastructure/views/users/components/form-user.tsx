export const FormUser = async () => {
  const createUser = async (formData: FormData) => {
    "use server";
    const data = {
      fullname: formData.get("fullname"),
      username: formData.get("username"),
      email: formData.get("email"),
      country: formData.get("country"),
    };
    const res = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const info = await res.json();
    console.log(info);
  };

  return (
    <form action={createUser} className="flex flex-col gap-3 w-3/12">
      <div className="flex flex-col space-y-2">
        <label htmlFor="">fullname</label>
        <input
          type="text"
          name="fullname"
          className="border border-gray-400 rounded-md"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="">username</label>
        <input
          type="text"
          name="username"
          className="border border-gray-400 rounded-md"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="">email</label>
        <input
          type="text"
          name="email"
          className="border border-gray-400 rounded-md"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="">country</label>
        <input
          type="text"
          name="country"
          className="border border-gray-400 rounded-md"
        />
      </div>

      <button
        type="submit"
        className="bg-gray-300 py-2 px-3 rounded-md mt-2 hover:bg-gray-600 hover:text-white duration-150"
      >
        create user
      </button>
    </form>
  );
};
