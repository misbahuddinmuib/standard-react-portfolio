import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import blogImg from '../assets/images/projectImg.png';

const BlogItemStyle = styled.div`
  .blogItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .blogItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .blogItem__title {
    font-size: 2.2rem;
  }
  .blogItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .blogItem__img {
      height: 350px;
    }
  }
`;

export default function BlogItem({
  img = blogImg,
  title = 'Blog Name',
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
}) {
  return (
    <BlogItemStyle>
      <Link to="/blogs" className="blogItem__img">
        <img src={img} alt="blog img" />
      </Link>
      <div className="blogItem__info">
        <Link to="#">
          <h3 className="blogItem__title">{title}</h3>
        </Link>
        <p className="blogItem__desc">{desc}</p>
      </div>
    </BlogItemStyle>
  );
}
