import type { PropsWithChildren } from 'react'

function Main(props: PropsWithChildren) {
  return (
    <main className="flex-col flex-1">
      {props.children}
    </main>
  )
}

export default Main
