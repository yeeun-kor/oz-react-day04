export default function Card({ item: { category, title, description } }) {
    return (
        //구조분해 할당 사용
        //item :{title:, category:,description:}으로 꺼내왔다.
        <div className="card">
            <div className="card-image">
                <img src={`https://placehold.co/600x400`} />
            </div>
            <div className="card-content">
                <span className="card-category">{category}</span>
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
            </div>
        </div>
    );
}
