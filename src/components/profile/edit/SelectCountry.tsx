import { useEffect, useState } from "react";
import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";

export default function SelectCountry({ setCountry, dft }: Props) {
  const [countries, setCountries] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) =>
    setCountry(JSON.stringify(data));

  useEffect(() => {
    const data = require("../../../../dummyData/CountryNames.json");
    setCountries(data);
  }, []);

  return (
    <div>
      {/* TODO: Move form to editLocation */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Select
          {...register("country", { required: "Country is required" })}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="" className="txt-disabled">
            {dft || "--Select Country--"}
          </option>
          {countries.map((item: any) => (
            <option key={item.country}> {item.country}</option>
          ))}
        </Select>
        {errors.country && <span>Please select a country</span>}
      </form>
    </div>
  );
}

export const Select = styled.select`
  background-color: ${(p: any) => p.theme.pure};
  border: 1px solid ${(p: any) => p.theme.border};
  border-radius: 4px;
  padding: 0.5em;
  width: 100%;
`;

type Inputs = {
  example: string;
  country: string;
};

type Props = {
  setCountry: any;
  dft: string;
};
