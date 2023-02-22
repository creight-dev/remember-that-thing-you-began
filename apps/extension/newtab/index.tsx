import "./style.css"
import "@fontsource/sora/variable.css"

import {
  BellSimpleRinging,
  BellZ,
  CaretDown,
  DotsThreeVertical,
  HourglassMedium
} from "phosphor-react"

import DropdownMenu from "~components/shared/DropdownMenu"
import OptionsDropDown from "~components/shared/OptionsDropDown"
import HistoryItem from "~newtab/components/HistoryItem"
import TabedNaviation from "~newtab/components/TabedNavigation"

const NewTabPage = () => (
  <div className="h-full flex w-full overflow-hidden">
    <aside className="h-full w-64 border-r border-neutral-7 flex-shrink-0"></aside>
    <main className="flex-grow flex h-full">
      <div className="h-full flex-grow flex flex-col w-full flex">
        <header className="h-16 border-b border-neutral-7 flex-shrink-0"></header>
        <div className="max-w-6xl flex flex-grow w-full p-7 overflow-hidden">
          <div className="w-full px-8 flex-grow flex flex-col gap-y-7">
            <div className="flex-shrink-0 flex flex-col w-full border rounded-lg border-neutral-7">
              <div className="flex justify-between items-center p-6">
                <div>
                  <h1 className="text-4xl text-neutral-12 font-bold tracking-wider">
                    Good evening, Bit
                  </h1>
                  <p className="mt-1 text-lg">
                    Here’s what’s going on with your team Designspace
                  </p>
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-xl font-normal">Tuesday</span>
                  <span className="text-base text-neutral-10">
                    21 February, 2023
                  </span>
                </div>
              </div>
              <div className="h-16 border-t border-neutral-7 p-6 flex justify-between items-center">
                <div className="flex gap-x-6 items-center">
                  <span className="text-sm font-medium text-neutral-10">
                    What are you working on today?
                  </span>
                  <DropdownMenu />
                </div>
                <div className="flex gap-x-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center">
                    <HourglassMedium
                      size={20}
                      weight="regular"
                      className="text-neutral-11"
                    />
                  </span>
                  <span className="inline-flex h-6 w-6 items-center justify-center">
                    <BellSimpleRinging
                      size={20}
                      weight="regular"
                      className="text-neutral-11"
                    />
                  </span>
                  <span className="inline-flex h-6 w-6 items-center justify-center">
                    <BellZ
                      size={20}
                      weight="regular"
                      className="text-neutral-11"
                    />
                  </span>
                </div>
              </div>
            </div>
            {/* History Items */}
            <div className="space-y-4 flex-grow flex flex-col overflow-y-hidden">
              <TabedNaviation />
              <div className="flex flex-col gap-y-7 overflow-y-auto">
                <div className="rounded-xl border border-neutral-7 bg-neutral-2">
                  <div className="px-6 rounded-t-xl border-b border-neutral-7  flex items-center h-16 bg-neutral-1 justify-between">
                    <div className="flex items-center gap-x-3">
                      <div className="h-10 w-10 rounded bg-neutral-10"></div>
                      <h3 className="text-lg font-medium tracking-wide text-neutral-12">
                        YouTube.com
                      </h3>
                    </div>
                    <OptionsDropDown />
                  </div>
                  <HistoryItem />
                </div>
                <div className="rounded-xl border border-neutral-7 bg-neutral-2">
                  <div className="px-6 rounded-t-xl border-b border-neutral-7  flex items-center h-16 bg-neutral-1 justify-between">
                    <div className="flex items-center gap-x-3">
                      <div className="h-10 w-10 rounded bg-neutral-10"></div>
                      <h3 className="text-lg font-medium tracking-wide text-neutral-12">
                        YouTube.com
                      </h3>
                    </div>
                    <OptionsDropDown />
                  </div>
                  <HistoryItem />
                </div>
                <div className="rounded-xl border border-neutral-7 bg-neutral-2">
                  <div className="px-6 rounded-t-xl border-b border-neutral-7  flex items-center h-16 bg-neutral-1 justify-between">
                    <div className="flex items-center gap-x-3">
                      <div className="h-10 w-10 rounded bg-neutral-10"></div>
                      <h3 className="text-lg font-medium tracking-wide text-neutral-12">
                        YouTube.com
                      </h3>
                    </div>
                    <OptionsDropDown />
                  </div>
                  <HistoryItem />
                </div>
                <div className="rounded-xl border border-neutral-7 bg-neutral-2">
                  <div className="px-6 rounded-t-xl border-b border-neutral-7  flex items-center h-16 bg-neutral-1 justify-between">
                    <div className="flex items-center gap-x-3">
                      <div className="h-10 w-10 rounded bg-neutral-10"></div>
                      <h3 className="text-lg font-medium tracking-wide text-neutral-12">
                        YouTube.com
                      </h3>
                    </div>
                    <OptionsDropDown />
                  </div>
                  <HistoryItem />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <aside className="flex-shrink-0 w-96 border-l h-full border-l border-neutral-7"></aside>
    </main>
  </div>
)
export default NewTabPage
