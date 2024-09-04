import React from 'react';
import { useLanguage } from '../LanguageContext';
import './index.css';

const translations = {
  en: { home: 'Home', movies: 'Movies', tvShows: 'TV Shows', sports: 'Sports', live: 'Live' },
  fr: { home: 'Accueil', movies: 'Films', tvShows: 'Séries TV', sports: 'Sports', live: 'En direct' },
  de: { home: 'Startseite', movies: 'Filme', tvShows: 'TV-Sendungen', sports: 'Sport', live: 'Live' },
  ru: { home: 'Домой', movies: 'Фильмы', tvShows: 'ТВ Шоу', sports: 'Спорт', live: 'Прямой эфир' },
  es: { home: 'Inicio', movies: 'Películas', tvShows: 'Programas de TV', sports: 'Deportes', live: 'En vivo' },
  zh: { home: '首页', movies: '电影', tvShows: '电视剧', sports: '体育', live: '直播' },
};

const imageUrls = {
  home: 'https://media.istockphoto.com/id/1492732089/photo/hand-presenting-model-home.jpg?s=612x612&w=0&k=20&c=9qKatALD_kGCs5_Gz9pAtrwr-p2ZRBGgbNFco5QEtK0=',
  movies: 'https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289_640.jpg',
  tvShows: 'https://www.hallaminternet.com/wp-content/uploads/2020/11/8-TV-Shows-and-Movies-all-Marketers-should-watch-HeroImage-1200x514.png',
  sports: 'https://media.istockphoto.com/id/1141191007/vector/sports-set-of-athletes-of-various-sports-disciplines-isolated-vector-silhouettes-run-soccer.jpg?s=612x612&w=0&k=20&c=SEabW4SHZ7blMHJPxZNSTl_anOMHO3whQI7HIMxFpSg=',
  live: 'https://allpngfree.com/apf-prod-storage-api/storage/thumbnails/live-streaming-logo-png-images-download-thumbnail-1645119687.jpg',
};

function Menu() {
  const { language } = useLanguage();
  const items = translations[language] || translations.en;

  return (
    <div className="menu-container">
      {Object.keys(items).map((key) => (
        <div key={key} className="menu-item">
          <div className="menu-overlay">
            <h2>{items[key]}</h2>
          </div>
          <img src={imageUrls[key]} alt={items[key]} className="menu-image" />
        </div>
      ))}
    </div>
  );
}

export default Menu;