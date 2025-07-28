import type { Dispatch } from "react"

const tipOptions = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },
]

type TipPercentageFormProps = {
    setTip: Dispatch<React.SetStateAction<number>>
    tip: number
}


export const TipPercentageForm = ({setTip, tip}: TipPercentageFormProps) => {
    return (
        <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl border border-gray-200">
            <h3 className="font-black text-2xl text-gray-800 mb-6 flex items-center gap-2">
                💰 Propina:
            </h3>
            <form className="space-y-3">
                {tipOptions.map(tipOption => (
                    <div key={tipOption.id} className="flex items-center">
                        <input 
                            id={tipOption.id} 
                            type="radio" 
                            name="tip" 
                            value={tipOption.value} 
                            onChange={ e => setTip(Number(e.target.value))}
                            checked={tipOption.value === tip}
                            className="sr-only peer"
                        />
                        <label 
                            htmlFor={tipOption.id}
                            className="flex items-center justify-center w-full p-3 text-gray-700 font-semibold bg-white border-2 border-gray-200 rounded-lg cursor-pointer hover:border-indigo-300 hover:bg-indigo-50 peer-checked:border-indigo-500 peer-checked:bg-indigo-100 peer-checked:text-indigo-700 transition-all duration-200"
                        >
                            {tipOption.label}
                        </label>
                    </div>
                ))}
            </form>
        </div>
    )
}
