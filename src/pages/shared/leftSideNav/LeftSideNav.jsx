import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const[categories,setCategories] = useState([]);
    const [news,setNews] = useState([]);
    useEffect(()=>{
        fetch('news.json')
        .then(res => res.json())
        .then(data => setNews(data))
    },[])
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div className="space-y-6">
            <h2 className="text-2xl">All Categories</h2>
            {
                categories.map(category => <Link 
                    className="block ml-4 text-xl font-semibold "
                    to={`/category/${category.id}`}
                    key={category.id} 
                    >{category.name}</Link>)
            }

            <div className="space-y-6">
                {
                    news.map(singleNews => <img src={singleNews.image_url}></img>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;