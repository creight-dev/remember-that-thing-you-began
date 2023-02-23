import React, { Fragment, ReactNode } from "react"
import { cx } from "class-variance-authority"
import { Tab } from "@headlessui/react"

export interface TabObject {
  icon?: ({
    weight
  }: {
    weight?: "regular" | "duotone" | "bold" | "thin"
  }) => JSX.Element
  label: String
}

export type TabbedPanelsProps = {
  defaultTab?: number
  // Should be an integer from [1,n] where n is the number of tabs
  selected?: number
  onTabChanged?: (index: number) => void

  tabs: Array<TabObject>
  panels: Array<ReactNode>
}

const TabbedPanels = ({
  defaultTab,
  selected,
  onTabChanged,
  tabs,
  panels
}: TabbedPanelsProps) => {
  return (
    <Tab.Group>
      <Tab.List className="-mb-px flex space-x-8">
        {tabs.map((tab) => (
          <Tab as={Fragment} key={tab.label}>
            {({ selected }) => (
              <button
                className={cx(
                  selected
                    ? "border-orange-500 text-orange-600"
                    : "text-neutral-10 hover:text-neutral-11 hover:border-neutral-8 border-transparent",
                  "group inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium focus:outline-none focus:ring-0"
                )}
                aria-current={selected ? "page" : undefined}>
                <tab.icon
                  weight="duotone"
                  className={cx(
                    selected
                      ? "text-orange-100"
                      : "text-neutral-10 group-hover:text-neutral-11",
                    "-ml-0.5 mr-2 h-5 w-5"
                  )}
                  aria-hidden="true"
                />
                <span>{tab.label}</span>
              </button>
            )}
          </Tab>
        ))}
      </Tab.List>
      <div className="flex flex-col gap-y-7 overflow-y-auto">
        <Tab.Panels>
          {panels.map((panel) => (
            <Tab.Panel>{panel}</Tab.Panel>
          ))}
        </Tab.Panels>
      </div>
    </Tab.Group>
  )
}

export default TabbedPanels
