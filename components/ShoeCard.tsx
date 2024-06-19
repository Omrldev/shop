import { shoes } from "@/constants/Index"
import ShoeCardCustom from "./ShoeCardCustom"
import bigShoe1 from "../public/assets/images/bigshoe1.png";
import { useState } from "react";


const ShoeCard = () => {
    const [bigshoe, setBigShoe] = useState(bigShoe1)

  return (
    <div className="hidden xl:flex justify-center items-center absolute -bottom-7 flex-1">
        {shoes.map((shoe) => (
            <div key={shoe.bigShoe}>
                <ShoeCardCustom imgURL={shoe.miniatura} changeBigShoe={()=>{}} currentBigShoe={shoe.bigShoe}/>
            </div>
        ))}
    </div>
  )
}

export default ShoeCard
