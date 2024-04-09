import React from 'react';
import './CoursePage.css';
import Banner from './Banner/Banner';

const Blogs = () => {

  const EnrollHere=()=>{
    alert("We will do the enrollment soon");
  }
  const blogPosts = [
    {
      image: './bank.jpeg',
      title: 'Insurance',
      content: 'Start or scale your career in the fastest growing industry.',
    },
    {
      image: './bank.jpeg',
      title: 'Insurance',
      content: 'Start or scale your career in the fastest growing industry.',
    },
    {
      image: './bank.jpeg',
      title: 'Banking',
      content: 'Start your career in the banking sector with Ensueno Learning. ',
    },
    {
      image: './bank.jpeg',
      title: 'Insurance',
      content: 'Start or scale your career in the fastest growing industry.',
    },
    {
      image: './bank.jpeg',
      title: 'Insurance',
      content: 'Start or scale your career in the fastest growing industry.',
    },
  ];

  return (
    <div>
      <Banner/>
    
    <div className='blogs_section'>
      <div className="blog-container">
        {blogPosts.map((post, index) => (
          <div className="blog-post" key={index}>
            <div className="image-section">
              <img src={post.image} alt={post.title} />
            </div>
            <div className='text-section'>
              <h4>{post.title}</h4>
              <p>{post.date}</p>
              <p>{post.content}</p>
              <button onClick={EnrollHere}>ENROLL HERE</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Blogs;
