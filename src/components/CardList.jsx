import Card from './card';

export default function CardList({ data: listData }) {
    console.log(listData);
    //? listData를 받아와서 카드 리스트를 렌더링 해야 합니다.
    //? listData의 각 요소를 Card 컴포넌트에 props로 넘겨주어야 합니다.
    //? Card 컴포넌트에는 item을 넘겨주어야 합니다.

    return (
        <div className="card-grid">
            <Card />
        </div>
    );
}
