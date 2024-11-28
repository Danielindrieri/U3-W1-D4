import { Component } from 'react';
import { Card } from 'react-bootstrap';
import Comment from './Comment';

class SingleBook extends Component {
  state = {
    selected: false,
  };

  toggleSelected = () => {
    this.setState((prevState) => ({
      selected: !prevState.selected,
    }));
  };

  render() {
    const { selected } = this.state; 
    const { book } = this.props; 

    return (
      <Card
        className="h-100 me-3 ms-3"
        onClick={this.toggleSelected} 
        style={{ border: selected ? '3px solid red' : 'none' }}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body className="d-flex flex-column justify-content-between">
          <Card.Title style={{ color: 'black' }}>
            {book.title}
          </Card.Title>
          <Card.Text className="d-flex justify-content-between">
            Prezzo: {book.price}$ <strong>{book.category}</strong>
          </Card.Text>
        </Card.Body>
        {selected && <Comment id={book.asin} />}
      </Card>
    );
  }
}

export default SingleBook;
