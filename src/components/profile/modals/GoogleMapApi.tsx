import { GOOGLE_MAPS_API_KEY } from '@/utils/constants/config';
import React, { useState, useEffect } from 'react'
import Geocode from "react-geocode";
import MapPicker from 'react-google-map-picker'
import Button from "components/Button";
import Autocomplete from "react-google-autocomplete";
import { MdMyLocation } from 'react-icons/md';

// Convert Cordinates
Geocode.setApiKey(GOOGLE_MAPS_API_KEY);
Geocode.setLanguage("en");
Geocode.setRegion("es");
Geocode.enableDebug();

const GoogleMapApi = ({ onConfirm, onClose }: Props) => {
    const [activePoint, setActivePoint] = useState<{
        longitude: any;
        latitude: any;
    }>({
        longitude: 0,
        latitude: 0,
    });
    const [country, setCountry] = useState('Country')
    const [state, setState] = useState('State')
    const [city, setCity] = useState('City')
    const [address, setAddress] = useState("");
    const [zip, setZip] = useState("");
    const [countryCode, setCountryCode] = useState("");
    const [lat, setLat] = useState(0)
    const [lon, setLon] = useState(0)

    useEffect(() => {
        const fetchNow = async () => {
            try {
                const response = await Geocode.fromLatLng(activePoint.latitude.toString(), activePoint.longitude.toString());
                //ADDRESS
                const ad1 = response.results[0].formatted_address;
                //ZIP
                let z1 = "";
                let cCode = "";
                for (var i = 0; i < response.results[0].address_components.length; i++) {
                    for (
                        var j = 0;
                        j < response.results[0].address_components[i].types.length;
                        j++
                    ) {
                        if (
                            response.results[0].address_components[i].types[j] == "postal_code"
                        ) {
                            z1 = response.results[0].address_components[i].long_name;
                        }

                        if (response.results[0].address_components[i].types[j] == "country") {
                            cCode = response.results[0].address_components[i].short_name;
                        }
                    }
                }

                let city, state, country;
                for (let i = 0; i < response.results[0].address_components.length; i++) {
                    for (
                        let j = 0;
                        j < response.results[0].address_components[i].types.length;
                        j++
                    ) {
                        switch (response.results[0].address_components[i].types[j]) {
                            case "locality":
                                city = response.results[0].address_components[i].long_name;
                                break;
                            case "administrative_area_level_1":
                                state = response.results[0].address_components[i].long_name;
                                break;
                            case "country":
                                country = response.results[0].address_components[i].long_name;
                                break;
                        }
                    }
                }

                setAddress(ad1);

                setCity(city);

                setState(state);

                setCountry(country);

                setZip(z1);

                setCountryCode(cCode);

                setLon(response.results[0].geometry.location.lng)
                setLat(response.results[0].geometry.location.lat)
            } catch (err) {
                console.log("ERR", err);
            }
        };

        if (activePoint.latitude) {
            fetchNow();
        }
    }, [activePoint]);

    const serCurrentLocatoin = () => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                setActivePoint((s) => ({
                    ...s,
                    longitude: position.coords.longitude,
                    latitude: position.coords.latitude,
                }));
            });
        } else {
            /* geolocation IS NOT available */
            setActivePoint((s) => ({
                ...s,
                longitude: 0,
                latitude: 0,
            }));
        }
    }

    const onCancel = () => {
        setAddress("");
        setCity("");
        setState("");
        setCountry("");
        setZip("");
        setCountryCode("");
        onClose();
    }

    const onSave = () => {
        onConfirm(
            address,
            city,
            state,
            country,
            zip,
            countryCode,
            lat,
            lon
        );
        onClose();
    }

    return (
        <>
            <div className="relative flex lg:flex-col flex-col-reverse h-[90%]">
                <MapPicker
                    defaultLocation={{
                        lat: activePoint.latitude,
                        lng: activePoint.longitude
                    }}
                    style={{ height: '700px' }}
                    onChangeLocation={(a, b) => {
                        setActivePoint((s) => ({
                            ...s,
                            latitude: a,
                            longitude: b,
                        }));
                    }}
                    apiKey={GOOGLE_MAPS_API_KEY} />

                <div className="lg:absolute relative lg:top-2 top-0 left-1/2 -translate-x-2/4 w-full text-center z-10 lg:pb-0 pb-4">
                    <Autocomplete className="lg:w-[60%] w-[96%]  p-3 border border-black-700 mx-auto rounded-lg z-10"
                        apiKey={GOOGLE_MAPS_API_KEY}
                        onPlaceSelected={(place) => {
                            const latpoint = place.geometry.location.lat()
                            const lngpoint = place.geometry.location.lng()
                            setActivePoint({ latitude: latpoint, longitude: lngpoint })
                        }}
                    />
                </div>

                <div className="absolute right-[10px] bottom-52 bg-paper txt-base p-3 rounded-sm shadow-md cursor-pointer" onClick={serCurrentLocatoin}><MdMyLocation /></div>
            </div>

            <div className="flex justify-between items-center p-3 flex-wrap bg-paper" style={{ borderRadius: "0 0 10px 10px" }}>
                <p className="font-semibold font-block">Location : <span className="txt-primary">{city}, {country} </span></p>
                <div className="flex gap-6 ">
                    <button className="txt-primaryfont-semibold" onClick={onCancel}>Cancel</button>
                    <Button size="large" primary onClick={onSave}>
                        Save
                    </Button>
                </div>
            </div>
        </>
    );
}

export default GoogleMapApi

type Props = {
    onClose: () => any;
    onConfirm: (address: string, city: string, state: string, country: string, zip: string, countryCode: string, lat: number, lon: number) => any;
}