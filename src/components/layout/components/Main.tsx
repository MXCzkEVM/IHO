import type { PropsWithChildren } from 'react'

function Main(props: PropsWithChildren) {
  return (
    <main className="flex-col flex-1">
      <div className="flex megadrop relative flex-col items-center justify-center mobile:px-4 tablet:px-6 ">
        {props.children}
      </div>
    </main>
  )
}

export default Main
