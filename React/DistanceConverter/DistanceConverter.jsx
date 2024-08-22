import { useState } from "react"

const conversition ={
    Centimeter:1,
    Inches:2.54,
    Feet:30.48,
    Meters:100,
    Kilometers:100000,
    Miles:160934.4
}
export default function App(){

    const [input,setInput] = useState()
    const [output,setOutput] = useState()
    const [from,setFrom] = useState()
    const [to,setTo] = useState()

    function handleConvert(){
        const input1 = parseFloat(input)
        console.log("result" ,input1);
        console.log("from" ,from);
        console.log("to" ,to);

        const baseUnit = input1 * conversition[from]
        const result = baseUnit / conversition[to]
        setOutput(result.toFixed(3))
    }

    return(
        <div>
           From :   <select name="Units" id="" onChange={(e) => setFrom(e.target.value)}>
                <option value="Centimeter">Centimeter</option>
                <option value="Inches">Inches</option>
                <option value="Feet">Feet</option>
                <option value="Meters">Meters</option>
                <option value="Kilometers">Kilometers</option>
                <option value="Miles">Miles</option>
            </select>
            <br />
            <br />
            To :    <select name="Units" id="" onChange={(e) => setTo(e.target.value)}>
                <option value="Centimeter">Centimeter</option>
                <option value="Inches">Inches</option>
                <option value="Feet">Feet</option>
                <option value="Meters">Meters</option>
                <option value="Kilometers">Kilometers</option>
                <option value="Miles">Miles</option>
            </select>
            <br />
            <br />

            <input type="number" placeholder="input number" onChange={(e) => setInput(e.target.value)} />
            <br />
            <br />

            <button onClick={handleConvert}>Convert</button>
            <br />
            <p>Result : {output}</p>
        </div>
    )
}
