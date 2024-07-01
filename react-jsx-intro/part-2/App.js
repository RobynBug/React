

const App = () => {
    const tweets = [
        {username: 'RobynBug', date: "2024-Jan-23", name: 'Robyn Highsmith', tweet: 'Good morning, let work harder today!'},
        {username: 'MsRay', date: "2024-Feb-02", name: 'Rachael Highsmith', tweet: 'Customize your own T-Shirt, on sale today'},
        {username: 'MoeyIz', date: "2024-Mar-05", name: 'Robyn Highsmith', tweet: 'Wishing my father a Happy Birthday!'}
    ];

    return (
        <div className="container">
            {tweets.map((tweet) => (
                <section class="tweets">
                <Tweet
                    username={tweet.username}
                    date={tweet.date}
                    name={tweet.name}
                    tweet={tweet.tweet}
                />
                </section>
            ))}
        </div>
    );
};

  ReactDOM.render(<App />, document.getElementById('root'));