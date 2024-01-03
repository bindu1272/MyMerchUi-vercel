import { isMobileOnly, isTablet } from "react-device-detect";

export const getThumbnailImageSpec = () => {
    return isMobileOnly ? "207x253" : isTablet ? "210x253" : "325x400";;
};

export const getDetailImageSpec = () => {
    return isMobileOnly ? "380x487" : isTablet ? "235x300" : "390x500";;
};