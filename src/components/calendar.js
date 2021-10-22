import * as React from 'react';
import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image'
import { Button, Container, OverlayTrigger, Popover } from 'react-bootstrap';
import { frame, calendarButton } from "./calendar.module.css"


const Header = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px 10px 5px 10px;
  display: flex;
  justify-content: space-between;
  background-color: #001f5b;
  color: white;
`;

const MonthButton = styled.div`
  cursor: pointer;
`;

const Body = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid lightgrey;
  box-shadow: 2px 2px 2px #eee;
  display: flex;
  flex-wrap: wrap;
  min-height: 200px
`;

const Day = styled.div`
  width: 14.28%;
  height: 17%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${(props) =>
    props.isToday &&
    css`
      border: 1px solid #eee;
    `}

`;


const Calendar = ({eventDates, eventFlyers}) => {
  const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_OF_THE_WEEK = ['SUN','MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

  const today = new Date();
  const [date, setDate] = useState(today);
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [startDay, setStartDay] = useState(getStartDayOfMonth(date));

  useEffect(() => {
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setStartDay(getStartDayOfMonth(date));
  }, [date]);

  function getStartDayOfMonth(date) {
    const startDate = new Date(date.getFullYear(), date.getMonth(), 2).getDay();
    return startDate === 0 ? 7 : startDate;
  }

  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  };

  function isEventDate(date){
    var isEvent = false;
    eventDates.forEach((event) => {
      if ((date.getFullYear() === event.getFullYear()) && (date.getMonth() === event.getMonth()) && (date.getDate() === event.getDate()))
      {
        isEvent = true; 
      }
    }
    )
    return isEvent;
  };

  const popover = (date) => {

    var eventImage = undefined;
    var eventTitle = "";
    var eventLink = "";
    var eventButton = (<div></div>);
    eventFlyers.forEach((item) => {
      if ((date.getFullYear() === item[0].getFullYear()) && (date.getMonth() === item[0].getMonth()) && (date.getDate() === item[0].getDate()))
      {
        eventTitle = item[1];
        eventImage = item[2];
        if ((date.getFullYear() >= today.getFullYear()) && (date.getMonth() >= today.getMonth()) && (date.getDate() >= today.getMonth()))
        {
          eventLink = item[3];
        }
        
      }
    }
    );

    if (eventLink !== "")
    {
      eventButton = (
        <a href={eventLink} target="_blank" rel="noopener noreferrer">
        <Button size="md">
            Click here to sign up!
        </Button>
        </a>);
    }

    return (
    <Popover id="popover-basic">
      <Popover.Header as="h4">{eventTitle}</Popover.Header>
      <Popover.Body style={{textAlign:'center'}}>
        <GatsbyImage
          image={eventImage}
          alt=""
        />
        {eventButton}
      </Popover.Body>
    </Popover>
    );
  };

  const days = isLeapYear(year) ? DAYS_LEAP : DAYS;

  return (
    <Container className={frame}>
      <p style={{margin:'0px'}}>Click on the highlighted dates in the calendar to learn more.</p>
      <Header>
        <MonthButton onClick={() => setDate(new Date(year, month - 1, day))}>Prev</MonthButton>
        <div>
          {MONTHS[month]} {year}
        </div>
        <MonthButton onClick={() => setDate(new Date(year, month + 1, day))}>Next</MonthButton>
      </Header>
      <Body>
        {DAYS_OF_THE_WEEK.map((d) => (
          <Day key={d}>
            <strong>{d}</strong>
          </Day>
        ))}
        {Array(days[month] + (startDay - 1))
          .fill(null)
          .map((_, index) => {
            const d = index - (startDay - 2);
            var dayContent = (d > 0 ? d : '');
            if (isEventDate(new Date(year, month, d))) {
                dayContent = (<OverlayTrigger trigger="click" placement="right" overlay={popover(new Date(year, month, d))}>
                    <Button className= {calendarButton}>{d > 0 ? d : ''}</Button>
                  </OverlayTrigger>)
            }
            return (
              <Day
                key={index}
                isToday={year === today.getFullYear() && month === today.getMonth() && d === today.getDate()}
                onClick={() => setDate(new Date(year, month, d))}
              >
                {dayContent}
              </Day>
            );
          })}
      </Body>
    </Container>
  );
}

export default Calendar;
