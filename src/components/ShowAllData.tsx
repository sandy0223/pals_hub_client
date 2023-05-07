import React from "react"
import TableData from "./TableData"


const ShowAllData: React.FC = () => {
    return (
        <>
            <div className="text-3xl text-center">
                Success is not final, failure is not fatal: it is the courage to continue that counts . . .
            </div>

            <div className="mt-16">
                <TableData />
            </div>



        </>
    )
}

export default ShowAllData