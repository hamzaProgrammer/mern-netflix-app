import React from 'react';
import { makeStyles , Box } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
    mainRoot: {
         width: '100%',
    },
  root: {
    paddingLeft: '20%',
    paddingRight: '20%',
    paddingTop: '50px',
    paddingBottom: '20px'
  },
  heading: {
    fontSize: '22px',
    fontWeight: 500,
    color: '#fff'
  },
  tpyo: {
      fontSize : '40px',
      fontWeight: 700,
      paddingBottom: '20px',
      paddingLeft: '150px'
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
      <Box className={classes.mainRoot}>
        <div className={classes.root}>
        <Typography className={classes.tpyo}>Frequently Asked Questions</Typography>

      <Accordion style={{backgroundColor: '#303030' , color: '#fff' , marginBottom: '10px' , height: '70px', paddingTop: '10px'}}>
        <AccordionSummary
          expandIcon={<AddIcon style={{color: '#fff'}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>What is Netflix?</Typography>
        </AccordionSummary>
        <AccordionDetails >
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={{backgroundColor: '#303030' , color: '#fff' , marginBottom : '10px' , height: '70px' , paddingTop: '10px'}}>
        <AccordionSummary
          expandIcon={<AddIcon style={{color: '#fff'}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>How much does Netflix costs?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={{backgroundColor: '#303030' , color: '#fff' , marginBottom: '10px' , height: '70px' , paddingTop: '10px'}}>
        <AccordionSummary
          expandIcon={<AddIcon style={{color: '#fff'}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Where I can watch?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={{backgroundColor: '#303030' , color: '#fff', marginBottom: '10px' , heightL: '70px' , paddingTop: '10px'}}>
        <AccordionSummary
          expandIcon={<AddIcon style={{color: '#fff'}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>How much does Netflix costs?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={{backgroundColor: '#303030' , color: '#fff' , marginBottom : '10px' , height: '70px' , paddingTop: '10px'}}>
        <AccordionSummary
          expandIcon={<AddIcon style={{color: '#fff'}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Where I can watch?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
    </Box>
  );
}
