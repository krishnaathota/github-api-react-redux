import React from 'react';
import { Link } from 'react-router-dom';

class Card extends React.Component {
    render() {
        console.log("card")
        const { id, full_name, description } = this.props.data;

        return (
            <div className="card">
                <div>
                    <Link to={`/repo/${id}`}>
                        { full_name }
                    </Link>
                </div>
                <div>
                {description}
                </div>
            </div>
        );
    }
}

export default Card;
