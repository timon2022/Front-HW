type Props = {
  title: string
  onClick?: () => void
  className?: string
}

export const Button = (props: Props) => {
  return <button {...props} >{props.title}</button>
}
