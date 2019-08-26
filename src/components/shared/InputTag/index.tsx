import React, { useState, useEffect } from "react";
import { WithContext as ReactTags } from "react-tag-input";
import { Container } from "./styles";

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

interface ITags {
  tags: string[];
  onAddTag: (tags: string[]) => void;
}

export const InputTag = ({ tags, onAddTag }: ITags) => {
  const [state, setState] = useState({
    tags: tags.map(thisTag => ({
      id: thisTag,
      text: thisTag,
    })),
  });

  useEffect(() => {
    if (state) {
      onAddTag(state.tags.map(tag => tag.text));
    }
  }, [state]);

  function handleDelete(index: number) {
    const { tags } = state;
    setState({
      ...state,
      tags: tags.filter((tag, thisIndex) => thisIndex !== index),
    });
  }

  function handleAddition(tag: { id: string; text: string }) {
    setState({ ...state, tags: [...state.tags, tag] });
  }

  function handleDrag(
    tag: { id: string; text: string },
    currPos: number,
    newPos: number,
  ) {
    const tags = [...state.tags];
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    setState({ ...state, tags: newTags });
  }

  return (
    <Container>
      <ReactTags
        tags={state.tags}
        handleDelete={handleDelete}
        handleAddition={handleAddition}
        handleDrag={handleDrag}
        delimiters={delimiters}
        placeholder="Add new Category"
      />
    </Container>
  );
};

export default InputTag;
