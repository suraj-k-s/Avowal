import React from 'react'
import './landing.css'
import { Box, Card, Typography } from '@mui/material'

function TC() {
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
          <div className="terms-condition" style={{ zoom: '80%' }}></div>
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
              height: '80%',
              borderRadius: 10,
              marginTop: '-30px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '20px',
              gap: '20px',
              overflow: 'scroll',
            }}
          >
            <Typography variant="h5" align="left">
              Terms and Conditions of Use
            </Typography>
            <Typography variant="body1" align="left">
              These terms and conditions ("Terms") govern your use of Cupid (the
              "Platform"). By accessing or using the Platform, you agree to be
              bound by these Terms. If you do not agree to these Terms, you may
              not use the Platform.
            </Typography>
            <Typography variant="h6" align="left">
              1. Prohibited Content
            </Typography>
            <Typography variant="body1" align="left">
              You agree not to post, transmit, or share any content that:
              <ul>
                <li>
                  Promotes hate speech, discrimination, harassment, or violence
                  against individuals or groups based on race, ethnicity,
                  religion, gender, sexual orientation, disability, or any other
                  characteristic.
                </li>
                <li>
                  Contains explicit, obscene, or offensive language or material.
                </li>
                <li>
                  Infringes on the intellectual property rights of others.
                </li>
                <li>Violates any applicable laws or regulations.</li>
              </ul>
            </Typography>
            <Typography variant="h6" align="left">
              2. Anonymity Policy
            </Typography>
            <Typography variant="body1" align="left">
              While users may interact with the Platform anonymously, they are
              still responsible for their conduct and content. Anonymity is
              intended to protect user privacy, but it does not exempt users
              from compliance with these Terms.
            </Typography>
            <Typography variant="h6" align="left">
              3. User Conduct
            </Typography>
            <Typography variant="body1" align="left">
              You agree to use the Platform in a respectful and responsible
              manner. This includes refraining from:
              <ul>
                <li>Abusive language or personal attacks.</li>
                <li>Posting misleading or false information.</li>
                <li>Engaging in disruptive behavior or spamming.</li>
              </ul>
            </Typography>
            <Typography variant="h6" align="left">
              4. Moderation Policy
            </Typography>
            <Typography variant="body1" align="left">
              The Platform may employ automated filters and manual moderation to
              detect and remove prohibited content. Users are encouraged to
              report any violations of these Terms.
            </Typography>
            <Typography variant="h6" align="left">
              5. Reporting Mechanism
            </Typography>
            <Typography variant="body1" align="left">
              To report inappropriate content or behavior, please contact
              support or use a reporting feature.
            </Typography>
            <Typography variant="h6" align="left">
              6. Consequences of Violations
            </Typography>
            <Typography variant="body1" align="left">
              Violations of these Terms may result in:
              <ul>
                <li>Removal of content.</li>
                <li>
                  Temporary or permanent suspension of access to the Platform.
                </li>
                <li>Legal action if deemed necessary.</li>
              </ul>
            </Typography>
            <Typography variant="h6" align="left">
              7. Legal Compliance
            </Typography>
            <Typography variant="body1" align="left">
              You are responsible for complying with all applicable laws and
              regulations when using the Platform, including laws related to
              defamation, privacy, and intellectual property.
            </Typography>
            <Typography variant="h6" align="left">
              8. Disclaimer of Liability
            </Typography>
            <Typography variant="body1" align="left">
              We are not responsible for the content posted by users on the
              Platform. Users participate at their own risk, and we disclaim any
              liability for damages arising from the use of the Platform.
            </Typography>
            <Typography variant="h6" align="left">
              9. Intellectual Property
            </Typography>
            <Typography variant="body1" align="left">
              By posting content on the Platform, you grant us a non-exclusive,
              royalty-free license to use, reproduce, modify, adapt, publish,
              and distribute the content for the purpose of operating and
              promoting the Platform.
            </Typography>
            <Typography variant="h6" align="left">
              10. Termination of Service
            </Typography>
            <Typography variant="body1" align="left">
              We reserve the right to terminate or suspend your access to the
              Platform at any time and for any reason, without prior notice or
              liability.
            </Typography>
            <Typography variant="h6" align="left">
              11. Changes to Terms
            </Typography>
            <Typography variant="body1" align="left">
              We may update these Terms from time to time. Any changes will be
              effective immediately upon posting the revised Terms on the
              Platform. Your continued use of the Platform after the posting of
              the revised Terms constitutes your acceptance of the changes.
            </Typography>
            <Typography variant="h6" align="left">
              12. Governing Law
            </Typography>
            <Typography variant="body1" align="left">
              These Terms shall be governed by and construed in accordance with
              the laws of IPC, without regard to its conflict of law principles.
            </Typography>
            <Typography variant="body1" align="left">
              If you have any questions or concerns about these Terms, please
              contact us at{' '}
              <a href="mailto:contact.webskie@gmail.com">
                contact.webskie@gmail.com
              </a>
              .
            </Typography>
          </Card>
        </Box>
      </header>
    </div>
  )
}

export default TC
