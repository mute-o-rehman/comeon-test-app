import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { login } from "../../redux/actions/postAction";
import PropTypes from "prop-types";

const LoginView = ({ login, loginError }) => {
  // State for login credentials
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  // Reset credentials on login error
  useEffect(() => {
    if (loginError) {
      setCredentials((prevCredentials) => ({
        ...prevCredentials,
        username: "",
        password: "",
      }));
    }
  }, [loginError]);

  // Handle input change
  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const onSubmit = (e) => {
    e.preventDefault();
    login(credentials);
  };

  return (
    <div className="login">
      <div className="ui grid centered">
        <form onSubmit={onSubmit}>
          <div className="fields">
            <div className="required field">
              <div className="ui icon input">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  onChange={onChange}
                  value={credentials.username}
                  autoFocus
                />
                <i className="user icon" />
              </div>
            </div>
            <div className="required field">
              <div className="ui icon input">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={onChange}
                  value={credentials.password}
                />
                <i className="lock icon" />
              </div>
            </div>
            <div className="field">
              <div className="ui icon input">
                <input type="submit" value="Login" />
                <i className="right chevron icon" />
              </div>
            </div>
          </div>
        </form>
      </div>
      {loginError && <div className="ui header centered">{loginError}</div>}
    </div>
  );
};

LoginView.propTypes = {
  loginError: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  isLoginSuccess: PropTypes.oneOfType([PropTypes.bool, PropTypes.func])
    .isRequired,
};
const mapStateToProps = (state) => ({
  loginError: state.login.loginError,
  isLoginSuccess: state.login.isLoginSuccess,
});

export default connect(mapStateToProps, { login })(LoginView);
