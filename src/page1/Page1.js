
import React from 'react'
import {Container, Col, Row, Image, Nav} from 'react-bootstrap'
import './Page1.css'

import Logo from './Logo.png';
import CardNew from '../component/cardNew/cardNew'
/*
xs	<576px)
sm (≥576px)
lg (≥992px)
md (≥768px)
xl (≥1200px)
 */

function Page1() {

    React.useEffect(()=>{
        const animItems = document.querySelectorAll('.cardNewRow3');
        
        function animBlock(){
            for (let index = 0; index < animItems.length; index++){
                const animItem = animItems[index];
                animItem.classList.add('_showing'); 
                console.log(animItem);
            }
        }

        setTimeout(()=>{
            animBlock();
        }, 10)

    },[])


    return(
     <Container fluid className='Page1'>   
        <Row style={{height: '1080px' }}>
            <Col  md={3} className="leftPanel"> 
                <Col>
                    <a className='menu' href='/'><Image className="Logo" src={Logo} /></a>
                </Col>
            </Col>

            <Col md={9}>
                    <Nav className='menu'>
                        <div className='menu'><a className='menu' href="#">Quest</a></div>                   
                        <div className='menu'><a className='menu' href="#">Project</a></div>                    
                        <div className='menu'><a className='menu' href="#">About</a></div>
                        <div className='menu'>8(800) 000-00-00<div><a className='menu call' href="tel:88000000000">Request a call</a></div></div>
                    </Nav>
                    <div md={9} className='cardMe0'></div>
                    <Row className="justify-content-md-center">  
                        <Col sm={9} md={9} lg={3} className='cardMe' >
                            <CardNew title="01" titleRow='Free project' />
                        </Col> 
                        <Col sm={9} md={9} lg={3} className='cardMe'>
                            <CardNew title="02" titleRow='Free measurement'  />
                        </Col> 
                        <Col sm={9} md={9} lg={3} className='cardMe'>
                            <CardNew title="03" titleRow='Delivery and assembly' />
                        </Col>       
                    </Row>
                </Col>
        </Row>    
    </Container>
    )
}

export default Page1

/**
  <Row className="justify-content-left"> 
            <Col md={4} className='leftPanel'>
                First Col
            </Col>
            
            <Col md={8} className='rightPanel'>
                Second Col

                Velit tempor esse veniam aliquip aute quis mollit quis esse. Velit pariatur consectetur tempor esse officia. Nostrud commodo ipsum nostrud incididunt. Culpa sit laboris do incididunt ipsum pariatur enim sit Lorem irure.
Consectetur ad id ex qui proident sunt enim amet. Sint nisi sint elit cillum ut non nostrud Lorem eu excepteur. Consectetur incididunt sint est eiusmod incididunt ut aute ea dolore ea in. Sint laborum enim velit velit cupidatat adipisicing occaecat cillum quis eu aute. Ea sunt esse id reprehenderit fugiat ea eu eiusmod. Deserunt laboris id ullamco elit proident. Non id nostrud deserunt commodo veniam proident mollit labore consequat exercitation ut nulla.
Cillum ipsum ad reprehenderit quis irure dolore reprehenderit qui commodo dolor magna dolore id est. Tempor tempor non nisi labore aliquip ut. Aliqua ex magna aliquip consectetur minim adipisicing veniam ad cillum. Nostrud mollit deserunt eiusmod sit mollit ut eu officia ea. Minim occaecat anim est in consequat sint laboris mollit eiusmod amet nulla. Officia laborum voluptate ut laboris commodo esse incididunt ullamco dolore dolore.
Excepteur est commodo dolore reprehenderit incididunt pariatur minim tempor deserunt adipisicing culpa aute voluptate. Excepteur eu velit nulla et elit sit culpa. Sit dolor officia sint ex tempor eiusmod adipisicing enim.
Ea tempor incididunt dolore laboris amet dolore nulla voluptate mollit fugiat nostrud. Aute pariatur excepteur cillum ut esse ut quis minim. Enim sint culpa officia nostrud id est consequat commodo. Dolor fugiat officia incididunt elit magna consectetur ipsum. Laborum voluptate in duis magna nisi deserunt non proident pariatur laboris voluptate.
Nostrud enim eiusmod tempor aute. Veniam enim consequat nisi pariatur minim est aliquip. Et sit minim culpa duis est esse consectetur
            </Col>
        </Row>

           <Row>
            <Col style={{backgroundColor:'#5f5f5f'}}>
                
            </Col>
            <Col>
            <Row>
            <Col style={{backgroundColor:'#ff0456'}}>
                <div className="menu quest">Quest</div>
                </Col>
                <Col style={{backgroundColor:'#ff0456'}}>
                <div className="menu project">Project</div>
                </Col>
                <Col style={{backgroundColor:'#ff0456'}}>
                <div className="menu about">About</div>
                </Col>
            </Row>
            </Col>
        </Row>

        <Row style={{height: '1000px' }}>
            <Col  md={4} style={{backgroundColor:'#777'}}>
                Firs Col
            </Col>
            <Col md={4} style={{backgroundColor:'#555'}}>
                Second Col
            </Col>
            <Col md={4} style={{backgroundColor:'#00F5F5'}}>
                Therd Col
            </Col>
        </Row>
 */