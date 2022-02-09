import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Misbah Uddin Muib</h1>
          <PText>
            A Software developer from Dhaka, Bangladesh.I always make websites
            that have unique designs and also has a good performance rate.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Blogs',
                path: '/blogs',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+8801737889918',
                path: 'tel:+8801737889918',
              },
              {
                title: 'misbahuddinmuib@gmail.com',
                path: 'mailto:misbahuddinmuib@gmail.com',
              },
              {
                title: 'Mirpur-1, Tolarbagh , Dhaka-1216, Bangladesh',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'Github',
                path: 'https://github.com/MisbahMuib',
              },
              {
                title: 'Linkedin',
                path: 'https://www.linkedin.com/in/misbahuddinmuib/',
              },
              {
                title: 'Facebook',
                path: 'https://www.facebook.com/misbahuddin.muib/',
              },
              {
                title: 'Instagram',
                path: 'https://www.instagram.com/misbahmuib_/',
              },
              {
                title: 'Twitter',
                path: 'https://twitter.com/misbahuddinmuib',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            © 2022 - Misbah Uddin Muib | Designed By{' '}
            <a target="_blank" rel="noreferrer" href="http://intigsol.com">
              intigsol
            </a>{' '}
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
