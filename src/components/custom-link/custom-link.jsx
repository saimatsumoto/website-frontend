import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const CustomLink = (props) => {
  const isExternalLink = /http/.test(props.url);

  return (
    <div className='custom-link'>
    {
      isExternalLink
        ? <a className="card-link" href={ props.url } target="_blank" rel="noopener noreferrer"> { props.children }</a>
        : <Link to={props.url}> { props.children } </Link>
    }
    </div>
  )
};

CustomLink.propTypes = {
  url: PropTypes.string.isRequired
};

export default CustomLink;