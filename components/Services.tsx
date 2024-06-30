import { services } from "@/constants/Index"
import ServiceCard from "./ServiceCard"


const Services = () => {
  return (
    <section id="services" className="max-container px-7 py-16">
        <div className="md:flex gap-6">
            {services.map((serv) => (
                <ServiceCard key={serv.label} {...serv}/>
            ))}
        </div>
    </section>
  )
}

export default Services