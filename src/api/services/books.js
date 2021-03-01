import { client } from '../api';


const postBooks =  async({
  page = 1,
  itemsPerPage = 10,
  filters
} ) => {
  const response = await client.post('/books', {
    page,
    itemsPerPage,
    filters
  });

  const offset = itemsPerPage * page;

  return { items: response.data, moreItems: offset >= response.data.count };
};

export default {
  postBooks
};
