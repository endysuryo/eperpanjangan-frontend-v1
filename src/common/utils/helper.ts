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
