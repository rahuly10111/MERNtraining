import { requestMethod } from '../../../apiUtils/constants';
import { requestModel } from '../../../apiUtils/models/requestModel';
import { axiosRepository } from '../../repository';
import postEndPoints from '../../../apiEndPoints/index';

export const postService = {
  createProduct: async (body) => {
    const reqestObj = new requestModel();
    try {
      reqestObj.method = requestMethod.POST;
      reqestObj.url = postEndPoints.postEndPoints.INSERT_POST;
      reqestObj.data = body;
      reqestObj.headers = `Authorization: Bearer ${JSON.parse(localStorage.getItem('loginToken'))}`;
      return await axiosRepository.request(reqestObj);
    } catch (error) {
      console.log('error from services::>', error);
    }
  },

  GetPosts: async (body) => {
    const reqestObj = new requestModel();
    try {
      reqestObj.method = requestMethod.GET;
      reqestObj.url = postEndPoints.postEndPoints.GET_POST;
      reqestObj.data = body;
      reqestObj.headers = `Authorization: Bearer ${JSON.parse(localStorage.getItem('loginToken'))}`;
      return await axiosRepository.request(reqestObj);
    } catch (error) {
      console.log('error from services::>', error);
    }
  },

  GetIdPosts: async (postId) => {
    const reqestObj = new requestModel();
    try {
      reqestObj.method = requestMethod.GET;
      reqestObj.url = postEndPoints.postEndPoints.GET_ID_POST(postId);
      reqestObj.data = null;
      reqestObj.headers = `Authorization: Bearer ${JSON.parse(localStorage.getItem('loginToken'))}`;
      return await axiosRepository.request(reqestObj);
    } catch (error) {
      console.log('error from services::>', error);
    }
  },


  DeletePosts: async (postId) => {
    const reqestObj = new requestModel();
    try {
      reqestObj.method = requestMethod.DELETE;
      reqestObj.url = postEndPoints.postEndPoints.DELETE_POST(postId);
      reqestObj.data = null;
      reqestObj.headers = `Authorization: Bearer ${JSON.parse(localStorage.getItem('loginToken'))}`;
      return await axiosRepository.request(reqestObj);
    } catch (error) {
      console.log('error from services::>', error);
    }
  },

  PutPosts: async (postId, body) => {
    console.log("Services post body", body)
    console.log("Services post postId", postId)
    const reqestObj = new requestModel();
    try {
      reqestObj.method = requestMethod.PUT;
      reqestObj.url = postEndPoints.postEndPoints.PUT_POST(postId);
      reqestObj.data = body;
      reqestObj.headers = `Authorization: Bearer ${JSON.parse(localStorage.getItem('loginToken'))}`;
      return await axiosRepository.request(reqestObj);
    } catch (error) {
      console.log('error from services::>', error);
    }
  }




};
