import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';
import { db } from './config/firebase';
import { Box, Paper, Button, Stack,Typography } from '@mui/material';
import { collection, getDocs } from 'firebase/firestore';


const Login = () => {
  // const navigate = useNavigate();

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const Check =async  (event) => {
    event.preventDefault()
    try {
      getDocs(collection(db, "admin"));
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;
      const email = user.email;
      const accessToken = user.accessToken;
      console.log(accessToken);
      // const displayName= user.displayName;
      const emailDomain = email.split('@')[1];
      if (emailDomain === 'webskie.com') {
        // navigate('/Admin');
        alert('Login success')
      } else {
        alert('Only users with @webskie.com domain are allowed.');
      }
    } catch (error) {
      console.error('Error signing in:', error);
      alert('Failed to sign in. Please check your credentials and try again.');
    }
  }
  return (
    <>
      <Box className="BoxContainer">
        <Paper elevation={0} className="PaperContainer">
          <Box
            sx={{
              width: '100%', // Set width to 100% to make it responsive
              m: 2,
              display: 'flex',
              justifyContent: 'center',
            }}
            className="smallBox"
          >
            <img src="logo.png" width={200} alt="" /> {/* Adjusted width for logo */}
          </Box>
          <Box
            sx={{
              width: '100%', // Set width to 100% to make it responsive
              m: 2,
              display: 'flex',
              justifyContent: 'center',
            }}
            className="smallBox"
          >
            <Box>
              <Typography
                sx={{ display: 'flex', justifyContent: 'center' }}
                variant="h7"
              >
                Sign in to your account
              </Typography>
              <Box
                component="form"
                onSubmit={Check}
                sx={{
                  '& > :not(style)': {
                    m: 1,
                    width: '90%', // Set width to 100% to make it responsive
                    display: 'flex',
                    justifyContent: 'center',
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <Stack spacing={2} direction="row">
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ width: '100%', height: 45 }} // Set width to 100% to make it responsive
                  >
                    Login
                  </Button>
                </Stack>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  )
}

export default Login
