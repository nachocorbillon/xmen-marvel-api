import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './table.css';
import baseUrl from './urlConfig.js';

const ComicDetail = ({ titleStartsWith, startYear, issueNumber }) => {
  const [comicData, setComicData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
    const response = await axios.get(`${baseUrl}/.netlify/functions/getComics`, {
          params: {
            titleStartsWith,
            startYear,
            issueNumber,
          },
        });
     setComicData(response.data.data.results[0]);
      } catch (error) {
        console.error("setcomicdata error: ",error);
      }
    };
    fetchData();
  }, [titleStartsWith, startYear, issueNumber]);

  if (!comicData) {
    return <div>Loading...</div>;
  }

  return (
    <div id="comicdetail">
      <table>
        <tbody>
          <tr>
            <th>Title</th>
            <td>{comicData.title}</td>
            <td style={{ borderWidth: '0 0 0 2px' }} rowSpan="4">
              <img
                id="tableimage"
                src={`${comicData.thumbnail.path}.${comicData.thumbnail.extension}`}
                alt={comicData.title}
              />
            </td>
          </tr>
          <tr>
            <th>Sale Date</th>
            <td>
              {new Date(comicData.dates[0].date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </td>
          </tr>
          <tr>
            <th>Creators</th>
            <td>
              {comicData.creators.items.map((creator) => (
                <div key={creator.resourceURI}>
                  {creator.role}: {creator.name}
                </div>
              ))}
            </td>
          </tr>
          <tr>
            <th>Characters</th>
            <td>
              {comicData.characters.items.map((character) => (
                <div key={character.resourceURI}>{character.name}</div>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
      <img
        id="altimage"
        src={`${comicData.thumbnail.path}.${comicData.thumbnail.extension}`}
        alt={comicData.title}
      />
    </div>
  );
};

export default ComicDetail;