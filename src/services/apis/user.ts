import { GET_USER_INFO_URL } from "@constants/apiUrls";
import APIUtils from "@utils/apiUtils";
import { IRequestAction } from "src/interfaces/IRequestAction";
import { CLIENT_ID, CLIENT_SECRET } from "@env";

export async function getUserInfo(action: IRequestAction) {
  console.log("get user info request", GET_USER_INFO_URL, action.payload);

  return APIUtils.get(GET_USER_INFO_URL, {});
}
