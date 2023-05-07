

const TableData: React.FC = () => {
    return (
        <>
            <div>

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Student Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Semester
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Branch
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Gender
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    John Doe
                                </th>
                                <td className="px-6 py-4">
                                    3rd
                                </td>
                                <td className="px-6 py-4">
                                    CSE
                                </td>
                                <td className="px-6 py-4">
                                    M
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Kuber Nan
                                </th>
                                <td className="px-6 py-4">
                                    4th
                                </td>
                                <td className="px-6 py-4">
                                    ME
                                </td>
                                <td className="px-6 py-4">
                                    F
                                </td>
                                
                            </tr>
                            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Salman 
                                </th>
                                <td className="px-6 py-4">
                                    4th
                                </td>
                                <td className="px-6 py-4">
                                    IT
                                </td>
                                <td className="px-6 py-4">
                                    T
                                </td>
                               
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )
}


export default TableData