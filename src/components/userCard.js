import { Card, Image, Col, Row } from "antd";


function Usercard(props) {
    const textStyle = {
        fontSize: 16
    }
    return (
        <Card
            style={{
                width: "90%",
                boxShadow: "0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12),0 1px 5px 0 rgba(0,0,0,.2)",
                margin: "10px 0px"
            }}
            bodyStyle={{
                padding: 5
            }}
        >
            <Row>
                <Col span={6}><Image
                    width={200}
                    src={`https://avatars.dicebear.com/v2/avataaars/${props.username}.svg?options[mood][]=happy`}
                    preview={false}
                /></Col>
                <Col span={18} style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column", alignItems: "flex-start" }}>
                    <h1>{props.name}</h1>
                    <div style={textStyle}><b>Email:</b> {props.email}</div>
                    <div style={textStyle}><b>Phone:</b> {props.phone}</div>
                    <div style={textStyle}><b>Company:</b> {props.company.name}</div>
                    <div style={textStyle}><b>Website:</b> {props.website}</div>
                    <div style={textStyle}><b>Address:</b> {props.address.street}, {props.address.suite},{" "}
                    {props.address.city} {props.address.zipcode}</div>
                </Col>
            </Row>
        </Card>
    )
}

export default Usercard;




