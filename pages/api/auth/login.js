import axios from "axios";
import { getStrapiURL } from "lib/api";
import { setCookie } from "nookies";

export default async (req, res) => {
  const { password, identifier } = req.body;
  const method = req.method;

  if (method === "POST") {
    try {
      const {
        data: {
          jwt: token,
          user: {
            username,
            email,
            user_profile: {
              displayName,
              profileImg: { url: profileImg },
            },
          },
        },
      } = await axios.post(getStrapiURL("/auth/local"), {
        identifier,
        password,
      });

      setCookie({ res }, "jwt", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });

      let userInfo = {
        username,
        email,
        displayName,
        profileImg,
      };

      res.status(200).send({ token, userInfo });
    } catch (e) {
      res.status(404).end();
    }
  }
};
