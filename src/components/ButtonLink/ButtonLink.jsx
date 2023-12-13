import { BtnLink } from './ButtonLink.styled';

export default function ButtonLink({ text, onClick, paddingInline, width }) {
  return (
    <BtnLink onClick={onClick} style={{ paddingInline, width }}>
      {text}
    </BtnLink>
  );
}
