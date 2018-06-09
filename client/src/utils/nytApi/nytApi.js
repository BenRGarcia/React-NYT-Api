export const generateNytApiQueryString = ({ topic, startYear, endYear }) => {
  let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?`;
  url += `api-key=8a65f491cc5a4cb085f9fe3fb7263e7a`;
  url += `&q=${topic}`;
  url += `&begin_date=${startYear}0101`;
  url += `&end_date=${endYear}1231`;
  url += `&fl=headline,web_url,pub_date`;
  return url;
};

export const nytApiSearch = async (queryString) => {
  const resp = await fetch(queryString);
  const data = await resp.json();
  return data.response.docs;
};
