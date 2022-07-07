import React, { useState, useEffect, useContext, createContext } from "react";
import axios from 'axios';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


type faqsType = {
  faq_id: string,
  question: string,
  answer: string
};


const FaqAPI = () => {
  const [faqs, setFaqs] = useState<faqsType[]>([]);
  var rowId = 0


  const sendGetRequest = async () => {
    try {
      const response = await axios.get(
        'https://shielded-depths-40144.herokuapp.com/faq'
      );
      setFaqs(response.data);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {


    axios.get('https://shielded-depths-40144.herokuapp.com/faq').then((response) => {
      setFaqs(response.data);
      console.log(response);
    });
    sendGetRequest();
  }, []);

  return (
    <><div>

      <h1 id="topics-hk">
        Frequently Asked Questions
      </h1>
      {faqs
        .map((faq) => (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>

        ))}

    </div><p>Please feel free to send an email if you have any further questions</p>
      <ul id='dashboard'>
        <li id='sections'>
          <a id='email' href="mailto:kalafatzaferhakan@gmail.com">Send Email</a>
        </li>

      </ul>
    </>

  );
};

export default FaqAPI;