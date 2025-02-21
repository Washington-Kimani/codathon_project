import { useState, useEffect } from'react';
import axios from 'axios';
import Item from '../components/Item';

// eslint-disable-next-line react/prop-types
function Items({searchQuery}) {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filteredItems, setFilteredItems] = useState([]); // Store filtered items
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const result = await axios.get('http://localhost:5000/api/items');
            setLoading(false);
            setItems(result.data.reverse());
            setFilteredItems(result.data); // Initially display all items
        }


        fetchData();
    },[])
    useEffect(() => {
        // Filter items based on search query
        setFilteredItems(
            items.filter((item) =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
        );
    }, [searchQuery, items]);

    if (loading) {
        return (
            <div className="flex flex-col justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-amber-400">
                </div>
                <h1 className={"text-3xl text-green-500 mt-2"}>Loading...</h1>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 justify-center items-center">
            {filteredItems.length > 0 ? filteredItems.map((item, index) => (
                <Item key={index} item={item} />
            )) : <div className={"flex flex-col justify-center items-center w-screen h-screen text-center"}>
                <div className={"w-[50%] h-[40vh] rounded-lg flex flex-col justify-center items-center backdrop-blur-lg"}>
                    <h1 className={"text-3xl text-green-500 mt-2"}>No items found</h1>
                    <p>Please try again with different search query.</p>
                </div>
            </div>}
        </div>
    )
}

export default Items;