import Card from './Card';

export default function CardList({ data: listData }) {
    //1. listData를 받아와서 카드 리스트를 렌더링 해야 합니다.
    console.log(listData);
    //확인해보니 배열객체타입 통으로 들어왔음.

    //2. listData의 각 요소를 Card 컴포넌트에 props로 넘겨주어야 합니다.

    //3. Card 컴포넌트 : lisetData의 각 요소를 map이용하여 랜더링하여 item으로 전달하기
    //3-1. map 순회시 key=item.id 설정하기
    return (
        <div className="card-grid">
            {listData.map((elm) => {
                return <Card item={elm} key={elm.id} />;
            })}
        </div>
    );
}
