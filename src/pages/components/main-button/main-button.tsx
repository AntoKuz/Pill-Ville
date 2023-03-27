import { StyledMainButton } from "./styled"

interface MessageProps {
    text: string
}

export const MainButton = ({text}: MessageProps) => {
    return (
        <StyledMainButton>{text}</StyledMainButton>
    )
}