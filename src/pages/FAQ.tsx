import React from 'react';
import { useNavigate } from 'react-router-dom';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FaqAPI from '../components/FaqAPI';

// npm install @mui/material @mui/styled-engine-sc styled-components
// npm install @mui/icons-material

type Props = {};

const FAQ = (props: Props) => {
  return (
    <FaqAPI />
  );
};

export default FAQ;
