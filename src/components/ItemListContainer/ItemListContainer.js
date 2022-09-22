import './ItemListContainer.css';

function SeccionContenedor({greeting}) {
    return (
        <div className="container">
            <h1>{greeting}</h1>
        </div>
    );
}

export default SeccionContenedor;