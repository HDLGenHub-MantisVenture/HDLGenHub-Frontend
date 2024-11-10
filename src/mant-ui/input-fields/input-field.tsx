interface InputFieldProps {
    className?: string;
    subClass?:string;
    placeholder?:string;
}

export const InputField:React.FC<InputFieldProps>=({className, subClass, placeholder})=>{
    return(
        <div className={className}>
            <input className={`shadow-lg rounded-md h-8 w-full p-4 focus:border-none focus:ring-ring focus:ring-0 ${subClass}`} placeholder={placeholder}></input>
        </div>
    )
}
