import React from "react";
import RCPagination, { PaginationProps } from "rc-pagination";
import styled from "styled-components";

export default function Pagination(p: PaginationProps) {
  return (
    <>
      <Root>
        <RCPagination {...p} />
      </Root>
    </>
  );
}


const Root = styled.div`
  ul {
    display: flex;
  }

  li {
    &.rc-pagination-item {
      padding-bottom: unset;
    }
  }

  .rc-pagination-item {
    border-radius: 120px;
    overflow: hidden;
    height: 44px;
    aspect-ratio: 1;
    align-items: center;
    justify-content: center;
    display: inline-flex;
    font-size: 12px;

    &.rc-pagination-item-active {
      a {
        color: #fff;
      }
      background: ${(p) => p.theme.primary};
    }
  }

  .rc-pagination-item-link {
    border-radius: 120px;
    overflow: hidden;
    height: 38px;
    aspect-ratio: 1;
    margin-top: 3px;
    font-size: 16px;
  }
`;
