import React from "react";
import * as S from "./Comment.styles";

// There is only one comment on Design
const Comment = () => {
  return (
    <S.DescriptionContainer>
      <S.Description>
        &ldquo;As I walked through the vast exhibition space, I sensed the
        multiple temporalities embodied by it. The entire space bears traces of
        its past use (as a factory warehouse) and disuse: large holes exist in
        the ceiling, revealing the metal structures beyond; lumps of dust and
        occasional wood chips sit on the floor, and spider webs extend over the
        tall windows. The two walls of cardboard boxes, which were erected for
        the exhibition, added yet another layer of temporality to the space,
        making the show &ldquo;appear as if it could be packed in all the boxes
        and be gone the next day,&rdquo; as pointed out by the curator Spirito.
        Not only did it make me ever more aware of my body and the marks it left
        on the space, but it also made me more attuned to the different paces
        and temporalities of the displayed artworks.&rdquo;
      </S.Description>

      <S.CommenterContainer>
        <S.Commenter>Insun Woo</S.Commenter>
        <S.CommenterTitle>Global Art Daily</S.CommenterTitle>
      </S.CommenterContainer>
    </S.DescriptionContainer>
  );
};

export default Comment;
