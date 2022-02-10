import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import SectionTitle from '../components/SectionTitle';
import blogsInfo from '../assets/data/blogs';
import BlogItem from '../components/blogItem';

const BlogStyle = styled.div`
  padding: 10rem 0;
  .blogs__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  .blogs__searchBar {
    position: relative;
    width: 300px;
    margin-top: 5rem;
  }
  .blogs__searchBar input {
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    color: var(--black);
    border-radius: 6px;
    outline: none;
    border: none;
  }
  .blogs__searchBar .searchIcon {
    position: absolute;
    width: 2rem;

    right: 1rem;
  }
  .blogs__searchBar .searchIcon path {
    color: var(--deep-dark);
  }
  @media only screen and (max-width: 768px) {
    .blogs__searchBar,
    .blogs__searchBar form,
    .blogs__searchBar input {
      width: 100%;
    }
  }
`;

export default function Blogs() {
  const [searchText, setSearchText] = useState('');
  const [blogsData, setBlogsData] = useState(blogsInfo);
  useEffect(() => {
    if (searchText === '') return;
    setBlogsData(() =>
      blogsInfo.filter((item) =>
        item.name.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);
  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      setBlogsData(blogsInfo);
    }
  };
  return (
    <>
      <BlogStyle>
        <div className="container">
          <SectionTitle
            heading="Blogs"
            subheading="some of my featured posts"
          />
          <div className="blogs__searchBar">
            <form>
              <input
                type="text"
                value={searchText}
                onChange={handleChange}
                placeholder="Blogs Name"
              />
              <MdSearch className="searchIcon" />
            </form>
          </div>
          <div className="blogs__allItems">
            {blogsData.map((item) => (
              <BlogItem
                key={item.id}
                title={item.name}
                desc={item.desc}
                img={item.img}
              />
            ))}
          </div>
        </div>
      </BlogStyle>
    </>
  );
}
