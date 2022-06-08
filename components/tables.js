import Link from "next/link";
import { useRouter } from "next/router";

export default function DataTableTabs({
  YearHref,
  MonthHref,
  WeekHref,
  DayHref,
}) {
  const { asPath } = useRouter();
  const DataRouteURL = asPath.substring(1);

  return (
    <>
      <div className="flex text-white">
        <div className="hidden sm:block">
          <nav className="flex space-x-4" aria-label="Tabs">
            <Link href={DataRouteURL + "/yearly"}>
              <a className="bg-gray-200 px-3 py-2 font-medium text-sm rounded-md text-gray-600 hover:text-gray-800">
                Yearly
              </a>
            </Link>
            <Link href={DataRouteURL + "/monthly"}>
              <a className="bg-gray-200 px-3 py-2 font-medium text-sm rounded-md text-gray-600 hover:text-gray-800">
                Monthly
              </a>
            </Link>
            {/* <Link href={DataRouteURL + "/weekly"}>
              <a className="bg-gray-200 px-3 py-2 font-medium text-sm rounded-md text-gray-600 hover:text-gray-800">
                Weekly
              </a>
            </Link> */}
          </nav>
        </div>
      </div>
    </>
  );
}
