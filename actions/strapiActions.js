"use client";
import * as TYPES from "../constants/actionTypes";
import axios from 'axios';
// import { store } from "../index"
// import {store} from "@/app/layout";
import {store} from "@/utilities/configureStore";


import { computePaginationURL, } from "../utilities/helpers";
// console.log("configureSTore",configureStore);
// let store = null;
// if(configureStore!=undefined){
//  const { store } = configureStore();
// console.log("configureSTore",store);

//  store = store;
// }


export const fetchBlogsRequest = (params, onSuccess, onFailure) => ({
    type: TYPES.FETCH_BLOGS_REQUEST,
    params,
    onSuccess,
    onFailure,
});
export function* fetchBlogs(action) {
    const { params, onSuccess, onFailure } = action;
    try {
        let url = `${process.env.REACT_APP_STRAPI_API_URL}/blogs`;
        if (params) {
            url = computePaginationURL(url, params);
        }
        axios.get(url)
            .then(response => {
                onSuccess && onSuccess(response.data);
            })
            .catch(error => {
                onFailure && onFailure(error);
            });
    } catch (error) {
        onFailure && onFailure(error);
    }
}

export const fetchBlogCategoriesRequest = (onSuccess, onFailure) => ({
    type: TYPES.FETCH_BLOG_CATEGORIES_REQUEST,
    onSuccess,
    onFailure,
});
export function* fetchBlogCategories(action) {
    const { onSuccess, onFailure } = action;
    try {
        const url = `${process.env.REACT_APP_STRAPI_API_URL}/blog-categories`;
        axios.get(url)
            .then(response => {
                onSuccess && onSuccess(response.data);
            })
            .catch(error => {
                onFailure && onFailure(error);
            });
    } catch (error) {
        onFailure && onFailure(error);
    }
}

export const fetchBlogRequest = (blogId, onSuccess, onFailure) => ({
    type: TYPES.FETCH_BLOG_REQUEST,
    blogId,
    onSuccess,
    onFailure,
});
export function* fetchBlog(action) {
    const { blogId, onSuccess, onFailure } = action;
    try {
        const url = `${process.env.REACT_APP_STRAPI_API_URL}/blogs/${blogId}`;
        axios.get(url)
            .then(response => {
                onSuccess && onSuccess(response.data);
            })
            .catch(error => {
                onFailure && onFailure(error);
            });
    } catch (error) {
        onFailure && onFailure(error);
    }
}

export const fetchCaseStudiesRequest = (params, onSuccess, onFailure) => ({
    type: TYPES.FETCH_CASE_STUDIES_REQUEST,
    params,
    onSuccess,
    onFailure,
});
export function* fetchCaseStudies(action) {
    const { params, onSuccess, onFailure } = action;
    try {
        let url = `${process.env.REACT_APP_STRAPI_API_URL}/case-studies`;
        if (params) {
            url = computePaginationURL(url, params);
        }
        axios.get(url)
            .then(response => {
                onSuccess && onSuccess(response.data);
            })
            .catch(error => {
                onFailure && onFailure(error);
            });
    } catch (error) {
        onFailure && onFailure(error);
    }
}

export const fetchCaseStudyCategoriesRequest = (onSuccess, onFailure) => ({
    type: TYPES.FETCH_CASE_STUDY_CATEGORIES_REQUEST,
    onSuccess,
    onFailure,
});
export function* fetchCaseStudyCategories(action) {
    const { onSuccess, onFailure } = action;
    try {
        const url = `${process.env.REACT_APP_STRAPI_API_URL}/case-study-categories`;
        axios.get(url)
            .then(response => {
                onSuccess && onSuccess(response.data);
            })
            .catch(error => {
                onFailure && onFailure(error);
            });
    } catch (error) {
        onFailure && onFailure(error);
    }
}

export const fetchCaseStudyRequest = (caseStudyId, onSuccess, onFailure) => ({
    type: TYPES.FETCH_CASE_STUDY_REQUEST,
    caseStudyId,
    onSuccess,
    onFailure,
});
export function* fetchCaseStudy(action) {
    const { caseStudyId, onSuccess, onFailure } = action;
    try {
        const url = `${process.env.REACT_APP_STRAPI_API_URL}/case-studies/${caseStudyId}`;
        axios.get(url)
            .then(response => {
                onSuccess && onSuccess(response.data);
            })
            .catch(error => {
                onFailure && onFailure(error);
            });
    } catch (error) {
        onFailure && onFailure(error);
    }
}

