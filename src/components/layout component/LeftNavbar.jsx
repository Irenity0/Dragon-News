import { useEffect, useState } from "react";

const LeftNavbar = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(`https://openapi.programming-hero.com/api/news/categories`)
        .then((res) => res.json())
        .then((data) => setCategories(data.data.news_category));
    }, []) 
    
    return (
        <div>
            <h1 className="text-xl font-semibold">All Category ({categories.length})</h1>
            <div className="space-y-2">
                {categories.map(category => <button key={category.category_id} className="btn w-full">{category.category_name}</button>)}
            </div>
        </div>
    );
};

export default LeftNavbar;