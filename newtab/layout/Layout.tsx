import type { ReactNode } from "react"
import TabedNavigation from "~newtab/components/TabedNavigation"

export type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-full w-full overflow-hidden">
      {/* Site-wide Sidebar */}
      <aside className="border-neutral-7 flex h-full w-64 shrink-0 border-r"></aside>
      {/* Main Container  */}
      <main className="flex h-full flex-grow">
        <div className="flex flex h-full w-full flex-grow flex-col">
          {/* Site-wide Appbar */}
          <header className="border-neutral-7 h-16 flex-shrink-0 border-b"></header>
          {/* Content Wrapper */}
          <div className="flex w-full max-w-6xl flex-grow overflow-hidden p-7">
            <div className="flex w-full flex-grow flex-col gap-y-7 px-8">
              {/*  Welcome Banner */}
              <div className="border-neutral-7 flex w-full flex-shrink-0 flex-col rounded-lg border">
                {/*  -------- Banner Content Here -------- */}
              </div>
              {/*  --------- Content Container -------- */}
              <div className="flex flex-grow flex-col space-y-4 overflow-y-hidden">
                {/* -------- Subpage Navigation Here --------- */}
                <TabedNavigation />
                {/*  Scrollable Content */}
                <div className="flex flex-col gap-y-7 overflow-y-auto">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Contextual Sidebar */}
        <aside className="border-neutral-7 h-full w-96 flex-shrink-0 border-l"></aside>
      </main>
    </div>
  )
}

export default Layout
