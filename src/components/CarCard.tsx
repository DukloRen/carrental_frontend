import CarDTO from "../interfaces/CarDTO.ts";
import axios from "axios";
import {useState} from "react";

function CarCard(car: CarDTO) {

    const [rentalMsg, setRentalMsg] = useState(false)
    const [rentalMsg2, setRentalMsg2] = useState(false)
    function handleRental() {
        axios.post('http://localhost:3000/cars/api/cars/' + car.id + '/rent')
            .then(() =>setRentalMsg(!rentalMsg))
            .catch(() => setRentalMsg2(!rentalMsg2))
    }

    return(
        <>
            <div className="border-2 border-black h-11/12 mb-8 w-96 space-y-4 p-5">
                <h1 className="text-3xl font-bold">{car.license_plate_number}</h1>
                <p className="text-xl">Márka: {car.brand}</p>
                <p className="text-xl">Modell: {car.model}</p>
                <p className="text-xl">Napidíj: {car.daily_cost}</p>
                <img className="" src={`../../images/${car.brand + '_' + car.model}.png`} alt={'Autó képe'}/>
                <button onClick={handleRental}>Kölcsönzés</button>
                {rentalMsg && (<p className="text-green-500">Sikeres kölcsönzés!</p>)}
                {rentalMsg2 && (<p className="text-red-500">Siekrtelen kölcsönzés!</p>)}
            </div>
        </>
    )
}

export default CarCard;