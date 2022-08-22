import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const Main = () => {
    const getkey = () => Math.random().toString(32).substring(2);
    const button_style = {
        margin: "12px 0"
    }
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(JSON.parse(localStorage.getItem('items')));
    }, [])  

    const onSubmit = (e) => {
        e.preventDefault();
        const inps = document.getElementById("title");
        if(inps.value !== ''){
            let newItems = [...items];
            newItems.push({key: getkey(), text: inps.value});
            setItems(newItems);
            localStorage.setItem('items', JSON.stringify(newItems));
            inps.value = '';
        }
    }

    const onDelete = (e) => {
        const deleteItems = [...items];
        deleteItems.splice(e.target.id, 1);
        setItems(deleteItems);
        localStorage.setItem('items', JSON.stringify(deleteItems));
    }
 
    return (
        <main className="w-75 mx-auto">
            <Container fluid className="px-0 mb-5">
                <form className="mx-auto d-flex" onSubmit={onSubmit}>
                    <input type="text" className="w-100 form-control" id="title"/>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </Container>

            <ul className="list-group">
            {items.map((item, index) => 
                <li className="list-group-item d-flex justify-content-between" key={item.key}>
                    <div className="container d-flex">
                        <input type="checkbox" className="form-check-input" style={button_style} />
                        <p className="h4 pt-2 ms-4 mb-0">{item.text}</p>
                    </div>
                    <button className="btn btn-danger" onClick={onDelete} id={index}>Delete</button>
                </li>                
            )}
            </ul>
        </main>
    );
}

export default Main;