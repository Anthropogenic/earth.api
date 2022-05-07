import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import Layout from "../../components/layout";
import EmissionsYearly from "../../components/yearly";
import RequestAccess from "../../components/request";
import PageHero from "../../components/pagehero";

const tabs = [
  { name: "Yearly", href: "/co2/yearly", current: true },
  { name: "Monthly", href: "/co2/monthly", current: false },
  { name: "Weekly", href: "/co2/weekly", current: false },
];

const fetcher = (url) => fetch(url).then((res) => res.json());

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Index() {
  const { data, error } = useSWR("/api/co2", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Layout>
      <div className="bg-[#17253D] p-9">
        <PageHero
          title="co<sub>2</sub>"
          description="Small description about the data we are collecting for co2 etc.. this should probably be just one or two lines long."
          type="Emissions Data"
          image=""
          color="#DF775E"
        />
      </div>

      <div className="flex bg-[#17253D] p-9">
        <div className="w-full">
          <div className="sm:hidden">
            <label htmlFor="tabs" className="sr-only">
              Select a tab
            </label>
            {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
            <select
              id="tabs"
              name="tabs"
              className="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
              defaultValue={tabs.find((tab) => tab.current).name}
              onChange
            >
              {tabs.map((tab) => (
                <option key={tab.name}>{tab.name}</option>
              ))}
            </select>
          </div>
          <div className="hidden sm:block">
            <nav className="flex space-x-4" aria-label="Tabs">
              {tabs.map((tab) => (
                <a
                  key={tab.name}
                  href={tab.href}
                  className={classNames(
                    tab.current
                      ? "bg-gray-200 text-gray-800"
                      : "text-gray-600 hover:text-gray-800",
                    "px-3 py-2 font-medium text-sm rounded-md"
                  )}
                  aria-current={tab.current ? "page" : undefined}
                >
                  {tab.name}
                </a>
              ))}
            </nav>
          </div>
          <div className="mt-8 flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                  <EmissionsYearly
                    key={data}
                    data={data}
                    source={data.source}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#17253D]">
        <RequestAccess />
      </div>
    </Layout>
  );
}
