import { useRef, useState } from "react";

const Otp = ({otpLength = 6})=>{
    const [otpFields,setOtpFields] = useState(new Array(otpLength).fill(""))
    const ref = useRef([])
    const handleKey = (e,index)=>{
        const key = e.key;
        const copyOfOtpFields = [...otpFields];
        if(key === "Backspace")
        {
            copyOfOtpFields[index] = "";
            setOtpFields(copyOfOtpFields);
            index > 0 && ref.current[index-1].focus()
        }

        if(key === "ArrowRight"){
            index < otpLength-1 && ref.current[index+1].focus()
        }

        if(key === "ArrowLeft"){
            index > 0 && ref.current[index-1].focus()
        }
        if(isNaN(key)) return;
        copyOfOtpFields[index] = key
        index < otpLength-1 && ref.current[index+1].focus()
        setOtpFields(copyOfOtpFields)

    }
    return (
        <>
        {
            otpFields.map((value,index)=>{
                return <input 
                key={index}
                type="text"
                value={value}
                ref={(currentInput)=>ref.current[index] = currentInput}
                onKeyDown={(e)=>handleKey(e,index)}
            />
            })
        }
            
        </>
    )

}

export default Otp;