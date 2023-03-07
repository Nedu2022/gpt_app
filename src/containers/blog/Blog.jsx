import React from 'react'
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05, } from './imports'
import './blog.css';

const Blog = () => {
  return (
    <div className='gpt__blog section__padding' id='blog'>
      <div className="gpt__blog-heading">
        <h1 className="gradient__text">
        A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt__blog-container">
        <div className="gpt__blog-container_groupA">
          <Article imgUrl={blog01} date="Sep 26, 2023" title="GPT-3 and Open  AI is the future. Let us explore how it is?"  />
        </div>
        <div className="gpt__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2023" title="GPT-3 and Open  AI is the future. Let us explore how it is?" />
        <Article imgUrl={blog03} date="Sep 26, 2023" title="GPT-3 and Open  AI is the future. Let us explore how it is?" />
        <Article imgUrl={blog04} date="Sep 26, 2023" title="GPT-3 and Open  AI is the future. Let us explore how it is?" />
        <Article imgUrl={blog05} date="Sep 26, 2023" title="GPT-3 and Open  AI is the future. Let us explore how it is?" />
        </div>
      </div>
    </div>
  )
}

export default Blog
