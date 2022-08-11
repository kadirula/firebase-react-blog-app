import React from 'react'
import FontAwesome from 'react-fontawesome'
import { Link } from 'react-router-dom'
import { excerpt } from '../utility'

const BlogSection = ({ blogs, user, handleDelete }) => {

    const userId = user?.uid;

    return (
        <div>
            <div className="blog-heading text-start py-2 mb-4">
                <h2>Günlük Yazılar</h2>
                <h2>Günlük Yazılar</h2>
            </div>
            {blogs?.map((item) => (
                <div className="row pb-4" key={item.id}>
                    <div className="col-md-5">
                        <div className="hover-blogs-img">
                            <div className="blogs-img">
                                <h6 className="category catg-color">{item.category}</h6>
                                <img src={item.imgUrl} alt={item.title} />
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="text-start">                            
                            <span className="title py-2">{item.title}</span>
                            <span className="meta-info">
                                <p className="author">{item.author}</p> - &nbsp;
                                {new Date(item.timestamp.toDate().toDateString()).toLocaleDateString("tr-TR")}
                            </span>
                        </div>

                        <div className="short-description text-start">
                            {excerpt(item.description, 120)}
                        </div>

                        <Link to={`/detail/${item.id}`}>
                            <button className="btn btn-read">Devamını Oku</button>
                        </Link>

                        {userId && item.userId === userId && (
                            <div style={{ float: "right" }}>
                                <FontAwesome
                                    name='trash'
                                    style={{ margin: "15px", cursor: "pointer" }}
                                    size="2px"
                                    onClick={() => { handleDelete(item.id) }}
                                />
                                <Link to={`/update/${item.id}`}>
                                    <FontAwesome
                                        name='edit'
                                        style={{ cursor: "pointer" }}
                                        size="2px"
                                    />
                                </Link>

                            </div>
                        )}

                    </div>
                </div>
            ))}
        </div>
    )
}

export default BlogSection