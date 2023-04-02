import { SC_Container } from "@/container/styled";
import Countdown from "../countdown";
import MainButton from "../main-button";
import { SC_TimerIntro, SC_TimerIntroLabel, SC_TimerIntroSubtitle, SC_TimerIntroText, SC_TimerIntroTitle } from "./styled";

export const TimerIntro = () => (
  <SC_Container>
    <SC_TimerIntro>
      <SC_TimerIntroText>
        <SC_TimerIntroTitle>whitelist MINT starts in </SC_TimerIntroTitle>
        <SC_TimerIntroSubtitle>
          Private sale: 24 hours only! Exclusive to the PillVille whitelist.
          <br />
          Opens March 02nd 2023 at 14:00 GMT.
          <br />
          Closes December 31st 2023 at 23:59 GMT.
        </SC_TimerIntroSubtitle>
      </SC_TimerIntroText>
      <Countdown />
      <MainButton margin={'0 auto 27px'}>Join Discord</MainButton>
      <SC_TimerIntroLabel>TO FIND MORE ON HOW TO GET WHITELISTED</SC_TimerIntroLabel>
    </SC_TimerIntro>
  </SC_Container>
)