import React from 'react';
import './cardNew.css'
//konstaimport {Row, Col} from 'react-bootstrap'


function CardNew({title='cardNew_default', titleRow='Free_Project'}) {
    return (
        <React.Fragment> 
            <div  className='colNewRow1 active'>
            {title}
            </div >
            <div  className='cardNewRow2' />
            <div  className='cardNewRow3'>
                <h4 className='titleRow3'>{titleRow}</h4>
                <div className='textRow3'>The designer will make a design project, taking into account all your wishes</div>

           </div>
        </React.Fragment>    
    )

}

export default CardNew;