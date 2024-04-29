import CarCard from "./components/CarCard.tsx";
import {useEffect, useRef, useState} from "react";
import axios from 'axios'
import carDTO from "./interfaces/CarDTO.ts";
import CarCreator from "./components/CarCreator.tsx";
import titleChange from "./components/TitleChange.tsx";

function App() {

    const [cars, setCars] = useState<carDTO[]>()
    const myRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        axios.get('http://localhost:3000/cars/api/cars')
            .then((res) => {
                console.log('response: ' + res.data)
                setCars(res.data)})
            .catch((e) => console.log(e))
    }, []);

  return (
      <>
          <div className="p-8">
              <div className="flex flex-row w-full">
                  <div>
                      <button onClick={() => myRef.current?.scrollIntoView({behavior: "smooth"})}>
                          Új autó felvétele
                      </button>
                  </div>
                  <div className="ml-5">
                      <a href={'https://www.petrik.hu'} target="_blank">
                          Petrik honlap
                      </a>
                  </div>
              </div>
              <h1 className="text-4xl font-semibold underline underline-offset-1">
                  Petrik autókölcsönző
              </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 p-16">
              {cars?.map(car => (
                  <CarCard id={car.id} license_plate_number={car.license_plate_number} brand={car.brand}
                           model={car.model}
                           daily_cost={car.daily_cost}/>
              ))}
          </div>
          <p className="ml-5">Készítette: Bárány Benedek 2/14.S</p>
          <hr className="border-black w-1/2 ml-5"/>
          <section ref={myRef}>
              <CarCreator/>
          </section>
          {titleChange()}
      </>
  )
}

export default App
