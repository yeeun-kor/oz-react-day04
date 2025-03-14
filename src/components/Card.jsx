export default function Card({ item }) {
    return (
        <div className="card">
            <div className="card-image">
                <img src={`https://placehold.co/600x400`} alt={item.title} />
            </div>
            <div className="card-content">
                <span className="card-category">{item.category}</span>
                <h2 className="card-title">{item.title}</h2>
                <p className="card-description">{item.description}</p>
            </div>
        </div>
    );
}
