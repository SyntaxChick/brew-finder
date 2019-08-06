import React from 'react';
import { Link } from 'react-router-dom';

const DirectoryItem = ({ brewery }) => (
  <div className="App-item">
    <Link to={`/brewery/${brewery.id}`}>
        <h3>{brewery.name}</h3>
    </Link>
    {brewery.brewery_type} <br />
    {brewery.street}<br />
    {brewery.city}, {brewery.state} {brewery.postal_code}<br />
    <a href={brewery.website_url} target="_blank" rel="noopener noreferrer">{brewery.website_url}</a>
  </div>
);

export default DirectoryItem;
