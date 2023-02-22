import {
  CalendarBlank,
  Folder,
  IdentificationBadge,
  MapTrifold
} from "phosphor-react"

const positions = [
  {
    id: 1,
    title: "Back End Developer",
    type: "Full-time",
    location: "Remote",
    department: "Engineering",
    closeDate: "2020-01-07",
    closeDateFull: "January 7, 2020"
  },
  {
    id: 2,
    title: "Front End Developer",
    type: "Collection",
    location: "Remote",
    department: "Engineering",
    closeDate: "2020-01-07",
    closeDateFull: "January 7, 2020"
  },
  {
    id: 3,
    title: "User Interface Designer",
    type: "Bookmarked",
    location: "Remote",
    department: "Design",
    closeDate: "2020-01-14",
    closeDateFull: "January 14, 2020"
  }
]

const HistoryItem = () => (
  <div className="bg-neutral-1 overflow-hidden rounded-b-xl">
    <ul role="list" className="divide-neutral-6 divide-y divide-dashed">
      {positions.map((position) => (
        <li key={position.id}>
          <a href="#" className="hover:bg-neutral-2 block">
            <div className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <p className="truncate text-sm font-medium">{position.title}</p>
                <div className="ml-2 flex flex-shrink-0">
                  <p className="bg-neutral-1 border-neutral-7 text-neutral-9 inline-flex rounded-full border px-2 text-xs font-normal leading-5">
                    {position.type}
                  </p>
                </div>
              </div>
              <div className="mt-2 sm:flex sm:justify-between">
                <div className="sm:flex">
                  <p className="flex items-center text-sm text-gray-500">
                    <Folder
                      size={20}
                      className="mr-1.5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    {position.department}
                  </p>
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                  <CalendarBlank
                    size={20}
                    className="mr-1.5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  <p>
                    Closing on{" "}
                    <time dateTime={position.closeDate}>
                      {position.closeDateFull}
                    </time>
                  </p>
                </div>
              </div>
            </div>
          </a>
        </li>
      ))}
    </ul>
  </div>
)
export default HistoryItem
