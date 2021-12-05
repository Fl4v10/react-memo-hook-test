import React from "react"

const TestFuncComponent = () => {
    console.log("I just render once!");

    return (
        <div>
            I am a Funtional Memorized Component
        </div>
    )
}
export const MemodFuncComponent = React.memo(TestFuncComponent)