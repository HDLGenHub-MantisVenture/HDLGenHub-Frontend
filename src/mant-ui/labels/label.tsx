interface LabelProps {
    className?: string;
    children:string;
}

export const Label:React.FC<LabelProps>=({className, children})=>{
    return(
        <div className={className}>
          {children}
        </div>
    )
}
