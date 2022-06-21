import React from 'react';
import ReactDOM from 'react-dom';

function login() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header"> Component</div>
                        
                        <div className="card-body"> Login
                            <from action="cheacklogin.php" method="post">
                            <div className='login-fields'>
                                <div className="fields">
                                    <label>บัญชีผู้ใช้</label>
                                    <input type='text' name="u_name" placeholder='กรุณากรอกชื่อบัญชีผู้ใช้' required></input>
                                </div>
                                <div className="fields">
                                    <label>รหัสผ่าน</label>
                                    <input type='password' name="u_name" placeholder='กรุณากรอกรหัสผ่าน' required></input>
                                </div>
                            </div>
                            <div className='login-action'>
                                <button className='login-action'>summit</button>
                            </div>
                            </from>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default login;

if (document.getElementById('root')) {
    ReactDOM.render(<login />, document.getElementById('root'));
}


