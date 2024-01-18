import Layout from 'components/Layout'
import CloseScript from 'containers/telemarketingForm/CloseScript';
import TelemarketingForm from 'containers/telemarketingForm/index2';
import React from 'react'
import styled from 'styled-components'

export default function TelemarketingClose() {
    return (
        <Layout>
            <Root className={`padding-small lg:flex flex-col items-center justify-center`}>
                <CloseScript />
            </Root>
        </Layout>
    )
}

const Root = styled.div`
      @media (min-width: 1530px)  {
        height: fit-content;
    }
`;
