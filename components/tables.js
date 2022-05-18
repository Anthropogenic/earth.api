function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DataTableTabs({ preview, children }) {

const tabs = [
  { name: 'Yearly', href: '/co2/yearly', current: true },
  { name: 'Monthly', href: '/co2/monthly', current: false },
  { name: 'Weekly Members', href: '/co2/weekly', current: false },
]
  return (
    <>
    
    
    
    
    NEST THE TABS AS PAGES FOR NOW AN MOCE TO A COMOINET globalTemperatureYearly
    
   <div>
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
                tab.current ? 'bg-gray-200 text-gray-800' : 'text-gray-600 hover:text-gray-800',
                'px-3 py-2 font-medium text-sm rounded-md'
              )}
              aria-current={tab.current ? 'page' : undefined}
            >
              {tab.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
    </>
  );
}
