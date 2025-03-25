import type { PropsWithChildren } from 'react'

function Main(props: PropsWithChildren) {
  return (
    <main className="flex-col flex-1">
      <div className="flex flex-col w-full">
        {props.children}
      </div>
    </main>
  )
}

export default Main
