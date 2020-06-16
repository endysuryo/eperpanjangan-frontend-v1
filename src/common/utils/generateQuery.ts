export const generateQueryString = (params: any) => {
  const queries = [];

  if (params.select) {
    queries.push(`fields=${params.select.join(',')}`);
  }

  if (params.s) {
    // https://github.com/nestjsx/crud/wiki/Requests#search
    queries.push(`s=${JSON.stringify(params.s)}`);
  } else {
    if (params.filters) {
      if (Array.isArray(params.filters) && params.filters.length > 0) {
        for (const key in params.filters) {
          if (params.filters[key].operator === 'between') {
            // { field: 'start_at', operator: 'between', value: 'date1,date2'}
            queries.push(
              `filter=${params.filters[key].field}%7C%7C${
                params.filters[key].operator
              }%7C%7C${params.filters[key].value.split(',').join('%2C')}`,
            );
          } else {
            // { field: 'name', operator: 'eq', value: 'myname' }
            queries.push(
              `filter[]=${Object.values(params.filters[key]).join('%7C%7C')}`,
            );
          }
        }
      }
    } else if (params.filter) {
      queries.push(`filter=${Object.values(params.filter).join('%7C%7C')}`);
    }
  }

  if (params.joins && Array.isArray(params.joins) && params.joins.length > 0) {
    const query = [];
    for (const txt of params.joins) {
      query.push(`join[]=${txt}`);
    }
    queries.push(query.join('&'));
  } else if (params.join) {
    queries.push(`join=${params.join}`);
  }
  if (params.per_page) {
    queries.push(`per_page=${params.per_page}`);
  }
  if (params.page) {
    queries.push(`page=${params.page}`);
  }
  if (params.sort) {
    queries.push(`sort=${params.sort}`);
  }
  queries.push('cache=0');
  const queryString = queries.join('&');

  return queryString;
};
