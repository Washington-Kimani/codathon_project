function Item({ item }) {
    const formartDate = (dateString) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-KE', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        }).format(date)
    }
    return (
        <div className="bg-teal-800 shadow-md rounded-lg overflow-hidden w-80 mx-auto">
            <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover shadow-gray-600 shadow-xl"
            />
            <div className="p-4">
                <h3 className="text-lg font-bold text-gray-50">{item.name}</h3>
                <p className="text-gray-300 text-sm">
                    <strong>Date Found:</strong> {formartDate(item.date)}
                </p>
                <p className="text-gray-300 text-sm">
                    <strong>Place Found:</strong> {item.placeFound}
                </p>
                <p className="text-gray-400 mt-2">{item.description}</p>
            </div>
            <div className="w-full flex justify-between items-center p-2 bg-gray-800 rounded-b-lg">
                <button
                    className={"px-2 py-1 bg-emerald-500 text-white rounded-sm hover:bg-emerald-600"}>Claim
                </button>
                <button
                    className={"px-2 py-1 bg-blue-500 text-white rounded-sm hover:bg-blue-600"}>Share
                </button>
            </div>
        </div>
    )
}

export default Item;