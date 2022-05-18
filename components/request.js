export default function RequestAccess() {
  return (
    <>
      <div className="bg-[#17253D] text-white flex p-14">
        <div className="w-full w-1/3">
          <div className="text-3xl border-t-2">
            Request Early Access to Data Explorer
          </div>

          <div className="">
            We want to make our API as accessible as possible. We are building a
            data explorer so anyone, regardless of their coding experience, can
            create charts and graphics they need. The Explorer is in a closed
            Alpha for now, but you can sign up below to get early access.
          </div>
        </div>
        <div className="w-full w-2/3">
          <form
            action="https://getform.io/f/f4781e33-14fa-4329-9af5-3504aaf5bc5b"
            method="POST"
          >
            <br />
            <label className="text-base font-capitalize text-white py-9">
              Email Address
            </label>
            <input
              className="py-2 px-2 block w-full shadow-sm focus:ring-slate-500 focus:border-slate-500 border-gray-300 "
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              required
            />
            <br />

            <label className="text-base font-capitalize text-white py-9">
              Purpose
            </label>

            <select
              className=" mt-2 block w-full py-2 px-2 text-base focus:ring-slate-500 focus:border-slate-500 border-gray-300 "
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
            </select>

            <button
              className="items-end mt-4 p-2 right-0 text-white border-white border-2 hover:text-[#202020] hover:bg-white"
              type="submit"
              onClick=""
            >
              Submit →
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
