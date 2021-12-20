import axios from "axios";
import { getStrapiURL } from "lib/api";

export default async (req, res) => {
  const { start = 0, limit = 10 } = req.body;
  const method = req.method;

  try {
    if (method === "POST") {
      const { data } = await axios.get(
        getStrapiURL(`/locations?_start=${start}&_limit=${limit}`)
      );

      res
        .status(200)
        .send(getStrapiURL(`/locations?_start=${start}&_limit=${limit}`));
    }
  } catch (e) {
    res.status(400).send(e);
  }
};
