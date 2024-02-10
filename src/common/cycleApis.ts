import axios from 'axios';

export const fetchProducts = async (
  url: string,
  renderData: (data: any) => void,
) => {
  try {
    const response = await axios.get(url);
    const result = await response;
    return renderData(result.data.warehouses);
  } catch (error) {
    console.log(error);
  }
};