export const fetchCuratedPacksStrapiRequest = (params, onSuccess, onFailure) => ({
    type: TYPES.FETCH_CURATED_PACKS_STRAPI_REQUEST,
    params,
    onSuccess,
    onFailure,
});
export function* fetchCuratedPacksStrapi(action) {
    const { params, onSuccess, onFailure } = action;
    try {
        const url = computePaginationURL(
            `${process.env.REACT_APP_STRAPI_API_URL}/curated-packs`,
            params
        );
        axios.get(url).then(response => {
            onSuccess && onSuccess(response);
        });
    } catch (error) {
        onFailure && onFailure(error);
    }
}

export const fetchCuratedPacksCountRequest = (params, onSuccess, onFailure) => ({
    type: TYPES.FETCH_CURATED_PACKS_COUNT_REQUEST,
    params,
    onSuccess,
    onFailure,
});
export function* fetchCuratedPacksCount(action) {
    const { params, onSuccess, onFailure } = action;
    try {
        const url = `${process.env.REACT_APP_STRAPI_API_URL}/curated-packs/count`;
        axios.get(url).then(response => {
            onSuccess && onSuccess(response);
        });
    } catch (error) {
        onFailure && onFailure(error);
    }
}

export const fetchCuratedPackRequest = (packId, onSuccess, onFailure) => ({
    type: TYPES.FETCH_CURATED_PACK_REQUEST,
    packId,
    onSuccess,
    onFailure,
});
export function* fetchCuratedPack(action) {
    const { packId, onSuccess, onFailure } = action;
    try {
        const url = `${process.env.REACT_APP_STRAPI_API_URL}/curated-packs/${packId}`;
        axios.get(url).then(response => {
            onSuccess && onSuccess(response);
        });
    } catch (error) {
        onFailure && onFailure(error);
    }
}

export const fetchContactUsHelpOptionsRequest = (onSuccess, onFailure) => ({
    type: TYPES.FETCH_CONTACT_US_HELP_OPTIONS_REQUEST,
    onSuccess,
    onFailure,
});
export function* fetchContactUsHelpOptions(action) {
    const { onSuccess, onFailure } = action;
    try {
        const url = `${process.env.REACT_APP_STRAPI_API_URL}/contact-us-help-options`;
        axios.get(url)
            .then(response => {
                onSuccess && onSuccess(response.data);
            })
            .catch(error => {
                onFailure && onFailure(error);
            });
    } catch (error) {
        onFailure && onFailure(error);
    }
}

export const fetchMerchTeamMembersRequest = (params, onSuccess, onFailure) => ({
    type: TYPES.FETCH_MERCH_TEAM_MEMBERS_REQUEST,
    params,
    onSuccess,
    onFailure,
});
export function* fetchMerchTeamMembers(action) {
    const { params, onSuccess, onFailure } = action;
    try {
        let url = `${process.env.REACT_APP_STRAPI_API_URL}/merch-team-members`;
        if (params) {
            url = computePaginationURL(url, params);
        }
        axios.get(url)
            .then(response => {
                onSuccess && onSuccess(response.data);
            })
            .catch(error => {
                onFailure && onFailure(error);
            });
    } catch (error) {
        onFailure && onFailure(error);
    }
}

export const fetchHeaderBannersRequest = (params, onSuccess, onFailure) => ({
    type: TYPES.FETCH_HEADER_BANNERS_REQUEST,
    params,
    onSuccess,
    onFailure,
});
export function* fetchHeaderBanners(action) {
    const { params, onSuccess, onFailure } = action;
    try {
        let url = `${process.env.REACT_APP_STRAPI_API_URL}/header-banners`;
        if (params) {
            url = computePaginationURL(url, params);
        }
        axios.get(url)
            .then(response => {
                store.dispatch({
                    type: TYPES.FETCH_HEADER_BANNERS_SUCCESS,
                    payload: response.data
                });
                onSuccess && onSuccess(response);
            })
            .catch(error => {
                store.dispatch({
                    type: TYPES.FETCH_HEADER_BANNERS_ERROR,
                    error: error,
                });
                onFailure && onFailure(error);
            });
    } catch (error) {
        onFailure && onFailure(error);
    }
}

