import {useState} from "react";
import axios from "axios"

function CarCreator() {

    const[brand, setBrand] = useState('')
    const[license_plate_number, setLicense_plate_number] = useState('')
    const[model, setModel] = useState('')
    const[daily_cost, setDaily_cost] = useState(0)
    const[error, setError] = useState('')

    function handleSubmit() {
        const body = {
            brand: brand,
            license_plate_number: license_plate_number,
            model: model,
            daily_cost: daily_cost
        }

        if(brand.trim() === '') {
            setError('A márka mező nem lehet üres!')
        } else if(license_plate_number.trim() === '') {
            setError('A rendszám mező nem lehet üres!')
        } else if(model.trim() === '') {
            setError('A modell mező nem lehet üres!')
        } else if(isNaN(daily_cost) || daily_cost === 0) {
            setError('A napi díj mező nem lehet üres vagy 0!')
        } else {
            console.log(body)
            axios.post('http://localhost:3000/cars', body)
                .then()
                .catch((e) => console.log(e))
        }
    }
    return(
        <div className="w-full p-4">
            <p className="text-3xl font-semibold"> Autó létrehozása </p>
            <div>
                <form className="flex flex-col space-y-4 justify-items-center">
                        <input type="text" className="border-2 border-black h-8 w-80 p-2" placeholder={'Márka'}
                               onChange={(text) => setBrand(text.target.value)}/>
                        <input type="text" className="border-2 border-black h-8 w-80 p-2" placeholder={'Rendszám'}
                               onChange={(text) => setLicense_plate_number(text.target.value)}/>
                        <input type="text" className="border-2 border-black h-8 w-80 p-2" placeholder={'Modell'}
                               onChange={(text) => setModel(text.target.value)}/>
                        <input type="number" className="border-2 border-black h-8 w-80 p-2" placeholder={'Napi díj'}
                               onChange={(value) => setDaily_cost(parseInt(value.target.value))}/>
                    <p className="text-red-500 font-bold">{error}</p>
                    <input type="button" onClick={handleSubmit} value="Létrehozás" className="cursor-pointer
                    border-black border-2 text-left font-semibold w-32 rounded-xl pl-5"></input>
                </form>
            </div>
        </div>
    )
}

export default CarCreator;