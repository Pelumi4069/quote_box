import React from 'react';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import IconButton from '@mui/material/IconButton';

const QuoteMachine = (props) => {
    const { selectedQuote, assignNewQuoteIndex } = props;

 
    const colors = ['bg-red-400', 'bg-blue-400', 'bg-green-400', 'bg-yellow-400'];

 
    const randomColorClass = colors[Math.floor(Math.random() * colors.length)];

    return (
        <Card className="lg:px-4 md:px-5 sm:px-3 px-1 lg:py-4 md:py-5 sm:py-3 py-1">
            <CardContent>
                <Typography id="text" className="text-color mb-4">
                    {/* <span className='text-8xl text-blue-400'>"</span> */}
                <span className="lg:text-2xl md:text-2xl sm:text-xl  text-base text-[#1F2C43] font-bold"><span className='lg:text-8xl md:text-6xl sm:text-2xl text-xl'>"</span>{selectedQuote.quote}</span>  <br/> <br /> <span className="lg:text-base md:text-base sm:text-base text-xs text-gray-700 ml-[60%]">- {selectedQuote.author}</span>
                </Typography>
            </CardContent>
            <CardActions className='flex justify-around'>
                <div>
                <IconButton id="tweet-quote" target="_blank" href="https://www.linkedin.com/in/adewunmi-pelumi-09776b210/">
                    <FaLinkedinIn size={20} className='text-[#1F2C43] transform hover:scale-90 transition ease-in 300 cursor-pointer' />
                </IconButton>
                <IconButton id="tweet-quote" target="_blank" href="https://www.instagram.com/me_that_iamweird?igsh=MTIybWdhd2t1MnhzOA%3D%3D&utm_source=qr">
                    <FaInstagram size={25} className='text-[#1F2C43] transform hover:scale-90 transition ease-in 300 cursor-pointer' />  
                </IconButton>
                </div>
                <Button id="new-quote" size="small" onClick={assignNewQuoteIndex} className="btn-color transform hover:scale-90 transition ease-in 300 cursor-pointer text-white">
                    Next Quote
                </Button>
            </CardActions>
        </Card>
    );
};


export default QuoteMachine;

