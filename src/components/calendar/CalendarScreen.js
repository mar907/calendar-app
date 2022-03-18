import React, { useEffect, useState } from 'react';
import { NavBar } from '../ui/NavBar';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { messages } from '../../helpers/calendar-messages-esp';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';
import { useDispatch, useSelector } from 'react-redux';
import { uiOpenModal } from '../actions/ui';
import { eventClearActiveEvent, eventSetActive, eventStartLoading } from '../actions/events';
import { AddNewFab } from '../ui/AddNewFab';
import { DeleteEventFab } from '../ui/DeleteEventFab';



moment.locale('es');

const localizer = momentLocalizer(moment);

export const CalendarScreen = () => {

  const dispatch= useDispatch();
  const {events, activeEvent} = useSelector(state => state.calendar);

  const [lastView, setlastView] = useState (localStorage.getItem('lastView')|| 'month');

  useEffect(() => {
   dispatch (eventStartLoading());
    
  }, [dispatch])
  
  
  const onDoubleClick= (e)=> {
    dispatch(uiOpenModal());

  }

  const onSelectEvent= (e)=> {
     dispatch (eventSetActive(e));
  }

  const onViewChange= (e) => {
    setlastView (e)
    localStorage.setItem('lastView', e);
  }

  const onSelectedSlot= (e) =>{
    dispatch(eventClearActiveEvent());
  }

  const eventStyleGetter= (event, start, end, isSelected) => {

  }

  return (
    <div className='calendar-screen'>
        <NavBar/>

        <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            messages={messages}
            eventPropGetter= {eventStyleGetter}
            onDoubleClickEvent= {onDoubleClick}
            onSelectEvent= {onSelectEvent}
            onView= {onViewChange}
            onSelectedSlot= {onSelectedSlot}
            selectable= {true}
            view= {lastView}
            components= {{
              event: CalendarEvent
            }}
        />
        <AddNewFab/>

        {
          (activeEvent) && <DeleteEventFab/>
        }
        

        <CalendarModal/>

    </div>
  )
}
