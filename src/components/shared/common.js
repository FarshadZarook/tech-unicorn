
import axios from "axios";
import { _DOMAIN } from "../shared/constants";
import { useRouter } from "next/router";


export const sendRequest = (
  method,
  url,
  params = null,
  data = null,
  handleException = null,
  handleErrors = true
) => {
  url = params ? url + "?" + constructUrlWithParamsForFetch(params) : url;

  let customHeader = {
    "X-Requested-With": "XMLHttpRequest",
  };

  let request = axios({
    method: method,
    url: url,
    data: data,
    headers: customHeader,
  });

  return request;
};


