type ButtonProps =
    {
        onClick: () => void
        disabled?: boolean
        title: string
    }

export const Button = (props:ButtonProps) => {
return (
    <button  {...props}> {props.title} </button>
)
}