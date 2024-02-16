import React, { useEffect, useState } from 'react'
import './landing.css'
import {
  Box,
  Card,
  Typography,
} from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function ListView() {
  const { id } = useParams()
  const [selectedData, setSelectedData] = useState({
    question: '',
    answers: [],
  })

  const getQuestionData = () => {
    axios({
      method: 'get',
      url: `https://asia-south1-cupid-413817.cloudfunctions.net/cupid/api/cupid/queandanswer/approved/${id}`,
    })
      .then((response) => {
        setSelectedData(response.data.data)
      })
      .catch((error) => {
        console.error('Error making POST request:', error)
      })
  }

  useEffect(() => {
    getQuestionData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#dbe8ec',
            height: '100vh',
          }}
        >
          <Card
            sx={{
              width: '90vw',
              '@media screen and (min-width: 600px)': {
                width: '80vw',
              },
              '@media screen and (min-width: 960px)': {
                width: '60vw',
              },
              '@media screen and (min-width: 1280px)': {
                width: '30vw',
              },
              '@media screen and (min-width: 1920px)': {
                width: '30vw',
              },
              height: 200,
              borderEndEndRadius: 50,
              borderEndStartRadius: 50,
              backgroundColor: '#EB455F',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
              fontFamily: 'Arial, sans-serif',
            }}
          >
            <Typography variant="h3" align="center">
              Cupid
            </Typography>
          </Card>

          <Card
            sx={{
              width: '80vw',
              '@media screen and (min-width: 600px)': {
                width: '70vw',
              },
              '@media screen and (min-width: 960px)': {
                width: '50vw',
              },
              '@media screen and (min-width: 1280px)': {
                width: '25vw',
              },
              '@media screen and (min-width: 1920px)': {
                width: '25vw',
              },
              height: 500,
              borderRadius: 10,
              marginTop: '-30px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              overflowY: 'auto', // Enable scrolling
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                m: 5,
              }}
            >
              {/* Received message (question) */}
              {selectedData.question ? (
                <Box
                  sx={{
                    backgroundColor: '#ECEFF1',
                    borderRadius: '10px 10px 10px 0px',
                    padding: '10px',
                    alignSelf: 'flex-start',
                    maxWidth: '70%',
                  }}
                >
                  <Typography variant="body1">
                    <strong>Question:</strong> {selectedData.question}
                  </Typography>
                </Box>
              ) : (
                <Box
                sx={{
                  mt:"100px",
                  padding: '20px',
                }}
                >
                  <Typography variant="body1">
                    Answer not yet approved by the admin
                  </Typography>
                </Box>
              )}

              {/* Sent messages (answers) */}
              {selectedData.question &&
                selectedData.answers.map((answer, index) => (
                  <Box
                    key={index}
                    sx={{
                      backgroundColor: '#81C784',
                      borderRadius: '10px 10px 0px 10px',
                      padding: '10px',
                      alignSelf: 'flex-end',
                      maxWidth: '70%',
                      marginTop: '5px',
                    }}
                  >
                    <Typography variant="body1">
                      <strong>Answer:</strong> {answer.answer}
                    </Typography>
                  </Box>
                ))}
            </Box>
          </Card>
        </Box>
        <Box sx={{ display: 'flex', m: 5, justifyContent: 'space-between' }}>
          <Box>
            <a
              href="https://wa.me/918921399389"
              rel="noreferrer"
              target="_blank"
            >
              <WhatsAppIcon sx={{ color: 'green' }} />
            </a>
            <a
              href="https://wa.me/918921399389"
              rel="noreferrer"
              target="_blank"
            >
              <FacebookIcon sx={{ color: 'blue' }} />
            </a>
            <a
              href="https://wa.me/918921399389"
              rel="noreferrer"
              target="_blank"
            >
              <InstagramIcon sx={{ color: '#d62976' }} />
            </a>
          </Box>

          <Box>
            <Typography sx={{ fontSize: 10 }}>
              <a
                href="https://www.webskie.com"
                rel="noreferrer"
                target="_blank"
                style={{
                  textDecoration: 'none',
                  bottom: '-8px',
                  position: 'relative',
                }}
              >
                Powered by Webskie
              </a>
            </Typography>
          </Box>
        </Box>
      </header>
    </div>
  )
}

export default ListView
