import React, { Component } from 'react';
import { object } from 'prop-types';
import '../assets/Result.css';
import Moment from 'react-moment';
import 'moment-timezone';

class Results extends Component {
    renderPicture = () =>{
        if (this.props.picture.data){
            return (
                <div>
                <div>
                    <strong> Genes </strong>
                    <div>
                    {this.props.information.genes}
                    </div>
                </div>
                <div>
                    <strong> Generation </strong>
                    <div>
                    {this.props.information.generation}
                    </div>
                </div>
                <div>
                    <strong> Birth Time </strong>
                    <div>
                    {<Moment unix>{this.props.information.birthTime}</Moment>}
                    </div>
                </div>
                <div className='image'>
                    <img src = {this.props.picture.data.image_url} />
                </div>
            </div>
            )
        } else {
            return (
                <div>
                </div>
            )
        }
    }
    render(){
    return(
    <div>
        {this.renderPicture()}
    </div>
    )
}
}

Results.contextTypes = {
    drizzle: object,
  };

export default Results;