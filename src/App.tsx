import Tweet from './tweet';
import { tweetsData } from './data';

function App() {
  return (
    <div className="app">
      <h1>Twitter Clone</h1>
      <div className="feed">
        {tweetsData.map(tweet => (
          <Tweet
            key={tweet.id}
            username={tweet.username}
            content={tweet.content}
            likes={tweet.likes}
            timestamp={tweet.timestamp}
          />
        ))}
      </div>
    </div>
  );
}

export default App;