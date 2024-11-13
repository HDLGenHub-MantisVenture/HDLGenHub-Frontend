import { InputField } from "../../mant-ui/input-fields/input-field";
import { Label } from "../../mant-ui/labels/label";

const  LoginPage =()=>{
    return(
            <div className="w-full h-full flex items-center justify-center px-8">
                <div className="border-2 border-black max-w-[1200px] max-h-[800px] h-full w-full shadow-xl flex">
                    <div className="w-1/2 border">Left</div>
                    <div className="w-1/2 border">
                        <div className="w-full h-full p-24 border border-red-400">
                            <div className="border h-full">
                                <Label className="text-xs">Name</Label>
                                <InputField placeholder="Name"></InputField>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default LoginPage;