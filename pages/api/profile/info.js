import axios from "axios";
import { getStrapiURL } from "lib/api";

export default async (req, res) => {
  const { token } = req.query;
  const method = req.method;

  try {
    if (method === "GET") {
      const { data } = await axios.get(getStrapiURL("/locations"), {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      res.status(200).send(data);
    }
  } catch (e) {
    res.status(400).send(e);
  }
};
