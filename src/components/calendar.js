import * as React from 'react';
import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';
const Frame = styled.div`
  width: 70%;
  border: 1px solid lightgrey;
  box-shadow: 2px 2px 2px #eee;
  margin-top: 5px;
  margin-bottom: 5px;
  display: block;
  margin-right: auto;
  margin-left: auto;
`;

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
  display: flex;
  flex-wrap: wrap;
`;

const Day = styled.div`
  width: 14.2%;
  height: 40px;
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
  }

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
  }

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h4">Name of Event</Popover.Header>
      <Popover.Body>
        <StaticImage src="../images/hhm2021.jpg" alt="SHPE HHM" />
      </Popover.Body>
    </Popover>
    );

  const days = isLeapYear(year) ? DAYS_LEAP : DAYS;

  return (
    <Frame>
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
                dayContent = (<OverlayTrigger trigger="click" placement="right" overlay={popover}>
                    <Button style={{backgroundColor:"#f26534", color:"black", borderColor:"transparent"}}>{d > 0 ? d : ''}</Button>
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
    </Frame>
  );
}

export default Calendar;
