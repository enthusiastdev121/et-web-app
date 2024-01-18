import { useState } from "react";
import { useAuth } from "context/AuthContext";
import { useRouter } from "next/router";
import styled from "styled-components";

const categories = [
    {
        id: 1,
        name: "Acting Jobs",
        count: 1254
    },
    {
        id: 2,
        name: "Modeling Jobs",
        count: 651
    },
    {
        id: 3,
        name: "Music Jobs",
        count: 428
    },
    {
        id: 4,
        name: "Dance Jobs",
        count: 853
    },
    {
        id: 5,
        name: "Extras Jobs",
        count: 23
    },
    {
        id: 6,
        name: "Crew Jobs",
        count: 23
    },
    {
        id: 7,
        name: "Episodic TV Jobs",
        count: 1223
    },
    {
        id: 8,
        name: "Feature Film Jobs",
        count: 1234
    },
    {
        id: 9,
        name: "Training Jobs",
        count: 1
    },
    {
        id: 10,
        name: "Infomercials Jobs",
        count: 234
    },
    {
        id: 11,
        name: "Internet Jobs",
        count: 22
    },
    {
        id: 12,
        name: "Reality TV Jobs",
        count: 33
    },
    {
        id: 13,
        name: "Theatre Jobs",
        count: 24
    },
    {
        id: 14,
        name: "Live Events Jobs",
        count: 56
    },
    {
        id: 15,
        name: "Voice-Over Jobs",
        count: 23
    },
]

export default function JobCategoryListNew({ setSelected, selected }: any) {

    return (
        <Form className="my-5 sm:my-10 grid grid-cols-2 lg:grid-cols-3">
            {categories.map((item: any) => (
                <div
                    key={item.id}
                    className="p-5 xl:p-3 2xl:p-5 border-t border-r border-l border-b text-center md:text-left cursor-pointer">
                    <input
                        type="checkbox"
                        name="jobs"
                        id={item.id}
                        value={item.id}
                        className="form-input opacity-0 cursor-pointer"
                    />
                    <label
                        htmlFor={item.id}
                        className="form-label cursor-pointer"
                        onClick={() => { }}
                    >
                        {item?.name}
                        <span className="ml-2 md:ml-5 blue-text">
                            {item.count}
                        </span>
                    </label>
                </div>
            ))}
        </Form>
    )

}

const Form = styled.form`
  .form-label {
    font-size: 14px;

    @media (min-width: 1680px) {
      font-size: 16px;
    }
  }

  @media (min-width: 1050px) {
    & > div {
      border-bottom: none;
    }

    & > div :first-child {
      border-top: none;
    }

    & > div :nth-child(2) {
      border-top: none;
    }

    & > div :nth-child(3) {
      border-top: none;
    }

    & > div :nth-child(3n) {
      border-right: none;
    }

    & > div :nth-child(1n) {
      border-left: none;
    }
  }

  .form-input:checked + .form-label {
    color: ${(props) => props.theme.primary};
    font-weight: 500;
  }

  .blue-text {
    color: ${(props) => props.theme.primary};
  }
`;