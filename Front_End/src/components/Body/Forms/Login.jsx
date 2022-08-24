import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
  return (
    <div class="container justify-content-center " 
    style={{
        backgroundColor: '',
      }}>
         <div class="text-center ">
         <h3 ><strong>¿Ya estas registrado?</strong></h3>
         <h4><strong>Accede</strong></h4>
            <p><strong>HireMigrant</strong></p>
        </div>
        <div class="dragArea row" 
        style={{
        backgroundColor: ''
       
      }}>   
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email </Form.Label>
        <Form.Control type="email" placeholder="Email" />
        <Form.Text className="text-muted">
          HireMigrant cumple la politica  de proteccion de datos  .
        </Form.Text> 
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Recordar password" />
      </Form.Group>
      <Button variant="primary" type="submit" >
        Iniciar sesión
      </Button>
    </Form>
    </div>
    </div>


  );
}

export default Login;

//ReactDOM.findDOMNode(ref)//