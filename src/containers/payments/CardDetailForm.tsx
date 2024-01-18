import Button from "components/Button";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CardDetailsD } from "types/payments";
import MaskInput from 'react-maskinput';

export default function CardDetailForm({ apiError = '', apiSuccess = '', zipError = '', onSubmit, loading }: { onSubmit: (p: CardDetailsD) => void; loading: boolean; apiError?: string; zipError: string; apiSuccess: string }) {
  const [state, setState] = useState<CardDetailsD>({} as CardDetailsD);
  const [mask, setMask] = React.useState('0000-0000-0000-0000');

  const d = new Date();
  let year = d.getFullYear();
  const years = [];
  for (let i = 0; i < 10; i++) {
    years.push(year + i);
  }

  const onChange = (e) => {
    if (e.target.value.indexOf('34') === 0 || e.target.value.indexOf('37') === 0) {
      setMask('0000-000000-00000');
      setState((s) => ({ ...s, cardNumber: e.target.value.replace(/\D/g, '') }))
      return;
    }

    setMask('0000-0000-0000-0000');
    setState((s) => ({ ...s, cardNumber: e.target.value.replace(/\D/g, '') }))
  };

  useEffect(() => {
    // console.log("CV2: ", state.cv2)
    // console.log("typeof CV2: ", typeof (state.cv2))
    console.log("Card: ", state.cardNumber)
  }, [
    state
  ])


  let filled: any;

  if (state.address && state.cardNumber && state.cv2 && state.expMonth && state.expYear && state.fName && state.lName && state.zip) {
    filled = true;
  } else {
    filled = false;
  }


  return (
    <div>
      <div className="mb-2 font-bold text-lg">Credit Card Payment</div>

      {/* card number */}
      <div className="w-full">
        <Label htmlFor="c-number">Card Number</Label>
        <div className="md:flex items-center gap-10">
          <Input type="number" placeholder="Card number" className="md:w-1/2 w-full"
            value={state.cardNumber} name="card" autoComplete="card"
            onChange={(e) => setState((s) => ({ ...s, cardNumber: e.target.value }))} />

          {/* <div className="border px-2 py-1 rounded border-gray-200 mt-2">
            <MaskInput
              value={state.cardNumber}
              onChange={onChange}
              maskChar="_" mask={mask} alwaysShowMask
            />
          </div> */}

          <div className="flex gap-1 mt-2 md:w-1/2">
            <Image src="/images/Visa2.png" alt="visa" height={30} width={43} priority />
            <Image src="/images/Mastercard2.png" alt="mastercard" height={30} width={43} priority />
            <Image src="/images/Discover2.png" alt="discover" height={30} width={43} priority />
            <Image src="/images/Amex2.png" alt="amex" height={30} width={43} priority />
          </div>
        </div>
      </div>

      <div className="md:flex items-center gap-10">
        {/* Exp Date */}
        <div className="md:w-1/2">
          <Label htmlFor="exp-date">Exp. Date</Label>

          {/* <Input type="date" id="cv2" placeholder="Security Code" className="w-full" value={state.expDate} onChange={(e) => setState((s) => ({ ...s, expDate: e.target.value }))} /> */}

          <div className="flex items-center gap-2">
            <Select value={state.expMonth} onChange={(e) => setState((s) => ({ ...s, expMonth: Number(e.target.value) }))}>
              <option value="">Month</option>
              <option value="1">01/Jan</option>
              <option value="2">02/Feb</option>
              <option value="3">03/Mar</option>
              <option value="4">04/Apr</option>
              <option value="5">05/May</option>
              <option value="6">06/Jun</option>
              <option value="7">07/Jul</option>
              <option value="8">08/Aug</option>
              <option value="9">09/Sep</option>
              <option value="10">10/Oct</option>
              <option value="11">11/Nov</option>
              <option value="12">12/Dec</option>
            </Select>

            <Select className="" value={state.expYear} onChange={(e) => setState((s) => ({ ...s, expYear: Number(e.target.value) }))}>
              <option>Year</option>
              {years.map((i: number) => (
                <option key={i}>{i}</option>
              ))}
            </Select>
          </div>
        </div>

        {/* CV2 */}
        <div className="md:w-1/2">
          <Label htmlFor="cv2">CV2</Label>
          <Input type="number" id="cv2" placeholder="Security Code" className="w-36" value={state.cv2} onChange={(e) => setState((s) => ({ ...s, cv2: e.target.value }))} />
        </div>
      </div>

      <div className="md:flex gap-10">
        {/* name */}
        <div className="md:w-1/2">
          <Label>First Name</Label>
          <Input type="text" placeholder="First Name" className="w-full" value={state.fName} onChange={(e) => setState((s) => ({ ...s, fName: e.target.value }))} />
        </div>
        {/* name */}
        <div className="md:w-1/2">
          <Label>Last Name</Label>
          <Input type="text" placeholder="Last Name" className="w-full" value={state.lName} onChange={(e) => setState((s) => ({ ...s, lName: e.target.value }))} />
        </div>
      </div>

      {/* address */}
      <div className="mb-2">
        <Label htmlFor="address">Street Address</Label>
        <Input type="text" placeholder="Do not include city state or zip code" className="w-full" value={state.address} onChange={(e) => setState((s) => ({ ...s, address: e.target.value }))} />
      </div>

      {/* zip */}
      <div className="md:w-1/2">
        <Label htmlFor="zip">Zip Code</Label>
        <Input type="number" placeholder="Zip Code" className="w-42" value={state.zip} onChange={(e) => setState((s) => ({ ...s, zip: e.target.value ? Number(e.target.value) : '' }))} />
      </div>

      {/* terms agreement */}
      {/* <div className="flex items-start md:items-center gap-1 md:gap-0 my-2">
        <Input type="checkbox" id="agreement" className="mt-1 md:mt-0" checked style={{ width: "3%" }} />
        <span>
          Save my payment information so payment is easy next time <span className="text-gray-300">(Safe & Secure)</span>
        </span> */}
      {/* <span>
          I agree to the 
          <span >
          <Link href="/about/agreement" >
            <a target="_blank" className="txt-link" >
              User Agreement Terms
            </a>
          </Link>
          </span>
        
        </span> */}
      {/* </div> */}

      {/* submit btn */}
      <br />

      {zipError &&

        <div className="text-red-500 font-semibold text-base mb-2 bg-red-50 px-3 py-2 rounded-lg"  >{zipError} -
          <div className="txt-primary cursor-pointer " onClick={() => {
            onSubmit({ ...state, force: true })
          }}  > Proceed anyways<div>
            </div>
          </div>
        </div>
      }

      {apiSuccess && <div className="text-green-500 font-semibold text-base mb-2 bg-green-100 px-3 py-2 rounded-lg"  >{apiSuccess}
      </div>}
      {apiError && <div className="text-red-500 font-semibold text-base mb-2 bg-red-50 px-3 py-2 rounded-lg"  >{apiError}
      </div>}



      <Button primary onClick={() => onSubmit({ ...state, })} loading={loading} disabled={!filled} style={{ opacity: filled ? 1 : 0.6, cursor: filled ? 'pointer' : 'not-allowed' }} >
        Proceed with Payment
      </Button>
      {/* Satisfaction Guarantee */}
      <div className="mt-5">
        <div className="txt-link font-semibold text-sm">Satisfaction Guarantee</div>
        <div>
          <Image src="/images/compliassure.png" height={36.5} width={86} alt="compliassure" priority />
          <Image src="/images/positivessl.png" height={37} width={152} alt="positive ssl" priority />
        </div>
      </div>
      <div className="flex items-center gap-1 md:gap-0 my-2">
        <div className="">
          By clicking pay now you agree to <span>
            <Link href="/about/agreement" >
              <a target="_blank" className="txt-link" >
                User Agreement Terms
              </a>
            </Link>
          </span>{" "}
          *You may easily cancel your Subscription without any obligation within 7 days online, by email or phone. Future billing stops immediately upon cancellation. Upon completion of your 7 days trial, the package of your choice will be charged. Unless you cancel, your subscription will be renewed after your initial term.

        </div>
      </div>
    </div >
  );
}

export const Label = styled.label`
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      color: ${p => p.theme.base};
      margin-top: 20px;
      margin-bottom: 2px;
      display: block;
      `;

export const Input = styled.input`
      background-color: ${(p: any) => p.theme.pure};
      border: 1px solid ${(p: any) => p.theme.border};
      border-radius: 4px;
      padding: 0.5em;
      display: block;
      `;

export const Select = styled.select`
      background-color: ${(p: any) => p.theme.pure};
      border: 1px solid ${(p: any) => p.theme.border};
      border-radius: 4px;
      padding: 0.5em;
      width: 100%;
      `;
