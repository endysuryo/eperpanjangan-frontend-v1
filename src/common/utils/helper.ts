import { IAlertState } from '../../common/interface/app.interface';
import { AppModule } from '../../store/modules/app';

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

export const checkVideoIdYoutube = (videoLink: string) => {
  const data: any = videoLink.split('/');
  const youtubeId = /(.*?)(^|\/|v=)([a-z0-9_-]{11})(.*)?/gim;
  const youtubeCheck = youtubeId.test(videoLink);
  console.info('check', youtubeCheck);
  if (!youtubeCheck) {
    return {
      error: true,
      videoId: '',
      message: 'Your link is not valid',
    };
  } else {
    const videoId = data[3].split('=')[1].split('&');
    if (videoId.length > 0) {
      return {
        error: false,
        videoId: videoId[0],
        message: 'Your Youtube link is valid',
      };
    } else {
      return {
        error: false,
        videoId: data[3].split('=')[1],
        message: 'Your Youtube link is valid',
      };
    }
  }
};

export const convertImageUrl = (payload: string) => {
  const res = payload.split('/').join('%2F');
  return res;
};

export const watchDataChange = (payload: any) => {
  const localData: any = localStorage.getItem('program-data');
  const localDataParsed: any = JSON.parse(localData);
  Object.keys(localDataParsed).map((key, index) => {
    if (key === payload.target.dataset.text) {
      localDataParsed[key] = payload.target.value;
    }
  });
  localStorage.setItem('program-data', JSON.stringify(localDataParsed));
};

export const toggleAlertData = (payload: IAlertState) => {
  AppModule.toggleAlert(payload);
};
