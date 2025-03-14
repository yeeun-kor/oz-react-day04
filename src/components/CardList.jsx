import Card from './card';

export default function CardList({ data }) {
    return (
        <div className="card-grid">
            {data.map((item) => (
                <Card key={item.id} item={item} />
            ))}
        </div>
    );
}
