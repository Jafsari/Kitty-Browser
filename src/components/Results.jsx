import React, { Component } from 'react';
import { object } from 'prop-types';
import '../assets/Result.css';
import Moment from 'react-moment';
import 'moment-timezone';

const Results = (props) => {
    const renderPicture = () =>{
        if (props.picture.data){
            return (
                <div>
                <div>
                    <strong> Genes </strong>
                    <div>
                    {props.information.genes}
                    </div>
                </div>
                <div>
                    <strong> Generation </strong>
                    <div>
                    {props.information.generation}
                    </div>
                </div>
                <div>
                    <strong> Birth Time </strong>
                    <div>
                    {<Moment unix>{props.information.birthTime}</Moment>}
                    </div>
                </div>
                <div className='image'>
                    <img src = {props.picture.data.image_url} alt='Kitty' />
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
 return(
    <div>
        {renderPicture()}
    </div>
    )

}

Results.contextTypes = {
    drizzle: object,
  };

export default Results;