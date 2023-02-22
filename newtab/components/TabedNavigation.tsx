import { ArchiveTray, ClockCounterClockwise, FolderOpen } from "phosphor-react"

const tabs = [
  {
    name: "Browsing Activity",
    href: "#",
    icon: ClockCounterClockwise,
    current: true
  },
  { name: "Projects", href: "#", icon: FolderOpen, current: false },
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
                  ? "border-primary-500 text-primary-600"
                  : "border-transparent text-neutral-10 hover:text-neutral-11 hover:border-neutral-8",
                "group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm"
              )}
              aria-current={tab.current ? "page" : undefined}>
              <tab.icon
                weight="duotone"
                className={classNames(
                  tab.current
                    ? "text-primary-100"
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
