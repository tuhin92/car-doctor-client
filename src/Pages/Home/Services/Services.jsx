import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=> {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    return (
        <div>
            <div className="text-center space-y-5">
                <h3 className="text-xl font-bold text-[#FF3811]">Services</h3>
                <h2 className="text-5xl font-bold">Our Service Area</h2>
                <p className="text-gray-500">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;