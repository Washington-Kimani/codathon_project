function Home() {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="w-[90%] lg:w-[80%] h-fit lg:h-[70vh] flex flex-col lg:flex-row justify-center items-center py-4 px-2 bg-gradient-to-br from-teal-600 via-emerald-300 to-teal-800">
                <img src="/images/bag_1.jpg" alt="bag one" className="block w-fit lg:w-[40%] rounded-md"/>
                <div className="w-full flex flex-col text-black">
                    <h3 className="text-3xl font-bold text-center mb-3 underline">
                        Welcome to the utopia of lost stuff
                    </h3>
                    <article className={"px-4"}>
                        <p>
                            We are a community of people who are looking for lost or found items. We want to help you find them and bring them back home.<br/><br/>
                            Losing something can be stressful, but we are here to help you reconnect with your lost belongings or reunite someone with what they've found.</p>
                        <h3 className={"mt-3 font-bold"}>✨ Looking for Something?</h3>
                        <p>
                            Search our database to find your missing items.
                        </p>
                        <h3 className={"mt-3 font-bold"}>✨ Found Something?</h3>
                        <p>
                            Do a good deed—list it here and help it find its way back home!
                        </p>
                        <p>
                            Together, we can make lost and found easier, faster, and more rewarding for everyone. Start your search or report an item now!
                        </p>
                    </article>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Home;