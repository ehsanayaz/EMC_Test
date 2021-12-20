import axios from "axios";
import { getStrapiURL } from "lib/api";

export default async (req, res) => {
  const { token, id } = req.query;
  const method = req.method;
  const info = req.body;

  try {
    if (method === "PUT") {
      const { data } = await axios.put(getStrapiURL(`/locations/${id}`), info, {
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
