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
            <Link href={YearHref}>
              <a className="bg-gray-200 px-3 py-2 font-medium text-sm rounded-md text-gray-600 hover:text-gray-800">
                Yearly
              </a>
            </Link>
            <Link href={MonthHref}>
              <a className="bg-gray-200 px-3 py-2 font-medium text-sm rounded-md text-gray-600 hover:text-gray-800">
                Monthly
              </a>
            </Link>
            {WeekHref && (
              <Link href={WeekHref}>
                <a className="bg-gray-200 px-3 py-2 font-medium text-sm rounded-md text-gray-600 hover:text-gray-800">
                  Weekly
                </a>
              </Link>
            )}
            {DayHref && (
              <Link href={DayHref}>
                <a className="bg-gray-200 px-3 py-2 font-medium text-sm rounded-md text-gray-600 hover:text-gray-800">
                  Daily
                </a>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </>
  );
}
