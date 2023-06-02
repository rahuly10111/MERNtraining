// import { ResponseStatus } from '../../../apiUtils/interfacesAndTypes.ts/enum';
import { commanResponse } from '../../../apiUtils/models/commonResponse';
import * as yup from 'yup';
import postService from '../../services/index';
import { ResponseStatus } from '../../../apiUtils/interfacesAndTypes';
export const postController = {
  insertPosts, getPosts, deletePosts, putPosts, getIdPosts
};

async function insertPosts(object) {
  try {
    let responseOBJ = new commanResponse();

    //schema for payload
    let postSchema = yup.object({
      title: yup.string().required(),

      description: yup.string().required(),

      category: yup.string().required(),

    });

    if (await postSchema.isValid(object)) {
      const response = await postService.postService.createProduct(object);

      if (response) {
        responseOBJ.Status = response?.status === 200 ? true : false;
        responseOBJ.Result = response?.data ? response?.data : undefined;
        responseOBJ.ResponseStatus = response.status;
      }
    } else {
      responseOBJ.ResponseStatus = ResponseStatus.UnprocessableEntity;
      responseOBJ.Status = false;
      responseOBJ.Message = await postSchema
        .validate(object)
        .catch((e) => e.message);
    }
    return responseOBJ;
  } catch (error) {
    console.log('error From controller::>', error);
  }
}


async function getPosts() {
  try {
    let responseOBJ = new commanResponse();
    const response = await postService.postService.GetPosts();

    if (response) {
      responseOBJ.Status = response?.status === 200 ? true : false;
      responseOBJ.Result = response?.data ? response?.data : undefined;
      responseOBJ.ResponseStatus = response.status;
    }

    return responseOBJ;
  } catch (error) {
    console.log('error From controller::>', error);
  }
}



async function getIdPosts(postId) {
  try {
    let responseOBJ = new commanResponse();
    const response = await postService.postService.GetIdPosts(postId.id);
    console.log("🚀 ~ file: index.js:69 ~ getIdPosts ~ response:", response)
    console.log("🚀 ~ file: index.js:69 ~ getIdPosts ~ postid:", postId)

    if (response) {
      responseOBJ.Status = response?.status === 200 ? true : false;
      responseOBJ.Result = response?.data ? response?.data : undefined;
      responseOBJ.ResponseStatus = response.status;
    }

    return responseOBJ;
  } catch (error) {
    console.log('error From controller::>', error);
  }
}


async function deletePosts(postId) {
  console.log("Delete Post Id ", postId)
  try {
    let responseOBJ = new commanResponse();
    const response = await postService.postService.DeletePosts(postId);

    if (response) {
      responseOBJ.Status = response?.status === 200 ? true : false;
      responseOBJ.Result = response?.data ? response?.data : undefined;
      responseOBJ.ResponseStatus = response.status;
    }

    return responseOBJ;
  } catch (error) {
    console.log('error From controller::>', error);
  }
}


async function putPosts(postId, object) {

  console.log("firstxdsccc")
  console.log("put Post Id ", postId)
  try {
    let responseOBJ = new commanResponse();

    //schema for payload
    // let productSchema = yup.object({
    //   title: yup.string().required(),

    //   description: yup.string().required(),

    //   category: yup.required(),

    // });
    // console.log("🚀 ~ file: index.js:99 ~ putPosts ~ productSchema:", await productSchema.isValid(object))


    console.log("dsfwdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfs", postId)
    // if (await productSchema.isValid(object)) {
    const response = await postService.postService.PutPosts(postId.id, object);
    console.log("🚀 ~ file: index.js:102 ~ putPosts ~ response:", response)

    if (response) {
      responseOBJ.Status = response?.status === 200 ? true : false;
      responseOBJ.Result = response?.data ? response?.data : undefined;
      responseOBJ.ResponseStatus = response.status;
      // }
    } else {
      responseOBJ.ResponseStatus = ResponseStatus.UnprocessableEntity;
      responseOBJ.Status = false;
      // responseOBJ.Message = await productSchema
      //   .validate(object)
      //   .catch((e) => e.message);
    }
    return responseOBJ;
  } catch (error) {
    console.log('error From controller::>', error);
  }
}
