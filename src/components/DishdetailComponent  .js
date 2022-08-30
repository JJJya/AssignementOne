import React, {Component} from "react";
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({selectedDish: dish});
    }

    // Task 3
    convertDateToCommentDateFormat(timestamp) {
        const date = new Date(timestamp);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    }

    renderComments(comments) {
        if (comments == null || !(comments.length)) {
          return (
            <div></div>
          );
        }

        const renderedComments = comments.map((comment) => {
        return (
            <li>
              <p>{comment.comment}</p>
              <p>-- {comment.author}, {this.convertDateToCommentDateFormat(comment.date)}</p>
            </li>
          );
        });
        return (
          <div>
            <h4>Comments</h4>
            <ul className="list-unstyled">
              { renderedComments }
            </ul>
          </div>
        );
      }


    // Task 1 + 2
    renderDish(dish) {
        return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    render() {
        if (this.props.dish != null) {
          return (
            <div className="row">
              <div className="col-12 col-md-5 m-1">
                { this.renderDish(this.props.dish) }
              </div>
              <div className="col-12 col-md-5 m-1">
                { this.renderComments(this.props.dish.comments) }
              </div>
            </div>
          );
        }
        return (
            <div></div>
        );
        
    }

}

export default DishDetail;