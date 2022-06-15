export default function RequestAccess() {
  return (
    <>
      <div className="bg-[#17253D] text-white p-14">
        <div className="border-t-[1px] border-[#353f50] mb-12"></div>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3">
            <div className="text-3xl font-extrabold font-LibreFranklin mb-12 sm:ml-4">
              Request Early Access to Data Explorer
            </div>

            <div className="mb-12">
              We want to make our API as accessible as possible. We are building
              a data explorer so anyone, regardless of their coding experience,
              can create charts and graphics they need. The Explorer is in a
              closed Alpha for now, but you can sign up below to get early
              access.
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <form
              action="https://getform.io/f/223de8c6-df2c-4e74-b50e-9d461bc7c5cc"
              method="POST"
            >
              <input
                className="py-2 px-2 block w-full bg-[#111826] rounded"
                type="email"
                id="name"
                name="name"
                placeholder="Email Address"
                required
              />

              {/* <select
                className="mt-2 block w-full py-2 px-2 text-base bg-[#111826] rounded"
                name="purpose"
                id="purpose"
              >
                <option value="Select one" required>
                  Why are you interested?
                </option>
                <option value="Investor">Contrinuting Code</option>
                <option value="Partner">Community Mand</option>
                <option value="Customer">Adding Data Sources</option>
                <option value="Other">Other</option>
              </select> */}

              <button
                className="items-end mt-4 p-2 right-0 text-[#2d82b8] bg-[#172c46] hover:text-[#202020] hover:bg-white rounded"
                type="submit"
                onClick=""
              >
                Request Access
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
