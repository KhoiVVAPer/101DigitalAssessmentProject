import { GET_TOKEN_URL } from "@constants/apiUrls";
import APIUtils from "@utils/apiUtils";
import { IRequestAction } from "src/interfaces/IRequestAction";
import { CLIENT_ID, CLIENT_SECRET } from "@env";

export async function login(action: IRequestAction) {
  console.log("login request", GET_TOKEN_URL);

  return APIUtils.post(GET_TOKEN_URL, {
    body: {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      grant_type: "password",
      scope: "openid",
      username: action.payload.username,
      password: action.payload.password,
    },
    headers: {
      Connection: "keep-alive",
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
}
