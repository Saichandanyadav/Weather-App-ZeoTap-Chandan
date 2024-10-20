import { useState } from 'react';
import HomePage from './component/HomePage';
import './App.css';

const App = () => {
  const [background, setBackground] = useState(
    'https://raw.githubusercontent.com/fireclint/weather-app-react/refs/heads/main/src/assets/sunset.jpg'
  );

  const changeBackground = (condition) => {
    let backgroundUrl = '';

    if (condition.includes('sunny')) {
      backgroundUrl = 'https://i.ibb.co/1KQKrgc/8d06e65b2740.webp';
    } else if (condition.includes('clear')) {
      backgroundUrl = 'https://th.bing.com/th/id/OIP.Hn6SzNikrXUupxNUtxpCsAHaE8?w=4608&h=3072&rs=1&pid=ImgDetMain';
    } else if (condition.includes('clouds') || condition.includes('overcast')) {
      backgroundUrl = 'https://i.ibb.co/Qm7GLcM/08e3d3d709ba.webp';
    } else if (condition.includes('rain')) {
      backgroundUrl = 'https://i.ibb.co/B6f91MS/a902741e2aee.webp';
    } else if (condition.includes('thunderstorm') || condition.includes('storm')) {
      backgroundUrl = 'https://i.ibb.co/GcqpgjY/2fc4525f8df2.webp';
    } else if (condition.includes('snow')) {
      backgroundUrl = 'https://i.ibb.co/dW5FN2G/e8a904c9e968.webp';
    } else if (condition.includes('fog') || condition.includes('mist')) {
      backgroundUrl = 'https://i.ibb.co/njzdzjr/7328d488b66e.webp';
    } else if (condition.includes('wind')) {
      backgroundUrl = 'https://i.ibb.co/4YmMLf2/7e43ca495923.jpg';
    } else if (condition.includes('haze')) {
      backgroundUrl = 'https://thumbs.dreamstime.com/b/smoggy-city-view-buildings-residences-visible-haze-created-generative-ai-274642431.jpg';
    } else {
      backgroundUrl = 'https://raw.githubusercontent.com/fireclint/weather-app-react/refs/heads/main/src/assets/sunset.jpg';
    }

    setBackground(backgroundUrl);
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', minHeight: '100vh' }}>
      <HomePage onChangeBackground={changeBackground} />
    </div>
  );
};

export default App;
