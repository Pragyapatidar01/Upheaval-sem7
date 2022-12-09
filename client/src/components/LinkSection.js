import { Form, Button, FloatingLabel } from "react-bootstrap";

const LinkSection = (props) => {

  if (props.flag === 0) return <div></div>

  return <>
    <div className="link-section">
      <h2 style={{ marginTop: '42px', marginBottom: '20px' }}>Prototype Details</h2>
      <hr></hr>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Prototype Demo Link</Form.Label>
        <Form.Control type="text" placeholder="Demo Link"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Video Link</Form.Label>
        <Form.Control type="text" placeholder="Video Link"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Repository Link</Form.Label>
        <Form.Control type="text" placeholder="Repository Link" />
      </Form.Group>
    </div>
  </>


}
export default LinkSection