import { Component } from 'react';

class Comment extends Component {
  state = {
    comments: [],
  };

  getCom = () => {
    fetch("https://striveschool.herokuapp.com/api/comments/" + this.props.id, {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzQ4ODk5MjA2ZmM4YzAwMTU2Yjg3ODEiLCJpYXQiOjE3MzI4MDcwNTksImV4cCI6MTczNDAxNjY1OX0.J-EmDQBqyFkt8ptE_VA4aPrOOAYPwD-wNBBlbrnjfYQ",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recupero dei commenti");
        }
      })
      .then((arrayOfComments) => {
        this.setState({
          comments: arrayOfComments, 
        });
      })
      .catch((error) => {
        console.log("Errore:", error);
      });
  };

  componentDidMount() {
    this.getCom(); 
  }

  render() {
    const { comments } = this.state; 

    return (
      <div>
        <h3 className="text-center fs-6 border-bottom mb-1">Commenti</h3>
        <ul>
          {comments.length > 0 ? (
            comments.map((comment) => (
              <li key={comment._id}>
                <p><strong>{comment.author}</strong>: {comment.comment}</p>
              </li>
            ))
          ) : (
            <p className="text-center">Nessun commento disponibile</p>
          )}
        </ul>
      </div>
    );
  }
}

export default Comment;
