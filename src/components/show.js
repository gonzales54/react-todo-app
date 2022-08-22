const Show = (props) => {
    const button_style = {
        margin: "12px 0"
    }

    const onDelete = () => {
        const elem = document.querySelector('li');
        console.log(elem.getAttribute('id'));
        for(let i = 0; i < props.items.length; i++){
            console.log(i)
        }
        console.log(props.items)
        //elem.remove();
    }

    return (
        <ul className="list-group">
            {props.items.map((item) => 
            <li className="list-group-item d-flex justify-content-between" key={item.key} id={item.key}>
                <div className="container d-flex">
                    <input type="checkbox" className="form-check-input" style={button_style} />
                    <p className="h4 pt-2 ms-4 mb-0">{item.text}</p>
                </div>
                <button className="btn btn-danger" onClick={onDelete}>Delete</button>
            </li>                
            )}
        </ul>
    );
}

export default Show;