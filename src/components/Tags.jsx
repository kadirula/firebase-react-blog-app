import React from 'react'

const Tags = ({tags}) => {
  return (
    <div>
      <div>
        <div className="blog-heading text-start py-2">
          <h2>Tags</h2>
          <h2>Tags</h2>
        </div>
      </div>
      <div className="tags">
        {tags?.map((tag, index) => (
          <p className="tag" key={index}>{tag}</p>
        ))}
      </div>
    </div>
  )
}

export default Tags