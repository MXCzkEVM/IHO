declare namespace JSX {
  interface IntrinsicElements extends Record<AttributifyNames, IntrinsicElements['div']> {
    [key: string]: IntrinsicElements['div']
  }
}
