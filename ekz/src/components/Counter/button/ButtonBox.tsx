import { Button } from "./Button"
type ButtonBoxProps  = {
        setValue: () => void
        resetValue: () => void
        startValue: number
        maxValue: number

}
export const ButtonBox = ( {setValue,resetValue,startValue,maxValue} : ButtonBoxProps) => {
return (
    <div className="container-btn">
        <Button disabled = {startValue === maxValue} onClick = {setValue} title="inc"/> 
        <Button disabled = {startValue < maxValue} onClick = {resetValue} title="reset"/> 
    </div>
)
}