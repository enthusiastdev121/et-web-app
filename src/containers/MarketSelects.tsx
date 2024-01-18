import { castingPreferences } from "@/utils/constants/profile";
import Button from "components/Button";
import Checkbox from "components/Checkbox";
import CreateAccountBox from "components/CreateAccountBox";
import Spinner from "components/Spinner";
import { useAuth } from "context/AuthContext";
import { useProfileStore } from "context/ProfileStore";
import { getAllMarketsApi, getLocationByIp, getNearestMarketsApi, getSelectedCastingCategories, setCastingCategories, setSelectedMarketsApi } from "network/apis/ownProfile";
import { useEffect, useState } from "react";

import styled from "styled-components";

export default function MarketSelects() {
  const { token, auth: { authenticated } } = useAuth();
  const { profile } = useProfileStore()
  const [lat, setLat] = useState(0)
  const [lon, setLon] = useState(0)
  const [nearestmarketsss, setNearestMarketsss] = useState<MarketItemD[]>([])
  const [marketLoading, setMarketLoading] = useState(false)
  const [markets, setMarkets] = useState<MarketItemD[]>([])
  const [loading, setLoading] = useState(false)
  const [selectedMarkets, setSelectedMarkets] = useState<SelectedMarketD>({
    market1: { market_id: null, parent_id: [] },
    market2: { market_id: null, parent_id: [] },
    market3: { market_id: null, parent_id: [] }
  })

  console.log("profile: ", profile)

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const res = await getLocationByIp();
        const res2 = await getAllMarketsApi();
        setLat(res?.lat);
        setLon(res?.lon);
        setMarkets(res2?.data)
      } catch (err) { console.log(err) }
    }

    fetchLocation()
  }, [])

  useEffect(() => {
    if (lat === 0 || lon === 0) {
      return;
    }

    const fetchLocation = async () => {
      try {
        setMarketLoading(true)
        const res = await getNearestMarketsApi({ lat, lon });
        console.log("MARKET RES: ", res);
        setNearestMarketsss(res);
        setMarketLoading(false)
      } catch (err) {
        console.log(err)
        setMarketLoading(false)
      }
    }

    fetchLocation()
  }, [lat, lon])


  const onSave = async () => {
    // if (!termsAccepted) {
    //   toast.error("Please tick")
    //   return;
    // }

    try {
      setLoading(true);


      let mr = {
        market1: selectedMarkets.market1?.market_id,
        market1p: !selectedMarkets.market1?.parent_id[0] ? null : !selectedMarkets.market1?.parent_id[1] ? selectedMarkets.market1?.parent_id[0] : selectedMarkets.market1?.parent_id[0] + "," + selectedMarkets.market1?.parent_id[1],
        market2: selectedMarkets.market2?.market_id,
        market2p: !selectedMarkets.market2?.parent_id[0] ? null : !selectedMarkets.market2?.parent_id[1] ? selectedMarkets.market2?.parent_id[0] : selectedMarkets.market2?.parent_id[0] + "," + selectedMarkets.market2?.parent_id[1],
        market3: selectedMarkets.market3?.market_id,
        market3p: !selectedMarkets.market3?.parent_id[0] ? null : !selectedMarkets.market3?.parent_id[1] ? selectedMarkets.market3?.parent_id[0] : selectedMarkets.market3?.parent_id[0] + "," + selectedMarkets.market3?.parent_id[1],
      }



      mr = {
        ...mr,
        market1: mr.market1 || nearestmarketsss[0]?.market_id,
        market1p: mr.market1p || nearestmarketsss[0]?.parent_id,
        market2: mr.market2 || nearestmarketsss[1]?.market_id,
        market2p: mr.market2p || nearestmarketsss[1]?.parent_id,
        market3: mr.market3 || nearestmarketsss[2]?.market_id,
        market3p: mr.market3p || nearestmarketsss[2]?.parent_id,
      }


      const res2 = await setSelectedMarketsApi({
        token,
        raw: Object.entries(mr).reduce((a, [k, v]) => (v ? (a[k] = v, a) : a), {})

      });

      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  }

  useEffect(() => {
    console.log("selectedMarkets: ", selectedMarkets)
  }, [selectedMarkets])


  return (
      <div className="padding-x lg:flex gap-10" style={{ maxWidth: "1530px", margin: "0 auto" }}>

            <div>
              <h2 className="mb-5 text-[18px] font-bold pref-heading text-[#0070F4]">Select your desired markets</h2>
              {marketLoading &&
                <div className="my-10">
                  <Spinner primary />
                </div>
              }
              {
                nearestmarketsss?.map((nearestmarketsss, index) => (
                  <div className="mb-10" key={nearestmarketsss.market_id}>
                    <h3 className="font-semibold mb-2">{index === 1 ? "2nd " : index === 2 ? "3rd" : ""}Closest City</h3>
                    <MarketItemContainer onChange={(e) => {
                      const selectedMarket: MarketItemD = markets.filter(market => market.market === e.target.value)[0]

                      index === 1 ? setSelectedMarkets({
                        ...selectedMarkets, market2: {
                          market_id: selectedMarket.market_id,
                          parent_id: [selectedMarket.parent_id, selectedMarket.parent.length > 0 ? selectedMarket.parent[0].parent_id : null],
                        }
                      }) : index === 2 ? setSelectedMarkets(
                        {
                          ...selectedMarkets, market3: {
                            market_id: selectedMarket.market_id,
                            parent_id: [selectedMarket.parent_id, selectedMarket.parent.length > 0 ? selectedMarket.parent[0].parent_id : null],
                          }
                        })
                        :
                        setSelectedMarkets(
                          {
                            ...selectedMarkets, market1: {
                              market_id: selectedMarket.market_id,
                              parent_id: [selectedMarket.parent_id, selectedMarket.parent.length > 0 ? selectedMarket.parent[0].parent_id : null],
                            }
                          })
                    }}>
                      <option>
                        {
                          index === 1 ?
                            profile?.market2 ? profile?.market2 : nearestmarketsss?.market :
                            index === 2 ?
                              profile?.market3 ? profile?.market3 : nearestmarketsss?.market :
                              profile?.market1 ? profile?.market1 : nearestmarketsss?.market
                        }
                      </option>

                      {
                        markets?.map((market) => (
                          <option key={market?.market_id}>
                            {market?.market}
                          </option>
                        ))
                      }
                    </MarketItemContainer>
                  </div>
                ))
              }
            <div className="mx-auto mt-10">
              <div className="mt-5">
                <Button primary loading={loading} onClick={onSave}>Save&nbsp;&&nbsp;Update</Button>
              </div>
            </div>
            </div>

      </div>

  );
}




const MarketItemContainer = styled.select`
  border: 1px solid #dfdfdf;
  background-color: ${(p: any) => p.theme.pure};
  padding: 10px;
  border-radius: 5px; 
  min-width: 300px;
  display: inline-block;
  cursor: pointer;
  color: p.theme.base;
  font-weight: 400;
`

type MarketItemD = {
  market_id: number;
  market: string;
  parent_id: number | null;
  parent: [{ parent_id: number | null }];
}

type SelectedMarketD = {
  market1?: { market_id: number | null, parent_id: number[] },
  market2?: { market_id: number | null, parent_id: number[] },
  market3?: { market_id: number | null, parent_id: number[] },
}


