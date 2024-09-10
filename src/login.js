import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/login.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Pic from './asset/Pic.jpg';

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const mockAuthService = (username, password) => {
        // This is a mock function. Replace this with your actual authentication logic.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (username === 'rana' && password === 'pass') {
                    resolve({ token: '', username: username }); // Pass username here
                } else {
                    reject('نام کاربری یا رمز عبور صحیح نمی باشد');
                }
            }, 1000);
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        mockAuthService(username, password)
            .then((response) => {
                navigate('/main', { state: { username: response.username } }); // Pass the username to Main component
            })
            .catch((error) => {
                setError(error);
            });
    };

    return (
        <div className='login-layout'>
            <Row>
                <Col className='formClass'>
                    <h4 className='titleClass'>پنل مدیریت هاب</h4>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>نام کاربری</Form.Label>
                            <Form.Control
                                type="text"
                                id="username"
                                placeholder="نام کاربری خود را وارد کنید"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                className="custom-input"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 pass" controlId="formBasicPassword">
                            <Form.Label>رمز عبور</Form.Label>
                            <Form.Control
                                type="password"
                                id="password"
                                placeholder="رمز عبور خود را وارد کنید"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 rememberTitle" controlId="formBasicCheckbox">
                            <a href='./passwordForgotten' className="link">فراموشی رمز عبور</a>
                            <Form.Check type="checkbox" label="مرا به خاطر بسپار" className='remember' />
                        </Form.Group>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <Button type="submit" className='submit'>
                            ورود
                        </Button>
                        <p className="signUp-title">حساب کاربری ندارید ؟ <a href="/Authentication/Signup" className="link">ثبت نام </a>کنید</p>
                    </Form>
                </Col>
                <Col>
                    <img src={Pic} alt="background" className='bgPicture' />
                </Col>
            </Row>
        </div>
    );
}

export default Login;
