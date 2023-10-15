import {useState} from "react";

const PlanTable = ({headers, items, prices}) => {
    const [hover, setHover] = useState('')

    return (
        <table className={'table'}>
            <thead>
            <tr className={'headers'}>
                {headers.map((header, index) =>
                    <th key={index} className={'header'}>
                        {header}
                    </th>
                )}
            </tr>
            </thead>
            <tbody>
            {items.map((item, index) =>
                <tr onMouseEnter={() => setHover(item.name)} onMouseLeave={() => setHover('')} className={`${item.name === hover ? 'hover': ''}`} key={index}>
                    {Object.keys(item).map((key, keyItem) =>
                        <td key={`${key}_${index}_${keyItem}`}>
                            {item[key]}
                        </td>
                    )}
                </tr>
            )}
                <tr className={'prices'}>
                    {prices &&
                        <>
                            <td />
                            {prices?.map(price =>
                                <td>
                                    {price}
                                </td>
                            )}
                        </>
                    }
                </tr>
            </tbody>
        </table>
    )
}
export default PlanTable
