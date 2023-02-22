import { Menu, Transition } from "@headlessui/react"
import clsx from "clsx"
import { DotsThreeVertical, FolderPlus } from "phosphor-react"
import { Fragment } from "react"

const DropdownMenu = () => (
  <Menu as="div" className="relative inline-block text-left">
    <div>
      <Menu.Button
        className="bg-neutral-1 inline-flex w-full justify-center rounded-md border border-neutral-7
        px-4 py-2 text-sm font-medium text-neutral-12 shadow-sm hover:bg-neutral-3 focus:outline-none focus:ring-2
        focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-neutral-8">
        Options
        <DotsThreeVertical
          size={20}
          weight="regular"
          className="-mr-1 ml-2 h-5 w-5"
          aria-hidden="true"
        />
      </Menu.Button>
    </div>

    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95">
      <Menu.Items
        className="bg-neutral-1 absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md
        shadow-lg ring-1 ring-neutral-12 ring-opacity-5 focus:outline-none">
        <div className="px-4 py-2 border-b border-neutral-6">
          <p className="truncate text-sm font-medium">Projects</p>
        </div>
        <div className="py-1">
          <Menu.Item>
            {({ active }) => (
              <a
                href="apps/extension/components/shared#"
                className={clsx(
                  active ? "bg-neutral-3" : "text-neutral-10",
                  "block px-4 py-2 text-sm"
                )}>
                Account settings
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="apps/extension/components/shared#"
                className={clsx(
                  active ? "bg-neutral-3" : "text-neutral-10",
                  "block px-4 py-2 text-sm"
                )}>
                Support
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="apps/extension/components/shared#"
                className={clsx(
                  active ? "bg-neutral-3" : "text-neutral-10",
                  "block px-4 py-2 text-sm"
                )}>
                License
              </a>
            )}
          </Menu.Item>
        </div>
        <div className="py-1 border-t border-neutral-6">
          <form method="POST" action="apps/extension/components/shared#">
            <Menu.Item>
              <button
                type="submit"
                className={clsx(
                  "inline-flex gap-x-3 w-full px-4 py-2 text-left text-sm hover:text-primary-400"
                )}>
                <FolderPlus size={20} weight="regular" />
                <span>Create project</span>
              </button>
            </Menu.Item>
          </form>
        </div>
      </Menu.Items>
    </Transition>
  </Menu>
)
export default DropdownMenu
