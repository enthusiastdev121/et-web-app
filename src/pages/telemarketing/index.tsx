import Layout from 'components/Layout'
import TelemarketingForm from 'containers/telemarketingForm';
import React from 'react'
import styled from 'styled-components'

export default function Page() {
    return (
        <Layout>
            <Root className={`padding-small lg:flex flex-col items-center justify-center`}>
                <TelemarketingForm />
            </Root>
        </Layout>
    )
}

const Root = styled.div`
      @media (min-width: 1530px)  {
        height: fit-content;
    }
`;
