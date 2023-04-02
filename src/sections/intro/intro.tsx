import { FC } from 'react'

import MainButton from '@/components/main-button'
import Text from '@/components/text'
import Picture from '@/images/intro.png'
import { SC_Block, SC_BlockItemDescription, SC_BlockItemSubtitle, SC_BlockItemTitle, SC_Blocks, SC_BlockText } from '@/components/blocks/styled'
import {SC_BlockTitle, SC_Intro, SC_Title, SC_MediumTitle, SC_IntroImage, SC_IntroInner} from './styled'
import { SC_Text } from '@/components/text/styled'
import { SC_Container } from '@/container/styled'
import { FlexIntro } from '@/components/flex-intro'


 export const Intro:FC<any> = () => { return (
  <SC_Intro>
    <SC_Container>
    <FlexIntro>
    <SC_IntroInner>
      <SC_Title>Wait! You turned me into an NFT?</SC_Title>
      <SC_IntroImage src={Picture.src} alt='intro image' />
    </SC_IntroInner>
    <SC_IntroInner>
      <SC_MediumTitle>Our brand new NF<span>Tv</span> show gives you the chance to be a part of the production.Purchasing your PillVille NFT will help fund the official pilot, give you unique access to the creative process and <span>three revenue streams</span> to earn from.</SC_MediumTitle>
      <SC_Text>Brought to you by <span>Motionographer</span>, a seminal voice in Motion Design and founders of <span>The Motion Awards</span> and <span>F5 Festival</span>, Pillville NFTs are, first and foremost, what they’re meant to be, a work of art!</SC_Text>
      <Text>It just so happens that with this work of art, a whole bunch of cool stuff comes with it. Think of it like a digital event ticket or a VIP wristband you don’t need to wear. This digital ‘freedom pass’ kicks open doors that are usually locked as you get to roam behind the scenes of the show.</Text>
      <Text>As a Pillville NFT holder, you have access to royalties (in perpetuity) and input into the show’s direction, so you can immerse yourself in a creative community that’s looking to involve its audience more than ever.</Text>
      <Text>Welcome to a new breed of TV show!</Text>
      <MainButton shadow={'0 0 15px #000'} >Become a member</MainButton>
    </SC_IntroInner>
    </FlexIntro>


  <SC_BlockTitle fontWeight='bold'>PillVille NFTs get you access.</SC_BlockTitle>

  <SC_BlockTitle fontWeight='normal'>Once you have access, you decide what you do with it.
  </SC_BlockTitle>
  <SC_Blocks margin={ '45px 0' }>

    <SC_Block padding={'50px 25px 0'} color={ '#110833' }>
    <SC_BlockText>
      <SC_BlockItemTitle margin={'33px'} color={'#CD3857'}>Royalties</SC_BlockItemTitle>
      <SC_BlockItemSubtitle>It’s your show too</SC_BlockItemSubtitle>
      <SC_BlockItemDescription color={ '#b1a0f3' } lineHeight={ '21px' } fontSize={ '16px'}>Owning a PillVille NFT makes you an investor in the show.Investors receive a royalty on all things PillVille, like every time the show is sold to a new streaming platform and on our official merchandising.As an NFT holder you will also recieve royalties from the secondary market sales.</SC_BlockItemDescription>
    </SC_BlockText>
    </SC_Block>

    <SC_Block padding={'30px 25px 0'} color={ '#110833' }>
    <SC_BlockText>
      <SC_BlockItemTitle margin={'19px'} color={'#CD3857'}>Exclusive access</SC_BlockItemTitle>
      <SC_BlockItemSubtitle>Be part of something bigger</SC_BlockItemSubtitle>
      <SC_BlockItemDescription color={ '#b1a0f3' } lineHeight={ '21px' } fontSize={ '16px'}>We’ll be announcing a series of meet-ups, online and in-person, giving our community a chance to meet like-minded people with a passion for NFTs, animation, the metaverse and irreverent comedy.</SC_BlockItemDescription>
    </SC_BlockText>
    </SC_Block>

    <SC_Block padding={'30px 25px 0'} color={ '#110833' }>
    <SC_BlockText>
      <SC_BlockItemTitle margin={'19px'} color={'#CD3857'}>Community Events</SC_BlockItemTitle>
      <SC_BlockItemSubtitle>Be part of something bigger</SC_BlockItemSubtitle>
      <SC_BlockItemDescription color={ '#b1a0f3' } lineHeight={ '21px' } fontSize={ '16px'}>We’ll be announcing a series of meet-ups, online and in-person, giving our community a chance to meet like-minded people with a passion for NFTs, animation, the metaverse and irreverent comedy.</SC_BlockItemDescription>
    </SC_BlockText>
    </SC_Block>

    <SC_Block padding={'50px 25px 0'} color={ '#110833' }>
    <SC_BlockText>
      <SC_BlockItemTitle margin={'33px'} color={'#CD3857'}>Giveaways</SC_BlockItemTitle>
      <SC_BlockItemSubtitle>Be a part of the show</SC_BlockItemSubtitle>
      <SC_BlockItemDescription color={ '#b1a0f3' } lineHeight={ '21px' } fontSize={ '16px'}>We’ll be giving one lucky winner from our sales their very own PillVille character. Send us your photo, and we’ll design it around you. You will receive an NFT of your character, and they may even get a cameo appearance in the show!</SC_BlockItemDescription>
    </SC_BlockText>
    </SC_Block>

  </SC_Blocks>

  <MainButton shadow={'0 0 15px #000'} margin={'0 auto'}>Become a member</MainButton>
  </SC_Container>
  </SC_Intro>
)
}
