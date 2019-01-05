import axios from 'axios';

const url = 'http://10.0.2.2:8081/customer/list';

export function getCustomerList() {
    return axios.get(url);
}
