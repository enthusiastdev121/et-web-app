import { WHITELABEL } from "@/utils/envProviders";
import { WHITELABELS } from "@/utils/whitelabelConfig";
import { get, post } from "network";

export const getPaymentPackageApi = () => {
  return get({
    route: `/v1/talent/legacy_packages?q=[["where","app_id","=","1"]]`,
    config: {
      headers: {
        "Content-Type": "application/json",
      },
    },
  });
};

export const paymentFormApi = (raw: { po_ccnum: any; po_ccscode: any; po_fname: any; po_lname: any; po_address1: any; po_zip: any; po_type: 1; po_name: any; po_exp: any; token: any; po_city: any; po_state: any }) => {
  const newRaw = {
    ...raw,
    po_exp: `${new Date(raw.po_exp * 1000).getFullYear()}-${new Date(raw.po_exp * 1000).getMonth().toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false })}-02`,
  };

  return post({
    route: "/v1/talent/talent_payment_options",
    data: JSON.stringify(newRaw),
    config: {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + raw.token,
      },
    },
  });
};
export const paymentSalesApi = ({
  packageId,
  id,
  token,
  featured = false,
  claim = false,
  promoCode = "",
}: {
  id: number;
  packageId: number;
  token: string;
  featured?: boolean;
  claim?: boolean;
  promoCode?: string;
}) => {
  // return;

  //7 Dyas free trial date
  const payDate = new Date();
  payDate.setDate(payDate.getDate() + 7);

  const payDateUnix = Math.floor(payDate.getTime() / 1000);

  return post({
    route: "/v1/talent/sales",
    data: JSON.stringify({
      ...(featured
        ? { featured: true }
        : claim
        ? {}
        : { process_date: payDateUnix }),
      legacy_package_id: packageId,
      talent_payment_option_id: id,
      promo_code: promoCode,
      // FOR STRIPE TEST
      // specific_processor: "29",
      ...(WHITELABEL === WHITELABELS.auditions
        ? { specific_processor: "28" }
        : {}),
    }),
    config: {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const cancelSubscriptionApi = ({
  raw,
  token,
}: {
  raw: { membership_type: "pro" | "ft" };
  token: string;
}) => {
  return post({
    route: "/v2/talent/cancel_subscription",
    data: JSON.stringify(raw),
    config: {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const verifyPromoCode = ({
  promoCode,
  token,
}: {
  promoCode: string;
  token: string;
}) => {
  return get({
    route: `/v2/verify-promo-code/${promoCode}`,
    config: {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  });
};
