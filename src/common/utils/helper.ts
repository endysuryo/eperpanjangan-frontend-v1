import moment from 'moment';
import { monthInSeconds } from './constant';

export const formatErrorMessage = (payload: any) => {
  if (payload) {
    return {
      statusCode: payload.response.data.statusCode,
      statusText: payload.response.data.statusText,
      message: payload.response.data.message,
    };
  } else {
    return {
      statusCode: 0,
      statusText: '',
      message: '',
    };
  }
};

export const convertTitle = (title: string) =>
  title.length > 60 ? title.substr(60) + '...' : title;

export const convertConstantToReadable = (text: string) =>
  text.replace('_', ' ').toLowerCase();

export const convertAccessDurationToMonthYear = (
  max_duration_access: number,
) => {
  let month = 0;
  let monthInSecond = 0;
  let year = 0;
  let yearInSecond = 0;
  let data = max_duration_access;
  while (data >= monthInSeconds) {
    if (data > yearInSecond) {
      data = data - monthInSeconds * 12;
      yearInSecond = yearInSecond + monthInSeconds * 12;
      year++;
    } else {
      if (month >= 12) {
        data = data - monthInSeconds * 12;
        yearInSecond = yearInSecond + monthInSeconds * 12;
        year++;
      } else {
        data = data - monthInSeconds;
        monthInSecond = monthInSecond + monthInSeconds;
        month++;
      }
    }
  }
  return {
    month: { title: `${month} Month`, value: monthInSecond },
    year: { title: `${year} Year`, value: yearInSecond },
  };
};

// convert time
export const convertTimeLongEn = (time: string) => {
  return `${moment(time).format('MMMM Do YYYY - h:mm A')}`;
};
export const convertTimeWithoutTimeEn = (time: string) => {
  return `${moment(time).format('MMMM Do YYYY')}`;
};
export const convertFromNow = (time: string) => {
  return `${moment(time).fromNow()}`;
};
