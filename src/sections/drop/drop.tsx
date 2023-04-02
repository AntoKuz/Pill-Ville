import { FC } from "react"

import Flex from "@/components/flex"

import { HeaderDrop } from "../../components/header/header-drop"
import { SC_Drop, SC_DropBg, SC_DropText } from "./styled"
import DropImage from '@/images/drop.png'
import MainButton from "@/components/main-button"
import { SC_Container } from "@/container/styled"
import { SC_PageTitle } from "@/components/page-title/styled"
import { SC_PageSubtitle } from "@/components/page-subtitle/styled"


export const Drop: FC = () => {
  return (
    <>
      <SC_DropBg />
      <SC_Drop>
        <SC_Container>
          <HeaderDrop />
          <Flex>
              <img src={DropImage.src} alt="" />
            <SC_DropText margin={ '88px' }>
              <SC_PageTitle margin={ '33px' }>
                <span>OUR FIRST</span>
                <br />
                NFT DROP
              </SC_PageTitle>

              <SC_PageSubtitle margin={''}>
                For our first NFT drop, we will release a limited amount of ‘Bill The Pill’ tokens. Every character will be hand-crafted in high-end 3D and have their own unique traits.
              </SC_PageSubtitle>
              <br />
              <SC_PageSubtitle margin={'57px'}>
                When you purchase an NFT, you will be randomly assigned your Bill The Pill token.
              </SC_PageSubtitle>
              <MainButton>Become a memeber</MainButton>
            </SC_DropText>
          </Flex>
        </SC_Container>
      </SC_Drop></>

  )
}