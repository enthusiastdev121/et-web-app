import { get, patch, post } from "network";
import { JobFilterTypeD } from "types/cd/jobs";
export const addJobApi = ({ token, raw }: {
    token: string,
    raw: {
        project: string,
        name: string,
        name_original: string,
        address2: string,
        location: string,
        zip: string,
        market: string,
        market_id: string,
        sub_timestamp: any,
        aud_timestamp: any,
        shoot_timestamp: any,
        asap: string,
        snr: number,
        snr_email: any,
        srn_address: string,
        app_date_time: string,
        app_loc: string,
        rate: string,
        rate_des: string,
        des: string,
        required_phone: string,
        required_photo: string,
        currency_code: string,
        expected_time: string,
        expected_hours_min: string,
        expected_hours_max: string,
        compensation_bonus: string,
        notify_through: number,
        casting_image_id: number,
        union2: number,
        casting_categories: any,
        role_id: any,
        status: number,
    }
}) => {
    return post({
        route: "/v2/cd/projects",
        data: JSON.stringify(raw),
        config: {
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
        },
    });
};
export const updateJobApi = ({ token, raw, castingId }: {
    token: string,
    raw: {
        project: string,
        name: string,
        name_original: string,
        address2: string,
        location: string,
        zip: string,
        market: string,
        market_id: string,
        sub_timestamp: any,
        aud_timestamp: any,
        shoot_timestamp: any,
        asap: string,
        snr: number,
        snr_email: any,
        srn_address: string,
        app_date_time: string,
        app_loc: string,
        rate: string,
        rate_des: string,
        des: string,
        required_phone: string,
        required_photo: string,
        currency_code: string,
        expected_time: string,
        expected_hours_min: string,
        expected_hours_max: string,
        compensation_bonus: string,
        notify_through: number,
        casting_image_id: number,
        union2: number,
        casting_categories: any,
        role_id: any,
    }
    castingId: any,
}) => {
    return patch({
        route: `/v2/cd/projects/${castingId}`,
        data: JSON.stringify(raw),
        config: {
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
        },
    });
};
export const addJobImageApi = ({ token, formData }: { token: string, formData: any }) => {
    return post({
        route: "/v2/cd/casting_images",
        data: formData,
        config: {
            headers: {
                Authorization: "Bearer " + token,
            },
        },
    });
}
export const getProjectApi = ({ token, page, perPage, status, search }: { token: string, page: number, perPage: number, status: JobFilterTypeD, search: string }) => {
    return get({
        route: `/v2/cd/projects?page=${page}&per_page=${perPage}&q=[["with","casting_image"],["with","bam_roles"]]${status?`&status=${status}`:''}&${search ? `&searchstring=${search}` : ""}`,
       
        config: {
            headers: {
                Authorization: "Bearer " + token,
            },
        },
    });
};
export const getJobCastingApi = ({ token, id }: { token: string, id: any }) => {
    return get({
        route: `/v2/cd/projects/${id}?q=[["with","casting_image"],["with","bam_roles"]]`,
        config: {
            headers: {
                Authorization: "Bearer " + token,
            },
        },
    });
};
export const getJobRoleApi = ({ token, id }: { token: string, id: any }) => {
    return get({
        route: `/v2/cd/projects/${id}/jobs`,
        config: {
            headers: {
                Authorization: "Bearer " + token,
            },
        },
    });
};
export const addJobRoleApi = ({ token, raw }: {
    token: string,
    raw: {
        status: number,
        number_of_people: number,
        name: string,
        des: string,
        gender_male: number,
        gender_female: number,
        age_min: string,
        age_max: string,
        ethnicity_african: number,
        ethnicity_african_am: number,
        ethnicity_asian: number,
        role_categories: any
    }
}) => {
    return post({
        route: "/v2/cd/jobs",
        data: JSON.stringify(raw),
        config: {
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
        },
    });
};