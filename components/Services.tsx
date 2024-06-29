import { services } from "@/constants/Index"
import ServiceCard from "./ServiceCard"


const Services = () => {
  return (
    <section id="services" className="max-container p-3">
        <div className="md:flex gap-6">
            {services.map((serv) => (
                <ServiceCard key={serv.label} {...serv}/>
            ))}
        </div>
    </section>
  )
}

export default Services