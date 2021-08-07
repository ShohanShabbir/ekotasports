import React from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

const Cricket = () => {
    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title style={{fontFamily: 'Poppins', fontWeight:'600' }} id="contained-modal-title-vcenter">
                        Cricket
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   
                    <p style={{fontFamily: 'Poppins', fontWeight:'500' }}>
                        Ekota aims to teach future cricketers new skills and to give them the very best first experience in the world of cricket.  A chance to play, learn great skills and meet new friends!
                        Ekota cricket programmes are designed for players wanting to get that competitive edge over their opponents. It is a high intense and structured program ensuring all facets of batting, bowling, and fielding are covered and that all players gain some more knowledge about becoming a cricket maestro.
                        Ekota offers a range of coaching courses for children of 5-16 years on a weekly basis. Along with special programmes which runduring school holidays.

                        Ekota in collaboration and association with the Essex Cricket Board (ECB) with our exhaustive cricket curriculum aims to develop every aspect of the game, build on existing talent, and create future cricketing stars.

                        Our students receive extensive coaching and training sessions to develop every aspect of the game – starting from increasing fitness levels through strength and conditioning training to perfecting skills and expertise. Coaches will focus on the strengths and weaknesses of the individual; whether it be batting, bowling, wicket keeping or fielding, and offer the unique opportunity to work on individual areas of improvement in a comfortable environment.

                        Our year-round training programme includes indoor and outdoor facilities for all.

                    </p>
                </Modal.Body>
                <Modal.Footer>
                <Link to='/cricket'>
                    <a style={{textDecoration: 'none'}} className="discover-btn" href='#'>Discover More</a>
                </Link>   
                </Modal.Footer>
            </Modal>
        );
    }

    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div>
            <div className="cricket footballs">
                <div style={{ margin: '0', padding: '0', boxSizing: 'border-box' }} className="container containers" id="section">

                    <div className="right1">
                        <div className="content">
                            <h3>Cricket.</h3>

                            <p className="mb-5">Ekota aims to teach future cricketers new skills and to give them the very best first experience in the world of cricket.  A chance to play, learn great skills and meet new friends!
                                Ekota cricket programmes are designed for players wanting to get that competitive edge over their opponents. It is a high intense and structured program ensuring all facets of batting, bowling, and fielding are covered and that all players gain some more knowledge about becoming a cricket maestro.
                            </p>
                            <a href="#" onClick={() => setModalShow(true)} class="discover-btn " >Read  More</a>

                        </div>
                    </div>

                    <div className="left1"></div>

                </div>
                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                ></MyVerticallyCenteredModal>
            </div>
        </div>
    );
};

export default Cricket;