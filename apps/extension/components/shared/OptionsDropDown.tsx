import { Menu, Transition } from "@headlessui/react"
import { DotsThreeVertical, FolderPlus } from "phosphor-react"
import { Fragment } from "react"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const OptionsDropdown = () => (
  <Menu as="div" className="relative inline-block text-left">
    <div>
      <Menu.Button className="flex items-center rounded-full   hover:text-neutral-12 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
        <span className="sr-only">Open options</span>
        <DotsThreeVertical size={20} weight="regular" aria-hidden="true" />
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
      <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md border border-neutral-7 bg-neutral-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1">
          <Menu.Item>
            {({ active }) => (
              <a
                href="apps/extension/components/shared#"
                className={classNames(
                  active ? "bg-neutral-3" : "text-neutral-10",
                  "block px-4 py-2 text-sm"
                )}>
                Clear from history
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="apps/extension/components/shared#"
                className={classNames(
                  active ? "bg-neutral-3" : "text-neutral-10",
                  "block px-4 py-2 text-sm"
                )}>
                Add to session
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="apps/extension/components/shared#"
                className={classNames(
                  active ? "bg-neutral-3" : "text-neutral-10",
                  "block px-4 py-2 text-sm"
                )}>
                Set limits
              </a>
            )}
          </Menu.Item>
          <form method="POST" action="apps/extension/components/shared#">
            <Menu.Item>
              {({ active }) => (
                <button
                  type="submit"
                  className={classNames(
                    active ? "bg-neutral-3" : "text-neutral-10",
                    "block w-full px-4 py-2 text-left text-sm"
                  )}>
                  Associate with project
                </button>
              )}
            </Menu.Item>
          </form>
        </div>
      </Menu.Items>
    </Transition>
  </Menu>
)
export default OptionsDropdown
