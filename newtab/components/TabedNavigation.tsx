import { ArchiveTray, ClockCounterClockwise, FolderOpen } from "phosphor-react"

const tabs = [
  {
    name: "Browsing Activity",
    href: "#",
    icon: ClockCounterClockwise,
    current: true
  },
  { name: "Sessions", href: "#", icon: ArchiveTray, current: false }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const TabedNaviation = () => (
  <div>
    <div className="sm:hidden">
      <label htmlFor="tabs" className="sr-only">
        Select a tab
      </label>
      {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
      <select
        id="tabs"
        name="tabs"
        className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
        defaultValue={tabs.find((tab) => tab.current).name}>
        {tabs.map((tab) => (
          <option key={tab.name}>{tab.name}</option>
        ))}
      </select>
    </div>
    <div className="hidden sm:block">
      <div className="">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {tabs.map((tab) => (
            <a
              key={tab.name}
              href={tab.href}
              className={classNames(
                tab.current
                  ? "border-orange-500 text-orange-600"
                  : "text-neutral-10 hover:text-neutral-11 hover:border-neutral-8 border-transparent",
                "group inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium"
              )}
              aria-current={tab.current ? "page" : undefined}>
              <tab.icon
                weight="duotone"
                className={classNames(
                  tab.current
                    ? "text-orange-100"
                    : "text-neutral-10 group-hover:text-neutral-11",
                  "-ml-0.5 mr-2 h-5 w-5"
                )}
                aria-hidden="true"
              />
              <span>{tab.name}</span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  </div>
)
export default TabedNaviation
