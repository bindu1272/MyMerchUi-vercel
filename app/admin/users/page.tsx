import Users from "@/components/Admin/Users";
import { computePaginationURL } from "@/utilities/helpers";
import { FETCH_USERS_URL } from "@/constants/apiUrls";



const UsersPage = async() => {
  
  // const url: any = computePaginationURL(FETCH_USERS_URL, {
  //   page: 1,
  // });
  // const response:any = await fetch(url, {
  //   headers: {
  //     'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5MzM1NWFiMS1mNTZlLTRlMjMtOGQ1Mi1hMzk0YWVjZTc3OWEiLCJqdGkiOiIyNDZkYzUyMDE0MDkxNzBlODQ3OGFhZjM2ODE0NjA4YzVmMWIyNjUzNjUyNzJiYzRlMGY2MTBlM2I1Zjg5ZDY0YTc2ZmY3Zjc4NDI4MWViYyIsImlhdCI6MTcwOTAzMDE0OSwibmJmIjoxNzA5MDMwMTQ5LCJleHAiOjE3MDkwMzM3NDksInN1YiI6IjI0NiIsInNjb3BlcyI6W119.GY_YzbkGKl24izJoMMhZ9Vb8OoM5iN5zFEa6FyLHWY5jncPG3uxM0MipefUUCfJfGRBBRKqujAaGIakSyh8vJx9ZLyvhwofQm7QIbFWqzxezKAA5uCQ4tSm_av42r2LXI90UJyONShyXlMaeRyZTipxqX0xxZ60w_6Ozsv_ovtC-pgUdxIw7lNZv464AnJZ8EqIcfDncmXeMJvdSKQu0jHml_q5uXD-uJlj26rvxHgAGOexvhnu0Zxe7NLLL4thxIPdqg5BFmhVSgDbCcnY_zA9q-J4SdtNUXzxGt8seqiWrZwRU5jN3NSJNLZDg09ntGUAT8bER683lIx7ONVo23tvwLtpTuBZ6vC38rsEFlTBT-9AeyQt73OsrywFKo53Du3yVmUQEK1KuSIw9ZuJDVkQGD3INoNKdV0ymbWgpzJP3HDsD8JcdU1_SzJWmudUsZcjayRYcPlVORUBLmqUqj-KeGrkl_7mqBxTZ1CjsLiJJ9KDSbxHBvOwjyyUq-UjvO0Fn21GxjFBXnNsMICGHpA1dPJ5avJsux1UFLVvAfK65UgjDqXPeBL_XeNnUwkUctmJcwNcfToCiCziJRjYYyTM79ERMfu1Oa1t-qhXEIOREEr4zcHnYwFgsvVuMXompJpOpEZITpLz21MqWupcQwpAStogQ5LXSc3UqG10__S0',
  //     'Content-Type': 'application/json',
  //   },
  // });
  
  // const usersResponse:any= await response?.json();

  return (<Users/>);
};


export default UsersPage;
