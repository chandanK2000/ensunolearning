import React from 'react';
import './Blogs.css';

const Blogs = () => {

  const Subscribed = () => {
    alert("Sucbscribed Successfully");
  }
  const blogsData = [
    {
      id: 1,
      image: 'https://ensuenolearning.com/wp-content/uploads/2023/09/insurance-certification-400x250.jpg',
      heading: 'Top Insurance Certifications in India to Accelerate Your Career',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at lorem in urna vulputate sodales. Sed consequat magna eget nulla convallis, a posuere ex pharetra.'
    },
    {
      id: 2,
      image: 'https://ensuenolearning.com/wp-content/uploads/2023/06/insurance-coverage-400x250.png',
      heading: 'What is Insurance: Definition, Benefits, and Types',
      text: 'Praesent quis lacus nec sapien interdum ullamcorper id vel libero. Vivamus ullamcorper risus felis, nec mattis sem vehicula non.'
    },
    {
      id: 3,
      image: 'https://ensuenolearning.com/wp-content/uploads/2023/05/Best-Career-Options-For-Commerce-Students-3-400x250.jpg',
      heading: 'Your Guide to Building a Career in Sales',
      text: 'Integer sodales libero in purus fermentum, vel fermentum ex iaculis. Vestibulum aliquam metus ut magna consequat, nec vestibulum enim facilisis.'
    },
    {
      id: 4,
      image: 'https://ensuenolearning.com/wp-content/uploads/2023/04/Sales-Executive-Salary-in-India-in-2023-400x250.jpg',
      heading: 'Sales Executive Salary in India in 2023',
      text: 'Integer sodales libero in purus fermentum, vel fermentum ex iaculis. Vestibulum aliquam metus ut magna consequat, nec vestibulum enim facilisis.'
    },
    {
      id: 5,
      image: 'https://ensuenolearning.com/wp-content/uploads/2023/04/Top-6-Essential-Sales-Manager-Skills-in-2023-400x250.jpg',
      heading: 'Top 6 Essential Sales Manager Skills in 2023',
      text: 'Integer sodales libero in purus fermentum, vel fermentum ex iaculis. Vestibulum aliquam metus ut magna consequat, nec vestibulum enim facilisis.'
    },
    {
      id: 6,
      image: 'https://ensuenolearning.com/wp-content/uploads/2023/04/Online-Degree-Programs-for-10th-and-12th-Pass-Out-Students-400x250.jpg',
      heading: 'Online Degree Programs for 10th and 12th Pass Out Students',
      text: 'Integer sodales libero in purus fermentum, vel fermentum ex iaculis. Vestibulum aliquam metus ut magna consequat, nec vestibulum enim facilisis.'
    },
    {
      id:7,
      image: 'https://ensuenolearning.com/wp-content/uploads/2023/04/Sales-Executive-Salary-in-India-in-2023-400x250.jpg',
      heading: 'Sales Executive Salary in India in 2023',
      text: 'Integer sodales libero in purus fermentum, vel fermentum ex iaculis. Vestibulum aliquam metus ut magna consequat, nec vestibulum enim facilisis.'
    },
    {
      id: 8,
      image: 'https://ensuenolearning.com/wp-content/uploads/2023/04/Top-6-Essential-Sales-Manager-Skills-in-2023-400x250.jpg',
      heading: 'Top 6 Essential Sales Manager Skills in 2023',
      text: 'Integer sodales libero in purus fermentum, vel fermentum ex iaculis. Vestibulum aliquam metus ut magna consequat, nec vestibulum enim facilisis.'
    },
    {
      id: 9,
      image: 'https://ensuenolearning.com/wp-content/uploads/2023/04/Online-Degree-Programs-for-10th-and-12th-Pass-Out-Students-400x250.jpg',
      heading: 'Online Degree Programs for 10th and 12th Pass Out Students',
      text: 'Integer sodales libero in purus fermentum, vel fermentum ex iaculis. Vestibulum aliquam metus ut magna consequat, nec vestibulum enim facilisis.'
    },
  ];

  return (
    <div className='main_section'>
      <div className="blogs-container">
        <div className="line"></div>
        <h1 className="blogs-heading">Blog</h1>
        <div className="line"></div>
      </div>
      <div className="blog-blocks-container">
        {blogsData.map(blog => (
          <div key={blog.id} className="blog-block">
            <img src={blog.image} alt={blog.heading} />
            <div className='text_section'>
              <h4>{blog.heading}</h4>
              <p>{blog.text}</p>
            </div>
           
          </div>
        ))}
      </div>
     
      {/* Subscribe section */}
      <div className="subscribe-section">
        <h2 className="subscribe-heading">Subscribe for Latest Updates</h2>
        <div className="subscribe-form">
          <input type="email" placeholder="Email" className="subscribe-input" />
          <button className="subscribe_button" onClick={Subscribed}>Subscribe</button>
        </div>
      </div>
      </div>
  );
};

export default Blogs;
