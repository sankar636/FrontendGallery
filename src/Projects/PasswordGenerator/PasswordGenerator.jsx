import { useCallback, useState,useRef,useEffect } from "react"


function PasswordGenerator(){
    const [length,setLength] = useState(0);
    const [numberAllowed,setNumberAllowed] = useState(false);
    const [charAllowed,setCharAllowed] = useState(true);

    const [passward,setPassward] = useState("");
     
    //useRef
    const passwardRef = useRef(null);
    
    
    const passwrdGenerator = useCallback(() =>{
        let pass = ""; 
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        if(numberAllowed){
            str += "0123456789";
        }
        if(charAllowed){
            str += "!@#$%^&*-_=+`~[]{}";
        }

        for (let i = 1; i <= length; i++) {
           let char = Math.floor(Math.random()*str.length+1)
           pass += str.charAt(char); 
        }
        setPassward(pass);

    },[length,numberAllowed,charAllowed,setPassward]);

    //for copyAt clipboard
    let copyAtClipBoard = useCallback(()=>{
        passwardRef.current?.select();// this is for select the passward(i.e for blue background).?-> for optional if there is empty in the input box then it did not select
        passwardRef.current?.setSelectionRange(0,10);
        window.navigator.clipboard.writeText(passward);//to copy passward at clipboard

    },[passward])

    useEffect(()=>{
        passwrdGenerator();
    },[length,numberAllowed,charAllowed,setPassward])
    // passwrdGenerator(); 
    return(
        <>
            <h1 className="text-4xl text-black flex-row text-center">Passward Generator</h1>
            <div className="w-full max-w-md bg-gray-500 mx-auto shadow-md rounded-lg px-4 my-8 text-orange-400">
                <div className="flex rounded-lg overflow-hidden mt-4 p-4">
                    <input 
                    type="text" 
                    value = {passward}
                    className="py-1 px-3 outline-none w-full"
                    //for useRef
                    ref={passwardRef}
                    onChange={(e)=>setPassward(e.target.value)}
                    />
                    <button 
                    className="bg-blue-500 px-2 text-white text-[18px] shrink-0"
                    onClick={copyAtClipBoard}
                    >Copy</button>
                </div>
                <div className="flex gap-x-2 text-sm">
                    <div className="flex items-center gap-x-1">
                        <input 
                        type="range" 
                        min ={8}
                        max={100}
                        value={length}
                        className="cursor-pointer"
                        onChange={(e)=>{setLength(e.target.value)}}
                        />
                        <label>length: {length}</label>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input 
                        type="checkbox" 
                        defaultChecked = {numberAllowed}
                        onClick={()=>{setNumberAllowed((prev) => !prev);}}
                        />
                        <label>Number</label>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input 
                        type="checkbox" 
                        defaultChecked = {charAllowed}
                        onClick={()=>{setCharAllowed((prev) => !prev);}}
                        />
                        <label>Character</label>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PasswordGenerator;