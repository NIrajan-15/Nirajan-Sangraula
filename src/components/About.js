import React from 'react';
import Box from '@mui/system/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { LinkedIn, GitHub, Description } from '@mui/icons-material';
import { useSpring, animated } from 'react-spring';
import Resume from '../Images/Resume.pdf';
import SkillsGrid from './Skills';

const About = () => {
  const imageAnimation = useSpring({
    opacity: 1,
    transform: 'translateX(0)',
    from: { opacity: 0.1, transform: 'translateX(100px)' },
    config: {
      tension: 200, // Adjust this value to control the intensity of the bounce
      friction: 10, // Adjust this value to control the duration of the bounce
    },
  });

  const nameAnimation = useSpring({
    opacity: 1,
    transform: 'translateX(0)',
    from: { opacity: 0.1, transform: 'translateX(-100px)' },
    config: {
      tension: 200, // Adjust this value to control the intensity of the bounce
      friction: 10, // Adjust this value to control the duration of the bounce
    },
  });

  const skillAnimation = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(100px)' },
    config: {
      tension: 200, // Adjust this value to control the intensity of the bounce
      friction: 10, // Adjust this value to control the duration of the bounce
    },
  });

  return (
    <>
      <Box
        p={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight='90vh'
        backgroundColor='white'
        
      >
        <Box
          width="100vw"
          p={1}
          boxShadow={4}
          backgroundColor='white'
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          paddingLeft={2}
        >
          <Grid container spacing={2} paddingTop={16} paddingBottom={4} justifyContent={'center'}>
            
            <Grid item xs={12} sm={6} md={6} lg={4} p={1} minHeight="40vh"  >
              <animated.div style={nameAnimation} >
                <Typography variant="h4" fontFamily={'open Sans'}>
                  Hi, I'm Nirajan Sangraula.
                </Typography>
              
              <Typography variant="body1" sx={{ mb: 3 }}>
                I'm a passionate Software Engineer with an appetite for learning and exploring.
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Let's Connect
              </Typography>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                mt={2}
                width="100%"
              >
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<LinkedIn />}
                  href="https://www.linkedin.com/in/nirajan-sangraula"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ mb: 2, width: '100%' }}
                >
                  LinkedIn
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<GitHub />}
                  href="https://github.com/NIrajan-15"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ mb: 2, width: '100%' }}
                >
                  GitHub
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<Description />}
                  href={Resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ width: '100%' }}
                >
                  Resume
                </Button>
              </Box>
              </animated.div>
            </Grid>
            <Grid item xs={0} sm={6} md={6} lg={4} textAlign="center">
              <animated.img
                src="https://thumbs.gfycat.com/ExemplaryFairFeline-size_restricted.gif"
                alt="."
                style={{
                  borderRadius: '50%',
                  width: '90%',
                  height: '90%',
                  ...imageAnimation,
                }}
              />
              
            </Grid>
            <Grid item xs={12} lg={8}>
            <animated.div style={skillAnimation}>
            <SkillsGrid />
            </animated.div>
            </Grid>
          </Grid>

        </Box>
      </Box>
      
    </>
  );
}

export default About;

