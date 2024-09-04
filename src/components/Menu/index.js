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
  home: 'https://res.cloudinary.com/ksp24/image/upload/v1725454243/Free_download_Sweet_Homes_Wallpaper_Luxury_House_HD_Soft_on_WallpaperSafari_lse26u.jpg',
  movies: 'https://res.cloudinary.com/ksp24/image/upload/v1725454785/wp8649137-movie-camera-wallpapers_zhcdc7.jpg',
  tvShows: 'https://www.hallaminternet.com/wp-content/uploads/2020/11/8-TV-Shows-and-Movies-all-Marketers-should-watch-HeroImage-1200x514.png',
  sports: 'https://res.cloudinary.com/ksp24/image/upload/v1725454784/sports-images-for-desktop-background-wallpaper-preview_ee5jvd.jpg',
  live: 'https://res.cloudinary.com/ksp24/image/upload/v1725454784/wp7442165-live-stream-wallpapers_huv8l5.jpg',
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