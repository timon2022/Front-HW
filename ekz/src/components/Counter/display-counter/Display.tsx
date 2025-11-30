type DisplayProps = {
    countValue: number
    isFull:number
}

export const Display = (props: DisplayProps) => {
    return (
        <div className="display" style={ props.isFull ? {color:"red"} : {color:"black"} }>
            {props.countValue}
        </div>
    )
}