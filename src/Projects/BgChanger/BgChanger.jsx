import React from 'react'
import { useState } from 'react'

const BgChanger = () => {
    const [color, setColor] = useState("black")
    const [boxcolor,setBoxcolor] = useState("white")
    // console.log("black");

    function colorChanger(bgChange,boxbgChange='white'){
        setColor(bgChange);
        setBoxcolor(boxbgChange)
    }

    return (
        <div className="h-screen w-screen flex items-center p-10"
            style={{ backgroundColor: color }}
        >
            <div className="min-w-min px-6 py-3 bg-white flex flex-col gap-4 justify-center rounded-xl"
            style={{backgroundColor: boxcolor}}
            >
                <button className='px-5 py-2 rounded-2xl border border-black'
                    style={{ backgroundColor: 'red' }}
                    onClick={() => colorChanger('red','black')}
                >Red</button>
                <button className='px-5 py-2 rounded-2xl border border-black'
                    style={{ backgroundColor: 'green' }}
                    onClick={() => colorChanger('green','red')}
                >green</button>
                <button className='px-5 py-2 rounded-2xl border border-black'
                    style={{ backgroundColor: 'blue' }}
                    onClick={() => colorChanger('blue','yellow')}
                >blue</button>
                <button className='px-5 py-2 rounded-2xl border-2 border-black'
                    style={{ backgroundColor: 'yellow' }}
                    onClick={() => colorChanger('yellow')}
                >yellow</button>
                <button className='px-5 py-2 rounded-2xl border border-black'
                    style={{ backgroundColor: 'indigo' }}
                    onClick={() => colorChanger('indigo')}
                >indigo</button>
                <button className='px-5 py-2 rounded-2xl border border-black'
                    style={{ backgroundColor: 'gray' }}
                    onClick={() => colorChanger('gray')}
                >gray</button>
                <button className='px-5 py-2 rounded-2xl border border-black'
                    style={{ backgroundColor: 'orange' }}
                    onClick={() => colorChanger('orange')}
                >orange</button>
                <button className='px-5 py-2 rounded-2xl border border-black'
                    style={{ backgroundColor: 'white' }}
                    onClick={() => colorChanger('white')}
                >white</button>
                <button className='px-5 py-2 rounded-2xl text-white border-2 border-white'
                    style={{ backgroundColor: 'black' }}
                    onClick={() => colorChanger('black')}
                >black</button>
            </div>
        </div>

    )
}

export default BgChanger