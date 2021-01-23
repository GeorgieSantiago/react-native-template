import {AxiosResponse} from 'axios';
import net from 'config/net';

export const health = async () => {
  try {
    const {data}: AxiosResponse = await net.get('health');
    return data;
  } catch (e) {
    //Handle error
    return e;
  }
};
