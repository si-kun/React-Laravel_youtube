import React from "react";

const Home = (props) => {
    return (
        <>
            <h1>ホーム</h1>
            <h2>ショップ一覧</h2>
            <ul>
                {props.shops.map((shop) => (
                    <li key={shop.id}>{shop.name}</li>
                ))}
            </ul>
            <br />
            <h2>新着レビュー</h2>
            <ul>
                {props.newReviews.map((review) => (
                    <li key={review.id}>
                        <p>{review.shop.name}のレビュー/{review.rating}</p>
                        <span>{review.comment}</span>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Home;
