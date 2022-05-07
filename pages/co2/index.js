import Link from "next/link"
import Image from "next/image"
import useSWR from "swr";
import Layout from "../../components/layout";
import EmissionsYearly from "../../components/yearly";
import RequestAccess from "../../components/request"
import DataTableTabs from "../../components/tables"



const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
  const { data, error } = useSWR("/api/co2", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Layout>
    <div className="flex">
    <div className="w-full sm:w-1/3">
    <div className="w-full">co<sub>2</sub></div>
    <div className="w-full uppercase">Emissions Data</div>
    <div className="w-full">Small description about the data we are collecting for co2 etc.. this should probably be just one or two lines long.</div>

</div>
    <div className="w-full sm:w-2/3">
      Image goes here
    {/* <Image
      src="me.png"
      alt="Picture of the author"
      width={500}
      height={500}
    /> */}
    </div>

</div>


    <div className="flex">
    <DataTableTabs/>

 
</div>
    <div className="flex">
 addational
</div>
   <div className="flex">
 <RequestAccess />
</div>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-gray-900">
              Yearly Carbon Data
            </h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all the users in your account including their name,
              title, email and role.
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Year
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Mean
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        UNC
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    <EmissionsYearly
                      key={data}
                      data={data}
                      source={data.source}
                    />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