export const fetchFooterBannersRequest = (onSuccess, onFailure) => ({
    type: TYPES.FETCH_FOOTER_BANNERS_REQUEST,
    onSuccess,
    onFailure,
});
export function* fetchFooterBanners(action) {
    const { onSuccess, onFailure } = action;
    try {
        const url = `${process.env.REACT_APP_STRAPI_API_URL}/footer-banners`;
        axios.get(url)
            .then(response => {
                console.log("response",response)
                store.dispatch({
                    type: TYPES.FETCH_FOOTER_BANNERS_SUCCESS,
                    payload: response.data
                });
                onSuccess && onSuccess(response);
            })
            .catch(error => {
                store.dispatch({
                    type: TYPES.FETCH_FOOTER_BANNERS_ERROR,
                    error: error,
                });
                onFailure && onFailure(error);
            });
    } catch (error) {
        onFailure && onFailure(error);
    }
}

export const fetchMomentsOfMerchMagicRequest = (onSuccess, onFailure) => ({
    type: TYPES.FETCH_MOMENTS_OF_MERCH_MAGIC_REQUEST,
    onSuccess,
    onFailure,
});
export function* fetchMomentsOfMerchMagic(action) {
    const { onSuccess, onFailure } = action;
    try {
        const url = `${process.env.REACT_APP_STRAPI_API_URL}/moments-of-merch-magics`;
        axios.get(url)
            .then(response => {
                onSuccess && onSuccess(response.data);
            })
            .catch(error => {
                onFailure && onFailure(error);
            });
    } catch (error) {
        onFailure && onFailure(error);
    }
}

export const fetchInsposRequest = (params, onSuccess, onFailure) => ({
    type: TYPES.FETCH_INSPOS_REQUEST,
    params,
    onSuccess,
    onFailure,
});
export function* fetchInspos(action) {
    const { params, onSuccess, onFailure } = action;
    try {
        let url = `${process.env.REACT_APP_STRAPI_API_URL}/inspos`;
        if (params) {
            url = computePaginationURL(url, params);
        }
        axios.get(url)
            .then(response => {
                onSuccess && onSuccess(response.data);
            })
            .catch(error => {
                onFailure && onFailure(error);
            });
    } catch (error) {
        onFailure && onFailure(error);
    }
}

export const fetchInspoCategoriesRequest = (onSuccess, onFailure) => ({
    type: TYPES.FETCH_INSPO_CATEGORIES_REQUEST,
    onSuccess,
    onFailure,
});
export function* fetchInspoCategories(action) {
    const { onSuccess, onFailure } = action;
    try {
        const url = `${process.env.REACT_APP_STRAPI_API_URL}/inspo-categories`;
        axios.get(url)
            .then(response => {
                onSuccess && onSuccess(response.data);
            })
            .catch(error => {
                onFailure && onFailure(error);
            });
    } catch (error) {
        onFailure && onFailure(error);
    }
}

export const fetchInspoRequest = (inspoId, onSuccess, onFailure) => ({
    type: TYPES.FETCH_INSPO_REQUEST,
    inspoId,
    onSuccess,
    onFailure,
});
export function* fetchInspo(action) {
    const { inspoId, onSuccess, onFailure } = action;
    try {
        const url = `${process.env.REACT_APP_STRAPI_API_URL}/inspos/${inspoId}`;
        axios.get(url)
            .then(response => {
                onSuccess && onSuccess(response.data);
            })
            .catch(error => {
                onFailure && onFailure(error);
            });
    } catch (error) {
        onFailure && onFailure(error);
    }
}

export const fetchBrandsRequest = (onSuccess, onFailure) => ({
    type: TYPES.FETCH_BRANDS_REQUEST,
    onSuccess,
    onFailure,
});
export function* fetchBrands(action) {
    const { onSuccess, onFailure } = action;
    try {
        const url = `${process.env.REACT_APP_STRAPI_API_URL}/worked-with-brands`;
        axios.get(url)
            .then(response => {
                onSuccess && onSuccess(response.data);
            })
            .catch(error => {
                onFailure && onFailure(error);
            });
    } catch (error) {
        onFailure && onFailure(error);
    }
}