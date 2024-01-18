import TranslatedText from "components/TranslatedText";
import styled from "styled-components";

export default function IncementBox({ text, state, setState, onClickIncrement, onClickDecrement }: IncementBoxProps) {
    console.log(state);

    return (
        <div className="lg:w-72">
            <h2 className={`${state.toString().length > 3 && "hidden"} text-left text-xl sm:text-2xl font-semibold mb-2`}>
                <TranslatedText>{text}</TranslatedText>
            </h2>
            <Input className="grid grid-cols-4 grid-rows-2 text-xl sm:text-2xl font-semibold">
                <input type="number" value={state} placeholder={state} onChange={e => setState(e.target.value)} className="col-span-3 row-span-2 border px-20 py-10 bg-transparent" />
                <div
                    className="col-span-1 border flex justify-center items-center cursor-pointer select-none bg-primary text-white border-t-blue-400 border-l-0"
                    onClick={onClickIncrement}
                >
                    +
                </div>
                <div
                    className="col-span-1 border flex justify-center items-center cursor-pointer select-none bg-primary text-white border-b-blue-400 border-l-0"
                    onClick={onClickDecrement}
                >
                    -
                </div>
            </Input>
        </div>
    );
}

type IncementBoxProps = {
    text: string;
    state: number;
    setState: any;
    onClickIncrement: () => any;
    onClickDecrement: () => any;
}

const Input = styled.div
    `
    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    }

    input[type=number] {
    -moz-appearance: textfield;
    }
  `
