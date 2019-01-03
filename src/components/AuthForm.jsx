import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export const AuthForm = ({username, password, repeatedPassword, onChange, onSubmit, isRegisterForm}) => (
    <form onSubmit={onSubmit}>
        <TextField
            required
            fullWidth
            label="Username"
            placeholder="Type your username..."
            type="text"
            name="username"
            margin="normal"
            autoComplete="username"
            value={username.value}
            onChange={onChange}
            error={!username.isValid}
        />
        <TextField
            required
            fullWidth
            label="Password"
            placeholder="Type your password..."
            type="password"
            name="password"
            margin="normal"
            autoComplete="current-password"
            value={password.value}
            onChange={onChange}
            error={!password.isValid}
        />
        {isRegisterForm &&
        <TextField
            required
            fullWidth
            label="Repeat password"
            placeholder="Repeat your password..."
            type="password"
            name="repeatedPassword"
            margin="normal"
            autoComplete="current-password"
            value={repeatedPassword.value}
            onChange={onChange}
            error={!repeatedPassword.isValid}
        />
        }
        <Button
            fullWidth
            variant="contained"
            type="submit"
            color="primary"
        >
            {isRegisterForm ?
                'Register' :
                'Login'
            }
        </Button>
    </form>
)