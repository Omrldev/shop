import Button from "./Button"


const Subscribe = () => {
  return (
    <section className="max-container w-full py-16">
        <div className="lg:max-w-xl md:flex flex-col justify-center items-center mx-auto">
            <h2 className="text-3xl md:text-5xl font-semibold mb-7 text-center">Inscribete a nuestra 
                <span className="text-indigo-500"> Newsletter</span>
            </h2>
            <div className="border-slate-200 border-2 px-3 h-12 w-full rounded-full flex items-center justify-between">
                <input type="text" placeholder="you@example.com" className="outline-none w-full"/>

                <div className="flex justify-end items-center md:w-56 w-full relative -top-3.5">
                    <Button type="submit" title="Sign up" variant="btn-indigo" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Subscribe