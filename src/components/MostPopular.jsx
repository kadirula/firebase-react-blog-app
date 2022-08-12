import React from 'react'
import { useNavigate } from 'react-router-dom'

const MostPopular = ({ blogs }) => {

    const navigate = useNavigate();

    return (
        <div>
            <div className="blog-heading text-start pt-3 py-2">
                <h2>En Çok Okunanlar</h2>
                <h2>En Çok Okunanlar</h2>
            </div>
            {blogs?.map((item) => (
                <div
                    className="row pb-3"
                    key={item.id}
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate(`/detail/${item.id}`)}
                >
                    <div className="col-5">
                        <img src={item.imgUrl} alt={item.title} className="most-popular-img" />
                    </div>
                    <div className="col-7 padding">
                        <div className="text-start most-popular-font">{item.title}</div>
                        <div className="text-start most-popular-font-meta">
                            {new Date(item.timestamp.toDate().toDateString()).toLocaleDateString("tr-TR")}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MostPopular