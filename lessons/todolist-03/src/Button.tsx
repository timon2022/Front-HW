type Props = {
  title: string
  onClick?: () => void
  dialog?: boolean
}

export const Button = ({ title, onClick , dialog}: Props) => {
  return <button disabled = {dialog} onClick={onClick}>{title}</button>
}
