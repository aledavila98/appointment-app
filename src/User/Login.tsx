import { Card, CardActions, Button, Box } from "@mui/material";

const Login = ({ children } : any) => {
    return(
        <Box 
            component={"form"}
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
        >
            <Card>
                {children}
                <CardActions>
                    <Button size="small" color="primary">
                        Login
                    </Button>
                </CardActions>
            </Card>
        </Box>
        
    );
}

export default Login;