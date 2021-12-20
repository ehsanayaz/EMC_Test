import axios from "axios";
import nookies from "nookies";

export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const response = await fetch(getStrapiURL(path));
  const data = await response.json();
  return data;
}

export async function postAPI(path, body, jwt) {
  const cookies = nookies.get();
  const response = await axios.put(getStrapiURL(path), body, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
  return response;
}
