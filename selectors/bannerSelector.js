import _ from "lodash";

export const getHeaderBanners = (state, page) =>
    state.banners && state.banners.current && state.banners.current.headerBanners && state.banners.current.headerBanners.length > 0
        ? state.banners.current.headerBanners.filter((hb) => hb.page.toLowerCase() === page.toLowerCase())
        : null;

export const getFooterBanners = (state, page) =>
    state.banners && state.banners.current && state.banners.current.footerBanners && state.banners.current.footerBanners.length > 0
        ? state.banners.current.footerBanners.filter((fb) => fb.page.toLowerCase() === page.toLowerCase())
        : null;
