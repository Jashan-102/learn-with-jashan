import axios from "axios";

export default function handleAPI(method, url, data) {
  axios({
    method,
    url,
    data,
    // method: 'post',
    // url: '/user/12345',
    // data: {
    //   firstName: 'Fred',
    //   lastName: 'Flintstone'
    // }
  });
}
