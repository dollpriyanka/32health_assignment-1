import { Card, Image, Col, Row } from "antd";

function Usercard(props) {
    return (
        <Card
            style={{
                width: "90%",
            }}
        >
            <Row>
                <Col span={6}><Image
                    width={200}
                    src={props.avatar}
                    preview={false}
                /></Col>
                <Col span={18} style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column", alignItems: "flex-start" }}>
                    <h2>{props.username}</h2>
                    <p><b>Email:</b>{props.email}</p>
                    <p><b>Phone:</b>{props.phone}</p>
                    <p><b>Company:</b>{props.company}</p>
                    <p><b>Website:</b>{props.website}</p>
                    <p><b>Address:</b>{props.address}</p>
                </Col>
            </Row>



        </Card>
    )
}

export default Usercard;




